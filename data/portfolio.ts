export const portfolio = {
  name: "Oluwadamilola Ajayi",
  role: "Full-Stack Software Developer",
  headline: "Building thoughtful digital products from interface to infrastructure.",
  bio: "My approach starts with understanding the problem before choosing the technology. I study the users, goals, requirements, and constraints, then transform complex ideas into clear, manageable systems. I work iteratively—planning, building, testing, gathering feedback, and improving until the product delivers meaningful value.",
  email: "oluwadamilola.william@gmail.com",
  location: "United Kingdom · Available remotely",
  experienceYears: "4+",
  focus: "Product engineering, CRM integrations, workflow automation, and cross-platform experiences",
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
  { group: "Data", items: ["PostgreSQL · Production", "Python · Applied", "Data modelling · Core"] },
  { group: "CRM + automation", items: ["HubSpot CRM · Applied", "API integrations · Production", "Workflow automation · Applied"] },
  { group: "Cloud + tooling", items: ["Git · Core", "GitHub Actions · Production", "Vercel · Production"] },
] as const;

export const projects = [
  {
    id: "01",
    name: "Scorecast",
    status: "Live · Data product",
    summary:
      "A football match prediction platform that prices every fixture across Europe's top leagues with a statistical model and publishes its own track record.",
    contribution:
      "Statistical modelling, data pipeline, automated testing, CI/CD, and front-end design",
    stack: ["Python", "NumPy", "SciPy", "scikit-learn", "JavaScript", "GitHub Actions", "Vercel"],
    impact:
      "A Dixon-Coles model fitted on real results produces predicted scorelines, outcome probabilities and tips priced against bookmaker odds, validated on out-of-sample predictions. A daily GitHub Actions pipeline fetches fixtures, odds and results, rebuilds the site and deploys it automatically.",
    image: "/images/scorecast.png",
    demo: "https://scorecast-lemon.vercel.app/",
    source: "https://github.com/dodomiyake/scorecast",
  },
  {
    id: "02",
    name: "Feyse Clothing Labels",
    status: "Live · Client platform",
    summary:
      "A CRM-enabled order operations platform for a clothing-label business, coordinating customer enquiries, quotations, payments, production, and dispatch.",
    contribution:
      "Product design, full-stack engineering, HubSpot CRM integration, data modelling, workflow automation, and production deployment",
    stack: ["Next.js", "TypeScript", "Supabase", "HubSpot CRM", "Resend", "Zod", "Vercel"],
    impact:
      "Turns WhatsApp-led enquiries into structured records and syncs customers and enquiries to HubSpot as contacts and deals through a durable outbox with idempotent retries, so a HubSpot outage never blocks an order. Row-level security on every table, server-generated quote and invoice PDFs, and a full audit trail.",
    image: "/images/feyse-clothing-labels.png",
    demo: "https://feyseclothinglabel.vercel.app/",
    source: "https://github.com/dodomiyake/feyseclothinglabel",
  },
  {
    id: "03",
    name: "RentCheck",
    status: "Live · Consumer tool",
    summary:
      "A mobile-first property research platform that helps renters in England investigate a home and estimate its true monthly cost before committing.",
    contribution:
      "Product design, full-stack development, government API integration, payments, data validation, and error handling",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Zod", "Vercel"],
    impact:
      "Combines EPC ratings, police street-level crime data, Environment Agency flood warnings, food-hygiene ratings and Companies House records with a true-cost calculator. Each source fails independently so one outage never breaks a report, and paid plans run on Stripe checkout and webhooks.",
    image: "/images/rentcheck.png",
    demo: "https://rentcheck-three.vercel.app/",
    source: "",
  },
  {
    id: "04",
    name: "FeyseFit",
    status: "Live · Marketplace",
    summary:
      "A made-to-measure fashion platform connecting clients with designers in the UK, Africa and the diaspora, from enquiry through delivery.",
    contribution:
      "Product design, full-stack engineering, authentication, database architecture, and client workflow development",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Tailwind CSS"],
    impact:
      "Brings remote measurements, bookings, project tracking and a designer marketplace with admin approvals into one mobile-first workflow, backed by a versioned REST API.",
    image: "/images/feysefitt.png",
    demo: "https://feysefit.vercel.app/",
    source: "https://github.com/dodomiyake/feysefit",
  },
  {
    id: "05",
    name: "Metheues Clothings",
    status: "Live preview · E-commerce",
    summary:
      "A T-shirt-first fashion label's storefront and admin, designed as one system in Figma and built to match it — now live as a preview.",
    contribution:
      "Design system, product design, database design, and full-stack engineering",
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Resend", "Figma"],
    impact:
      "A 64-screen Figma design system with 9 email templates. Business rules live in PostgreSQL rather than app code: stock can never go negative, idempotent Stripe webhooks decrement stock exactly once, and prices are only ever calculated on the server.",
    image: "/images/metheues.png",
    demo: "https://metheuesclothing.vercel.app/",
    source: "https://github.com/dodomiyake/Metheuesclothing",
  },
  {
    id: "06",
    name: "Ohun",
    status: "In development · Messaging",
    summary:
      "An accessible, private real-time messaging app for friends and family, on web and mobile from one TypeScript codebase.",
    contribution:
      "Architecture, monorepo setup, real-time backend, web and mobile clients, and automated testing",
    stack: ["TypeScript", "React", "Vite (PWA)", "React Native", "Expo", "Express", "Socket.IO", "Zod", "Playwright"],
    impact:
      "A monorepo sharing Zod contracts, design tokens and an API client across web and mobile, with lint, type-check, unit and Playwright end-to-end tests on every change.",
    image: "/images/ohun.png",
    demo: "",
    source: "https://github.com/dodomiyake/Ohun",
  },
  {
    id: "07",
    name: "RCCG God's Love Tabernacle",
    status: "Live · Client website",
    summary:
      "A responsive website for a UK church, presenting the ministry, service times, programmes and events for members and first-time visitors.",
    contribution:
      "Website design, frontend development, responsive implementation, and content architecture",
    stack: ["Frontend Development", "Responsive Web Design", "Content Architecture"],
    impact:
      "Gave the church a clear digital presence where visitors can learn about the ministry, see service details and programmes, and find contact information.",
    image: "/images/rccglt.png",
    demo: "https://www.rccgglt.org/",
    source: "https://github.com/dodomiyake/rccg-Godslovetabernacle",
  },
  {
    id: "08",
    name: "Real-Time Chat Application",
    status: "Earlier project · Demo may take ~30s to wake",
    summary:
      "A real-time messaging platform supporting authenticated private conversations, group chats, and multimedia sharing.",
    contribution:
      "Full-stack engineering, authentication, real-time event handling, and responsive interface development",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    impact:
      "Private and group conversations with typing indicators, timestamps, avatars, and real-time file sharing.",
    image: "/images/chitchatt.png",
    demo: "https://real-time-chat-app-1-ctof.onrender.com/",
    source: "https://github.com/dodomiyake/real-time-chat-app",
  },
  {
    id: "09",
    name: "YelpCamp",
    status: "Earlier project · Demo may take ~30s to wake",
    summary:
      "A full-stack campground discovery platform where users can browse, create, update, and review campground listings.",
    contribution:
      "Backend development, authentication, CRUD functionality, database integration, and responsive interface development",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "Bootstrap"],
    impact:
      "A complete listing platform with user authentication, protected routes, interactive maps, reviews, and full CRUD operations.",
    image: "/images/yelpcampp.png",
    demo: "https://yelpcamp-1bu3.onrender.com/",
    source: "https://github.com/dodomiyake/yelpcamp",
  },
] as const;

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    dates: "Aug 2024 — Present",
    text:
      "Deliver full-stack web products end to end, from requirements and UI design through database schema, APIs, testing and deployment, alongside my primary employment.",
    win:
      "Shipped four live products — Scorecast, Feyse Clothing Labels, RentCheck and FeyseFit — with Metheues Clothings and Ohun in development, integrating HubSpot CRM, Stripe, Resend and UK government open-data APIs.",
    tech:
      "Next.js · React · TypeScript · Python · Supabase · PostgreSQL · Stripe · HubSpot · GitHub Actions · Vercel",
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
    role: "Software Engineering Programme",
    company: "100Devs (part-time)",
    dates: "Jan 2022 — Jul 2024",
    text:
      "Completed an intensive full-stack programme alongside full-time work, building and deploying React, Node.js, Express and MongoDB applications.",
    win:
      "Built projects with JWT authentication and Stripe payments, deployed on AWS Amplify with assets on Amazon S3, and worked in Agile teams on planning, code review and debugging.",
    tech:
      "React · Node.js · Express · MongoDB · JWT · Stripe · AWS",
  },
  {
    role: "Recycling Operative",
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
