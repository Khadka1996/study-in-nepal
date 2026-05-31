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

  purbanchal: [
    { name: 'School of Engineering', location: 'Biratnagar', note: 'Technical and applied engineering programs' },
    { name: 'Faculty of Medicine', location: 'Biratnagar', note: 'Healthcare and clinical study pathways' },
    { name: 'Faculty of Management', location: 'Biratnagar', note: 'Business, commerce, and administration study' },
    { name: 'Faculty of Science and Technology', location: 'Biratnagar', note: 'Science-led learning and lab-based programs' },
    { name: 'Faculty of Humanities and Social Sciences', location: 'Biratnagar', note: 'Social science and general academic study' },
  ],

  lumbini: [
    { name: 'Faculty of Buddhist Studies', location: 'Rupandehi', note: 'History, heritage, and philosophy-focused study' },
    { name: 'Faculty of Humanities', location: 'Rupandehi', note: 'Arts and interdisciplinary learning' },
    { name: 'Faculty of Management', location: 'Rupandehi', note: 'Applied business and administration programs' },
    { name: 'Tourism and Hospitality units', location: 'Rupandehi', note: 'Career-oriented hospitality study' },
    { name: 'Education support units', location: 'Rupandehi', note: 'Teacher education and community learning' },
  ],

  midwestern: [
    { name: 'School of Science and Technology', location: 'Surkhet', note: 'STEM-focused academic pathways' },
    { name: 'Faculty of Education', location: 'Surkhet', note: 'Teacher training and pedagogy' },
    { name: 'Faculty of Management', location: 'Surkhet', note: 'Business and commerce pathways' },
    { name: 'Faculty of Agriculture', location: 'Surkhet', note: 'Agriculture and environmental learning' },
    { name: 'Faculty of Humanities and Social Sciences', location: 'Surkhet', note: 'General and social science study' },
  ],

  'nepal-sanskrit': [
    { name: 'Faculty of Sanskrit Studies', location: 'Dang', note: 'Classical Sanskrit language and literature' },
    { name: 'Faculty of Philosophy', location: 'Dang', note: 'Traditional and contemporary philosophical study' },
    { name: 'Faculty of Religion and Culture', location: 'Dang', note: 'Heritage, culture, and textual study' },
    { name: 'Faculty of Education', location: 'Dang', note: 'Teacher preparation in classical disciplines' },
    { name: 'Research and translation units', location: 'Dang', note: 'Text preservation and academic research' },
  ],

  'nepal-open': [
    { name: 'Online learning center', location: 'Lalitpur', note: 'Flexible remote learning support' },
    { name: 'Assessment and exam support', location: 'Nationwide', note: 'Distance education delivery and evaluation' },
    { name: 'Academic support services', location: 'Nationwide', note: 'Tutoring and student guidance' },
    { name: 'Regional facilitation points', location: 'Nationwide', note: 'Student access support across Nepal' },
  ],

  'agriculture-forestry': [
    { name: 'Institute of Agriculture and Animal Science', location: 'Rampur', note: 'Agriculture and livestock science' },
    { name: 'Institute of Forestry', location: 'Rampur', note: 'Forestry, environment, and conservation study' },
    { name: 'Veterinary and animal health units', location: 'Rampur', note: 'Animal health and husbandry training' },
    { name: 'Food science and agribusiness labs', location: 'Rampur', note: 'Applied food and production study' },
  ],

  'far-western': [
    { name: 'Faculty of Education', location: 'Dhangadhi', note: 'Teacher education and pedagogy' },
    { name: 'Faculty of Management', location: 'Dhangadhi', note: 'Business, commerce, and administration' },
    { name: 'Faculty of Science and Technology', location: 'Dhangadhi', note: 'Science and technical programs' },
    { name: 'Faculty of Humanities and Social Sciences', location: 'Dhangadhi', note: 'Arts and social science study' },
    { name: 'Regional study centers', location: 'Sudurpashchim', note: 'Broader access for students across the region' },
  ],

  'nepal-med': [
    { name: 'Teaching hospital wing', location: 'Kathmandu', note: 'Clinical rotations and bedside learning' },
    { name: 'School of Medicine', location: 'Kathmandu', note: 'Medical education and supervised practice' },
    { name: 'School of Nursing', location: 'Kathmandu', note: 'Nursing preparation and patient care training' },
    { name: 'Public health and diagnostics units', location: 'Kathmandu', note: 'Community health and laboratory learning' },
    { name: 'Research and clinical support units', location: 'Kathmandu', note: 'Research-led healthcare training' },
  ],

  bpkihs: [
    { name: 'School of Medicine', location: 'Dharan', note: 'Clinical medicine and hospital-based training' },
    { name: 'School of Nursing', location: 'Dharan', note: 'Undergraduate and postgraduate nursing pathways' },
    { name: 'School of Public Health and Community Medicine', location: 'Dharan', note: 'Population health and preventive care programs' },
    { name: 'School of Allied Health Sciences', location: 'Dharan', note: 'Laboratory, imaging, and allied health disciplines' },
    { name: 'Research and training departments', location: 'Dharan', note: 'Specialized health sciences research support' },
  ],
}

export default universityColleges
