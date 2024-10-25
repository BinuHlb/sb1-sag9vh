import { Job } from "./types";

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Join our team to build amazing user experiences with modern web technologies. You'll be working on high-impact projects that serve millions of users.",
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Experience with state management (Redux, MobX, etc.)",
      "Strong understanding of web performance optimization",
      "Experience with responsive design and cross-browser compatibility",
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work hours and location",
      "Professional development budget",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    description: "Help us scale our distributed systems and build robust backend services that power our platform.",
    requirements: [
      "4+ years of backend development experience",
      "Proficiency in Node.js and TypeScript",
      "Experience with distributed systems and microservices",
      "Strong understanding of database design and optimization",
    ],
    benefits: [
      "Competitive compensation package",
      "Comprehensive healthcare coverage",
      "401(k) matching",
      "Remote work options",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Innovation Labs",
    location: "Remote",
    type: "Contract",
    salary: "$100k - $140k",
    description: "Work on cutting-edge projects using the latest technologies in web development.",
    requirements: [
      "3+ years of full stack development experience",
      "Proficiency in React and Node.js",
      "Experience with cloud platforms (AWS, GCP)",
      "Strong problem-solving skills",
    ],
    benefits: [
      "Flexible contract terms",
      "Remote-first culture",
      "Weekly team events",
      "Learning and development opportunities",
    ],
  },
];