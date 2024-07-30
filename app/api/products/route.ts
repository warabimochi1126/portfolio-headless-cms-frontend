import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export async function POST(req: Request, res: Response) {
    const formData = await req.formData();
    const imageFileData = formData.get("imageFIleData") as File;
    const imageFileDataArrayBuffer = await imageFileData.arrayBuffer();
    const imageFileDataBuffer = Buffer.from(imageFileDataArrayBuffer);

    // R2アップロードロジック
    const s3 = new S3Client({
        region: "auto",
        endpoint: process.env.R2_ENDPOINT!,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY!,
            secretAccessKey: process.env.R2_SECRET_KEY!
        }
    });
    const response = await s3.send(new PutObjectCommand({
        Bucket: "portfolio-images",
        Key: "test",    // keyに対してポートフォリオのID入れて管理しておく？
        ContentType: imageFileData.type,
        Body: imageFileDataBuffer,
    }));


    return Response.json({
        "message": "アップロードに成功しました。"
    })
}