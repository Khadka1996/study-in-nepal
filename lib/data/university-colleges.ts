export type CollegeEntry = {
  name: string
  location?: string
  note?: string
}

// Collected lists of colleges/campuses per university.
// NOTE: These entries include only name, location, and a short note.
// No contact details are included — Study In Nepal acts as a mediator.
export const universityColleges: Record<string, CollegeEntry[]> = {
  tribhuvan: [
    { name: 'Maharajgunj Medical Campus', location: 'Kathmandu', note: 'Medical education and clinical training' },
    { name: 'Institute of Medicine', location: 'Kathmandu', note: 'Health sciences and professional medical study' },
    { name: 'Pulchowk Campus', location: 'Lalitpur', note: 'Engineering and applied sciences' },
    { name: 'Amrit Science Campus', location: 'Kathmandu', note: 'Science and laboratory-based programs' },
    { name: 'Tri-Chandra Multiple Campus', location: 'Kathmandu', note: 'Historic government campus with broad offerings' },
    { name: 'Ratna Rajya Laxmi Campus', location: 'Kathmandu', note: 'Humanities and social sciences' },
    { name: 'Padma Kanya Multiple Campus', location: 'Kathmandu', note: 'Women-focused higher education' },
    { name: 'Nepal Commerce Campus', location: 'Kathmandu', note: 'Management and commerce programs' },
    { name: 'Public Youth Campus', location: 'Kathmandu', note: 'General academic pathways' },
    { name: 'Bhaktapur Multiple Campus', location: 'Bhaktapur', note: 'Multidisciplinary undergraduate and graduate study' },
    { name: 'Prithvi Narayan Campus', location: 'Pokhara', note: 'Large public campus with broad academic offerings' },
    { name: 'Mahendra Ratna Campus', location: 'Kathmandu', note: 'Education and teacher preparation' },
    { name: 'Shankar Dev Campus', location: 'Kathmandu', note: 'Economics and commerce studies' },
    { name: 'Thakur Ram Multiple Campus', location: 'Birgunj', note: 'Regional public campus' },
    { name: 'Butwal Multiple Campus', location: 'Butwal', note: 'Western region public higher education hub' },
    { name: 'Mahendra Multiple Campus', location: 'Nepalgunj', note: 'Far-west and mid-west academic support' },
    { name: 'Tansen Multiple Campus', location: 'Palpa', note: 'Regional government campus' },
    { name: 'Mahendra Morang Adarsha Multiple Campus', location: 'Biratnagar', note: 'Established public campus in the east' },
    { name: 'Saraswoti Multiple Campus', location: 'Lalitpur', note: 'Liberal studies and campus-based learning' },
    { name: 'Ratna Rajyalaxmi Campus', location: 'Kathmandu', note: 'Focused on arts, social sciences, and management' },
  ],

  kathmandu: [
    { name: 'School of Engineering', location: 'Dhulikhel', note: 'Core engineering and technology programs' },
    { name: 'School of Medical Sciences', location: 'Dhulikhel', note: 'Health sciences and professional training' },
    { name: 'School of Arts', location: 'Dhulikhel', note: 'Liberal arts and interdisciplinary study' },
    { name: 'School of Science', location: 'Dhulikhel', note: 'Science and research-led programs' },
    { name: 'Kathmandu University School of Education', location: 'Dhulikhel', note: 'Teacher training and pedagogy' },
    { name: 'Kathmandu University School of Management', location: 'Dhulikhel', note: 'Business and management programs' },
    { name: 'KU-affiliated Engineering Colleges (selected)', location: 'Nationwide', note: 'Regional engineering partners and campuses' },
    { name: 'KU-affiliated Medical/Health Colleges (selected)', location: 'Nationwide', note: 'Health science partners and clinical sites' },
    { name: 'KU-affiliated Arts & Commerce Colleges (selected)', location: 'Nationwide', note: 'Local colleges offering KU degrees' },
  ],

  pokhara: [
    { name: 'Pokhara University School of Engineering', location: 'Pokhara', note: 'Practical engineering pathways' },
    { name: 'College of Business', location: 'Pokhara', note: 'Management and commerce studies' },
    { name: 'School of Health Sciences', location: 'Pokhara', note: 'Nursing and allied health' },
    { name: 'PU-affiliated Management Colleges (selected)', location: 'Gandaki Province', note: 'Regional management and business colleges' },
    { name: 'PU-affiliated Engineering Colleges (selected)', location: 'Gandaki Province', note: 'Applied engineering partners' },
  ],
}

export default universityColleges
