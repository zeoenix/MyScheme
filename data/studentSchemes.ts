export interface Scheme {
  id: string;
  name: string;
  description: string;
  ageRange: { min: number; max: number };
  gender: 'All' | 'Male' | 'Female';
  states: string[];
}

export const studentSchemes: Scheme[] = [
  {
    id: "1",
    name: "Pre-Matric Scholarship for SC Students",
    description: "Financial assistance for SC students studying in classes 9th and 10th.",
    ageRange: { min: 14, max: 18 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "2",
    name: "Post-Matric Scholarship for SC Students",
    description: "Financial support for SC students pursuing higher education after 10th standard.",
    ageRange: { min: 16, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "3",
    name: "National Means-cum-Merit Scholarship Scheme",
    description: "Scholarships to meritorious students of economically weaker sections.",
    ageRange: { min: 13, max: 18 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "4",
    name: "Pragati Scholarship for Girls",
    description: "Scholarship for girl students pursuing technical education.",
    ageRange: { min: 18, max: 30 },
    gender: "Female",
    states: ["All States"]
  },
  {
    id: "5",
    name: "Central Sector Scheme of Scholarships for College and University Students",
    description: "Scholarships for meritorious students from low income families.",
    ageRange: { min: 18, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "6",
    name: "Prime Minister's Research Fellowship",
    description: "Fellowship for doctoral studies in IITs, IISERs, and IISc.",
    ageRange: { min: 22, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "7",
    name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    description: "Scholarships to encourage students to take up research careers in Science.",
    ageRange: { min: 15, max: 22 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "8",
    name: "Inspire Scholarship for Higher Education",
    description: "Scholarships for students pursuing Bachelor and Masters level education in natural and basic sciences.",
    ageRange: { min: 17, max: 25 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "9",
    name: "National Talent Search Examination Scholarship",
    description: "Scholarships to students for pursuing courses in science and social science up to doctoral level.",
    ageRange: { min: 13, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "10",
    name: "Beti Bachao Beti Padhao Scheme",
    description: "Comprehensive package of interventions and multi-sectoral action to improve education of girl child.",
    ageRange: { min: 5, max: 18 },
    gender: "Female",
    states: ["All States"]
  },
  {
    id: "11",
    name: "Sarva Shiksha Abhiyan",
    description: "Universalization of elementary education in a time bound manner.",
    ageRange: { min: 6, max: 14 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "12",
    name: "Mid-Day Meal Scheme",
    description: "School meal programme designed to improve the nutritional status of school-age children nationwide.",
    ageRange: { min: 6, max: 14 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "13",
    name: "Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Scheme to enhance access to secondary education and improve its quality.",
    ageRange: { min: 14, max: 18 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "14",
    name: "Samagra Shiksha",
    description: "Overarching programme for the school education sector extending from pre-school to class 12.",
    ageRange: { min: 5, max: 18 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "15",
    name: "Digital India e-Learning",
    description: "Initiative to provide free online courses and digital learning resources.",
    ageRange: { min: 5, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "16",
    name: "Pradhan Mantri Innovative Learning Program - DHRUV",
    description: "Mentoring and nurturing of talented students to enrich their skills and knowledge.",
    ageRange: { min: 10, max: 18 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "17",
    name: "Eklavya Model Residential Schools",
    description: "Schools for tribal students to provide quality education in remote tribal areas.",
    ageRange: { min: 6, max: 18 },
    gender: "All",
    states: ["Tribal Areas"]
  },
  {
    id: "18",
    name: "Rashtriya Uchchatar Shiksha Abhiyan (RUSA)",
    description: "Centrally sponsored scheme for funding state universities and colleges to achieve higher enrollment.",
    ageRange: { min: 18, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "19",
    name: "Unnat Bharat Abhiyan",
    description: "Connecting institutions of higher education with local communities to address development challenges.",
    ageRange: { min: 18, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "20",
    name: "Study in India",
    description: "Program to encourage international students to pursue higher education in India.",
    ageRange: { min: 18, max: 30 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "21",
    name: "Padhe Bharat Badhe Bharat",
    description: "Sub-programme of Sarva Shiksha Abhiyan to improve language development and create interest in mathematics.",
    ageRange: { min: 6, max: 10 },
    gender: "All",
    states: ["All States"]
  },
  {
    id: "22",
    name: "SWAYAM - Free Online Education",
    description: "Massive Open Online Courses (MOOCs) platform offering free online courses.",
    ageRange: { min: 15, max: 30 },
    gender: "All",
    states: ["All States"]
  }
];

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

