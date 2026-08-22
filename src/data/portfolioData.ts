// ============================================================
// PORTFOLIO DATA — Edit this file to customize your content
// ============================================================

export const personalInfo = {
  name: 'Abhishek Tiwari',
  title: 'AI/ML Developer & Software Engineer',
  tagline: 'I build practical AI/ML applications and data-driven software using Python, SQL, and modern development tools. Currently focused on machine learning, intelligent systems, and solving real-world problems through technology.',
  email: 'abhishektiwari@gmail.com',
  location: 'Nagpur, Maharashtra, India',
  availability: 'Seeking AI/ML, Data/SQL & Software Engineering Internships',
  // 🔗 Update these with your real URLs
  github: 'https://github.com/tiwaria00172',
  linkedin: 'https://www.linkedin.com/in/aaabhishektiwari/',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com/@abhishektiwari-u2l?si=kOYkT4rVA8-dmDxM',
  leetcode: 'https://leetcode.com/u/abhishektiwari00172/',
  resumeUrl: '/Abhishek_ResumeML.pdf',
};

export type Project = {
  id: number;
  title: string;
  description: string;
  whatItDoes?: string;
  proof?: string;
  tech: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: string;
  color: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  // ── AI / ML Projects (Top Priority) ──
  {
    id: 17,
    title: 'AI Attendance System',
    description: 'Manual attendance is time-consuming and error-prone. Built an automated computer-vision attendance system using Python, OpenCV, InsightFace, and ONNX Runtime to detect and recognize faces from group images, resulting in a streamlined, scalable attendance workflow.',
    whatItDoes: 'Processes individual reference photos to generate ArcFace embeddings, then detects all faces in a group/classroom image, computes cosine similarity against stored embeddings, and outputs identified students with confidence scores and annotated bounding boxes.',
    proof: 'End-to-end pipeline handles real-world conditions including varied lighting, partial occlusion, and angled faces. Deployed with a Flask backend and React frontend for live classroom use.',
    tech: ['Python', 'OpenCV', 'InsightFace', 'ONNX Runtime', 'Flask', 'React'],
    category: 'AI & Machine Learning',
    liveUrl: 'https://fr-attendance.streamlit.app/',
    githubUrl: 'https://github.com/tiwaria00172',
    featured: true,
    status: 'Complete',
    color: 'from-violet-600 to-purple-600',
  },
  {
    id: 16,
    title: 'Acurove AI Fit',
    description: 'Gym drop-offs are a massive problem due to lack of consistency and poor nutrition. Designed an AI fitness app combining workout auto-sync, an AI menu scanner, and social accountability features to help users maintain their routines and make data-driven diet choices.',
    whatItDoes: 'Integrates real-time auto-sync for workouts, an AI menu scanner to analyze food items before ordering, and social accountability to maintain consistency with friends.',
    proof: 'Validated with 51 students (92% love menu scanner, 86% want ONE app). Cleared Round 1 of Acurove Ideathon.',
    tech: ['AI', 'Python', 'Product Development', 'UI/UX'],
    category: 'AI & Machine Learning',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    status: 'In Progress',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 2,
    title: 'QuizCraft – MCQ Generator',
    description: 'Creating assessments manually is slow. Built a browser-based generator using JavaScript and NLP to automatically extract key terms and create multiple-choice questions from text, enabling instant, serverless test generation.',
    whatItDoes: 'Applies NLP logic to extract key terms from passages, generates distractors, and presents timed quizzes with granular visual feedback — all running client-side without backend dependencies.',
    proof: 'Fully functional with strict timer logic, real-time score tracking, and immediate per-question feedback.',
    tech: ['JavaScript', 'NLP', 'HTML', 'CSS'],
    category: 'AI & Machine Learning',
    liveUrl: 'https://tiwaria00172.github.io/QUIZR/',
    githubUrl: 'https://github.com/tiwaria00172',
    featured: true,
    status: 'Complete',
    color: 'from-blue-400 to-indigo-500',
  },

  // ── Software Development Projects ──
  {
    id: 1,
    title: 'HabitGrid – Offline-First PWA',
    description: 'Habit trackers often fail without internet access. Built an offline-first PWA using React, TypeScript, and IndexedDB that persists data locally, ensuring uninterrupted usage and reliable tracking regardless of connectivity.',
    whatItDoes: 'Provides habit tracking, scheduling, and AI-driven schedule generation that works entirely offline using IndexedDB for storage and Service Workers for caching, with automatic sync when connectivity resumes.',
    proof: 'Complete application architecture with full offline capabilities and synchronization routines.',
    tech: ['React', 'TypeScript', 'PWA', 'IndexedDB'],
    category: 'Web Development',
    liveUrl: 'https://gleeful-platypus-92433b.netlify.app/',
    githubUrl: 'https://github.com/tiwaria00172',
    featured: true,
    status: 'Complete',
    color: 'from-blue-600 to-indigo-600',
  },

  // ── IoT / Hardware Projects ──
  {
    id: 4,
    title: 'Smart Classroom Environment Detector',
    description: 'Classroom environments lack localized ambient monitoring. Developed an IoT pipeline using an ESP32 and sensors to capture thermal/humidity data and stream it via WebSockets, allowing real-time visualization of room conditions.',
    whatItDoes: 'Establishes continuous WebSocket connections from ESP-WROOM-32 to push thermal, humidity, and air-quality data into a browser-based visualization portal with sub-second update frequency.',
    proof: 'Achieved sub-second reporting speed using multi-threaded operations on the ESP32. Formed the basis of a published book chapter on advanced classroom environment detection.',
    tech: ['ESP32', 'C++', 'Python', 'WebSockets', 'Sensors'],
    category: 'Hardware & IoT',
    liveUrl: '#',
    githubUrl: 'https://github.com/tiwaria00172',
    featured: true,
    status: 'Complete',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 3,
    title: 'Obstacle Avoidance Bot',
    description: 'Navigating environments autonomously requires rapid sensor fusion. Built a robot using Arduino, ultrasonic sensors, and motor drivers to dynamically detect and bypass obstacles, with real-time OLED telemetry feedback.',
    whatItDoes: 'Integrates an HC-SR04 ultrasonic sensor, DHT environmental tracker, and L298N motor driver in an embedded C++ environment to dynamically sweep, detect, and bypass obstacles autonomously.',
    proof: 'Established an I2C OLED feedback loop that visualizes instantaneous distance and environmental metrics in real-time.',
    tech: ['Arduino', 'C++', 'IoT', 'Hardware'],
    category: 'Hardware & IoT',
    liveUrl: '#',
    githubUrl: 'https://github.com/tiwaria00172',
    featured: true,
    status: 'Complete',
    color: 'from-green-500 to-emerald-600',
  },

  // ── Creative & Visual Projects ──
  {
    id: 5,
    title: 'Heaven Window',
    description: 'Cinematic 3D Render',
    tech: ['Blender'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/heaven_window.mp4',
  },
  {
    id: 6,
    title: 'Technical Club Project',
    description: 'Motion tracking / rendering',
    tech: ['Blender'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/technical_club.mp4',
  },
  {
    id: 7,
    title: 'Hide 1',
    description: 'Cinematic layout and lighting experiment.',
    tech: ['Blender'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/hide1.mov',
  },
  {
    id: 8,
    title: 'Hide 2',
    description: 'Cinematic layout and lighting experiment.',
    tech: ['Blender'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/hide2.mkv',
  },
  {
    id: 9,
    title: 'HNY Cloud',
    description: 'Atmospheric fluid simulation.',
    tech: ['Blender', 'Volumetrics'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/hny_cloud.mkv',
  },
  {
    id: 10,
    title: 'Horror Shot',
    description: 'Tense camera tracking and environmental shading.',
    tech: ['Blender', 'Lighting'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/horror_shot.mkv',
  },
  {
    id: 11,
    title: 'Model 1',
    description: 'Hard surface 3D modeling showcase.',
    tech: ['Blender', 'Modeling'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/model1.mkv',
  },
  {
    id: 12,
    title: 'Ocean 1',
    description: 'Large scale fluid simulation.',
    tech: ['Blender', 'Simulation'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/ocean1.mkv',
  },
  {
    id: 13,
    title: 'Ocean 2',
    description: 'Alternative water simulation angle.',
    tech: ['Blender', 'Simulation'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/ocean2.mkv',
  },
  {
    id: 14,
    title: 'Room 1',
    description: 'Architectural interior visualization.',
    tech: ['Blender', 'ArchViz'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/room1.mkv',
  },
  {
    id: 15,
    title: 'VFX Reel Segment',
    description: 'Compositing digital assets into live footage.',
    tech: ['Blender', 'VFX', 'Compositing'],
    category: 'Creative & Visual',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    status: 'Portfolio Piece',
    color: 'from-gray-200 to-gray-300',
    videoUrl: '/videos/vfx.mov',
  },
];

export type SkillCategory = {
  name: string;
  icon: string;
  skills: { name: string; level: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: '💻',
    skills: [
      { name: 'Python', level: '●●●●○' },
      { name: 'Java', level: '●●●○○' },
      { name: 'JavaScript', level: '●●●●○' },
      { name: 'C', level: '●●●○○' },
      { name: 'SQL', level: '●●●●○' },
    ],
  },
  {
    name: 'AI / Machine Learning',
    icon: '🧠',
    skills: [
      { name: 'Machine Learning', level: '●●●○○' },
      { name: 'Scikit-learn', level: '●●●○○' },
      { name: 'NumPy', level: '●●●○○' },
      { name: 'Pandas', level: '●●●○○' },
      { name: 'OpenCV', level: '●●●○○' },
      { name: 'InsightFace', level: '●●●○○' },
      { name: 'ONNX Runtime', level: '●●○○○' },
    ],
  },
  {
    name: 'Data & Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL', level: '●●●●○' },
      { name: 'MySQL', level: '●●●○○' },
      { name: 'Firebase', level: '●●●○○' },
      { name: 'Supabase', level: '●●●○○' },
      { name: 'IndexedDB', level: '●●●○○' },
    ],
  },
  {
    name: 'Backend & Development',
    icon: '⚙️',
    skills: [
      { name: 'FastAPI', level: '●●●○○' },
      { name: 'Flask', level: '●●●○○' },
      { name: 'REST APIs', level: '●●●●●' },
      { name: 'React', level: '●●●○○' },
      { name: 'Git & GitHub', level: '●●●●●' },
    ],
  },
  {
    name: 'Creative Technology',
    icon: '🎨',
    skills: [
      { name: 'Blender', level: '●●●●○' },
      { name: 'DaVinci Resolve', level: '●●●●○' },
      { name: 'Figma', level: '●●●○○' },
      { name: 'Arduino', level: '●●●●○' },
    ],
  },
];

// ============================================================
// CODING PROFILES & ACHIEVEMENTS
// ============================================================

export type CodingAchievement = {
  platform: string;
  headline: string;
  description: string;
  languages: string[];
  profileUrl: string;
  count: string;
  highlights: string[];
};

export type HackerRankBadge = {
  skill: string;
  icon: string;
  stars: number;
  maxStars: number;
};

export const codingAchievement: CodingAchievement = {
  platform: 'LeetCode',
  headline: '200+',
  description: 'Problems Solved',
  languages: ['Java', 'Python', 'SQL'],
  profileUrl: personalInfo.leetcode,
  count: '200+',
  highlights: ['Data Structures & Algorithms', 'SQL Problem Solving', 'Python Programming'],
};

export const hackerRankBadges: HackerRankBadge[] = [
  { skill: 'Python', icon: '🐍', stars: 4, maxStars: 5 },
  { skill: 'Problem Solving', icon: '💻', stars: 2, maxStars: 5 },
  { skill: 'C++', icon: '⚡', stars: 2, maxStars: 5 },
  { skill: 'SQL', icon: '🗄️', stars: 2, maxStars: 5 },
];

// ============================================================
// ML LAB DATA
// ============================================================

export type MLPipelineStage = {
  name: string;
  icon: string;
  description: string;
};

export const mlPipeline: MLPipelineStage[] = [
  { name: 'Data', icon: '📊', description: 'Collecting and organizing raw datasets' },
  { name: 'Cleaning', icon: '🧹', description: 'Handling missing values, outliers, and noise' },
  { name: 'EDA', icon: '🔍', description: 'Exploratory analysis and visualization' },
  { name: 'Features', icon: '⚙️', description: 'Extracting and transforming relevant features' },
  { name: 'Training', icon: '🧠', description: 'Training ML models on processed data' },
  { name: 'Evaluation', icon: '📈', description: 'Measuring accuracy, precision, and recall' },
  { name: 'Deployment', icon: '🚀', description: 'Serving models via APIs and web apps' },
];

export type CaseStudy = {
  projectId: number;
  title: string;
  status: 'complete' | 'in-progress' | 'experimental';
  overview: string;
  problem: string;
  approach: string;
  tech: string[];
  concepts: string[];
  keyFeatures: string[];
  challenges: string[];
  whatILearned: string[];
  liveUrl: string;
  githubUrl: string;
};

export const caseStudies: CaseStudy[] = [
  {
    projectId: 17,
    title: 'AI Attendance System',
    status: 'complete',
    overview: 'An end-to-end computer-vision system that automates classroom attendance by detecting and recognizing faces from group photographs.',
    problem: 'Manual attendance in classrooms is time-consuming and error-prone, especially in large classes. Traditional roll calls waste instructional time and are susceptible to proxy attendance.',
    approach: 'The system processes individual reference photos to generate ArcFace embeddings via InsightFace, detects all faces in a group image, computes cosine similarity against stored embeddings, and outputs identified students with confidence scores and annotated bounding boxes.',
    tech: ['Python', 'OpenCV', 'InsightFace', 'ONNX Runtime', 'Flask', 'React'],
    concepts: ['Face Detection', 'Face Recognition', 'Embeddings', 'Image Processing', 'Cosine Similarity'],
    keyFeatures: [
      'Face detection from group images with multiple subjects',
      'ArcFace embedding generation for identity representation',
      'Cosine similarity matching with configurable thresholds',
      'Annotated output with bounding boxes and student names',
      'Flask backend API with React frontend',
    ],
    challenges: [
      'Handling varied lighting conditions across classroom environments',
      'Processing partially occluded or angled faces',
      'Maintaining recognition accuracy with low-quality webcam images',
      'Optimizing processing time for group images with 20+ faces',
    ],
    whatILearned: [
      'Face detection and recognition pipeline architecture',
      'Working with pre-trained models (InsightFace, ONNX Runtime)',
      'Image preprocessing techniques for real-world conditions',
      'Building ML-serving APIs with Flask',
      'Frontend-backend integration for AI applications',
    ],
    liveUrl: 'https://fr-attendance.streamlit.app/',
    githubUrl: 'https://github.com/tiwaria00172',
  },
  {
    projectId: 16,
    title: 'Acurove AI Fit',
    status: 'in-progress',
    overview: 'An AI-powered fitness application that uses computer vision and data analysis to help users maintain workout consistency and make smarter nutrition decisions.',
    problem: 'India\'s ₹2,450 crore gym industry suffers from a 30-day drop-off problem — most users abandon fitness routines within the first month due to lack of accountability and poor nutrition choices.',
    approach: 'Combines real-time workout auto-sync, an AI menu scanner that analyzes food items before ordering, and social accountability features to maintain consistency.',
    tech: ['AI', 'Python', 'Product Development', 'UI/UX'],
    concepts: ['AI Menu Scanning', 'Data-Driven Fitness', 'Behavior Analysis', 'Product Design'],
    keyFeatures: [
      'AI-powered menu scanner for nutrition analysis',
      'Real-time workout auto-sync',
      'Social accountability system',
      'Data-driven consistency tracking',
    ],
    challenges: [
      'Designing an AI system that can parse diverse menu formats',
      'Building engagement loops that prevent 30-day drop-off',
      'Validating product-market fit with target users',
    ],
    whatILearned: [
      'Product validation through user research (51 students surveyed)',
      'Designing AI features for real consumer problems',
      'Startup ideation and pitch development',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    projectId: 1,
    title: 'HabitGrid – Offline-First PWA',
    status: 'complete',
    overview: 'A fully offline-capable Progressive Web App for habit tracking that persists all user data locally, removing the dependency on internet connectivity.',
    problem: 'Most habit tracking apps require internet connectivity, making them unreliable in areas with poor network coverage. Users lose streaks and data when offline.',
    approach: 'Built with React and TypeScript using IndexedDB for local storage and Service Workers for caching, ensuring the app works entirely offline with sync capabilities when connectivity resumes.',
    tech: ['React', 'TypeScript', 'PWA', 'IndexedDB'],
    concepts: ['Offline-First Architecture', 'Service Workers', 'Client-Side Storage', 'PWA'],
    keyFeatures: [
      'Complete offline functionality using IndexedDB',
      'Service Worker-based caching strategy',
      'AI-driven schedule generation',
      'Responsive design across all devices',
    ],
    challenges: [
      'Designing a reliable offline-first data architecture',
      'Managing Service Worker lifecycle and cache invalidation',
      'Handling data sync conflicts when connectivity resumes',
    ],
    whatILearned: [
      'IndexedDB and client-side storage patterns',
      'Service Worker registration and caching strategies',
      'Progressive Web App architecture and best practices',
    ],
    liveUrl: 'https://gleeful-platypus-92433b.netlify.app/',
    githubUrl: 'https://github.com/tiwaria00172',
  },
];

export const whyAIML = "I'm drawn to AI/ML because it lets me combine programming, data, and mathematical thinking to build systems that can learn and adapt. I find the process of turning messy real-world data into working intelligent solutions genuinely fascinating — especially when the end result solves a practical problem that people can actually use.";

export type CurrentlyBuildingItem = {
  name: string;
  area: string;
  icon: string;
  status: 'active' | 'exploring';
};

export const currentlyBuilding: CurrentlyBuildingItem[] = [
  { name: 'ML Model Training & Evaluation', area: 'Machine Learning', icon: '🧠', status: 'active' },
  { name: 'Acurove AI Fit', area: 'AI-Powered Application', icon: '🏋️', status: 'active' },
  { name: 'SQL & Data Analytics', area: 'Data Engineering', icon: '🗄️', status: 'exploring' },
];

export const dataSkills = {
  sql: ['SELECT', 'JOINs', 'GROUP BY', 'Aggregations', 'Subqueries', 'CTEs', 'Window Functions'],
  pythonStack: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
};
