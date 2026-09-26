export const profile = {
  name: "Aditya Mehra",
  initials: "AM",
  headline: "B.Tech CSE — Final Year",
  batch: "Batch of 2025 · IIIT Dehradun",
  connections: 142,
  profileViews: 38,
  completion: 70,
};

export const navItems = [
  { label: "Home Feed", icon: "home" as const },
  { label: "My Profile", icon: "user" as const },
  { label: "Alumni Directory", icon: "directory" as const },
  { label: "Jobs & Internships", icon: "jobs" as const },
  { label: "Messages", icon: "messages" as const, badge: 2 },
  { label: "Mentorship", icon: "mentorship" as const, badge: 3 },
  { label: "Events & Reunions", icon: "events" as const },
  { label: "Alerts", icon: "alerts" as const, badge: 5 },
  { label: "Alumni Map", icon: "map" as const },
  { label: "Settings", icon: "settings" as const },
];

export type Post = {
  id: string;
  author: string;
  initials: string;
  verified: boolean;
  batch: string;
  role: string;
  time: string;
  visibility: string;
  body: { text: string; strong?: boolean }[];
  hashtags: string[];
  likes: number;
  comments: number;
  reposts: number;
  saves: number;
  banner?: string;
  accent: "primary" | "violet" | "cyan";
};

export const posts: Post[] = [
  {
    id: "p1",
    author: "Rahul Kapoor",
    initials: "RK",
    verified: true,
    batch: "Batch 2019",
    role: "Software Engineer @ Google",
    time: "2h",
    visibility: "Public",
    body: [
      { text: "Excited to share that we're hiring " },
      { text: "SDE-1 engineers at Google Bangalore!", strong: true },
      {
        text: " Specifically looking for fresh grads from our college network.\n\nIf you're interested, DM me your resume and I'll put in a referral. This is exactly why AlumSync exists — giving back to your community!",
      },
    ],
    hashtags: ["#Hiring", "#Google", "#SDE1", "#AlumSync"],
    likes: 84,
    comments: 23,
    reposts: 12,
    saves: 6,
    accent: "primary",
  },
  {
    id: "p2",
    author: "Priya Sharma",
    initials: "PS",
    verified: true,
    batch: "Batch 2018",
    role: "Product Manager @ Razorpay",
    time: "5h",
    visibility: "Public",
    body: [
      { text: "Shipped it. " },
      { text: "Razorpay Dashboard v3", strong: true },
      {
        text: " is live after nine months of research, 40+ user interviews and a full design-system rebuild. Proud of this team.",
      },
    ],
    banner: "Product launch announcement — Razorpay Dashboard v3",
    hashtags: ["#ProductLaunch", "#Fintech", "#Razorpay"],
    likes: 212,
    comments: 41,
    reposts: 28,
    saves: 19,
    accent: "violet",
  },
  {
    id: "p3",
    author: "Ananya Iyer",
    initials: "AI",
    verified: false,
    batch: "Batch 2021",
    role: "ML Engineer @ Nvidia",
    time: "8h",
    visibility: "Alumni only",
    body: [
      { text: "Opening " },
      { text: "5 mentorship slots", strong: true },
      {
        text: " this month for juniors preparing for ML interviews — resume review, one mock round and a study plan. Comment below and I'll reach out.",
      },
    ],
    hashtags: ["#Mentorship", "#MachineLearning", "#Careers"],
    likes: 137,
    comments: 56,
    reposts: 9,
    saves: 33,
    accent: "cyan",
  },
];

export const onlineCount = 47;

export const suggestions = [
  { name: "Neha Joshi", initials: "NJ", role: "Data Scientist @ Meta", accent: "warning" },
  { name: "Karan Malhotra", initials: "KM", role: "SDE-2 @ Amazon", accent: "primary" },
  { name: "Riya Patel", initials: "RP", role: "UX Designer @ Figma", accent: "violet" },
  { name: "Siddharth Das", initials: "SD", role: "ML Engineer @ OpenAI", accent: "success" },
  { name: "Arjun Rao", initials: "AR", role: "Founder @ StartupX", accent: "cyan" },
] as const;

export const events = [
  { day: "15", month: "APR", title: "Annual Alumni Gala", meta: "Campus Auditorium · 6 PM" },
  { day: "22", month: "APR", title: "Startup Pitch Night", meta: "Virtual · 7 PM IST" },
  { day: "3", month: "MAY", title: "Tech Talk: AI in Fintech", meta: "LH-101 · 3 PM" },
];

export const trending = [
  { tag: "#PlacementSeason2025", posts: "1.2K posts" },
  { tag: "#AlumniGala", posts: "864 posts" },
  { tag: "#ReferralThread", posts: "512 posts" },
  { tag: "#OpenToMentor", posts: "377 posts" },
];

export const onlineNow = ["AM", "RK", "PS", "NJ", "KM", "AR"];
