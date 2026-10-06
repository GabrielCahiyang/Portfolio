import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Facebook, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gabzcah@gmail.com",
      link: "mailto:gabzcah@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "09383309742",
      link: "tel:+639383309742",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ormoc City, Philippines",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Rivaly-Kun",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/Rival.d.orig",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gabriel-cahiyang-63224b306/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Let's collaborate on your next project
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="p-3 bg-primary text-primary-foreground rounded-full mb-3">
                      <Icon size={24} />
                    </div>
                    <h4 className="font-semibold mb-1">{item.label}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-center font-semibold mb-4">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent hover:bg-accent/80 rounded-full transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Ernst Livin Gabriel B. Cahiyang. All rights reserved.</p>
            <p className="mt-2">Full-Stack Developer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
