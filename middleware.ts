import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import { type NextRequest, NextResponse } from "next/server"

const PAGES = ['/duck', '/lizard']

export const config = {
  matcher: '/'
}

export default function handler(req: NextRequest) {
  req.nextUrl.pathname = PAGES[Math.floor(Math.random() * PAGES.length)]

  console.log('req[INTERNALS]:', req[INTERNALS]);
  

  return NextResponse.rewrite(req.nextUrl)
}