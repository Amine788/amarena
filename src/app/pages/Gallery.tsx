import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const allPhotos = [
  // DESSERTS SECTION
  {
    src: "/images/gallery/DSC09788.webp",
    alt: "Part de gâteau chocolat zébré, éclats d'Oreo et framboises fraîches",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09789.webp",
    alt: "Dressage signature au chocolat noir et blanc, vue de détail",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09791.webp",
    alt: "Duo de créations gourmandes servies sur marbre",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09793.webp",
    alt: "Présentation en salon de nos desserts signature",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09794.webp",
    alt: "Boule de glace vanille et zestes d'orange sur nappage chocolat",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09795.webp",
    alt: "Framboises fraîches sur lit de chocolat marbré, vue du dessus",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09796.webp",
    alt: "Nos desserts signature accompagnés d'une boisson glacée Amarena",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09797.webp",
    alt: "Moment gourmand : dessert glacé et boisson signature",
    category: "Desserts",
  },
  {
    src: "/images/gallery/DSC09800.webp",
    alt: "L'art de la présentation à la Maison Amarena",
    category: "Desserts",
  },
];

const cats = ["Tous", "Desserts"];

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
    <div style={{ background: "#F8FAFF" }} className="min-h-screen">
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end pb-16 px-6 overflow-hidden bg-[#0A2254]">
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-white tracking-wide leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}
          >
            Galerie <em className="font-playfair font-normal italic text-accent">d'Exceptions</em>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "64px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-accent mx-auto mt-6"
          />
        </div>
      </section>

      {/* ── FILTERS SECTION ─────────────────────────────── */}
      <section className="px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "12px 32px",
                background: activeFilter === c ? "#1565C0" : "white",
                color: activeFilter === c ? "white" : "#0A2254",
                border: "1px solid",
                borderColor: activeFilter === c ? "#1565C0" : "rgba(10, 34, 84, 0.1)",
                cursor: "pointer",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: activeFilter === c ? "0 10px 25px -5px rgba(21, 101, 192, 0.4)" : "none",
              }}
              className="hover:shadow-lg"
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
              <Masonry gutter="24px">
                {filtered.map((photo, i) => (
                  <FadeIn key={photo.src} delay={i * 0.05}>
                    <div
                      className="relative overflow-hidden group cursor-pointer bg-white shadow-sm border border-[#1565C0]/5 rounded-sm"
                      onClick={() => setLightbox(photo)}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                          style={{ display: "block" }}
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center pointer-events-none z-10"
                        style={{ background: "rgba(10, 34, 84, 0.7)", backdropFilter: "blur(4px)" }}
                      >
                        <motion.div 
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4"
                        >
                          <ZoomIn size={24} color="white" />
                        </motion.div>
                        <span className="font-jost text-[0.6rem] tracking-[0.3em] text-[#1565C0] uppercase font-bold bg-white px-4 py-1">
                          {photo.category}
                        </span>
                      </div>
                      
                      {/* Elegant Text Overlay */}
                      <div className="p-6 bg-white border-t border-[#1565C0]/5 group-hover:bg-[#F8FAFF] transition-colors duration-500">
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#0A2254", lineHeight: 1.4 }}>
                          {photo.alt}
                        </p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(10, 34, 84, 0.96)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[80vh] object-contain shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
              />
              
              <div className="mt-8 text-center bg-white/5 backdrop-blur-md px-10 py-6 border border-white/10 w-full md:w-auto">
                <span className="font-jost text-[0.65rem] tracking-[0.4em] text-[#1565C0] uppercase font-bold block mb-2">
                  Collection {lightbox.category}
                </span>
                <h2 className="font-playfair text-xl md:text-2xl text-white italic">
                  {lightbox.alt}
                </h2>
              </div>
              
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-16 right-0 md:-right-12 flex items-center justify-center w-12 h-12 text-white hover:text-[#1565C0] transition-colors duration-300"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
