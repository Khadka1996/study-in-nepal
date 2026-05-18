import { redirect } from 'next/navigation'

export const dynamic = 'force-static'

export default function StudyInfoPage(): never {
  redirect('/why-study-nepal')
}
