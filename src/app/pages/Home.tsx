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

  return <div ref={ref} className="font-playfair text-4xl md:text-5xl font-light text-[#1565C0]">{count}{suffix}</div>;
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
    icon: "",
    title: "Glaces Artisanales",
    desc: "Gelatos d'exception et sorbets de fruits frais préparés selon les véritables secrets italiens.",
    img: "/images/gallery/sundae.webp",
  },
  {
    icon: "🍫",
    title: "Chocolaterie Fine",
    desc: "Des créations chocolatées d'une rare intensité, elaborées à partir de grands crus.",
    img: "/images/gallery/brownie.webp",
  },
  {
    icon: "🧇",
    title: "Gaufres & Crêpes",
    desc: "Pâtes faites maison, cuites à la minute et surmontées de toppings gourmands d'exception.",
    img: "/images/gallery/gaufres.webp",
  },
  {
    icon: "☕",
    title: "Boissons Signatures",
    desc: "Matcha japonais d'origine, cafés de spécialité glacés et milkshakes premium onctueux.",
    img: "/images/gallery/matcha.webp",
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
      {/* ── HERO SECTION (AMARENA BLUE LUXURY) ──────────────── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background with Brand Colors */}
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-[10s] scale-100"
            style={{
              // Using a high-end cinematic image of blueberries/ice cream that perfectly matches the logo's blue
              backgroundImage: `url("https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=2000&auto=format&fit=crop")`,
            }}
          />
          {/* Deep Amarena Blue Multi-layered overlay */}
          <div className="absolute inset-0 bg-[#0A2254]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2254]/60 via-transparent to-[#0A2254]" />
        </motion.div>

        {/* Brand Frame */}
        <div className="absolute inset-10 border border-[#1565C0]/20 pointer-events-none z-10" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          {/* Eyebrow in White */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="font-jost text-[0.65rem] font-medium text-white uppercase mb-6 tracking-[0.4em]"
          >
            Agadir · L'Excellence du Gelato
          </motion.div>

          {/* Luxury Main Title in Brand Palette */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-white leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.8rem)" }}
          >
            La Pureté du <br />
            <span className="font-playfair font-normal italic text-[#1565C0] drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
              Gelato Italien
            </span>
          </motion.h1>

          {/* Elegant Gold Separator */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="h-[2px] bg-[#1565C0] mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-jost text-sm md:text-base font-light text-white/90 max-w-[600px] leading-relaxed mb-12"
          >
            Maison Amarena sublime les saveurs authentiques à travers des créations glacées d'exception, portées par l'élégance de la tradition napolitaine.
          </motion.p>

          {/* Action CTAs in Brand Colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link
              to="/menu"
              className="w-full sm:w-auto px-12 py-4 text-center font-jost text-[0.7rem] tracking-[0.25em] uppercase text-white bg-[#1565C0] border border-[#1565C0] transition-all duration-500 hover:bg-white hover:text-[#0A2254] flex items-center justify-center gap-3 shadow-xl"
            >
              Découvrir la Carte <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-12 py-4 text-center font-jost text-[0.7rem] tracking-[0.25em] uppercase text-white bg-transparent border border-white/40 transition-all duration-500 hover:border-[#1565C0] hover:text-[#1565C0] backdrop-blur-sm"
            >
              Nous Visiter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PRESENTATION / ESSENCE ──────────────────────── */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0A2254]/5 shadow-2xl rounded-sm">
                <img
                  src="/images/gallery/affogato.webp"
                  alt="L'atmosphère d'Amarena Agadir"
                  className="w-full h-full object-cover transition-transform duration-[6s] hover:scale-105"
                />
                {/* Brand blue border overlay */}
                <div className="absolute inset-4 border border-[#1565C0]/20 pointer-events-none" />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-8 order-1 lg:order-2">
            <FadeIn delay={0.15}>
              <div className="font-jost text-[0.65rem] tracking-[0.3em] text-[#1565C0] uppercase font-semibold">
                L'Héritage Amarena
              </div>
              <h2 className="font-playfair font-light text-4xl md:text-5xl text-[#0A2254] leading-tight mt-2">
                Une signature <br />
                <em className="font-playfair font-normal italic text-[#1565C0]">unique et raffinée</em>
              </h2>
              <div className="w-12 h-[2px] bg-[#1565C0] my-4" />

              <div className="font-jost text-sm font-light text-[#0D2B6B]/80 leading-relaxed flex flex-col gap-6">
                <p>
                  Situé au cœur de Founty à Agadir, <strong>Amarena</strong> est l'adresse de référence pour les gourmets en quête d'excellence.
                </p>
                <p>
                  Notre logo bleu profond incarne la sérénité et la pureté de nos ingrédients, tandis que nos recettes célèbrent la richesse des traditions artisanales italiennes revisitées avec modernité.
                </p>
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-3 font-jost text-[0.7rem] tracking-[0.25em] uppercase text-[#1565C0] transition-all mt-4 font-semibold"
              >
                Notre Histoire
                <motion.span className="transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowRight size={14} />
                </motion.span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── UNIVERS SECTION (BRAND BLUE) ───────────────── */}
      <section className="bg-[#F8FAFF] py-32 px-6 lg:px-12 text-[#0A2254] relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="font-jost text-[0.65rem] tracking-[0.3em] text-[#1565C0] uppercase font-bold">
              Nos Univers
            </span>
            <h2 className="font-playfair font-light text-3xl md:text-5xl text-[#0A2254] leading-tight mt-3">
              L'élégance de la <br />
              <em className="font-playfair font-normal italic text-[#1565C0]">gastronomie glacée</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {univers.map((univ, idx) => (
              <FadeIn key={univ.title} delay={idx * 0.1}>
                <div className="group relative overflow-hidden bg-white aspect-[3/4] border border-[#1565C0]/10 transition-all duration-500 hover:border-[#1565C0]/30 hover:shadow-2xl flex flex-col justify-end p-8 cursor-pointer rounded-lg">
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={univ.img}
                      alt={univ.title}
                      className="w-full h-full object-cover opacity-80 transition-all duration-[2s] scale-100 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent z-10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 flex flex-col">
                    <h3 className="font-playfair font-bold text-xl text-[#0A2254] mb-3">
                      {univ.title}
                    </h3>
                    <p className="font-jost text-[0.85rem] font-medium text-[#0D2B6B]/70 leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-[0.6s] ease-in-out">
                      {univ.desc}
                    </p>
                    <div className="w-10 h-[2px] bg-[#1565C0] mt-4 group-hover:w-20 transition-all duration-[0.6s]" />
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
          <span className="font-jost text-[0.65rem] tracking-[0.3em] text-[#1565C0] uppercase font-bold">
            Notre Signature
          </span>
          <h2 className="font-playfair font-light text-3xl md:text-5xl text-[#0A2254] leading-tight mt-3">
            La perfection dans <br />
            <em className="font-playfair font-normal italic text-[#1565C0]">chaque détail</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rituelSteps.map((step, idx) => (
            <FadeIn key={step.num} delay={idx * 0.1}>
              <div className="flex flex-col gap-5 p-10 bg-white border border-[#0A2254]/5 hover:border-[#1565C0] transition-all duration-500 relative group h-full shadow-sm hover:shadow-xl rounded-sm">
                <span className="font-playfair font-light text-sm text-[#1565C0] tracking-[0.3em]">{step.num}</span>
                <div className="w-full h-[1px] bg-[#1565C0]/10 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 bg-[#1565C0] transition-all duration-700 group-hover:w-full" />
                </div>
                <h3 className="font-playfair text-xl text-[#0A2254]">{step.title}</h3>
                <p className="font-jost text-[0.85rem] font-light text-[#0D2B6B]/70 leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ───────────────────────────────── */}
      <section className="py-24 border-y border-[#1565C0]/10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((s, idx) => (
              <FadeIn key={s.label} delay={idx * 0.08}>
                <div className="flex flex-col gap-2">
                  <Counter target={s.value} suffix={s.suffix} />
                  <span className="font-jost text-[0.65rem] tracking-[0.25em] text-[#0A2254]/60 uppercase mt-2 font-semibold">
                    {s.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER (BRAND BLUE) ─────────────────── */}
      <section className="relative py-40 px-6 overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-center bg-cover scale-110"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2000&auto=format&fit=crop")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2254]/80 to-[#0A2254]" />
        </div>

        <FadeIn className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="font-jost text-[0.65rem] tracking-[0.3em] text-white uppercase mb-6 font-medium">
            L'Expérience Amarena
          </span>
          <h2 className="font-playfair font-light text-3xl md:text-5xl text-white leading-tight mb-8">
            Plongez dans un univers de <br />
            <em className="font-playfair font-normal italic text-[#1565C0]">fraîcheur absolue</em>
          </h2>
          <p className="font-jost text-sm font-medium text-white/80 max-w-[500px] leading-relaxed mb-12 tracking-wide uppercase text-[0.7rem]">
            Rejoignez-nous à Founty Bay pour vivre une expérience glacée hors du commun.
          </p>
          <Link
            to="/menu"
            className="px-16 py-5 font-jost text-[0.7rem] tracking-[0.3em] uppercase text-white bg-[#1565C0] border border-[#1565C0] transition-all duration-500 hover:bg-white hover:text-[#0A2254] shadow-2xl hover:scale-110"
          >
            Découvrir la Carte
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
