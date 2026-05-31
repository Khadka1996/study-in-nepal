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

  purbanchal: [
    { question: 'What is Purbanchal University known for?', answer: 'Purbanchal University is known for technical, professional, and healthcare-oriented study options across eastern Nepal.' },
    { question: 'Can international students apply to Purbanchal University?', answer: 'Yes, international applications may be possible depending on the program and admission requirements.' },
    { question: 'What programs are often requested?', answer: 'Engineering, medicine, management, public health, science, and computer-related programs are commonly requested.' },
  ],

  lumbini: [
    { question: 'Why choose Lumbini Buddhist University?', answer: 'It is a strong fit for students interested in Buddhist studies, cultural learning, tourism, and humanities.' },
    { question: 'Is it suitable for international students?', answer: 'Yes, especially for students who want a values-based or culture-focused academic path in Nepal.' },
    { question: 'What programs attract the most attention?', answer: 'Buddhist studies, management, tourism, arts, and education are among the common choices.' },
  ],

  midwestern: [
    { question: 'What makes Mid-West University a good option?', answer: 'It offers a growing public university ecosystem for students who want study options in western and mid-western Nepal.' },
    { question: 'What subject areas are popular?', answer: 'Engineering, education, agriculture, management, science, and social sciences are common choices.' },
  ],

  'nepal-sanskrit': [
    { question: 'Who should consider Nepal Sanskrit University?', answer: 'Students interested in Sanskrit, philosophy, traditional texts, and cultural studies may find it a strong match.' },
    { question: 'Does it offer modern academic support too?', answer: 'Yes, the university also includes education, research, and translation-oriented academic support.' },
  ],

  'nepal-open': [
    { question: 'What is the advantage of Nepal Open University?', answer: 'It is useful for students who need flexible, distance-based learning and cannot attend a traditional full-time campus.' },
    { question: 'What can I study there?', answer: 'Options often include IT, management, education, public policy, law, and social science-related areas.' },
  ],

  'agriculture-forestry': [
    { question: 'What is Agriculture and Forestry University best known for?', answer: 'It is a specialist university for agriculture, forestry, veterinary, food science, and environmental study.' },
    { question: 'Is it practical for career-focused students?', answer: 'Yes, it is a strong choice for students aiming at applied science and production-based careers.' },
  ],

  'far-western': [
    { question: 'What does Far Western University offer?', answer: 'It offers multidisciplinary study options including education, management, science, technology, and social sciences.' },
    { question: 'Is it good for regional access?', answer: 'Yes, it helps students in far-western Nepal access public higher education closer to home.' },
  ],

  'nepal-med': [
    { question: 'What does Nepal Medical College focus on?', answer: 'It focuses on medical and healthcare education with clinical training, nursing, public health, and allied health pathways.' },
    { question: 'Is it suitable for students seeking hospital-based learning?', answer: 'Yes, it is a good fit for students who want a clinically oriented healthcare education.' },
  ],

  bpkihs: [
    { question: 'What makes B.P. Koirala Institute of Health Sciences different?', answer: 'BPKIHS is a specialized health sciences institute with a strong clinical training environment, teaching hospital access, and research-oriented programs.' },
    { question: 'Can international students apply to BPKIHS programs?', answer: 'Yes, international applications may be possible depending on the program and admission criteria; Study In Nepal can help you check eligibility and required documents.' },
    { question: 'Which programs are most popular at BPKIHS?', answer: 'MBBS, nursing, public health, allied health, and postgraduate medical programs are among the most commonly requested.' },
  ],
}

export default universityFAQs
