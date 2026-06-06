import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref} className="font-playfair text-4xl md:text-5xl font-light text-accent">{count}{suffix}</div>;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const univers = [
  {
    icon: "🍨",
    title: "Glaces Artisanales",
    desc: "Gelatos d'exception et sorbets de fruits frais préparés selon les véritables secrets italiens.",
    img: "/images/pistachio_scoop_1780571675058.png",
  },
  {
    icon: "🍫",
    title: "Chocolaterie Fine",
    desc: "Des créations chocolatées d'une rare intensité, elaborées à partir de grands crus.",
    img: "/images/chocolate_pour_1780571728870.png",
  },
  {
    icon: "🧇",
    title: "Gaufres & Crêpes",
    desc: "Pâtes faites maison, cuites à la minute et surmontées de toppings gourmands d'exception.",
    img: "/images/vanilla_cone_elegant_1780571715882.png",
  },
  {
    icon: "☕",
    title: "Boissons Signatures",
    desc: "Matcha japonais d'origine, cafés de spécialité glacés et milkshakes premium onctueux.",
    img: "/images/sundae_crystal_1780571697743.png",
  },
];

const rituelSteps = [
  {
    num: "01",
    title: "Sourcer",
    desc: "Sélection rigoureuse de matières premières d'exception : pistaches de Sicile, vanille de Tahiti, et cacao équatorien.",
  },
  {
    num: "02",
    title: "Préparer",
    desc: "Des infusions de 24 heures et une maturation lente pour permettre aux arômes naturels de s'épanouir pleinement.",
  },
  {
    num: "03",
    title: "Turbiner",
    desc: "Un foisonnement minimaliste à température précise, assurant cette onctuosité soyeuse unique à nos gelatos.",
  },
  {
    num: "04",
    title: "Sublimer",
    desc: "Chaque dessert est dressé comme une œuvre d'art et fini sous vos yeux, pour une véritable poésie gustative.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Recettes Uniques" },
  { value: 100, suffix: "%", label: "Artisanal & Frais" },
  { value: 7, suffix: "/7", label: "Jours sur Sept" },
  { value: 1, suffix: "h", label: "Ouvert en Soirée" },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div style={{ background: "#FFFFFF" }} className="overflow-x-hidden">
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Image Background */}
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-[6s] scale-105"
            style={{
              backgroundImage: `url(/images/trio_scoops_hero_1780571685837.png)`,
            }}
          />
          {/* Subtle vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/45 via-obsidian/75 to-obsidian" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,11,12,0.6)_100%)]" />
        </motion.div>

        {/* Elegant Minimalist Frame */}
        <div className="absolute inset-8 border border-white/5 pointer-events-none z-10" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="font-jost text-[0.68rem] font-light text-white uppercase mb-6"
          >
            Agadir · Founty Bay · L'expérience Absolue
          </motion.div>

          {/* Luxury Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-alabaster leading-[1.08] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 5.2rem)" }}
          >
            La Poésie du <br />
            <em className="font-playfair font-normal italic bg-gradient-to-r from-[#4A90D9] to-[#1565C0] text-transparent bg-clip-text">Gelato Italien</em> d'Exception
          </motion.h1>

          {/* Thin Gold Separator */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "64px" }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="h-[1px] bg-accent mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-jost text-sm md:text-base font-light text-alabaster/80 max-w-[580px] leading-relaxed mb-12"
          >
            Maison Amarena conçoit des instants précieux à travers des glaces artisanales, des chocolats fins et des compositions gastronomiques sublimes.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link
              to="/menu"
              className="w-full sm:w-auto px-10 py-4 text-center font-jost text-[0.72rem] tracking-[0.2em] uppercase text-obsidian bg-accent border border-accent transition-all duration-500 hover:bg-alabaster hover:border-alabaster hover:text-obsidian flex items-center justify-center gap-3"
            >
              Découvrir notre Carte <ArrowRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 text-center font-jost text-[0.72rem] tracking-[0.2em] uppercase text-alabaster bg-transparent border border-alabaster/30 transition-all duration-500 hover:border-accent hover:text-accent"
            >
              Nous Visiter
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 text-alabaster/40 hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })}
        >
          <span className="font-jost text-[0.55rem] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE STRIP ──────────────────────────────── */}
      <div className="w-full py-5 bg-[#0A2254] border-y border-white/5 overflow-hidden relative z-10 flex">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 font-playfair italic text-xs md:text-sm tracking-[0.1em] text-alabaster/60 uppercase">
              <span>Gelato Artisanal</span><span className="text-accent">•</span>
              <span>Chocolaterie Fine</span><span className="text-accent">•</span>
              <span>Matcha d'Origine</span><span className="text-accent">•</span>
              <span>Sundaes Signatures</span><span className="text-accent">•</span>
              <span>Créations Éphémères</span><span className="text-accent">•</span>
              <span>Café de Spécialité</span><span className="text-accent">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRESENTATION / ESSENCE ──────────────────────── */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary shadow-2xl">
                <img
                  src="/images/shop_interior_1780571741726.png"
                  alt="L'atmosphère feutrée d'Amarena Agadir"
                  className="w-full h-full object-cover transition-transform duration-[6s] hover:scale-105"
                />
                {/* Thin gold border overlay */}
                <div className="absolute inset-4 border border-accent/25 pointer-events-none" />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-8 order-1 lg:order-2">
            <FadeIn delay={0.15}>
              <div className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase">
                L'Origine du Goût
              </div>
              <h2 className="font-playfair font-light text-4xl md:text-5xl text-primary leading-tight mt-2">
                Née d'une <br />
                <em className="font-playfair font-normal italic text-accent">véritable passion</em> <br />
                italienne
              </h2>
              <div className="w-12 h-[1px] bg-accent my-4" />
              
              <div className="font-jost text-sm font-light text-muted-foreground leading-relaxed flex flex-col gap-6">
                <p>
                  Situé dans le quartier exclusif de Founty à Agadir, <strong>Amarena La Mama Del Gelato</strong> est le sanctuaire des amateurs de douceurs haut de gamme.
                </p>
                <p>
                  Inspiré des plus nobles traditions napolitaines, chaque parfum est élaboré comme un chef-d'œuvre culinaire, alliant pureté des saveurs locales, textures soyeuses, et présentations raffinées.
                </p>
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-3 font-jost text-[0.72rem] tracking-[0.2em] uppercase text-accent transition-all mt-4"
              >
                Découvrir Notre Histoire
                <motion.span className="transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowRight size={14} />
                </motion.span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── UNIVERS SECTION (DARK LUXURY) ───────────────── */}
      <section className="bg-[#F4F8FE] py-32 px-6 lg:px-12 text-[#0A2254] relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="font-jost text-[0.62rem] tracking-[0.25em] text-[#1565C0] uppercase font-bold">
              Nos Univers
            </span>
            <h2 className="font-playfair font-light text-3xl md:text-5xl text-[#0A2254] leading-tight mt-3">
              Des collections pensées pour <br />
              <em className="font-playfair font-normal italic text-[#1565C0]">l'émerveillement</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {univers.map((univ, idx) => (
              <FadeIn key={univ.title} delay={idx * 0.1}>
                <div className="group relative overflow-hidden bg-white aspect-[3/4] border border-[#1565C0]/10 transition-all duration-500 hover:border-[#1565C0]/30 hover:shadow-xl flex flex-col justify-end p-6 cursor-pointer rounded-lg">
                  {/* Image Background with light overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={univ.img}
                      alt={univ.title}
                      className="w-full h-full object-cover opacity-80 transition-all duration-[2s] scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/20 z-10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 flex flex-col pt-8">
                    <h3 className="font-playfair font-bold text-xl text-[#0A2254] mb-2">
                      {univ.title}
                    </h3>
                    <p className="font-jost text-[0.85rem] font-medium text-[#0D2B6B]/80 leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-[0.6s] ease-in-out">
                      {univ.desc}
                    </p>
                    <div className="w-8 h-[2px] bg-[#1565C0] mt-4 group-hover:w-16 transition-all duration-[0.6s]" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE RITUEL / PHILOSOPHIE ─────────────────────── */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <span className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase">
            Notre Exigence
          </span>
          <h2 className="font-playfair font-light text-3xl md:text-5xl text-primary leading-tight mt-3">
            L'art des détails <br />
            <em className="font-playfair font-normal italic text-accent">invisibles</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rituelSteps.map((step, idx) => (
            <FadeIn key={step.num} delay={idx * 0.1}>
              <div className="flex flex-col gap-4 p-8 bg-[#FFFFFF] border border-stone-200/50 hover:border-accent transition-colors duration-500 relative group h-full">
                <span className="font-playfair font-light text-xs text-accent tracking-[0.2em]">{step.num}</span>
                <div className="w-full h-[1px] bg-accent/10 relative overflow-hidden my-2">
                  <div className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-700 group-hover:w-full" />
                </div>
                <h3 className="font-playfair text-lg text-primary">{step.title}</h3>
                <p className="font-jost text-[0.8rem] font-light text-muted-foreground leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ───────────────────────────────── */}
      <section className="py-24 border-y border-stone-200/50" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((s, idx) => (
              <FadeIn key={s.label} delay={idx * 0.08}>
                <div className="flex flex-col gap-2">
                  <Counter target={s.value} suffix={s.suffix} />
                  <span className="font-jost text-[0.68rem] tracking-[0.15em] text-muted-foreground uppercase mt-2">
                    {s.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ───────────────────────── */}
      <section className="relative py-40 px-6 overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-center bg-cover scale-105"
            style={{
              backgroundImage: `url(/images/trio_scoops_hero_1780571685837.png)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2254]/60 to-[#0A2254]/95" />
        </div>

        <FadeIn className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="font-jost text-[0.62rem] tracking-[0.25em] text-[#90C3F0] uppercase mb-4 font-bold">
            L'Expérience Amarena
          </span>
          <h2 className="font-playfair font-light text-3xl md:text-5xl text-white leading-tight mb-8">
            Offrez-vous un instant de <br />
            <em className="font-playfair font-normal italic text-[#90C3F0]">sublime gourmandise</em>
          </h2>
          <p className="font-jost text-sm font-medium text-white/80 max-w-[480px] leading-relaxed mb-10">
            Rejoignez-nous dans notre salon de Founty pour déguster des gelatos d'une onctuosité inégalée, confectionnés à la minute.
          </p>
          <Link
            to="/menu"
            className="px-12 py-4 font-jost text-[0.72rem] tracking-[0.2em] uppercase text-[#0A2254] bg-white border border-white transition-all duration-500 hover:bg-[#F4F8FE] hover:scale-105"
          >
            Explorer la Carte
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
