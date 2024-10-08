import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export async function POST(req: Request, res: Response) {
    const formData = await req.formData();
    const imageFileData = formData.get("imageFIleData") as File;

    let imageSrcPath = "";
    if (imageFileData) {
        const imageFileDataArrayBuffer = await imageFileData.arrayBuffer();
        const imageFileDataBuffer = Buffer.from(imageFileDataArrayBuffer);
        
        const uuid = uuidv4();
        imageSrcPath = `${process.env.R2_STORAGE_URL}/${uuid}`;
    
        // R2アップロードロジック
        const s3 = new S3Client({
            region: "auto",
            endpoint: process.env.R2_ENDPOINT!,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY!,
                secretAccessKey: process.env.R2_SECRET_KEY!
            }
        });
    
        await s3.send(new PutObjectCommand({
            Bucket: "portfolio-images",
            Key: uuid,
            ContentType: imageFileData.type,
            Body: imageFileDataBuffer,
        }));
    }

    const deployUrl = formData.get("deployUrl")?.toString().trim();
    const productName = formData.get("productName")?.toString().trim();
    const overview = formData.get("overview")?.toString().trim();
    const mainTechnology = formData.get("mainTechnology")?.toString().trim();
    const subTechnology = formData.get("subTechnology")?.toString().trim();
    const productLinks = formData.get("productLinks")?.toString().trim().split(",").filter(str => str !== "");
    
    // バックエンドに投げてDB保存
    const response = await fetch(`${process.env.API_URL!}/products`, {
        method: "POST",
        body: JSON.stringify({
            imageSrcPath,
            deployUrl,
            productName,
            overview,
            mainTechnology,
            subTechnology,
            productLinks,
        }),
        headers: {
            "Content-Type": "application/json"
        },
    });

    return Response.json({
        "message": "アップロードに成功しました。"
    })
}

export async function PUT(req: Request, res: Response) {
    const formData = await req.formData();

    const id = Number(formData.get("id"));
    let r2uuid = formData.get("r2uuid") as string;
    const imageFileData = formData.get("imageFileData") as File;
    const deployUrl = formData.get("deployUrl")?.toString().trim();
    const productName = formData.get("productName")?.toString().trim();
    const overview = formData.get("overview")?.toString().trim();
    const mainTechnology = formData.get("mainTechnology")?.toString().trim();
    const subTechnology = formData.get("subTechnology")?.toString().trim();
    const productLinks = formData.get("productLinks")?.toString().split(",").filter(str => str != "");

    // 画像が無い -> ある : r2uuidがないが、imageFileDataは存在する
    // 画像を変更する : r2uuidがある、imageFileDataが存在する
    // 画像を変更しない : r2uuidがあるが、imageFileDataが存在しない

    let imageSrcPath = "";

    // 画像が変更されない場合
    if (r2uuid && !imageFileData) {
        imageSrcPath = `${process.env.R2_STORAGE_URL}/${r2uuid}`;
    }

    // R2 アップロードロジック
    if(imageFileData) {
        const imageFileDataArrayBuffer = await imageFileData.arrayBuffer();
        const imageFileDataBuffer = Buffer.from(imageFileDataArrayBuffer);

        // 画像未アップロード時からアップロードする時
        if (!r2uuid) {
            r2uuid = uuidv4();
        }

        imageSrcPath = `${process.env.R2_STORAGE_URL}/${r2uuid}`;

        const s3 = new S3Client({
            region: "auto",
            endpoint: process.env.R2_ENDPOINT!,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY!,
                secretAccessKey: process.env.R2_SECRET_KEY!
            }
        });

        await s3.send(new PutObjectCommand({
            Bucket: "portfolio-images",
            Key: r2uuid,
            ContentType: imageFileData.type,
            Body: imageFileDataBuffer,
        }));
    }

    // バックエンドに投げてDB保存
    const response = await fetch(`${process.env.API_URL!}/products`, {
        method: "PUT",
        body: JSON.stringify({
            id,
            imageSrcPath,
            deployUrl,
            productName,
            overview,
            mainTechnology,
            subTechnology,
            productLinks
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });


    return Response.json({
        "message": "アップデートが成功しました。"
    })
}

