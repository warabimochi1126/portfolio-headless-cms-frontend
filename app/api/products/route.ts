import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export async function POST(req: Request, res: Response) {
    const formData = await req.formData();
    const imageFileData = formData.get("imageFIleData") as File;
    const imageFileDataArrayBuffer = await imageFileData.arrayBuffer();
    const imageFileDataBuffer = Buffer.from(imageFileDataArrayBuffer);
    
    const uuid = uuidv4();

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

    const imageSrcPath = `${process.env.R2_STORAGE_URL}/${uuid}`;
    const deployUrl = formData.get("deployUrl")?.toString().replaceAll(" ", "");
    const productName = formData.get("productName")?.toString().replaceAll(" ", "");
    const overview = formData.get("overview")?.toString().replaceAll(" ", "");
    const mainTechnology = formData.get("mainTechnology")?.toString().replaceAll(" ", "");
    const subTechnology = formData.get("subTechnology")?.toString().replaceAll(" ", "");
    const productLinks = formData.get("productLinks")?.toString().replaceAll(" ", "").split(",").filter(str => str !== "");

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