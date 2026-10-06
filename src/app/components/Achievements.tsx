import { motion } from "motion/react";
import { Trophy, Target, Shield, Crown, Medal } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: typeof Trophy | typeof Crown;
  highlight: boolean;
  images: string[];
  note: string;
}

export function Achievements() {
  const publicImage = (fileName: string) => {
    const base =
      (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env
        ?.BASE_URL || "/";
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;
    return `${normalizedBase}${encodeURIComponent(fileName)}`;
  };

  const featuredChampion = {
    title: "STI Ormoc CodeFest 2026",
    description: "Champion",
    year: "2026",
    icon: Crown,
    image: "CODEFEST 2026 CHAMPION.jpg",
  };

  const achievements: Achievement[] = [
    {
      title: "STI Bacolod Cluster CodeFest 2026",
      description: "2nd Runner Up",
      year: "2026",
      icon: Trophy,
      highlight: true,
      images: [
        "CODEFEST 2026 cluster 2nd runner up.jpg",
        "CODEFEST 2026 cluster 2nd runner up2.jpg",
        "CODEFEST 2026 cluster 2nd runner up3.jpg",
      ],
      note: "3 event snapshots",
    },
    {
      title: "PayTaca BCH Hackathon",
      description: "Top 4 finalist and ₱5,000 Best UI/UX Award recipient",
      year: "2026",
      icon: Trophy,
      highlight: true,
      images: ["PayTaca BCH Hackathon 1.jpg", "PayTaca BCH Hackathon 2.jpg"],
      note: "₱5,000 Best UI/UX Award · 2 event snapshots",
    },

    {
      title: "Byte Forward Competition",
      description:
        "STI College Ormoc representative - Placed among top 10 from 60+ schools",
      year: "2025",
      icon: Trophy,
      highlight: true,
      images: [
        "Byte Forward Competition.jpg",
        "Byte Forward Competition2.jpg",
        "Byte Forward Competition stage.jpg",
      ],
      note: "3 event snapshots",
    },
    {
      title: "Philippine Military Cyber Defense",
      description:
        "Top 10 placement among 21+ schools in cyber defense exercise",
      year: "2025",
      icon: Shield,
      highlight: true,
      images: [
        "Philippine Military Cyber Defense.jpg",
        "Philippine Military Cyber Defense cert.jpg",
        "Philippine Military Cyber Defense pos.jpg",
      ],
      note: "3 event snapshots",
    },
    {
      title: "LGU Ormoc Business Plan",
      description:
        "Top 2 for PAKYAW ride-hailing app prototype - STI Ormoc representative",
      year: "2025",
      icon: Target,
      highlight: true,
      images: [
        "PAKYAW_IMG1.jpg",
        "PAKYAW_IMG2.jpg",
        "PAKYAW_IMG3.jpg",
        "PAKYAW_IMG5.jpg",
        "PAKYAW_IMG6.jpg",
      ],
      note: "5 event snapshots",
    },
    {
      title: "EVCO Competition",
      description: "STI College Ormoc representative - Participated",
      year: "2024",
      icon: Trophy,
      highlight: false,
      images: ["EVCO Competition.jpg", "EVCO Competition2.jpg"],
      note: "2 event snapshots",
    },
  ];

  const codeFestPlacements = [
    {
      title: "STI Ormoc CodeFest 2026",
      result: "Champion",
      year: "2026",
      featured: true,
    },
    {
      title: "STI Bacolod Cluster CodeFest 2026",
      result: "2nd Runner Up",
      year: "2026",
      featured: false,
    },
    {
      title: "STI College CodeFest September 2026",
      result: "2nd Runner Up",
      year: "2026",
      featured: false,
    },
    {
      title: "STI College CodeFest 2025",
      result: "2nd Runner Up",
      year: "2025",
      featured: false,
    },
    {
      title: "STI College CodeFest 2024",
      result: "1st Runner Up",
      year: "2024",
      featured: false,
    },
    {
      title: "STI College CodeFest 2023",
      result: "2nd Runner Up",
      year: "2023",
      featured: false,
    },
  ];

  const FeaturedIcon = featuredChampion.icon;

  const [activeSlides, setActiveSlides] = useState<Record<string, number>>(() =>
    achievements.reduce(
      (state, achievement) => {
        state[achievement.title] = 0;
        return state;
      },
      {} as Record<string, number>,
    ),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlides((previous) => {
        const next = { ...previous };

        achievements.forEach((achievement) => {
          if (achievement.images.length <= 1) {
            next[achievement.title] = 0;
            return;
          }

          const currentIndex = previous[achievement.title] ?? 0;
          next[achievement.title] =
            (currentIndex + 1) % achievement.images.length;
        });

        return next;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const setSlide = (title: string, index: number) => {
    setActiveSlides((previous) => ({
      ...previous,
      [title]: index,
    }));
  };

  const nextSlide = (achievement: Achievement) => {
    if (achievement.images.length <= 1) {
      return;
    }

    setActiveSlides((previous) => {
      const currentIndex = previous[achievement.title] ?? 0;
      return {
        ...previous,
        [achievement.title]: (currentIndex + 1) % achievement.images.length,
      };
    });
  };

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/40 via-background to-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
            Achievements & Awards
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Recognition and competition placements
          </p>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-xl mb-8"
          >
            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              <div className="relative min-h-[280px] lg:min-h-[370px] overflow-hidden">
                <ImageWithFallback
                  src={publicImage(featuredChampion.image)}
                  alt="STI Ormoc CodeFest 2026 Champion"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-primary shadow">
                  <Crown size={16} />
                  Champion Highlight
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-primary/5 via-card to-amber-100/40">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                    {featuredChampion.year}
                  </span>
                  <FeaturedIcon className="text-primary" size={30} />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                    {featuredChampion.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {featuredChampion.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Placement
                    </p>
                    <p className="font-semibold text-primary">Champion</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Event
                    </p>
                    <p className="font-semibold text-primary">CodeFest 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const activeIndex = activeSlides[achievement.title] ?? 0;
              const mainImage =
                achievement.images[activeIndex] ?? achievement.images[0];

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-2xl border bg-card/90 shadow-sm hover:shadow-xl transition-all ${
                    achievement.highlight
                      ? "border-primary/40"
                      : "border-border"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {achievement.images.length > 0 ? (
                      <>
                        <motion.button
                          type="button"
                          onClick={() => nextSlide(achievement)}
                          className="absolute inset-0 block cursor-pointer"
                          whileTap={{ scale: 0.995 }}
                          aria-label={`Show next ${achievement.title} image`}
                        >
                          <motion.div
                            key={`${achievement.title}-${activeIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            <ImageWithFallback
                              src={publicImage(mainImage)}
                              alt={`${achievement.title} main snapshot`}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </motion.div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                        </motion.button>

                        {achievement.images.length > 1 && (
                          <div className="absolute right-3 bottom-3 z-20 flex gap-1.5">
                            {achievement.images.map((image, imageIndex) => (
                              <button
                                key={image}
                                type="button"
                                onClick={() =>
                                  setSlide(achievement.title, imageIndex)
                                }
                                className={`h-10 w-14 overflow-hidden rounded-md border object-cover shadow transition-all ${
                                  activeIndex === imageIndex
                                    ? "border-white ring-2 ring-primary"
                                    : "border-white/70 opacity-85 hover:opacity-100"
                                }`}
                                aria-label={`Show ${achievement.title} snapshot ${imageIndex + 1}`}
                              >
                                <ImageWithFallback
                                  src={publicImage(image)}
                                  alt={`${achievement.title} supporting snapshot ${imageIndex + 1}`}
                                  className="h-full w-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 via-accent to-amber-100/70">
                        <div className="text-center">
                          <Icon
                            className="mx-auto mb-3 text-primary"
                            size={42}
                          />
                          <p className="font-semibold text-primary">Top 6</p>
                          <p className="text-sm text-muted-foreground">
                            Best UI/UX Award
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full bg-background/95 px-3 py-1.5">
                      <Icon
                        size={16}
                        className={
                          achievement.highlight
                            ? "text-primary"
                            : "text-foreground"
                        }
                      />
                      <span className="text-xs font-semibold text-foreground">
                        {achievement.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    <p className="text-xs font-medium text-primary/80 tracking-wide uppercase">
                      {achievement.note}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border border-border bg-card/85 p-6 sm:p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-full bg-primary text-primary-foreground p-2">
                <Medal size={18} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">
                CodeFest Track Record
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {codeFestPlacements.map((placement) => (
                <div
                  key={placement.title}
                  className={`rounded-xl border p-4 transition-colors ${
                    placement.featured
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background"
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-wide mb-2 ${
                      placement.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {placement.year}
                  </p>
                  <p className="font-semibold mb-1">{placement.result}</p>
                  <p
                    className={`text-sm ${
                      placement.featured
                        ? "text-primary-foreground/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {placement.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
