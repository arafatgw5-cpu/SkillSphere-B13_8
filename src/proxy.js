import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  const publicRoutes = ["/", "/login", "/register"];
  const isPublic = publicRoutes.includes(pathname);

  if (!session && !isPublic) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackURL", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (session && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|courses.json).*)",
  ],
};