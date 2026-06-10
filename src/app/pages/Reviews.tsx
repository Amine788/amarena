import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Star, ExternalLink } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const reviews = [
  {
    name: "Sofia B.",
    date: "Décembre 2025",
    rating: 5,
    text: "Des glaces absolument fantastiques ! L'onctuosité de la pistache de Sicile est indépassable. Le cadre est tout simplement splendide et le service d'une délicatesse rare.",
    avatar: "S",
  },
  {
    name: "Karim A.",
    date: "Novembre 2025",
    rating: 5,
    text: "Le meilleur glacier d'Agadir, sans aucun doute. On sent que chaque ingrédient est sélectionné avec soin. Leur Noir Intense 72° avec le chocolat chaud est une pure merveille.",
    avatar: "K",
  },
  {
    name: "Marie L.",
    date: "Janvier 2026",
    rating: 5,
    text: "Une expérience inoubliable ! Le service est rapide et soigné, les gaufres croustillantes à souhait, et les milkshakes très parfumés. Notre nouveau rituel familial à Agadir.",
    avatar: "M",
  },
  {
    name: "Ahmed R.",
    date: "Octobre 2025",
    rating: 5,
    text: "La collection Matcha est à tomber par terre. La mousse de lait et le goût terreux et doux du matcha se marient parfaitement. Le salon est magnifiquement décoré.",
    avatar: "A",
  },
  {
    name: "Yasmine T.",
    date: "Février 2026",
    rating: 5,
    text: "Un incontournable de Founty Bay. Les coupes de Sundae Signature sont présentées de manière très élégante. Une véritable pépite gastronomique !",
    avatar: "Y",
  },
  {
    name: "Omar F.",
    date: "Mars 2026",
    rating: 5,
    text: "La perfection de bout en bout. Les parfums classiques comme la vanille sont tout aussi complexes que les recettes créatives. Ouvert tard en soirée, c'est idéal.",
    avatar: "O",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#1565C0" color="#1565C0" />
      ))}
    </div>
  );
}

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: "#FFFFFF" }}>
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105"
          style={{ backgroundImage: `url(/images/Nouveau dossier/sundae.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="font-jost text-[0.65rem] tracking-[0.25em] text-white uppercase mb-3"
          >
            Le témoignage de votre confiance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-alabaster tracking-wide leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Avis Clients
          </motion.h1>
        </div>
      </section>

      {/* ── GOOGLE RATING BOX (DARK PREMIUM) ────────────── */}
      <section className="bg-obsidian border-y border-white/5 py-14 px-6">
        <FadeIn className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
          <div className="font-jost text-[0.6rem] tracking-[0.25em] text-white uppercase">
            Votre Appréciation Google
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap mt-2">
            <span className="font-playfair font-light text-5xl md:text-6xl text-alabaster leading-none">4.9</span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="#1565C0" color="#1565C0" />)}
              </div>
              <span className="font-jost text-[0.72rem] text-alabaster/50 tracking-[0.1em] uppercase">
                Basé sur les avis clients d'Agadir
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── INTERACTIVE SLIDER ──────────────────────────── */}
      <section className="py-24 px-6 bg-secondary/35 border-b border-stone-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn className="mb-12">
            <span className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase">
              Témoignages Sélectionnés
            </span>
            <h2 className="font-playfair font-light text-3xl md:text-4xl text-primary mt-2">
              Le bonheur partagé
            </h2>
          </FadeIn>

          <div className="relative min-h-[220px] flex items-center justify-center">
            {reviews.map((r, i) => (
              <AnimatePresence mode="wait" key={r.name}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <p className="font-playfair italic text-xl md:text-2xl text-primary leading-relaxed max-w-2xl mx-auto mb-8 text-stone-800">
                      "{r.text}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary text-accent flex items-center justify-center font-playfair font-medium text-sm">
                        {r.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-jost text-xs font-medium text-primary">{r.name}</div>
                        <div className="font-jost text-[0.7rem] text-muted-foreground">{r.date}</div>
                      </div>
                      <StarRating count={r.rating} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="focus:outline-none transition-all duration-300"
                style={{
                  width: activeIndex === i ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: activeIndex === i ? "#1565C0" : "rgba(17, 17, 17, 0.15)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ALL REVIEWS ────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="font-playfair font-light text-2xl md:text-3xl text-primary">
            Retours de notre Salon
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 0.06}>
              <div
                className="p-8 bg-[#FFFFFF] border border-stone-200/50 flex flex-col justify-between h-full group hover:border-accent transition-all duration-500 hover:shadow-[0_12px_40px_rgba(21, 101, 192,0.06)]"
              >
                <div className="flex flex-col gap-4">
                  <StarRating count={r.rating} />
                  <p className="font-jost text-[0.88rem] font-light leading-relaxed text-muted-foreground italic">
                    "{r.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-stone-200/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-accent flex items-center justify-center font-playfair font-medium text-xs">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-jost text-xs font-medium text-primary">{r.name}</div>
                    <div className="font-jost text-[0.68rem] text-muted-foreground">{r.date}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Call to leave review */}
        <FadeIn delay={0.2} className="text-center mt-20">
          <a
            href="https://g.page/review"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-jost text-[0.72rem] tracking-[0.2em] uppercase text-primary border border-primary px-10 py-4 transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Laisser un Avis Google <ExternalLink size={13} />
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
