import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Navigation, Send } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
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

const contactInfo = [
  {
    icon: <MapPin size={16} />,
    label: "Adresse",
    value: "Commerce 16, Immeuble D, Q76 Agadir Bay View 2\nQuartier Founty, Agadir",
    action: "https://www.google.com/maps/place/AMARENA/@30.3983712,-9.5893666,17z/data=!4m14!1m7!3m6!1s0xdb3b7c4d24f96d9:0x9100e3dda0b0e6be!2sAMARENA!8m2!3d30.3983712!4d-9.5867917!16s%2Fg%2F11npsg06s3!3m5!1s0xdb3b7c4d24f96d9:0x9100e3dda0b0e6be!8m2!3d30.3983712!4d-9.5867917!16s%2Fg%2F11npsg06s3?entry=ttu",
    actionLabel: "Itinéraire",
  },
  {
    icon: <Phone size={16} />,
    label: "Téléphone",
    value: "0666 30 71 45",
    action: "tel:+212666307145",
    actionLabel: "Appeler",
  },
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "contact@amarena-gelato.com",
    action: "mailto:contact@amarena-gelato.com",
    actionLabel: "Écrire",
  },
  {
    icon: <Clock size={16} />,
    label: "Horaires",
    value: "Tous les jours de la semaine\n09h00 – 01h00 du matin",
    action: null,
    actionLabel: null,
  },
  {
    icon: <Instagram size={16} />,
    label: "Instagram",
    value: "@amarena__gelato",
    action: "https://instagram.com/amarena__gelato",
    actionLabel: "Suivre",
  },
  {
    icon: (
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
    ),
    label: "TikTok",
    value: "@amarenagelato.ma",
    action: "https://www.tiktok.com/@amarenagelato.ma?_r=1&_t=ZS-96xGOKMna8y",
    actionLabel: "Suivre",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{ background: "#FFFFFF" }}>
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105"
          style={{ backgroundImage: `url(/images/Nouveau dossier/ice cafe.jpeg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="font-jost text-[0.65rem] tracking-[0.25em] text-white uppercase mb-3"
          >
            Écrivons ensemble un instant doux
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-alabaster tracking-wide leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* ── DETAILS & FORM SECTION ──────────────────────── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <FadeIn>
              <span className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase">
                Informations
              </span>
              <h2 className="font-playfair font-light text-3xl md:text-4xl text-primary leading-tight mt-2 mb-6">
                Le Salon de Founty
              </h2>
              <div className="w-12 h-[1px] bg-accent mb-8" />
            </FadeIn>

            <div className="flex flex-col gap-8">
              {contactInfo.map((info, idx) => (
                <FadeIn key={idx} delay={idx * 0.05} className="flex items-start gap-5">
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      border: "1.5px solid rgba(21, 101, 192,0.3)",
                      color: "#1565C0",
                    }}
                    className="flex items-center justify-center flex-shrink-0"
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6252", marginBottom: "4px" }}>
                      {info.label}
                    </div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "#0D2B6B", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                      {info.value}
                    </div>
                    {info.action && (
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noreferrer" : undefined}
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.7rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#1565C0",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          marginTop: "6px",
                        }}
                        className="hover:underline"
                      >
                        {info.actionLabel} →
                      </a>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Side: Message Form (Dark Luxury Container) */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div
                className="p-8 md:p-12 bg-obsidian text-alabaster border border-white/5 relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

                {!sent ? (
                  <>
                    <span className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase block mb-2">
                      Demande Privée
                    </span>
                    <h3 className="font-playfair font-light text-2xl text-alabaster mb-10">
                      Envoyer un Message
                    </h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                      {[
                        { key: "name", label: "Votre Nom", type: "text" },
                        { key: "email", label: "Votre Adresse Email", type: "email" },
                      ].map(field => (
                        <div key={field.key} className="flex flex-col gap-2">
                          <label
                            style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255, 255, 255,0.6)" }}
                          >
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            required
                            value={(form as any)[field.key]}
                            onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                            style={{
                              width: "100%",
                              padding: "14px 18px",
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#FFFFFF",
                              fontFamily: "'Jost', sans-serif",
                              fontSize: "0.88rem",
                              outline: "none",
                              transition: "all 0.3s",
                            }}
                            onFocus={e => {
                              e.target.style.borderColor = "#1565C0";
                              e.target.style.background = "rgba(255,255,255,0.05)";
                            }}
                            onBlur={e => {
                              e.target.style.borderColor = "rgba(255,255,255,0.1)";
                              e.target.style.background = "rgba(255,255,255,0.03)";
                            }}
                          />
                        </div>
                      ))}

                      <div className="flex flex-col gap-2">
                        <label
                          style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255, 255, 255,0.6)" }}
                        >
                          Message
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF",
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "0.88rem",
                            outline: "none",
                            resize: "vertical",
                            transition: "all 0.3s",
                          }}
                          onFocus={e => {
                            e.target.style.borderColor = "#1565C0";
                            e.target.style.background = "rgba(255,255,255,0.05)";
                          }}
                          onBlur={e => {
                            e.target.style.borderColor = "rgba(255,255,255,0.1)";
                            e.target.style.background = "rgba(255,255,255,0.03)";
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          padding: "16px 36px",
                          background: "#1565C0",
                          color: "#0A2254",
                          border: "none",
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                          alignSelf: "flex-start",
                        }}
                        className="flex items-center gap-2 hover:bg-alabaster hover:text-obsidian"
                      >
                        Envoyer le message <Send size={12} />
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10 gap-5"
                  >
                    <div style={{ width: "64px", height: "64px", border: "1.5px solid #1565C0", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }} className="items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="font-playfair text-2xl text-alabaster mt-2">
                      Message envoyé !
                    </h3>
                    <p className="font-jost text-sm font-light text-alabaster/60 leading-relaxed max-w-sm">
                      Nous avons bien reçu vos coordonnées et vous répondrons avec la plus grande considération sous 24 heures.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                      style={{
                        padding: "12px 28px",
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255,0.25)",
                        color: "#FFFFFF",
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        marginTop: "12px",
                        transition: "all 0.3s",
                      }}
                      className="hover:border-accent hover:text-accent"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ── MAP DISPLAY SECTION ─────────────────────────── */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div
              className="relative overflow-hidden border border-stone-200/50 shadow-lg"
              style={{ height: "440px", background: "#FFFFFF" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.365313980327!2d-9.5893666!3d30.3983712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7c4d24f96d9:0x9100e3dda0b0e6be!2sAMARENA!5e0!3m2!1sfr!2sma!4v1717512800000!5m2!1sfr!2sma"
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Amarena Agadir"
              />
              {/* Gold frame overlay inside the map container */}
              <div
                className="absolute inset-4 pointer-events-none border border-accent/25"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
