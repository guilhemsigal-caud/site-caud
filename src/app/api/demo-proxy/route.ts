import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url || !url.startsWith("https://demo.collectiveaudience.co/")) {
    return new NextResponse("Invalid URL", { status: 400 });
  }

  try {
    const upstream = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; CollectiveAudience/1.0)" },
      next: { revalidate: 3600 },
    });

    if (!upstream.ok) {
      return new NextResponse("Upstream error", { status: upstream.status });
    }

    const html = await upstream.text();

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        // X-Frame-Options intentionally omitted so the iframe can render
      },
    });
  } catch {
    return new NextResponse("Proxy error", { status: 500 });
  }
}
