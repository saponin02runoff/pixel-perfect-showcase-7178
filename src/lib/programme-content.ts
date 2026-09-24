export const sources = {
  parakhDelhi:
    "https://parakh.ncert.gov.in/sites/default/files/2025-07/REPORT_NCT%20of%20Delhi_IND007_0.pdf",
  parakhDelhiGrade9:
    "https://parakh.ncert.gov.in/sites/default/files/2025-07/REPORT_NCT%20of%20Delhi_IND007.pdf",
  parakhNational: "https://parakh.ncert.gov.in/blog/parakh-rashtriya-sarvekshan-2024",
  tarlSynthesis: "https://www.povertyactionlab.org/evidence-effect/teaching-at-the-right-level",
  tarlCase: "https://www.povertyactionlab.org/case-study/teaching-right-level-improve-learning",
  tarlEvaluation: "https://www.povertyactionlab.org/fr/print/pdf/node/4537?lang=id",
  lifeSkillsBrief:
    "https://www.povertyactionlab.org/sites/default/files/publication/English-Life-Skills-Policy-Brief_0.pdf",
  lifeSkillsDesign:
    "https://www.povertyactionlab.org/sites/default/files/publication/Designing-and-Implementing-Evidence-Based-Life-Skills-Training-Programmes-and-Girls-Clubs.pdf",
  mentoringEvaluation:
    "https://www.povertyactionlab.org/evaluation/providing-life-skills-training-and-mentoring-reduce-school-dropout-among-girls-india",
  baglessDays: "https://dsel.education.gov.in/sites/default/files/update/PIB2042313.pdf",
  holisticEducation: "https://www.education.gov.in/nep/holistic-education",
  pocso: "https://www.indiacode.nic.in/bitstream/123456789/9318/1/sexualoffencea2012-32.pdf",
  vidyanjali: "https://vidyanjali.education.gov.in/",
  worldBankFoundationalLearning: "https://www.worldbank.org/en/brief/2025/05/16/foundational-learning",
  worldDevelopmentReport:
    "https://openknowledge.worldbank.org/bitstreams/cc741546-c4dd-5cae-8ba4-6025d145e5de/download",
  oecdConfidence:
    "https://www.oecd.org/en/publications/pisa-2022-results-volume-v_c2e44201-en/full-report/component-2.html",
} as const;

export const futureProgrammes = {
  future: {
    slug: "/future-labs" as const,
    eyebrow: "Northbridge Future Labs",
    title: "Broader horizons, explored with care.",
    objective: "Expand students’ understanding of what is possible after school.",
    intro:
      "Future Labs is intended as a structured sequence of exploration, reflection and next-step planning.",
    activities: [
      "Career exploration workshops",
      "University and higher-education information sessions",
      "Conversations with professionals and relatable role models",
      "Workplace, laboratory, university and institution visits",
      "Exposure to research, entrepreneurship, public service and skilled work",
      "Scholarship, subject-choice and pathway guidance",
      "Student reflection and next-step planning",
    ],
    principles: [
      "Repeated exposure, not one-off events",
      "Accurate and verified pathway information",
      "Diverse professional and educational role models",
      "Reflection and action planning",
      "Inclusive and affordable opportunities",
      "Parent consent and child-safe procedures for visits",
    ],
  },
  mentor: {
    slug: "/mentor-network" as const,
    eyebrow: "Northbridge Mentor Network",
    title: "Guidance with structure and safeguards.",
    objective: "Provide sustained, structured and safeguarded guidance for a defined group of students.",
    intro:
      "Northbridge intends to begin with structured small-group mentoring circles. Individual mentoring may be offered later to a smaller, clearly defined cohort when appropriate safeguarding, matching and supervision systems are in place.",
    activities: [
      "Academic habits and goal-setting",
      "Education navigation and career exploration",
      "Communication, confidence and problem-solving",
      "Digital safety and responsible use of online tools",
      "Opportunity access and personal development",
    ],
    principles: [
      "Trained mentors with clear roles and boundaries",
      "Safeguarding procedures and appropriate referral pathways",
      "Parent or guardian consent and student assent",
      "Supervision and quality assurance",
      "No private or unlogged inappropriate communication",
      "Clear recognition that mentoring is not therapy or crisis counselling",
    ],
  },
  build: {
    slug: "/build-labs" as const,
    eyebrow: "Northbridge Build Labs",
    title: "Turn learning into demonstrated capability.",
    objective: "Help students convert learning into useful, visible work.",
    intro:
      "Build Labs is planned as a supported project pathway. Students would investigate questions, make and test work, receive feedback, and document what they can do.",
    activities: [
      "Research projects and science investigations",
      "Software prototypes",
      "Data analysis and visualisation",
      "Economics or business projects",
      "Community problem-solving projects",
      "Presentations, posters and explainers",
      "Documented portfolios showing process and revision",
    ],
    principles: [
      "Appropriate readiness, scaffolding and consistent attendance",
      "Projects matched to students’ current skills",
      "Ethical and safe practice",
      "Student ownership",
      "Iteration, feedback and revision",
      "Low-cost and accessible tools before expensive equipment",
    ],
  },
} as const;