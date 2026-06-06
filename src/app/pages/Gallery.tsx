import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const allPhotos = [
  {
    src: "/images/pistachio_scoop_1780571675058.png",
    alt: "Pistache Royale - Gelato à la pistache de Bronte",
    category: "Gelato",
  },
  {
    src: "/images/chocolate_pour_1780571728870.png",
    alt: "Noir Intense 72° - Chocolat grand cru coulant",
    category: "Chocolat",
  },
  {
    src: "/images/sundae_crystal_1780571697743.png",
    alt: "Sundae Royal dans sa coupe en cristal",
    category: "Dessert",
  },
  {
    src: "/images/vanilla_cone_elegant_1780571715882.png",
    alt: "Vanille Tahitienne dorée infusée en cornet artisanal",
    category: "Gelato",
  },
  {
    src: "/images/trio_scoops_hero_1780571685837.png",
    alt: "La trilogie de parfums signatures Amarena",
    category: "Gelato",
  },
  {
    src: "/images/shop_interior_1780571741726.png",
    alt: "Le salon feutré Amarena à Founty Bay Agadir",
    category: "Salon",
  },
];

const cats = ["Tous", "Gelato", "Chocolat", "Dessert", "Salon"];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [lightbox, setLightbox] = useState<(typeof allPhotos)[0] | null>(null);

  const filtered = activeFilter === "Tous" ? allPhotos : allPhotos.filter(p => p.category === activeFilter);

  return (
    <div style={{ background: "#FFFFFF" }} className="min-h-screen">
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105"
          style={{ backgroundImage: `url(/images/shop_interior_1780571741726.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="font-jost text-[0.65rem] tracking-[0.25em] text-white uppercase mb-3"
          >
            L'Univers Visuel Amarena
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-alabaster tracking-wide leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Galerie
          </motion.h1>
        </div>
      </section>

      {/* ── FILTERS SECTION ─────────────────────────────── */}
      <section className="px-6 pt-12 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "10px 24px",
                background: activeFilter === c ? "#0A2254" : "transparent",
                color: activeFilter === c ? "#FFFFFF" : "#6B6252",
                border: "1px solid",
                borderColor: activeFilter === c ? "#0A2254" : "rgba(17, 17, 17, 0.15)",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={e => {
                if (activeFilter !== c) {
                  e.currentTarget.style.borderColor = "#1565C0";
                  e.currentTarget.style.color = "#1565C0";
                }
              }}
              onMouseLeave={e => {
                if (activeFilter !== c) {
                  e.currentTarget.style.borderColor = "rgba(17, 17, 17, 0.15)";
                  e.currentTarget.style.color = "#6B6252";
                }
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY GRID ────────────────────────────────── */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div layout>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
              <Masonry gutter="16px">
                {filtered.map((photo, i) => (
                  <FadeIn key={photo.src} delay={i * 0.05}>
                    <div
                      className="relative overflow-hidden group cursor-pointer border border-stone-200/40"
                      onClick={() => setLightbox(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        style={{ display: "block" }}
                        loading="lazy"
                      />
                      {/* Hover glassmorphic overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none z-10"
                        style={{ background: "rgba(11, 11, 12, 0.45)", backdropFilter: "blur(4px)" }}
                      >
                        <motion.div 
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full border border-accent flex items-center justify-center"
                        >
                          <ZoomIn size={18} color="#1565C0" />
                        </motion.div>
                      </div>
                      
                      {/* Floating bottom label on hover */}
                      <div
                        className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[0.5s] z-20"
                        style={{ background: "linear-gradient(to top, rgba(11, 11, 12, 0.7), transparent)" }}
                      >
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "#1565C0", textTransform: "uppercase" }}>
                          {photo.category}
                        </span>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", color: "#FFFFFF", marginTop: "2px" }}>
                          {photo.alt.split(" - ")[0]}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX GALLERY MODAL ──────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(11, 11, 12, 0.94)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full flex flex-col items-center gap-4"
              onClick={e => e.stopPropagation()}
            >
              {/* Asymmetrical Gold outline behind picture */}
              <div className="absolute inset-4 border border-accent/20 pointer-events-none -z-10" />

              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[75vh] object-contain border border-white/5"
              />
              
              <div className="text-center w-full px-6 py-2">
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#1565C0", textTransform: "uppercase" }}>
                  {lightbox.category}
                </span>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#FFFFFF", marginTop: "4px" }}>
                  {lightbox.alt}
                </div>
              </div>
              
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "transparent",
                  border: "none",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "#1565C0"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#FFFFFF"; }}
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
