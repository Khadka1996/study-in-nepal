'use client'

import { useState } from 'react'

export interface ShareButtonsProps {
  title: string
  text: string
  url: string
}

async function copyToClipboard(value: string): Promise<boolean> {
  if (typeof navigator === 'undefined') {
    return false
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return true
  }

  return false
}

export default function ShareButtons({ title, text, url }: ShareButtonsProps): JSX.Element {
  const [status, setStatus] = useState<string>('')

  const handleShare = async (): Promise<void> => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, text, url })
        setStatus('Shared')
        return
      } catch {
        // Fallback to clipboard.
      }
    }

    const copied = await copyToClipboard(`${title}\n${text}\n${url}`)
    setStatus(copied ? 'Link copied' : 'Share unavailable')
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-[var(--color-secondary)] hover:text-[var(--color-dark)] focus-ring"
      >
        Share
      </button>
      {status ? <span className="text-[11px] font-medium text-[var(--color-accent)]">{status}</span> : null}
    </div>
  )
}
