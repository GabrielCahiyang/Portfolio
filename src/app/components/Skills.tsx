import { motion } from "motion/react";

interface SkillCategory {
  category: string;
  skills: string[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend Development",
      skills: [
        "React",
        "Vite",
        "Tailwind CSS",
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "SCSS",
      ],
    },
    {
      category: "Backend & Database",
      skills: ["Firebase", "Supabase", "SQLite", "MySQL", "Python", "Node.js"],
    },
    {
      category: "Mobile Development",
      skills: [
        "Android (Java)",
        "React Native",
        "Cordova",
        "Hybrid Apps",
        "Flutter",
        "Xamarin",
        "Kotlin",
      ],
    },
    {
      category: "Desktop Development",
      skills: ["C# .NET", "WinForms", "Electron Framework"],
    },
    {
      category: "AI Integration",
      skills: [
        "Gemini AI",
        "Vertex AI (Google)",
        "ChatGPT API",
        "OCR (Tesseract)",
        "Face-API",
        "Local LLMs (Llama3, Qwen2.5, DeepSeek-R1, Gemma3, Phi3, Ollama)",
        "Laya (System 1 decision engine)",
      ],
    },
    {
      category: "Tools & Frameworks",
      skills: [
        "Git",
        "Firebase Auth",
        "Firebase Storage",
        "Firestore",
        "Real-time Database",
        "Vaadin",
        "Blockchain (Polygon, BCH)",
        "PyGAD Process Mining",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent text-foreground rounded-full text-sm hover:bg-accent/80 transition-colors"
                    >
                      {skill}
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
