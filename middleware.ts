import { getToken } from "next-auth/jwt"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const { pathname } = request.nextUrl
  const protectedPaths = ["/lessons"]
  const matchesProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )
  if (matchesProtectedPath) {
    const token = await getToken({ req: request })
    if (!token) {
      const url = new URL(`/api/auth/signin`, request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }
    if (token.role !== "ADMIN") {
      const url = new URL(`/admin`, request.url)
      return NextResponse.rewrite(url)
    }
  }
  return NextResponse.next()
}
