import { motion } from "motion/react";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  platform: string;
  githubLink?: string;
  repositories?: { label: string; url: string }[];
}

export function AllProjects() {
  const allProjects: Project[] = [
    {
      title: "AttendIT",
      description:
        "QR-based attendance system with instructor approval workflow, live attendance monitor, and report exports. Includes section-scoped approvals, secure session QR tokens, and real-time Firebase updates for both instructor and student dashboards.",
      tech: ["JavaScript", "HTML", "CSS", "Firebase", "QR"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/AttendIT",
    },
    {
      title: "Hotel Management System",
      description:
        "A full hotel operations platform with separate Admin and Guest interfaces. Supports room booking, amenity request workflows, payment tracking, and real-time data updates via Firebase.",
      tech: ["JavaScript", "HTML", "CSS", "Firebase"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/Hotel-Management",
    },
    {
      title: "Lost & Found Management System",
      description:
        "Campus lost-and-found web app with role-based auth, item reporting, matching workflow, search/filter tools, and real-time sync. Includes admin controls, notifications, and responsive dashboard experience.",
      tech: ["JavaScript", "HTML", "CSS", "Firebase"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/Lost-And-Found-System",
    },
    {
      title: "ElderEase",
      description:
        "A dual-portal system for elderly care services, featuring a Client App for seniors/families and an Admin Dashboard for caregivers. Includes real-time data syncing via Firebase, face recognition (face-api) for identity verification, OCR document scanning (Tesseract.js), user profile management, and care service tracking.",
      tech: [
        "React",
        "Vite",
        "Tailwind",
        "Firebase",
        "Face-API",
        "Tesseract.js",
      ],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/ElderEase-Admin",
    },
    {
      title: "Accounte",
      description:
        "A React + Vite + Tailwind + Firebase app for a campus-style book marketplace. Students browse, buy, sell, chat, and manage profiles; admins run an inventory-backed store. Data is stored in Firebase Realtime Database, files in Firebase Storage, and auth via Firebase Auth.",
      tech: ["React", "Vite", "Firebase"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/Accounte-Admin",
    },
    {
      title: "AI Manga Translator",
      description:
        "A frame that auto translates text into English because most apps like this for manga are a paid service. An open source Gemini AI powered manga translation app.",
      tech: ["Android Java", "Gemini AI", "OCR"],
      platform: "Android",
      githubLink: "https://github.com/Rivaly-Kun?tab=repositories",
    },
    {
      title: "AI Gemini Assisted Financial Manager",
      description:
        "A React + Vite + Tailwind + Firebase app for personal finance management enhanced with an AI assistant. Users sign in, view a Dashboard, track Transactions, manage Budgets, pay Bills, set Goals, monitor Investments, and get personalized guidance from SpendingCoach and AIChat.",
      tech: ["React", "Vite", "Tailwind", "Firebase", "Gemini AI"],
      platform: "Web + Mobile",
      githubLink: "https://github.com/Rivaly-Kun/AI-Gemini-Financial-Manager",
    },
    {
      title: "AI Powered Study Buddy",
      description:
        "An AI study buddy that lets you load PDFs, have quiz modes, focus mode where it's a 15 mins chill time then 30 mins lock in study and AI text to speech, and then there's a cram mode where it gets all the topics, sub topics and contents and gives it all a short description.",
      tech: ["C# .NET WinForms", "SQLite", "Vertex AI"],
      platform: "Windows",
      githubLink: "https://github.com/Rivaly-Kun/AI-Study-Buddy",
    },
    {
      title: "AI Powered Financial Manager/Consultant",
      description:
        "An AI powered app that lets you set goals to save money, buy something, and consults you if you're over spending, or not gonna reach your goals what you have to cut down on.",
      tech: ["C# .NET WinForms", "SQLite", "Vertex AI"],
      platform: "Windows",
      githubLink: "https://github.com/Rivaly-Kun?tab=repositories",
    },
    {
      title: "eFlow e-Governance",
      description:
        "An enterprise-grade e-governance and LGU work-management platform for governed tasks, inter-department proposals, fiscal workflows, and private local AI assistance.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Supabase",
        "FastAPI",
        "Python",
        "Llama.cpp",
        "Polygon",
      ],
      platform: "Web",
      repositories: [
        {
          label: "Client",
          url: "https://github.com/GabrielCahiyang/eFlow-e-Governance-Client",
        },
        {
          label: "AI Server",
          url: "https://github.com/GabrielCahiyang/eFlow-e-Governance-Server",
        },
      ],
    },
    {
      title: "eFlow AI Operations Server",
      description:
        "A secure local AI inference backend and operations console for eFlow, with GPU model management, governance intelligence, and authenticated remote access.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "llama.cpp",
        "CUDA",
        "Supabase",
      ],
      platform: "Web",
      githubLink: "https://github.com/GabrielCahiyang/eFlow-e-Governance-Server",
    },
    {
      title: "Keitech School Student Admission System",
      description: "A student enrollment and record management system.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Electron",
        "SQLite",
        "Tesseract OCR",
      ],
      platform: "Desktop",
      githubLink: "https://github.com/Rivaly-Kun/KeitechAd-Electron",
    },
    {
      title: "ALL-IN-ONE STI",
      description:
        "A Facebook app but for the school you can like, message and comment on posts and see the announcements of the admins.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun?tab=repositories",
    },
    {
      title: "CourtReserveScheduling",
      description:
        "Court reservation system for booking sports courts via mobile and browser.",
      tech: ["Java (Android)", "HTML", "CSS", "JavaScript", "Firebase"],
      platform: "Android + Web",
      githubLink: "https://github.com/Rivaly-Kun/CourtReserveScheduling-Admin",
    },
    {
      title: "GovComplaintSystem",
      description:
        "A web platform for submitting and tracking public service complaints.",
      tech: ["SCSS", "CSS", "JavaScript", "HTML", "Firebase"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/GovComplaintSys-Admin",
    },
    {
      title: "TaskManager-Android",
      description:
        "A to-do list and task tracker with priority and due date features.",
      tech: ["Java (Android)", "SQLite"],
      platform: "Android",
      githubLink: "https://github.com/Rivaly-Kun/TaskManager-Android",
    },
    {
      title: "CarRentalSystem",
      description:
        "Manages car rentals with booking, return tracking, and listings.",
      tech: ["Java (Android)", "JavaScript", "HTML", "CSS", "Firebase"],
      platform: "Android + Web",
      githubLink: "https://github.com/Rivaly-Kun/CarRentalSystem-Admin",
    },
    {
      title: "Primeroast Bean",
      description:
        "An online food ordering and delivery system where users can browse menus, place orders, and have food delivered to their location. Includes a menu display, order cart, and real-time order tracking.",
      tech: [
        "Java (Android)",
        "CSS",
        "JavaScript",
        "HTML",
        "Python",
        "Firebase",
      ],
      platform: "Android + Web",
      githubLink: "https://github.com/Rivaly-Kun/PrimeRoastWebUser",
    },
    {
      title: "StudentSide_eams",
      description: "Front-end for a student management system.",
      tech: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/StudentSide_eams",
    },
    {
      title: "Supabase-QRApk-Cordova",
      description: "QR-based scanner app using Supabase backend.",
      tech: ["Java", "Cordova", "Objective-C", "JavaScript", "CSS", "Supabase"],
      platform: "Hybrid Android",
      githubLink: "https://github.com/Rivaly-Kun/Supabase-QRApk-Cordova",
    },
    {
      title: "Teacher_Scanner",
      description:
        "Scanner app tailored for teachers to capture attendance or IDs.",
      tech: ["JavaScript", "CSS", "HTML", "Cordova", "Supabase"],
      platform: "Cordova Android",
      githubLink: "https://github.com/Rivaly-Kun/Teacher_Scanner",
    },
    {
      title: "TradinGo-webpage",
      description:
        "A trading-based e-commerce website where users can offer goods for trade instead of traditional purchases.",
      tech: ["HTML", "JavaScript", "CSS", "SCSS", "Firebase"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/TradinGo-webpage",
    },
    {
      title: "Cellphone Shop Tracker",
      description: "Inventory tracker for cellphone sales or repairs.",
      tech: ["CSS", "HTML", "JavaScript", "SQLite"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/Cellphone_shop_tracker",
    },
    {
      title: "GeminiChatbot-JavaScript",
      description: "Simple chatbot interface powered by Gemini API.",
      tech: ["JavaScript", "HTML"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/GeminiChatbt-JavaScript",
    },
    {
      title: "GeminiAIChatbot Vaadin Framework",
      description: "Gemini-powered chatbot built with the Vaadin framework.",
      tech: ["TypeScript", "Java", "JavaScript", "HTML", "CSS"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/GeminiAIChatbot-Vaadin",
    },
    {
      title: "ChatGpt3.5-Vaadin Framework",
      description:
        "ChatGPT 3.5-based chatbot using Java (Vaadin) and frontend tech.",
      tech: ["Java", "JavaScript", "HTML", "CSS"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/ChatGpt3.5-Vaadin",
    },
    {
      title: "NardDB",
      description: "Basic CRUD database system for managing entries.",
      tech: ["Python", "JavaScript", "CSS", "HTML", "SQL"],
      platform: "Web + Python",
      githubLink: "https://github.com/Rivaly-Kun/NardDB-CRUD---Spyder-IDE",
    },
    {
      title: "ChatBot-GoogleSearchEngineAPI",
      description:
        "Chatbot that integrates Google Search Engine API for results.",
      tech: ["Java", "HTML", "CSS"],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/ChatBot-GoogleSearchEngineAPI",
    },
    {
      title: "PAKYAW",
      description:
        "Ride-hailing app to aid Ormoc City's congested terminal. Top 2 for Local Government Unit of Ormoc business plan prototype.",
      tech: ["Mobile Development", "Geolocation", "Real-time Matching"],
      platform: "Mobile",
      githubLink: "https://github.com/Rivaly-Kun/PakYaw_Mobile",
    },
    {
      title: "Sari-Fi",
      description:
        "A multi-role sari-sari store operations platform that brings together shopping, point of sale, supplier restocking, financing, payments, inventory, and audit trails in one workflow.",
      tech: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS"],
      platform: "Web",
      githubLink: "https://github.com/GabrielCahiyang/Sari-Fi",
    },
    {
      title: "PASADA",
      description:
        "A real-time ride-hailing prototype for Ormoc City with passenger, driver, and organizer workspaces plus BCH Chipnet escrow for fixed fare settlement and refunds.",
      tech: ["React", "TypeScript", "Firebase", "CashScript", "Bitcoin Cash"],
      platform: "Web",
      githubLink: "https://github.com/GabrielCahiyang/Pasada-v1",
    },
    {
      title: "BingoPlus Satoshi",
      description:
        "A provably fair Web3 social casino on Bitcoin Cash Chipnet featuring Dice, Slots, and Mines, with automated testnet deposits, secure wallets, and auditable game outcomes.",
      tech: ["React", "TypeScript", "Express", "Firebase", "CashScript", "Bitcoin Cash"],
      platform: "Web",
      githubLink: "https://github.com/GabrielCahiyang/BingoPlus-Satochi-BCH",
    },
  ];

  return (
    <section
      id="all-projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              All Projects
            </h2>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
              {allProjects.length}
            </span>
          </div>
          <p className="text-center text-muted-foreground mb-12">
            Complete portfolio of full-stack applications across multiple
            platforms
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-accent rounded">
                      {project.platform}
                    </span>
                  </div>
                  <div className="flex flex-shrink-0 gap-1">
                    {(project.repositories ??
                      (project.githubLink
                        ? [{ label: "View code", url: project.githubLink }]
                        : [])).map((repository) => (
                      <a
                        key={repository.url}
                        href={repository.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-accent rounded-full transition-colors"
                        aria-label={`View ${project.title} ${repository.label} repository`}
                        title={repository.label}
                      >
                        <Github size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
