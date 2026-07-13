import { useState, useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MenuItem {
  name: string;
  desc?: string;
  price?: string;
}

interface MenuGroup {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface MenuCategory {
  key: string;
  label: string;
  icon: string;
  img: string;
  tagline?: string;
  note?: string;
  items?: MenuItem[];
  groups?: MenuGroup[];
}

const categories: MenuCategory[] = [
  {
    key: "glaces",
    label: "Glaces Artisanales",
    icon: "🍨",
    img: "/images/gallery/sundae.webp",
    tagline: "1 à 3 boules, parfums signature et cornets artisanaux.",
    items: [
      { name: "1 Boule", price: "13 DH" },
      { name: "2 Boules", price: "24 DH" },
      { name: "3 Boules", price: "35 DH" },
      { name: "Pistache", price: "16 DH" },
      { name: "Franui", price: "18 DH" },
      { name: "Cornet de Glace", price: "15 DH" },
    ],
  },
  {
    key: "ice-cream-slices",
    label: "Ice Cream Slices",
    icon: "🍦",
    img: "/images/gallery/matcha.webp",
    note: "Des portions gourmandes, idéales à partager.",
    items: [
      { name: "1 Ice Cream Slice", price: "30 DH" },
      { name: "2 Ice Cream Slices", price: "56 DH" },
      { name: "3 Ice Cream Slices", price: "78 DH" },
    ],
  },
  {
    key: "crunch-box",
    label: "Crunch Box",
    icon: "📦",
    img: "/images/gallery/sundae.webp",
    note: "Tous à 18 DH.",
    items: [
      { name: "Ferrero Rocher" },
      { name: "Kinder Bueno" },
      { name: "KitKat" },
      { name: "Caramel" },
      { name: "Nutella" },
      { name: "Oreo" },
      { name: "Lotus" },
    ],
  },
  {
    key: "iced-coffees",
    label: "Iced Coffees",
    icon: "🧊",
    img: "/images/gallery/ice-cafe.webp",
    note: "Sirops disponibles : Caramel · Vanille · Noisette · Gingembre · Cannelle · Popcorn. Tous à 28 DH.",
    items: [
      { name: "Iced Latte" },
      { name: "Spanish Iced Latte" },
      { name: "Iced Cappuccino" },
      { name: "Iced Flat White" },
      { name: "Iced Americano" },
      { name: "Iced Mocha" },
    ],
  },
  {
    key: "milkshakes",
    label: "Milkshakes",
    icon: "🥤",
    img: "/images/gallery/milk-shake.webp",
    tagline: "Préparés avec une boule de glace et de la soft vanilla ice cream.",
    note: "Tous à 38 DH.",
    items: [
      { name: "Chocolat Noir" },
      { name: "Oreo" },
      { name: "Ferrero Rocher" },
      { name: "Kinder Bueno" },
      { name: "Lotus Biscoff" },
      { name: "Snickers" },
      { name: "Vanille" },
      { name: "Pistache" },
      { name: "Tiramisu" },
    ],
  },
  {
    key: "affogato",
    label: "Affogato",
    icon: "☕",
    img: "/images/gallery/affogato.webp",
    note: "Tous à 38 DH.",
    items: [
      { name: "Affogato Tiramisu" },
      { name: "Affogato Vanille" },
      { name: "Affogato Pistache" },
      { name: "Affogato Chocolat" },
      { name: "Affogato Kinder Bueno" },
      { name: "Affogato Ferrero Rocher" },
      { name: "Affogato Oreo" },
      { name: "Affogato Cheesecake" },
    ],
  },
  {
    key: "frappes",
    label: "Frappés",
    icon: "🧋",
    img: "/images/gallery/frappes.webp",
    note: "Tous à 36 DH.",
    items: [
      { name: "Tropical Mango Bubble" },
      { name: "Fraise" },
      { name: "Myrtille" },
      { name: "Vanille" },
      { name: "Salted Caramel Café" },
      { name: "Salted Caramel" },
      { name: "Chocolat" },
      { name: "Lotus" },
    ],
  },
  {
    key: "sundaes",
    label: "Sundaes",
    icon: "🍧",
    img: "/images/gallery/sundae.webp",
    note: "Tous à 48 DH.",
    groups: [
      {
        title: "Sundaes Signature",
        items: [
          {
            name: "Chaud et Froid",
            desc: "Boule glace chocolat, cake chocolat chaud, soft vanilla ice cream, sauce caramel, copeaux chocolat au lait, gaufrette Amarena",
          },
          {
            name: "Amarena Sundae Royal",
            desc: "Boule glace Ferrero Rocher, biscuit Ferrero Rocher, soft vanilla ice cream, sauce chocolat au lait, copeaux chocolat, gaufrette Amarena",
          },
          {
            name: "Chocolatier",
            desc: "Boule glace chocolat, boule glace vanille, soft vanilla ice cream, sauce chocolat au lait, copeaux chocolat, gaufrette Amarena",
          },
          {
            name: "Biscoff et Caramel",
            desc: "Boule glace spéculoos, boule glace caramel salé, soft vanilla ice cream, sauce caramel, gaufrette Amarena",
          },
          {
            name: "Oreo en Folie",
            desc: "2 boules glace Oreo, soft vanilla ice cream, Oreo crumbs, sauce chocolat au lait, gaufrette Amarena",
          },
          {
            name: "Délice aux Fruits Rouges",
            desc: "Boule sorbet framboise, boule sorbet fraise, soft vanilla ice cream, fraises fraîches, sauce fraise, gaufrette Amarena",
          },
          {
            name: "Banane et Fraise",
            desc: "Boule glace vanille, boule sorbet fraise, soft vanilla ice cream, banane et fraises fraîches, sauce mangue et fraise, gaufrette Amarena",
          },
          {
            name: "Kids Sundae",
            desc: "Boule glace Bubble Gum bleue, boule glace rose, soft vanilla ice cream, sauce bubble gum, sauce fraise, sprinklers, copeaux chocolat blanc, gaufrette Amarena",
          },
        ],
      },
    ],
  },
  {
    key: "boissons-chaudes",
    label: "Boissons Chaudes",
    icon: "☕",
    img: "/images/gallery/boisson-chaud.webp",
    items: [
      { name: "Café Latte", price: "20 DH" },
      { name: "Cappuccino", price: "22 DH" },
      { name: "Americano", price: "18 DH" },
      { name: "Flat White", price: "20 DH" },
      { name: "Mocha", price: "22 DH" },
      { name: "Espresso", price: "15 DH" },
      { name: "Cortado", price: "16 DH" },
      { name: "Chocolat Chaud Français", price: "26 DH" },
      { name: "Chocolat Blanc Chaud", price: "26 DH" },
    ],
  },
  {
    key: "jus",
    label: "Jus",
    icon: "🧃",
    img: "/images/gallery/jus.webp",
    items: [
      { name: "Orange", price: "20 DH" },
      { name: "Fraise", price: "20 DH" },
      { name: "Citron", price: "20 DH" },
      { name: "Banane", price: "20 DH" },
      { name: "Pommes", price: "20 DH" },
      { name: "Carotte", price: "20 DH" },
      { name: "Ananas", price: "26 DH" },
      { name: "Mangue", price: "26 DH" },
      { name: "Fruits Rouges", price: "26 DH" },
      { name: "Kiwi", price: "26 DH" },
    ],
  },
  {
    key: "matcha",
    label: "Matcha",
    icon: "🍵",
    img: "/images/gallery/matcha.webp",
    note: "Tous à 28 DH.",
    items: [
      { name: "Strawberry Matcha Latte" },
      { name: "Mango Matcha Fusion" },
      { name: "Myrtille Matcha" },
      { name: "Coconut Matcha Latte" },
      { name: "Vanilla Matcha Latte" },
      { name: "Honey Matcha Latte" },
      { name: "Matcha Coffee" },
      { name: "Sparkling Matcha" },
      { name: "Matcha Tonic" },
    ],
  },
  {
    key: "gaufres",
    label: "Gaufres & Crêpes",
    icon: "🧇",
    img: "/images/gallery/gaufres.webp",
    items: [
      { name: "Gaufre Ferrero Rocher", desc: "Gaufre croustillante nappée de chocolat noisette, éclats de Ferrero Rocher et pralin", price: "48 DH" },
      { name: "Gaufre Kinder Bueno", desc: "Gaufre avec sauce Kinder Bueno, morceaux croustillants et gelato vanille", price: "48 DH" },
      { name: "Gaufre Oreo", desc: "Gaufre recouverte de brisures d'Oreo et d'un coulis de chocolat blanc", price: "42 DH" },
      { name: "Gaufre Nutella", desc: "Gaufre classique généreusement nappée de véritable Nutella", price: "42 DH" },
      { name: "Gaufre Speculoos", desc: "Garnie de crème de spéculoos Lotus et miettes crouquantes", price: "42 DH" },
      { name: "Gaufre Banane & Fraise", desc: "Fruits frais, coulis de chocolat et une touche de chantilly", price: "42 DH" },
      { name: "Crêpe Chocolat Obsession", desc: "Boule glace chocolat, cake chocolat chaud, soft vanilla ice cream, sauce chocolat au lait, copeaux chocolat au lait, gaufrette Amarena", price: "46 DH" },
      { name: "Crêpe Ferrero Rocher", desc: "Nappage noisette intense et éclats de Ferrero Rocher", price: "48 DH" },
      { name: "Crêpe Kinder Bueno", desc: "Fourrée à la crème Kinder Bueno et morceaux croquants", price: "48 DH" },
      { name: "Crêpe Oreo", desc: "Brisures d'Oreo et sauce chocolat crémeuse", price: "42 DH" },
      { name: "Crêpe Nutella", desc: "La traditionnelle crêpe au Nutella, fondante et généreuse", price: "42 DH" },
      { name: "Crêpe Banane & Fraise", desc: "Duo de fruits frais et coulis de fraise maison", price: "42 DH" },
    ],
  },
  {
    key: "pancakes",
    label: "Pancakes",
    icon: "🥞",
    img: "/images/gallery/pancakes.webp",
    note: "Tous à 46 DH.",
    items: [
      { name: "Crème Nutella", desc: "Boule glace vanille, sauce Nutella, Oreo crumbs, crème vanille onctueuse, gaufrette Amarena", price: "46 DH" },
      { name: "Fruits Rouges", desc: "Boule glace fruits rouges, sauce fraise, crème vanille onctueuse, gaufrette Amarena", price: "46 DH" },
      { name: "Oreo", desc: "Boule glace Oreo, Oreo crumbs, sauce chocolat au lait, crème vanille onctueuse, gaufrette Amarena", price: "46 DH" },
      { name: "Lotus Biscoff", desc: "Boule glace Lotus Biscoff, Lotus Biscoff crumbs, sauce Lotus Biscoff, crème vanille onctueuse, gaufrette Amarena", price: "46 DH" },
      { name: "Kinder Bueno", desc: "Boule glace Kinder Bueno, Kinder Bueno crumbs, sauce chocolat au lait, crème vanille onctueuse, gaufrette Amarena", price: "46 DH" },
      { name: "Amarena", desc: "Boule glace Amarena au yaourt, sauce chocolat blanc, crème vanille onctueuse, gaufrette Amarena", price: "46 DH" },
    ],
  },
  {
    key: "cookie-dough",
    label: "Cookie Dough & Hot Puddings",
    icon: "🍪",
    img: "/images/gallery/cookie-dough-et-hot-puddings-1.webp",
    note: "Tous à 46 DH.",
    items: [
      { name: "Double Treat", desc: "Cookie chocolat au lait + chocolat blanc, boule glace Oreo, soft vanilla ice cream, Ferrero Rocher, sauces chocolat blanc et au lait, copeaux chocolat, gaufrette Amarena", price: "46 DH" },
      { name: "Ferrero Rocher", desc: "Double cookie chocolat au lait, boule glace Ferrero Rocher, sauce chocolat au lait, copeaux chocolat, gaufrette Amarena", price: "46 DH" },
      { name: "Kinder Bueno (Chocolat au lait)", desc: "Double cookie chocolat au lait, boule glace Kinder Bueno, biscuit Kinder Bueno, sauce chocolat au lait, copeaux chocolat, gaufrette Amarena", price: "46 DH" },
      { name: "Kinder Bueno (Chocolat blanc)", desc: "Double cookie chocolat blanc, boule glace Kinder Bueno, biscuit Kinder Bueno chocolat blanc, sauce chocolat blanc, copeaux chocolat blanc, gaufrette Amarena", price: "46 DH" },
      { name: "Chocolat au Lait", desc: "Double cookie chocolat au lait, boule glace chocolat noir, sauce chocolat au lait, copeaux chocolat, gaufrette Amarena", price: "46 DH" },
      { name: "Chocolat Blanc", desc: "Double cookie chocolat blanc, boule glace chocolat noir, sauce chocolat blanc, copeaux chocolat blanc, gaufrette Amarena", price: "46 DH" },
      { name: "Crème Nutella", desc: "Cookie chocolat au lait, boule glace vanille, nutella, copeaux chocolat au lait, gaufrette Amarena", price: "46 DH" },
      { name: "Oreo Cookie Dough", desc: "Double cookie chocolat au lait, boule glace Oreo, Oreo crumbs, sauce chocolat blanc, gaufrette Amarena", price: "46 DH" },
      { name: "Cookies Banane et Fraise", desc: "Cookie chocolat au lait et chocolat blanc, boule glace vanille, sauce chocolat blanc et au lait, gaufrette Amarena", price: "46 DH" },
    ],
  },
  {
    key: "sweets-cakes",
    label: "Sweets & Cakes",
    icon: "🍰",
    img: "/images/gallery/san-sebastian.webp",
    groups: [
      {
        title: "San Sebastian",
        subtitle: "Tous à 35 DH",
        items: [
          { name: "San Sebastian Chocolat au Lait" },
          { name: "San Sebastian Kunafa Pistache" },
          { name: "San Sebastian Pistache" },
          { name: "San Sebastian Trio Chocolat" },
        ],
      },
      {
        title: "Fondants",
        subtitle: "Tous à 45 DH",
        items: [
          { name: "Fondant Chocolat" },
          { name: "Fondant Caramel" },
          { name: "Fondant Kunafa Pistache" },
          { name: "Fondant Pistache" },
        ],
      },
      {
        title: "Brownies",
        subtitle: "Tous à 35 DH",
        items: [
          { name: "Brownie Kunafa Pistache" },
          { name: "Brownie Cookies" },
          { name: "Brownie Cheesecake" },
          { name: "Brownie" },
        ],
      },
    ],
  },
];

const stripPrice = (text: string | undefined): string | undefined => {
  if (!text) return text;
  const cleaned = text.replace(/[\s·.-]*tous\s+à\s+\d+\s*dh\.?/gi, "").trim();
  return cleaned === "" ? undefined : cleaned;
};

export function Menu() {
  const [activeKey, setActiveKey] = useState("glaces");
  const active = categories.find(c => c.key === activeKey)!;

  return (
    <div style={{ background: "#FFFFFF" }} className="min-h-screen">
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end pb-16 px-6 overflow-hidden bg-obsidian">
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="font-jost text-[0.65rem] tracking-[0.25em] text-white uppercase mb-3"
          >
            Notre Carte
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-alabaster tracking-wide leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Notre <em className="font-playfair font-normal italic text-accent">Carte</em>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "64px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-accent mx-auto mt-6"
          />
          <p className="mt-6 max-w-2xl mx-auto text-sm tracking-[0.1em] uppercase text-white/80 font-jost">
            Des recettes créatives, des desserts glacés et des boissons fraîches pensés pour partager.
          </p>
        </div>
      </section>

      {/* ── STICKY CATEGORIES BAR ───────────────────────── */}
      <section className="bg-obsidian border-y border-white/5 sticky top-20 z-30 px-6">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-start lg:justify-center gap-2 py-4" style={{ minWidth: "max-content" }}>
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveKey(cat.key)}
                className={`rounded-sm transition-all duration-300 ${activeKey === cat.key ? "bg-[#1565C0] text-white border-[#1565C0] shadow-[0_10px_25px_-5px_rgba(21,101,192,0.4)]" : "bg-transparent text-white/70 border-white/10 hover:text-[#1565C0] hover:border-[#1565C0]/40"}`}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 22px",
                  borderWidth: "1px",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU DETAILS ────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          key={activeKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky top-36">
              <FadeIn>
                <div className="relative overflow-hidden rounded-[32px] shadow-[0_50px_120px_rgba(15,23,42,0.12)]">
                  <img src={active.img} alt={active.label} className="w-full h-full min-h-[420px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/70">Category</div>
                    <h2 className="mt-2 text-3xl font-playfair">{active.label}</h2>
                    {active.tagline && <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-100">{active.tagline}</p>}
                    {stripPrice(active.note) && !active.tagline && <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-100">{stripPrice(active.note)}</p>}
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-8">
                <div className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase mb-3">
                  Tous nos produits sont préparés minute
                </div>
                <h2 className="font-playfair font-light text-3xl md:text-4xl text-primary leading-tight">
                  {active.label}
                </h2>
                {(stripPrice(active.note) || active.tagline) && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {active.tagline ?? stripPrice(active.note)}
                  </p>
                )}
              </div>

              <div className="space-y-10">
                {active.groups ? (
                  active.groups.map((group, groupIndex) => (
                    <FadeIn key={group.title} delay={groupIndex * 0.05}>
                      <div className="rounded-sm border border-[#0A2254]/8 bg-[#F8FAFF] p-8">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                          <div>
                            <h3 className="font-playfair text-xl text-[#0A2254]">{group.title}</h3>
                            {stripPrice(group.subtitle) && <p className="mt-2 text-sm text-muted-foreground">{stripPrice(group.subtitle)}</p>}
                          </div>
                        </div>

                        <div className="space-y-5">
                          {group.items.map(item => (
                            <div key={item.name} className="flex flex-col gap-2">
                              <div className="flex items-center justify-between gap-4">
                                <h4 className="font-jost text-base font-medium text-[#0A2254]">{item.name}</h4>
                              </div>
                              {item.desc && <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  ))
                ) : (
                  (active.items ?? []).map((item, idx) => (
                    <FadeIn key={item.name} delay={idx * 0.05}>
                      <div className="border-b border-[#0A2254]/8 pb-6 last:border-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <h3 className="font-jost text-base font-semibold text-[#0A2254]">{item.name}</h3>
                            {item.desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>}
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-obsidian text-alabaster/80 py-16 px-6 text-center border-t border-white/5">
        <p className="font-jost text-[0.82rem] font-light leading-relaxed max-w-xl mx-auto">
          Toutes nos compositions sont préparées à la main et servies avec soin.<br />
          <span className="text-accent mt-2 block font-normal tracking-[0.1em] uppercase">Agadir, Founty Bay · Ouvert tous les jours de 09:00 à 01:00</span>
        </p>
      </section>
    </div>
  );
}
