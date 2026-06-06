import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", to: "/" },
  { label: "Notre Histoire", to: "/about" },
  { label: "La Carte", to: "/menu" },
  { label: "Galerie", to: "/gallery" },
  { label: "Avis", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(17, 17, 17, 0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center h-28">
          {/* Logo - Brand Image Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Amarena" 
              style={{
                height: "280px",
                width: "auto",
                objectFit: "contain",
                marginTop: "-80px",
                marginBottom: "-80px",
                marginLeft: "-20px",
                filter: "none",
                transition: "filter 0.4s ease",
              }}
            />
          </Link>

          {/* Desktop nav - Approached to the logo */}
          <nav className="hidden lg:flex items-center gap-8 ml-16">
            {links.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative py-2"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: active ? "#1565C0" : "#0D2B6B",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1565C0")}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.color = "#0D2B6B";
                    } else {
                      e.currentTarget.style.color = "#1565C0";
                    }
                  }}
                >
                  {link.label}
                  {/* Subtle hover line */}
                  {active && (
                    <motion.div 
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Pushed to the right */}
          <div className="hidden lg:flex ml-auto">
            <Link
              to="/contact"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "12px 28px",
                border: "1.5px solid #0D2B6B",
                color: "#0D2B6B",
                background: "transparent",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#1565C0";
                e.currentTarget.style.borderColor = "#1565C0";
                e.currentTarget.style.color = "#0A2254";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#0D2B6B";
                e.currentTarget.style.color = "#0D2B6B";
              }}
            >
              Nous Visiter
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-current ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#0D2B6B" }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between"
            style={{ background: "#0A2254", padding: "6rem 2rem 4rem" }}
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2.2rem",
                      fontWeight: 400,
                      color: pathname === link.to ? "#1565C0" : "#FFFFFF",
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="flex flex-col items-center gap-4 border-t border-alabaster/10 pt-8">
              <Link
                to="/contact"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "14px 44px",
                  background: "#1565C0",
                  color: "#0A2254",
                  textDecoration: "none",
                }}
              >
                Nous Rendre Visite
              </Link>
              <div
                className="text-center"
                style={{ 
                  fontFamily: "'Jost', sans-serif", 
                  color: "rgba(255, 255, 255,0.4)", 
                  fontSize: "0.65rem", 
                  letterSpacing: "0.3em", 
                  textTransform: "uppercase" 
                }}
              >
                Agadir · Founty Bay
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
