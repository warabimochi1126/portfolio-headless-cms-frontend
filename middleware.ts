import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const basicAuth = request.headers.get("Authorization");

    if (basicAuth) {
        const authValue = basicAuth.split(" ")[1];

        const [user, pass] = atob(authValue).split(":");

        if (user === process.env.BASIC_AUTH_USER && pass === process.env.BASIC_AUTH_PASSWORD) {
            return NextResponse.next();
        }
    }

    const url = request.nextUrl;
    url.pathname = '/api/basic-auth';

    return NextResponse.rewrite(url);
    // return NextResponse.redirect(url);
}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};