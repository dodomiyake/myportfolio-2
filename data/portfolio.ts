export const portfolio = {
  name: "Oluwadamilola Ajayi",
  role: "Full-Stack Software Developer",
  headline: "Building thoughtful digital products from interface to infrastructure.",
  bio: "My approach starts with understanding the problem before choosing the technology. I study the users, goals, requirements, and constraints, then transform complex ideas into clear, manageable systems. I work iteratively—planning, building, testing, gathering feedback, and improving until the product delivers meaningful value.",
  email: "oluwadamilola.william@gmail.com",
  location: "United Kingdom · Available remotely",
  experienceYears: "4+",
  focus: "Product engineering, AI-enabled workflows, and cross-platform experiences",
  social: { github: "https://github.com/dodomiyake/", linkedin: "https://www.linkedin.com/in/oluwadamilolaxajayi/" },
  cv: "/cv.pdf",
} as const;

export const expertise = [
  [
    "Understand",
    "I begin by understanding the problem, users, business goals, technical requirements, and constraints.",
  ],
  [
    "Structure",
    "I turn complex ideas into clear user flows, features, priorities, architecture, and manageable development stages.",
  ],
  [
    "Build",
    "I develop the most valuable functionality first using clean, reusable, and maintainable code.",
  ],
  [
    "Validate",
    "I test functionality, usability, accessibility, performance, and assumptions throughout development.",
  ],
  [
    "Improve",
    "I use feedback, testing results, and real-world usage to refine the product and guide what comes next.",
  ],
] as const;

export const skills = [
  { group: "Frontend", items: ["TypeScript · Core", "React · Production", "Next.js · Production"] },
  { group: "Backend", items: ["Node.js · Production", "REST APIs · Production", "Supabase · Production"] },
  { group: "Mobile", items: ["React Native · Production", "Expo · Production"] },
  { group: "Data", items: ["PostgreSQL · Production", "Data modelling · Core"] },
  { group: "Cloud + tooling", items: ["Git · Core", "Docker · Production", "Cloud platforms · Exploring"] },
] as const;

export const projects = [
  {
    id: "01",
    name: "FeyseFit",
    summary:
      "A cross-platform fashion workspace connecting designers with local and international clients from enquiry through delivery.",
    contribution:
      "Product design, full-stack engineering, authentication, database architecture, and client workflow development",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    impact:
      "Brings remote measurements, appointment management, project tracking, customer communication, and designer discovery into one coordinated workflow.",
    image: "/images/feysefitt.png",
    demo: "https://feysefit.vercel.app/",
    source: "https://github.com/dodomiyake/feysefit",
  },
  {
    id: "02",
    name: "RCCG FLT",
    summary:
      "A responsive church website created for RCCG FLT to present the ministry, share service information and events, and help members and visitors stay connected.",
    contribution:
      "Website design, frontend development, responsive implementation, and content architecture",
    stack: [
      "Frontend Development",
      "Responsive Web Design",
      "Content Management",
    ],
    impact:
      "Established a clear digital presence where visitors can learn about the church, view programmes and service details, and access important contact information.",
    image: "/images/rccglt.png",
    demo: "https://www.rccgglt.org/",
    source: "https://github.com/dodomiyake/rccg-Godslovetabernacle",
  },
  {
    id: "03",
    name: "ZenHaven",
    summary:
      "A full-stack e-commerce platform with responsive product browsing, persistent cart management, and secure online payments.",
    contribution:
      "Full-stack development, payment integration, state management, and cloud deployment",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "AWS",
    ],
    impact:
      "Delivered a complete shopping experience with persistent cart state, Stripe checkout, cloud-hosted services, and Amazon S3 media storage.",
    image: "/images/zenhaven.png",
    demo: "https://zenhaven-frontend.onrender.com/",
    source: "https://github.com/dodomiyake/zenhaven",
  },
  {
    id: "04",
    name: "Real-Time Chat Application",
    summary:
      "A real-time messaging platform supporting authenticated private conversations, group chats, and multimedia sharing.",
    contribution:
      "Full-stack engineering, authentication, real-time event handling, and responsive interface development",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    impact:
      "Enabled users to communicate through private and group conversations with typing indicators, timestamps, avatars, and real-time file sharing.",
    image: "/images/chitchatt.png",
    demo: "https://real-time-chat-app-1-ctof.onrender.com/",
    source: "https://github.com/dodomiyake/real-time-chat-app",
  },
  {
    id: "05",
    name: "YelpCamp",
    summary:
      "A full-stack campground discovery platform where users can browse, create, update, and review campground listings.",
    contribution:
      "Backend development, authentication, CRUD functionality, database integration, and responsive interface development",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Bootstrap",
    ],
    impact:
      "Delivered a complete listing platform with user authentication, protected routes, interactive maps, reviews, and full CRUD operations.",
    image: "/images/yelpcampp.png",
    demo: "https://yelpcamp-1bu3.onrender.com/",
    source: "https://github.com/dodomiyake/yelpcamp",
  },
] as const;

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    dates: "Jan 2022 — Present",
    text:
      "Design and build responsive full-stack web applications for independent, collaborative, and client-focused projects while working alongside my primary employment.",
    win:
      "Built applications including FeyseFit, an end-to-end fashion workspace for remote measurements, designer discovery, project tracking, appointments, and client communication.",
    tech:
      "Next.js · React · TypeScript · Node.js · Express · Supabase · MongoDB · AWS · Stripe",
  },
  {
    role: "FLT Operative — Reach Truck",
    company: "B&M Distribution Centre",
    dates: "Dec 2025 — Present",
    text:
      "Operate reach trucks to move, stack, and retrieve palletised goods from high-level racking while completing mandatory equipment and safety inspections.",
    win:
      "Promoted from Warehouse Operative, consistently meet daily operational targets, and support colleagues with safe and efficient stock movements.",
    tech:
      "Reach Truck · WMS · Barcode Scanners · Inventory Control",
  },
  {
    role: "Warehouse Operative",
    company: "B&M Distribution Centre",
    dates: "Aug 2024 — Nov 2025",
    text:
      "Picked and packed products accurately for store deliveries using voice-pick technology in a fast-paced distribution environment.",
    win:
      "Maintained required productivity and accuracy standards while supporting reliable, time-sensitive store fulfilment.",
    tech:
      "Voice Picking · Stock Handling · Order Fulfilment",
  },
  {
    role: "Web Developer",
    company: "100Devs",
    dates: "Jan 2022 — Jul 2024",
    text:
      "Developed full-stack web applications using React, Next.js, Node.js, Express, and MongoDB through collaborative and project-based development.",
    win:
      "Created reusable components and REST APIs that improved application performance by 20% and reduced defects during QA testing.",
    tech:
      "React · Next.js · Node.js · Express · MongoDB · AWS · Stripe",
  },
  {
    role: "Recycle Operative",
    company: "Sweeep Kuusakoski",
    dates: "Jan 2024 — Aug 2024",
    text:
      "Processed recyclable materials in a high-volume environment while following operational, quality, and workplace safety procedures.",
    win:
      "Reduced contamination rates by 10% and exceeded production targets by 12%.",
    tech:
      "Quality Control · Safety Procedures · Production Operations",
  },
  {
    role: "Agile Project Manager",
    company: "TechSkilling by AMS",
    dates: "Jan 2024 — Mar 2024",
    text:
      "Led sprint planning, daily stand-ups, and retrospectives while coordinating MVP delivery under tight deadlines.",
    win:
      "Improved team coordination and workflow efficiency through structured Agile ceremonies and clearly defined sprint priorities.",
    tech:
      "Agile · Scrum · Sprint Planning · MVP Delivery",
  },
  {
    role: "Deputy Manager",
    company: "VFS Global",
    dates: "Jan 2018 — Sep 2023",
    text:
      "Managed visa application operations, supported staff development, and improved customer-service processes.",
    win:
      "Led training initiatives that increased value-added-service target achievement by 35%.",
    tech:
      "Team Leadership · Process Improvement · Training · Customer Service",
  },
] as const;

export const process = ["Discover", "Plan", "Design", "Build", "Test", "Deploy", "Improve"] as const;
