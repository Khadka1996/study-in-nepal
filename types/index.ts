export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: 'Facebook' | 'Instagram' | 'LinkedIn' | 'YouTube' | 'TikTok'
  href: string
}

export interface PageStat {
  label: string
  value: string
}

export interface SeoMeta {
  title: string
  description: string
  canonicalPath: string
  imagePath: string
}