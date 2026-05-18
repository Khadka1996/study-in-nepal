import Image from 'next/image'

import ShareButtons from '@/components/shared/ShareButtons'

export interface TestimonialCardProps {
  name: string
  countryFlag: string
  university: string
  quote: string
  imageSrc: string
  imageAlt: string
  shareUrl: string
}

export default function TestimonialCard({ name, countryFlag, university, quote, imageSrc, imageAlt, shareUrl }: TestimonialCardProps): JSX.Element {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-white p-6 shadow-[0_20px_50px_rgba(8,26,58,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image src={imageSrc} alt={imageAlt} width={72} height={72} className="rounded-2xl object-cover" />
          <div>
            <p className="text-lg font-semibold text-[var(--color-dark)]">
              {name} <span aria-hidden="true">{countryFlag}</span>
            </p>
            <p className="text-sm text-slate-600">{university}</p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">“{quote}”</p>

      <div className="mt-auto pt-6">
        <ShareButtons title={`${name} | Study in Nepal`} text={quote} url={shareUrl} />
      </div>
    </article>
  )
}
