export type FAQ = {
  question: string
  answer: string
}

export const universityFAQs: Record<string, FAQ[]> = {
  tribhuvan: [
    { question: 'How do I apply to Tribhuvan University affiliated colleges?', answer: 'Typically, applications are submitted to the college/ campus offering the program; Study In Nepal assists by pre-filling inquiries and advising on eligibility and documents.' },
    { question: 'Are degrees from affiliated colleges recognized internationally?', answer: 'Degrees follow Tribhuvan University regulations; some programs have international recognition depending on accreditation—Study In Nepal can help verify program-level recognition.' },
    { question: 'What are common intake periods?', answer: 'Many programs have annual or bi-annual intakes—medical and professional programs often follow national exam schedules; contact Study In Nepal for intake guidance.' },
    { question: 'Do affiliated colleges offer scholarship options?', answer: 'Scholarships vary by college; Study In Nepal can help identify colleges that offer internal scholarships or financial assistance.' },
    { question: 'Can international students apply?', answer: 'Yes—most affiliated colleges accept international students subject to admission requirements, visa rules, and equivalency checks.' },
  ],

  kathmandu: [
    { question: 'How are Kathmandu University programs structured?', answer: 'Kathmandu University emphasizes school-based teaching with clearly defined semesters and credit systems; Study In Nepal can provide program-level breakdowns.' },
    { question: 'Is there campus housing?', answer: 'Housing varies by campus and program; Study In Nepal can assist in understanding housing availability and local options.' },
    { question: 'Are international collaborations available?', answer: 'Many schools have collaborations and exchange partnerships; Study In Nepal can highlight programs with international links.' },
  ],

  pokhara: [
    { question: 'What kinds of programs does Pokhara University focus on?', answer: 'Pokhara University offers practical, career-focused programs in engineering, management, health sciences, and hospitality.' },
    { question: 'How to check program eligibility?', answer: 'Eligibility depends on prior qualifications; Study In Nepal can evaluate transcripts and recommend suitable programs.' },
  ],
}

export default universityFAQs
