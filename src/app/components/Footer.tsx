import { Link } from "react-router";
import { Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F8FE 100%)", color: "#0A2254" }}>
      {/* Thin Gold divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(21, 101, 192, 0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Brand section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <img 
              src="/logo.png" 
              alt="Amarena" 
              style={{
                height: "140px",
                width: "auto",
                objectFit: "contain",
                marginTop: "-30px",
                marginBottom: "-30px",
                marginLeft: "-15px",
                opacity: 0.9,
              }}
            />
            <div className="flex flex-col justify-center items-start">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  color: "#0A2254",
                  lineHeight: 1.1,
                }}
              >
                AMARENA
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.5rem",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "#1565C0",
                }}
              >
                LA MAMA DEL GELATO
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.9,
              color: "rgba(10, 34, 84, 0.7)",
              maxWidth: "280px",
            }}
          >
            Glacier Artisanal · Chocolaterie d'Exception · Desserts Gourmands au cœur d'Agadir.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/amarena__gelato"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: "1px solid rgba(21, 101, 192,0.25)",
                color: "#1565C0",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#1565C0";
                e.currentTarget.style.borderColor = "#1565C0";
                e.currentTarget.style.color = "#0A2254";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(21, 101, 192,0.25)";
                e.currentTarget.style.color = "#1565C0";
              }}
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@amarenagelato.ma?_r=1&_t=ZS-96xGOKMna8y"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: "1px solid rgba(21, 101, 192,0.25)",
                color: "#1565C0",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#1565C0";
                e.currentTarget.style.borderColor = "#1565C0";
                e.currentTarget.style.color = "#0A2254";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(21, 101, 192,0.25)";
                e.currentTarget.style.color = "#1565C0";
              }}
              aria-label="TikTok"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col gap-6">
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              color: "#1565C0",
              textTransform: "uppercase",
            }}
          >
            Navigation
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Accueil", to: "/" },
              { label: "Notre Histoire", to: "/about" },
              { label: "La Carte", to: "/menu" },
              { label: "Galerie", to: "/gallery" },
              { label: "Avis Clients", to: "/reviews" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(10, 34, 84, 0.7)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#1565C0";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(10, 34, 84, 0.7)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact info section */}
        <div className="flex flex-col gap-6">
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              color: "#1565C0",
              textTransform: "uppercase",
            }}
          >
            Nous Trouver
          </div>
          <div className="flex flex-col gap-5">
            {[
              { icon: <MapPin size={16} />, text: "Commerce 16, Immeuble D, Q76 Agadir Bay View 2, Founty, Agadir" },
              { icon: <Phone size={16} />, text: "0666 30 71 45" },
              { icon: <Mail size={16} />, text: "contact@amarena-gelato.com" },
              { icon: <Clock size={16} />, text: "Tous les jours · 09h00 – 01h00" }
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex items-start gap-4">
                <span style={{ color: "#1565C0", marginTop: "2px", flexShrink: 0 }}>{icon}</span>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(10, 34, 84, 0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(21, 101, 192, 0.1)" }}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ 
            fontFamily: "'Jost', sans-serif", 
            fontSize: "0.72rem", 
            color: "rgba(10, 34, 84, 0.5)", 
            letterSpacing: "0.1em" 
          }}
        >
          <span>© 2026 AMARENA LA MAMA DEL GELATO</span>
        </div>
      </div>
    </footer>
  );
}
