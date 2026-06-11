import { useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const valeurs = [
  { label: "Excellence", desc: "Chaque parfum, sundae et gaufre est élaboré avec une rigueur absolue et les meilleurs ingrédients du monde." },
  { label: "Créativité", desc: "Des saveurs signatures audacieuses et des mariages éphémères surprenants créés par nos maîtres glaciers." },
  { label: "Authenticité", desc: "Des recettes transmises avec dévouement, perpétuant le savoir-faire ancestral des gelaterias d'Italie." },
  { label: "Infusion Lente", desc: "Nous prenons le temps. Les gousses de vanille et les pistaches infusent lentement 24h avant d'être turbinées." },
  { label: "Service Précieux", desc: "Un accueil attentionné, souriant et personnalisé pour faire de chaque dégustation un moment de pur bonheur." },
];

export function About() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105"
          style={{
            backgroundImage: `url(/images/gallery/sundae.jpeg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 1.2 }}
            className="font-jost text-[0.68rem] font-light text-white uppercase mb-4"
          >
            Maison Amarena Agadir
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-alabaster tracking-wide leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Notre Histoire
          </motion.h1>
        </div>
      </section>

      {/* ── HISTORY / EDITORIAL SECTION ─────────────────── */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* History content */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
            <FadeIn>
              <div className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase">
                L'Origine du Goût
              </div>
              <h2 className="font-playfair font-light text-3xl md:text-5xl text-primary leading-tight mt-2">
                Le mariage de la tradition <br />
                <em className="font-playfair font-normal italic text-accent">et du raffinement</em>
              </h2>
              <div className="w-12 h-[1px] bg-accent my-4" />
              
              <div className="font-jost text-sm font-light text-muted-foreground leading-relaxed flex flex-col gap-6">
                <p>
                  AMARENA LA MAMA DEL GELATO est née d’une ambition claire : offrir à Agadir l’authenticité du gelato italien artisanal à travers une expérience gourmande élégante et raffinée.
                </p>
                <p>
                  Forte de 5 années d’expertise acquises entre le Royaume-Uni et l’Italie, notre maison s’inspire des meilleures traditions du gelato pour proposer des créations d’exception élaborées à partir d’ingrédients soigneusement sélectionnés.
                </p>
                <p>
                  Chaque jour, nos équipes privilégient la qualité, la fraîcheur et le savoir-faire artisanal afin de créer des gelatos, desserts, chocolats et boissons aux saveurs authentiques. Notre engagement est simple : offrir une expérience gustative unique où chaque détail compte.
                </p>
                <p>
                  Située au cœur de Founty Bay à Agadir, notre boutique a été imaginée comme un lieu chaleureux et élégant, où la gourmandise rencontre l’art de recevoir. Plus qu’un glacier, AMARENA est une destination dédiée aux amateurs de saveurs raffinées, de moments de partage et d’excellence artisanale.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Asymmetrical visual block */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-secondary shadow-2xl">
                  <img 
                    src="/images/WhatsApp-Image-2026-06-08-at-10.54.23-1.jpeg"
                    alt="Gelatos artisanaux signatures Amarena"
                    className="w-full h-full object-cover transition-transform duration-[6s] hover:scale-105"
                  />
                </div>
                {/* Asymmetric floating outline frame */}
                <div
                  className="absolute -bottom-6 -right-6 -z-10 w-[75%] h-[75%] border border-accent/35"
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION (DARK LUXURY) ──────────────── */}
      <section className="bg-obsidian py-32 px-6 lg:px-12 text-alabaster">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            {
              label: "Notre Mission",
              eyebrow: "Ce que nous faisons",
              text: "Créer des compositions glacées et des desserts d'exception inspirés des plus pures méthodes italiennes, sublimés par un service personnalisé précieux et un décor hautement sophistiqué.",
            },
            {
              label: "Notre Vision",
              eyebrow: "Où nous allons",
              text: "Élever l'expérience du gelato au Maroc au rang de moment d'art et d'émotion, devenant la référence absolue de la haute chocolaterie et de la gastronomie glacée du pays.",
            },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.15}>
              <div className="p-10 border border-white/5 bg-[#0A2254] flex flex-col gap-4 relative group hover:border-accent transition-colors duration-500">
                {/* Hover line */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                
                <span className="font-jost text-[0.62rem] tracking-[0.25em] text-white uppercase">
                  {item.eyebrow}
                </span>
                <h3 className="font-playfair font-light text-2xl text-alabaster mt-2 mb-4">
                  {item.label}
                </h3>
                <p className="font-jost text-[0.88rem] font-light text-alabaster/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── VALUES SECTION ──────────────────────────────── */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase">
              Nos Fondations
            </span>
            <h2 className="font-playfair font-light text-3xl md:text-5xl text-primary leading-tight mt-3">
              Des valeurs ancrées <br />
              <em className="font-playfair font-normal italic text-accent">dans la perfection</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valeurs.map((val, i) => (
              <FadeIn key={val.label} delay={i * 0.08}>
                <div className="p-8 bg-[#FFFFFF] border border-stone-200/50 flex flex-col gap-4 h-full relative group transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_40px_rgba(21, 101, 192,0.06)]">
                  {/* Subtle vertical accent line */}
                  <div className="w-[1px] h-6 bg-accent" />
                  
                  <h3 className="font-playfair text-xl text-primary mt-2">
                    {val.label}
                  </h3>
                  <p className="font-jost text-[0.82rem] font-light text-muted-foreground leading-relaxed mt-2">
                    {val.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
