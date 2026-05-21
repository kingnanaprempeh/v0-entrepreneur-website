import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  // Simply pass through - disable Supabase middleware for now
  // Environment variables may not be available in all deployment contexts
  return NextResponse.next({
    request,
  })
}
