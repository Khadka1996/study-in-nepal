import Image from 'next/image'
import Link from 'next/link'

import ShareButtons from '@/components/shared/ShareButtons'

export interface UniversityCardProps {
  name: string
  location: string
  description: string
  imageSrc: string
  shareUrl: string
}

export default function UniversityCard({ name, location, description, imageSrc, shareUrl }: UniversityCardProps): JSX.Element {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-[0_20px_50px_rgba(8,26,58,0.08)]">
      <Image
        src={imageSrc}
        alt={`${name} campus visual`}
        width={720}
        height={440}
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        className="h-56 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-secondary)]">{location}</p>
        <h3 className="mt-3 text-2xl font-semibold text-[var(--color-dark)]">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-auto pt-6 flex items-center justify-between gap-4">
          <Link href="/universities" className="text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-secondary)] focus-ring">
            View details
          </Link>
          <ShareButtons title={`${name} | Study in Nepal`} text={description} url={shareUrl} />
        </div>
      </div>
    </article>
  )
}
