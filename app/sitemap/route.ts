import { NextResponse } from 'next/server'
import { universitiesMenuData } from '@/lib/data/universities-menu'

const base = 'https://studyinnepal.com'

function urlEntry(loc: string, freq = 'monthly', priority = '0.7') {
  return `<url><loc>${loc}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`
}

export async function GET() {
  const staticUrls = [
    { loc: `${base}/`, freq: 'daily', pr: '1.0' },
    { loc: `${base}/about`, freq: 'monthly', pr: '0.7' },
    { loc: `${base}/contact`, freq: 'monthly', pr: '0.7' },
    { loc: `${base}/booking`, freq: 'weekly', pr: '0.8' },
    { loc: `${base}/booking/student`, freq: 'weekly', pr: '0.8' },
    { loc: `${base}/booking/institutional`, freq: 'weekly', pr: '0.8' },
    { loc: `${base}/courses`, freq: 'weekly', pr: '0.8' },
    { loc: `${base}/universities`, freq: 'weekly', pr: '0.9' },
    { loc: `${base}/colleges`, freq: 'weekly', pr: '0.7' },
    { loc: `${base}/testimonials`, freq: 'monthly', pr: '0.6' },
  ]

  const universityUrls = universitiesMenuData.map((u) => ({ loc: `${base}${u.href}`, freq: 'monthly', pr: '0.7' }))

  const urls = [...staticUrls, ...universityUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => urlEntry(u.loc, u.freq, u.pr))
    .join('\n')}\n</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
