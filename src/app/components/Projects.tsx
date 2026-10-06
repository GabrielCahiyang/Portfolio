import { motion } from "motion/react";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  platform: string;
  githubLink?: string;
  repositories?: { label: string; url: string }[];
  highlight?: boolean;
}

export function Projects() {
  const featuredProjects: Project[] = [
    {
      title: "ElderEase",
      description:
        "Elder Care Management System - Capstone project for 4th year CompSci students in Pasig City",
      tech: [
        "React",
        "Vite",
        "Tailwind",
        "Firebase",
        "Face-API",
        "Tesseract.js",
      ],
      features: [
        "Dual-portal system for seniors/families and caregivers",
        "Real-time data syncing via Firebase",
        "Face recognition for identity verification",
        "OCR document scanning",
        "Care service tracking",
      ],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/ElderEase-Admin",
      highlight: true,
    },
    {
      title: "PAKYAW",
      description:
        "Ride-hailing app to address Ormoc City's congested terminal issues",
      tech: ["Mobile Development", "Geolocation", "Real-time Matching"],
      features: [
        "Top 2 in LGU Ormoc Business Plan Prototype",
        "Designed to reduce terminal congestion",
        "Real-time ride matching",
        "Location-based services",
      ],
      platform: "Mobile",
      githubLink: "https://github.com/Rivaly-Kun/PakYaw_Mobile",
      highlight: true,
    },

    {
      title: "eFlow AI Operations Server",
      description:
        "A secure local AI inference backend and operations console powering eFlow's municipal governance workflows.",
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
      features: [
        "GPU-accelerated local GGUF model inference and hot-swapping",
        "Live telemetry for GPU, VRAM, system health, queues, and logs",
        "JWT-protected gateway with automatic Cloudflare Tunnel publishing",
        "Laya governance routing and PyGAD process optimization",
        "Polygon audit-ledger anchoring for governance events",
      ],
      platform: "Web",
      githubLink: "https://github.com/GabrielCahiyang/eFlow-e-Governance-Server",
      highlight: true,
    },
    {
      title: "AI Gemini Financial Manager",
      description:
        "Personal finance management enhanced with AI assistant and mobile support",
      tech: ["React", "Vite", "Tailwind", "Firebase", "Gemini AI"],
      features: [
        "Dashboard with transaction tracking",
        "Budget and bill management",
        "Goals and investment monitoring",
        "AI-powered spending coach",
        "Cross-platform (Web + Mobile)",
      ],
      platform: "Web + Mobile",
      githubLink: "https://github.com/Rivaly-Kun/AI-Gemini-Financial-Manager",
      highlight: true,
    },
    {
      title: "eFlow e-Governance",
      description:
        "An enterprise-grade e-governance and work-management platform for local government units, combining governed project delivery, fiscal controls, and private local AI assistance.",
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
      features: [
        "Role-based municipal workspaces and governed task lifecycles",
        "Inter-department proposal collaboration and fiscal tracking",
        "Private GPU-accelerated DeepSeek AI with a secure JWT gateway",
        "Workforce optimization and Polygon audit-ledger anchoring",
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
      highlight: true,
    },
    {
      title: "AI Study Buddy",
      description:
        "Comprehensive study application with AI assistance and multiple learning modes",
      tech: ["C# WinForms", "SQLite", "Vertex AI"],
      features: [
        "PDF loading and parsing",
        "Quiz mode with AI-generated questions",
        "Focus mode (15 min break + 30 min study)",
        "Cram mode with topic summaries",
        "AI text-to-speech",
      ],
      platform: "Windows",
      githubLink: "https://github.com/Rivaly-Kun/AI-Study-Buddy",
      highlight: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A selection of my best full-stack applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-lg p-6 hover:shadow-xl transition-shadow ${
                  project.highlight
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground px-2 py-1 bg-accent rounded">
                      {project.platform}
                    </span>
                  </div>
                  <div className="flex gap-2">
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

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
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
