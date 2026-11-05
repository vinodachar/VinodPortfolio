/*
 * ============================================================
 *  All site copy lives here. Edit numbers, dates and text in
 *  this one file — components only handle layout & motion.
 *  Numbers last checked: 4 Nov 2026 (Instagram 45.7K, verified).
 * ============================================================
 */
import { INSTAGRAM, YOUTUBE, WHATSAPP } from "./constants.js";

// Black & white portrait for the hero (a photo on a dark/black background works best).
// Until the file exists, a sculptural fallback is shown instead.
export const PORTRAIT = "/images/vinod-portrait.jpg";
// Optional: a photo from one of your workshops/webinars for the Community section.
// Leave "" to use the abstract auditorium graphic.
export const STAGE_IMAGE = "";

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#content", label: "Content" },
  { href: "#community", label: "Speaking" },
  { href: "#business", label: "Business" },
];

export const PROOF = [
  { value: 45.7, decimals: 1, suffix: "K+", label: "followers on @ai.with.vi_ — verified" },
  { value: 3, decimals: 0, suffix: "M+", label: "average monthly views on Kannada AI content" },
  { value: 4, decimals: 0, suffix: "+", label: "years engineering cloud & DevOps at scale" },
];

/* ---------- 01 / About — the three-perspective explorer ---------- */
export const PERSPECTIVES = [
  {
    key: "create",
    label: "Create",
    shape: "ripples",
    word: "REACH",
    title: "Make AI feel local.",
    body: "Daily AI updates, tool breakdowns and workflows — explained in everyday Kannada so anyone can use them tomorrow.",
    link: { href: "#content", text: "See the content" },
  },
  {
    key: "teach",
    label: "Teach",
    shape: "structure",
    word: "STRUCTURE",
    title: "Turn tools into skills.",
    body: "Webinars and hands-on workshops that take founders from ‘I’ve tried ChatGPT’ to AI running real parts of their business.",
    link: { href: "#business", text: "See the business work" },
  },
  {
    key: "build",
    label: "Build",
    shape: "constellation",
    word: "SYSTEMS",
    title: "Ship what lasts.",
    body: "An engineer first — cloud, containers and pipelines by day, now extending that foundation into MLOps.",
    link: { href: "#mlops", text: "See the engineering" },
  },
];

/* ---------- 02 / Selected work ---------- */
export const WORK = [
  {
    id: "business-communities",
    eyebrow: "Educator / Business communities",
    title: "AI for business communities",
    body: "Webinars and hands-on workshops for founder and MSME communities — practical AI for leads, follow-ups, content and sales. And courses for business owners, now in the making.",
    href: "#business",
    linkText: "See the business work",
    label: ["WEBINARS · WORKSHOPS · COURSES SOON", ""],
    art: "business",
  },
];

export const WORK_MORE = [
  {
    small: "02 / ENGINEERING FOR BUSINESS",
    title: "AI-powered websites & software",
    tag: "BUILD",
    href: WHATSAPP,
  },
  {
    small: "03 / CREATIVE SERVICES",
    title: "Video editing for small businesses",
    href: WHATSAPP,
  },
];

/* ---------- 03 / AI for Business ---------- */
export const BUSINESS_FORMATS = [
  {
    n: "01",
    eyebrow: "WEBINARS",
    title: "Webinars for business communities.",
    body: "Live sessions for founder and MSME communities — what AI can do for a small business right now, with free and low-cost tools first.",
    strengths: "Founder communities · MSME networks · Live Q&A · Kannada & English",
  },
  {
    n: "02",
    eyebrow: "WORKSHOPS",
    title: "Hands-on workshops.",
    body: "90-minute working sessions where owners leave with something running — a content system, a lead list, an automated follow-up.",
    strengths: "Business communities · Corporate teams · Colleges & schools · Take-home playbooks",
  },
  {
    n: "03",
    eyebrow: "IN THE MAKING",
    title: "Courses for business owners.",
    body: "We’re building courses around AI for business — practical, step-by-step and made for founders and MSME owners. More to share soon.",
    strengths: "Founders & MSMEs · Practical, step-by-step · Coming soon",
  },
];

/* ---------- 04 / How I work (accordion) ---------- */
export const EXPERTISE = [
  {
    eyebrow: "01 / CONTENT & AI EDUCATION",
    title: "Make complexity click.",
    body: "I find what’s new in AI, test it, and explain it in the language people think in. Short-form first, built for reach — made to be used, not just watched.",
    strengths: "Kannada AI content · Tool breakdowns · Prompting · Scripting & editing · Community building",
    path: ["Find what matters", "Test it for real", "Explain it simply"],
  },
  {
    eyebrow: "02 / AI FOR BUSINESS",
    title: "Put AI to work.",
    body: "I start from the owner’s real problem — leads, follow-ups, content time — and build the smallest AI system that fixes it.",
    strengths: "Webinars · Workshops · Courses (in the making) · AI video ads · Automation for MSMEs",
    path: ["Hear the pain", "Design the workflow", "Teach it to stick"],
  },
  {
    eyebrow: "03 / CLOUD, DEVOPS & MLOPS",
    title: "Build it to last.",
    body: "Four years of shipping and running production infrastructure — and now extending that into the pipelines that train, deploy and watch ML models.",
    strengths: "AWS · Kubernetes · Docker · Terraform · Jenkins CI/CD · Python · MLOps (learning)",
    path: ["Automate the build", "Ship it safely", "Watch it in production"],
  },
];

/* ---------- 05 / Impact ---------- */
export const IMPACT = {
  lead: { value: 3, suffix: "M+", title: ["Average monthly views.", "In Kannada."], body: "Real people learning AI in their own language — and using it the next day." },
  pair: [
    { value: 45.7, decimals: 1, suffix: "K", title: "Followers on Instagram", body: "Grown organically on @ai.with.vi_ — no paid promotion, just useful content, every day." },
    { value: 30, suffix: "K+", title: "Followers in three months", body: "From a fresh page in January 2026 to a verified, engaged Kannada AI community." },
  ],
  milestones: [
    { year: "2021", bold: "Engineer by training.", text: "BE in Mechanical Engineering from PES University — then straight into cloud." },
    { year: "2022", bold: "Into production.", text: "Infosys — AWS, Docker and Kubernetes for enterprise banking platforms. Senior System Engineer by 2024." },
    { year: "2025", bold: "Consulting.", text: "Consultant at Capgemini — cloud & DevOps across enterprise engagements." },
    { year: "2026", bold: "A voice, and a studio.", text: "Started @ai.with.vi_ in January, founded VV Labs, began teaching business communities." },
  ],
};

/* ---------- 06 / Content — real videos from the YouTube channel ---------- */
export const FILMS = [
  { id: "YlwSl92_98M", cat: "chatgpt", title: "ChatGPT Astra, explained.", sub: "ChatGPT Astra explained in Kannada" },
  { id: "nHfqSgF8M2M", cat: "claude", title: "Claude’s secret codes.", sub: "Claude secret codes explained" },
  { id: "-LoayzAWPRI", cat: "creative", title: "Kantara, recreated with AI.", sub: "Made in Seedance 2.0" },
  { id: "2qx85H72hWU", cat: "creative", title: "The childhood trend.", sub: "How to create the trending image & video" },
  { id: "ZyQt1b3P-zQ", cat: "claude", title: "Claude Design is here.", sub: "Build a website prototype in minutes" },
  { id: "NFmt5mEEEFc", cat: "chatgpt", title: "Astra projects.", sub: "ChatGPT Astra’s projects explained in Kannada" },
];

export const FILM_FILTERS = [
  { key: "all", label: "All films" },
  { key: "claude", label: "Claude" },
  { key: "chatgpt", label: "ChatGPT" },
  { key: "creative", label: "Creative AI" },
];

export const SOCIAL = [
  {
    platform: "instagram",
    eyebrow: "INSTAGRAM / @ai.with.vi_",
    title: ["Daily AI.", "In Kannada."],
    body: "Updates, tool breakdowns and workflows — every day. Learn, earn, stay ahead.",
    action: "Follow on Instagram",
    href: INSTAGRAM,
  },
  {
    platform: "youtube",
    eyebrow: "YOUTUBE / @ai.with.vinod985",
    title: ["Go deeper.", "On YouTube."],
    body: "Longer explainers and the shorts archive — Claude, ChatGPT, Gemini and creative AI.",
    action: "Watch on YouTube",
    href: YOUTUBE,
  },
];

/* ---------- 07 / MLOps — learning in public ---------- */
// status: "done" | "now" | "next"  — update as you progress.
export const MLOPS_PIPELINE = ["Data", "Train", "Track", "Package", "Deploy", "Monitor"];

export const MLOPS_TRACK = [
  { status: "done", phase: "FOUNDATION", title: "DevOps that already runs in production", items: "Docker · Kubernetes · Terraform · Jenkins · AWS EKS/ECR · Trivy & SonarQube" },
  { status: "now", phase: "LEARNING NOW", title: "Experiments, data & reproducibility", items: "MLflow tracking & registry · DVC data versioning · ML pipelines in Python" },
  { status: "now", phase: "LEARNING NOW", title: "CI/CD for models", items: "Automated training & evaluation · containerised model serving · GitHub Actions / Jenkins for ML" },
  { status: "next", phase: "NEXT", title: "Serving, monitoring & LLMOps", items: "Kubeflow / KServe on Kubernetes · drift & performance monitoring · LLM evaluation and guardrails" },
];

/* ---------- 08 / Community & speaking ---------- */
export const TOPICS = [
  "AI for small business",
  "AI tools in Kannada",
  "Prompting that works",
  "AI video & ads",
  "Automation for MSMEs",
  "Cloud & DevOps careers",
];

export const COMMUNITY = [
  { small: "BUSINESS COMMUNITIES / WEBINARS & WORKSHOPS", title: "Founder & MSME business communities", href: "#business" },
  { small: "BRAND COLLABORATION / 2026", title: "Bengaluru Tech Summit 2026", href: INSTAGRAM },
  { small: "KANNADA AI COMMUNITY / ONGOING", title: "Daily updates, Q&As & open DMs", href: INSTAGRAM },
];

export const JOURNEY = [
  { year: "2021", title: "Learning to engineer.", body: "Graduated in Mechanical Engineering from PES University, Bengaluru — and chose cloud." },
  { year: "2022", title: "Learning to ship.", body: "Infosys: AWS, Docker, Kubernetes, Terraform and Jenkins pipelines for enterprise platforms." },
  { year: "2026", title: "Learning to explain.", body: "@ai.with.vi_ and VV Labs — AI in Kannada, for people and for businesses." },
  { year: "NEXT", title: "Learning to scale models.", body: "MLOps, more founders trained, and AI that runs real parts of real businesses." },
];
