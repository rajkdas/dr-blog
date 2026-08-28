export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'journey' | 'insights' | 'editor' | 'popular';
  categoryLabel: string;
  date: string;
  isoDate: string;
  readTime: string;
  commentsCount?: number;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image?: string;
  badge?: string;
  rank?: number;
  content?: string[];
  tags: string[];
}

export interface Topic {
  id: string;
  name: string;
  count: number;
  iconName: string;
  description: string;
}

export const DOCTOR_PROFILE = {
  name: "Dr. [Your Name]",
  specialty: "GASTROENTEROLOGIST",
  subtitles: ["GI FELLOW", "WRITER", "MEDICAL EDUCATOR"],
  bio: "I'm a gastroenterology fellow passionate about learning, healing, and sharing. Follow my journey through fellowship and beyond, along with the experiences, lessons, and medical insights I've gathered along the way.",
  shortBio: "Evidence-based insights and real clinical experience to help you achieve better digestive health.",
  heroTitle: "The GI Journey, Shared.",
  heroSubtitle: "Personal experiences from GI fellowship, practical lessons from medicine, and approachable insights into digestive health.",
  heroTagline: "Stories. Science. Compassion.",
  heroNote: "A doctor's journey to heal minds. and improve lives. 💙",
  stats: [
    { value: "10+", label: "Years in Clinical Practice", icon: "Users" },
    { value: "500+", label: "Articles & Clinical Insights", icon: "PenTool" },
    { value: "One Mission", label: "Better Digestive Health for All", icon: "BookOpen" }
  ],
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};

export const FEATURED_ARTICLE: Article = {
  id: "gut-brain-connection",
  title: "The Gut–Brain Connection: What Science Is Teaching Us",
  excerpt: "New research continues to reveal how closely the gut and brain communicate—and what that means for your everyday health.",
  category: 'insights',
  categoryLabel: "FEATURED ARTICLE",
  date: "May 12, 2024",
  isoDate: "2024-05-12",
  readTime: "7 min read",
  featured: true,
  author: {
    name: DOCTOR_PROFILE.name,
    role: "Gastroenterologist & Fellow",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop&q=80"
  },
  image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80",
  tags: ["Gut Microbiome", "Brain-Gut Axis", "Neuroscience", "Mental Health"],
  content: [
    "For decades, medical training treated the central nervous system and the gastrointestinal tract as two separate entities. Today, we know that the enteric nervous system (ENS)—often called our 'second brain'—contains over 100 million neurons and communicates bidirectionally with our cranial brain via the vagus nerve.",
    "When you experience 'butterflies' before an important presentation or an upset stomach during moments of acute stress, you are experiencing the real-time dialogue of the gut-brain axis. Neurotransmitters like serotonin are predominantly produced not in the brain, but in the gut lining.",
    "Understanding this axis provides groundbreaking pathways for managing Irritable Bowel Syndrome (IBS), functional dyspepsia, and mood disorders. By addressing diet, microbiome composition, sleep architecture, and stress modulation concurrently, we unlock transformative therapeutic outcomes."
  ]
};

export const EDITORS_PICKS: Article[] = [
  {
    id: "ibs-triggers",
    title: "IBS Triggers: What Really Makes Symptoms Worse?",
    excerpt: "Evidence-based analysis of dietary FODMAPs, visceral hypersensitivity, and environmental stressors in irritable bowel syndrome.",
    category: 'editor',
    categoryLabel: "Editor's Pick",
    date: "May 10, 2024",
    isoDate: "2024-05-10",
    readTime: "6 min read",
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&auto=format&fit=crop&q=80",
    tags: ["IBS", "Functional Disorders", "Diet"],
    content: [
      "Irritable Bowel Syndrome impacts up to 15% of the population, yet symptom triggers vary greatly between individuals.",
      "High-FODMAP foods (fermentable oligosaccharides, disaccharides, monosaccharides, and polyols) draw water into the bowel and ferment quickly, causing rapid gas distention.",
      "Visceral hypersensitivity means the gut's nerve endings amplify regular digestion signals into acute discomfort."
    ]
  },
  {
    id: "gerd-sleep",
    title: "GERD and Sleep: Why Nighttime Matters",
    excerpt: "Why nocturnal acid reflux causes disproportionate esophageal damage and how positional therapy and meal timing reverse nighttime flares.",
    category: 'editor',
    categoryLabel: "Editor's Pick",
    date: "May 7, 2024",
    isoDate: "2024-05-07",
    readTime: "5 min read",
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&auto=format&fit=crop&q=80",
    tags: ["GERD & Reflux", "Sleep", "Lifestyle"],
    content: [
      "During sleep, saliva production decreases and swallowing ceases, eliminating our natural protective clearance mechanism against stomach acid.",
      "Elevating the head of your bed by 6 inches and sleeping on the left side (which positions the gastroesophageal junction above gastric acid level) can reduce nighttime acid contact by over 60%."
    ]
  },
  {
    id: "colonoscopy-answers",
    title: "Colonoscopy: Answers to the Most Common Questions",
    excerpt: "Demystifying prep protocols, sedation options, polyps detection, and recommended screening timelines with clear clinical facts.",
    category: 'editor',
    categoryLabel: "Editor's Pick",
    date: "May 3, 2024",
    isoDate: "2024-05-03",
    readTime: "6 min read",
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300&auto=format&fit=crop&q=80",
    tags: ["Colon Health", "Endoscopy & Procedures", "Prevention"],
    content: [
      "Colorectal cancer is one of the few cancers that is truly preventable through screening colonoscopy, because we identify and resect precancerous adenomas before they undergo malignant transformation.",
      "The bowel preparation is the most critical phase—split-dose prep regimens offer maximum mucosal visualization."
    ]
  },
  {
    id: "probiotics-facts-hype",
    title: "Probiotics: Separating Facts from Hype",
    excerpt: "Strain specificity, CFU viability, and what randomized clinical trials actually conclude about probiotic supplements.",
    category: 'editor',
    categoryLabel: "Editor's Pick",
    date: "Apr 30, 2024",
    isoDate: "2024-04-30",
    readTime: "5 min read",
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Gut Microbiome", "Nutrition & Diet", "Supplements"],
    content: [
      "Not all probiotics are created equal. In clinical practice, probiotic efficacy is strictly strain-specific (e.g., Bifidobacterium infantis 35624 vs generic lactobacillus).",
      "For most healthy individuals, dietary diversity rich in prebiotic fibers, polyphenols, and fermented whole foods provides superior microbiome resilience compared to over-the-counter capsules."
    ]
  }
];

export const GI_JOURNEY_ARTICLES: Article[] = [
  {
    id: "day-in-life-fellow",
    title: "A Day in the Life of a GI Fellow",
    excerpt: "Moments from the wards, the endoscopy suite, and everything in between.",
    category: 'journey',
    categoryLabel: "From the GI Journey",
    date: "May 8, 2024",
    isoDate: "2024-05-08",
    readTime: "6 min read",
    commentsCount: 8,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["GI Fellowship", "Clinical Experiences", "Medical Education"]
  },
  {
    id: "lessons-no-textbook",
    title: "Lessons No Textbook Taught Me",
    excerpt: "Real-world lessons from patients, mentors, and mistakes that shaped me.",
    category: 'journey',
    categoryLabel: "From the GI Journey",
    date: "May 1, 2024",
    isoDate: "2024-05-01",
    readTime: "5 min read",
    commentsCount: 5,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Clinical Experiences", "Medical Education", "Resilience"]
  },
  {
    id: "why-chose-gastroenterology",
    title: "Why I Chose Gastroenterology",
    excerpt: "The curiosity, the challenges, and the reward of caring for the gut.",
    category: 'journey',
    categoryLabel: "From the GI Journey",
    date: "Apr 26, 2024",
    isoDate: "2024-04-26",
    readTime: "6 min read",
    commentsCount: 7,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["GI Fellowship", "Career", "Reflections"]
  },
  {
    id: "journey-continues",
    title: "The Journey Continues...",
    excerpt: "Reflections on growth, gratitude, and the road ahead.",
    category: 'journey',
    categoryLabel: "From the GI Journey",
    date: "Apr 20, 2024",
    isoDate: "2024-04-20",
    readTime: "4 min read",
    commentsCount: 4,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Reflections", "Mental Wellbeing", "Growth"]
  }
];

export const DIGESTIVE_HEALTH_ARTICLES: Article[] = [
  {
    id: "understanding-ibs",
    title: "Understanding IBS: What's the Difference?",
    excerpt: "Learn how to identify IBS and manage your symptoms better.",
    category: 'insights',
    categoryLabel: "Digestive Health Insights",
    date: "May 9, 2024",
    isoDate: "2024-05-09",
    readTime: "5 min read",
    commentsCount: 9,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["IBS & Functional Disorders", "Gut Health", "Diagnostics"]
  },
  {
    id: "do-probiotics-really-work",
    title: "Do Probiotics Really Work? Here's What the Evidence Says",
    excerpt: "Not all probiotics are the same. Let's look at the science behind their benefits.",
    category: 'insights',
    categoryLabel: "Digestive Health Insights",
    date: "Apr 28, 2024",
    isoDate: "2024-04-28",
    readTime: "6 min read",
    commentsCount: 6,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Gut Microbiome & Probiotics", "Nutrition", "Clinical Studies"]
  },
  {
    id: "what-to-expect-endoscopy",
    title: "What to Expect During an Endoscopy",
    excerpt: "A step-by-step guide to help you feel informed and at ease before your procedure.",
    category: 'insights',
    categoryLabel: "Digestive Health Insights",
    date: "Apr 16, 2024",
    isoDate: "2024-04-16",
    readTime: "5 min read",
    commentsCount: 4,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Endoscopy & Procedures", "Patient Guide", "Clinical"]
  },
  {
    id: "gut-friendly-diet",
    title: "Gut–Friendly Diet: Foods That Help Heal and Protect",
    excerpt: "Simple dietary choices that support digestive health every day.",
    category: 'insights',
    categoryLabel: "Digestive Health Insights",
    date: "Apr 10, 2024",
    isoDate: "2024-04-10",
    readTime: "6 min read",
    commentsCount: 6,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Nutrition & Diet", "Gut Health", "Prevention"]
  }
];

export const POPULAR_ARTICLES: Article[] = [
  {
    id: "improve-gut-health-habits",
    title: "How to Improve Gut Health: Evidence-Based Habits",
    excerpt: "Daily lifestyle habits that measurably optimize bacterial diversity and gut barrier function.",
    category: 'popular',
    categoryLabel: "Most Popular",
    date: "Apr 20, 2024",
    isoDate: "2024-04-20",
    readTime: "7 min read",
    rank: 1,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Gut Microbiome", "Lifestyle", "Prevention"]
  },
  {
    id: "best-foods-digestive-system",
    title: "Best Foods for a Healthy Digestive System",
    excerpt: "From soluble fibers to fermented prebiotics, the foundational grocery staples for GI health.",
    category: 'popular',
    categoryLabel: "Most Popular",
    date: "Apr 15, 2024",
    isoDate: "2024-04-15",
    readTime: "5 min read",
    rank: 2,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Nutrition & Diet", "Gut Health"]
  },
  {
    id: "is-it-ibs-or-ibd",
    title: "Is It IBS or IBD? Key Differences Explained",
    excerpt: "Distinguishing non-inflammatory functional disorders from Crohn's Disease and Ulcerative Colitis.",
    category: 'popular',
    categoryLabel: "Most Popular",
    date: "Apr 12, 2024",
    isoDate: "2024-04-12",
    readTime: "8 min read",
    rank: 3,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["IBS & Functional Disorders", "Colon Health", "Clinical"]
  },
  {
    id: "lactose-vs-dairy-allergy",
    title: "Lactose Intolerance vs. Dairy Allergy: What's the Difference?",
    excerpt: "Enzymatic lactase deficiency versus IgE-mediated immunological responses to milk proteins.",
    category: 'popular',
    categoryLabel: "Most Popular",
    date: "Apr 11, 2024",
    isoDate: "2024-04-11",
    readTime: "4 min read",
    rank: 4,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Nutrition & Diet", "Immunology", "Diagnostics"]
  },
  {
    id: "stress-and-your-gut",
    title: "Stress and Your Gut: How They Are Linked",
    excerpt: "The neurochemical cascade of cortisol and catecholamines on enteric motility and mucosal permeability.",
    category: 'popular',
    categoryLabel: "Most Popular",
    date: "Apr 9, 2024",
    isoDate: "2024-04-09",
    readTime: "6 min read",
    rank: 5,
    author: { name: DOCTOR_PROFILE.name, role: "GI Fellow", avatar: "" },
    tags: ["Gut-Brain Connection", "Mental Wellbeing", "Stress"]
  }
];

export const TOPICS: Topic[] = [
  { id: "gi-fellowship", name: "GI Fellowship", count: 18, iconName: "GraduationCap", description: "Fellowship training, endoscopy rotations & medical residency stories" },
  { id: "clinical-experiences", name: "Clinical Experiences", count: 24, iconName: "Stethoscope", description: "Real case studies, hospital rounds & diagnostic discoveries" },
  { id: "ibs-functional", name: "IBS & Functional Disorders", count: 32, iconName: "Activity", description: "Managing irritable bowel syndrome, bloating & visceral sensitivity" },
  { id: "gerd-reflux", name: "GERD & Reflux", count: 19, iconName: "Flame", description: "Acid reflux, Barrett's esophagus, PPI management & nighttime relief" },
  { id: "colon-health", name: "Colon Health", count: 27, iconName: "Shield", description: "Colonoscopy screening, polyp prevention & colorectal wellness" },
  { id: "gut-microbiome", name: "Gut Microbiome & Probiotics", count: 41, iconName: "Dna", description: "Bacterial diversity, prebiotics, dysbiosis & microbial health" },
  { id: "nutrition-diet", name: "Nutrition & Diet", count: 38, iconName: "Apple", description: "Low-FODMAP, Mediterranean, gut-healing dietary protocols" },
  { id: "endoscopy-procedures", name: "Endoscopy & Procedures", count: 15, iconName: "Eye", description: "EGD, colonoscopy, ERCP, capsule endoscopy & patient guides" },
  { id: "resources-patients", name: "Resources for Patients", count: 22, iconName: "FolderHeart", description: "Downloadable guides, prep instructions & printable food checklists" },
  { id: "mental-wellbeing", name: "Mental Wellbeing & Resilience", count: 16, iconName: "HeartHandshake", description: "Stress management, physician burnout & mind-body medicine" }
];
