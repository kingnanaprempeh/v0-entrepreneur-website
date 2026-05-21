import { NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 })
    }

    // Store email in Supabase if configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createServerClient(supabaseUrl, supabaseKey, {
          cookies: {
            getAll: () => request.cookies.getAll(),
            setAll: () => {},
          },
        })

        await supabase.from("file_downloads").insert({
          email,
          file_name: "soybean-price-predictor",
          downloaded_at: new Date().toISOString(),
        })
      } catch (supabaseError) {
        // Log the error but don't fail - still allow download
        console.warn("[v0] Supabase insert failed (table may not exist):", supabaseError)
        // Continue to return success for download
      }
    }

    // Return success with download URL
    return NextResponse.json(
      {
        success: true,
        downloadUrl: "/soybean-price-predictor.html",
        message: "Download started. Check your email for more resources!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Download error:", error)
    // Still return success for file download even if email capture fails
    return NextResponse.json(
      {
        success: true,
        downloadUrl: "/soybean-price-predictor.html",
        message: "Download started!",
      },
      { status: 200 }
    )
  }
}
