import { readFileSync } from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET() {
  try {
    const svgPath = path.join(process.cwd(), 'public', 'favicon.svg')
    const svg = readFileSync(svgPath)
    return new NextResponse(svg, {
      headers: {
        // serve as svg; some browsers accept svg at /favicon.ico when served correctly
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (err) {
    return new NextResponse('Not found', { status: 404 })
  }
}
