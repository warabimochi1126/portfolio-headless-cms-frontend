export async function POST() {
    const response = await fetch(process.env.DEPLOY_HOOK_URL!, {
        method: "POST"
    });
    
    return Response.json({
        "message": "redeployの実行中です!"
    })
}