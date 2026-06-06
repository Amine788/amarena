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

const categories = [
  {
    key: "glaces",
    label: "Glaces Artisanales",
    icon: "🍨",
    img: "/images/pistachio_scoop_1780571675058.png",
    items: [
      { name: "Pistache Royale", desc: "Pistaches DOP de Sicile torréfiées à sec, miel brut et fleur de sel" },
      { name: "Noir Intense 72°", desc: "Chocolat noir grand cru, coulis chaud et grué de cacao" },
      { name: "Vanille Tahitienne", desc: "Gousses de vanille de Tahiti infusées 24h, parfum doux et complexe" },
      { name: "Amarena Classique", desc: "Gelato fior di latte marbré de cerises amarena sauvages confites" },
      { name: "Sorbet Framboise & Rose", desc: "Framboises fraîches écrasées infusées aux pétales de roses bulgares" },
      { name: "Citron de Sicile & Menthe", desc: "Sorbet rafraîchissant aux citrons de Syracuse et menthe fraîche du jardin" },
    ],
  },
  {
    key: "sundaes",
    label: "Sundaes Signatures",
    icon: "🍧",
    img: "/images/sundae_crystal_1780571697743.png",
    items: [
      { name: "Amarena Sundae Royal", desc: "Trio de nos meilleures créations, noisettes caramélisées et crème fouettée maison" },
      { name: "Le Chocolatier", desc: "Gelato chocolat noir, brownie fondant maison, coulis chaud et pépites de chocolat" },
      { name: "Oreo En Folie", desc: "Gelato vanille, brisures d'Oreo, sauce chocolat crémeuse et chantilly parfumée" },
      { name: "Délice aux Fruits Rouges", desc: "Gelato framboise, fraises fraîches, coulis acidulé et meringue croustillante" },
      { name: "Banana & Fraise", desc: "Gelato vanille et fraise, tranches de banane fraîche, sauce caramel au beurre salé" },
    ],
  },
  {
    key: "mcflurry",
    label: "McFlurry Amarena",
    icon: "🍦",
    img: "/images/vanilla_cone_elegant_1780571715882.png",
    items: [
      { name: "McFlurry Oreo", desc: "Mélange onctueux avec biscuits Oreo croquants et sauce chocolat maison" },
      { name: "McFlurry Nutella", desc: "Notre glace crémeuse marbrée de véritable Nutella fondu" },
      { name: "McFlurry Lotus Biscoff", desc: "Sauce spéculoos et biscuits Lotus croustillants écrasés" },
      { name: "McFlurry Kinder Bueno", desc: "Brisures de Kinder Bueno et crème noisette fondante" },
      { name: "McFlurry Ferrero Rocher", desc: "Éclats de Ferrero Rocher et coulis praliné d'exception" },
    ],
  },
  {
    key: "milkshakes",
    label: "Milkshakes Premium",
    icon: "🥛",
    img: "/images/chocolate_pour_1780571728870.png",
    items: [
      { name: "Milkshake Pistache de Sicile", desc: "Gelato pistache royale mixé au lait crémeux et éclats de pistaches torréfiées" },
      { name: "Milkshake Ferrero Rocher", desc: "Gelato chocolat et praliné noisette, surmonté de chantilly dorée" },
      { name: "Milkshake Tiramisu", desc: "Gelato café et mascarpone, biscuit imbibé d'espresso et cacao en poudre" },
      { name: "Milkshake Kinder Bueno", desc: "Glace onctueuse mixée aux brisures de Kinder Bueno blanc" },
      { name: "Milkshake Lotus Speculoos", desc: "Glace spéculoos Lotus et éclats croustillants de biscuits" },
    ],
  },
  {
    key: "matcha",
    label: "Matcha Collection",
    icon: "🍵",
    img: "/images/trio_scoops_hero_1780571685837.png",
    items: [
      { name: "Strawberry Matcha Latte", desc: "Pure purée de fraises fraîches, lait velouté et matcha de cérémonie japonais fouetté" },
      { name: "Mango Matcha Fusion", desc: "Coulis de mangue Alphonso mûre, lait d'avoine et matcha bio" },
      { name: "Coconut Matcha Latte", desc: "Eau de coco fraîche, lait de coco crémeux et matcha premium glacé" },
      { name: "Vanilla Matcha Latte", desc: "Sirop de vanille de Madagascar maison, lait et matcha fouetté" },
      { name: "Honey Matcha Latte", desc: "Miel de fleurs local sauvage, lait chaud et matcha de cérémonie" },
    ],
  },
  {
    key: "cafes-glaces",
    label: "Cafés Glacés",
    icon: "🧊",
    img: "/images/shop_interior_1780571741726.png",
    items: [
      { name: "Iced Flat White", desc: "Double shot d'espresso d'Éthiopie glacé, lait froid et fine mousse" },
      { name: "Iced Caramel Macchiato", desc: "Espresso, lait crémeux, sirop de vanille et filet de caramel beurre salé" },
      { name: "Iced Latte Premium", desc: "Espresso de spécialité versé sur du lait glacé" },
      { name: "Iced Cappuccino", desc: "Cappuccino frappé avec une mousse de lait onctueuse et froide" },
      { name: "Iced Mocha", desc: "Mélange gourmand d'espresso, chocolat noir et lait frais glacé" },
    ],
  },
  {
    key: "boissons-chaudes",
    label: "Boissons Chaudes",
    icon: "☕",
    img: "/images/chocolate_pour_1780571728870.png",
    items: [
      { name: "Espresso Double Bio", desc: "Café d'origine Arabica torréfié à cœur, notes chocolatées" },
      { name: "Cappuccino Italien", desc: "Espresso intense, lait vaporisé et mousse de lait soyeuse" },
      { name: "Café Latte Onctueux", desc: "Lait chaud délicatement infusé d'un espresso de spécialité" },
      { name: "Chocolat Chaud Amarena", desc: "Chocolat grand cru fondu au lait entier bio, texture velours" },
      { name: "Mocha Signature", desc: "Chocolat fondu, espresso et lait chaud onctueux" },
    ],
  },
  {
    key: "jus",
    label: "Jus Frais",
    icon: "🍹",
    img: "/images/media__1780571703270.png",
    items: [
      { name: "Orange Pressée", desc: "Oranges de saison pressées à la minute pour une fraîcheur absolue" },
      { name: "Mangue Tropicale", desc: "Jus de mangue onctueux et parfumé, préparé à partir de fruits mûrs" },
      { name: "Kiwi Énergie", desc: "Jus de kiwi frais, riche en vitamines et légèrement acidulé" },
      { name: "Fraise Délice", desc: "Nectar de fraises fraîches mixées pour une douceur fruitée" },
      { name: "Citronnade Maison", desc: "Jus de citron frais, menthe et une touche de sucre de canne" },
      { name: "Fruits Rouges Mix", desc: "Mélange de framboises, fraises et myrtilles pour un cocktail intense" },
    ],
  },
  {
    key: "gaufres",
    label: "Gaufres & Crêpes",
    icon: "🧇",
    img: "/images/vanilla_cone_elegant_1780571715882.png",
    items: [
      { name: "Gaufre Ferrero Rocher", desc: "Gaufre croustillante nappée de chocolat noisette, éclats de Ferrero Rocher et pralin" },
      { name: "Gaufre Kinder Bueno", desc: "Gaufre avec sauce Kinder Bueno, morceaux croustillants et gelato vanille" },
      { name: "Gaufre Oreo", desc: "Gaufre recouverte de brisures d'Oreo et d'un coulis de chocolat blanc" },
      { name: "Gaufre Nutella", desc: "Gaufre classique généreusement nappée de véritable Nutella" },
      { name: "Gaufre Speculoos", desc: "Garnie de crème de spéculoos Lotus et miettes croquantes" },
      { name: "Gaufre Banane & Fraise", desc: "Fruits frais, coulis de chocolat et une touche de chantilly" },
      { name: "Crêpe Chocolat Obsession", desc: "Crêpe fine garnie de chocolat fondu maison et de pépites de chocolat" },
      { name: "Crêpe Ferrero Rocher", desc: "Nappage noisette intense et éclats de Ferrero Rocher" },
      { name: "Crêpe Kinder Bueno", desc: "Fourrée à la crème Kinder Bueno et morceaux croquants" },
      { name: "Crêpe Oreo", desc: "Brisures d'Oreo et sauce chocolat crémeuse" },
      { name: "Crêpe Nutella", desc: "La traditionnelle crêpe au Nutella, fondante et généreuse" },
      { name: "Crêpe Banane & Fraise", desc: "Duo de fruits frais et coulis de fraise maison" },
    ],
  },
  {
    key: "pancakes",
    label: "Pancakes Délicieux",
    icon: "🥞",
    img: "/images/sundae_crystal_1780571697743.png",
    items: [
      { name: "Pancakes Oreo", desc: "Pancakes moelleux, brisures d'Oreo et sauce chocolat blanc" },
      { name: "Pancakes Fruits Rouges", desc: "Accompagnés de fruits rouges frais et d'un coulis acidulé" },
      { name: "Pancakes Lotus Biscoff", desc: "Recouverts de crème Lotus fondante et biscuits croquants" },
      { name: "Pancakes Kinder Bueno", desc: "Nappés de sauce Kinder et morceaux de chocolat noisette" },
      { name: "Pancakes Amarena Signature", desc: "Coulis de cerise amarena, crème fior di latte et amandes grillées" },
    ],
  },
];

export function Menu() {
  const [activeKey, setActiveKey] = useState("glaces");
  const active = categories.find(c => c.key === activeKey)!;

  return (
    <div style={{ background: "#FFFFFF" }} className="min-h-screen">
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105"
          style={{
            backgroundImage: `url(/images/trio_scoops_hero_1780571685837.png)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="font-jost text-[0.65rem] tracking-[0.25em] text-white uppercase mb-3"
          >
            Le Plaisir Absolu des Sens
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light text-alabaster tracking-wide leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            La Carte
          </motion.h1>
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
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 22px",
                  background: activeKey === cat.key ? "#1565C0" : "transparent",
                  color: activeKey === cat.key ? "#0A2254" : "rgba(255, 255, 255,0.6)",
                  border: "1px solid",
                  borderColor: activeKey === cat.key ? "#1565C0" : "rgba(21, 101, 192,0.15)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  if (activeKey !== cat.key) {
                    e.currentTarget.style.color = "#1565C0";
                    e.currentTarget.style.borderColor = "rgba(21, 101, 192,0.45)";
                  }
                }}
                onMouseLeave={e => {
                  if (activeKey !== cat.key) {
                    e.currentTarget.style.color = "rgba(255, 255, 255,0.6)";
                    e.currentTarget.style.borderColor = "rgba(21, 101, 192,0.15)";
                  }
                }}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARD PRESENTATION ───────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          key={activeKey}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Visual block */}
            <div className="lg:col-span-5 lg:sticky top-40">
              <FadeIn>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary shadow-2xl">
                    <img
                      src={active.img}
                      alt={active.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative Frame */}
                  <div
                    className="absolute -bottom-4 -right-4 -z-10 w-[70%] h-[70%] border border-accent/35"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </FadeIn>
            </div>

            {/* Menu items listing */}
            <div className="lg:col-span-7">
              <div className="font-jost text-[0.62rem] tracking-[0.25em] text-accent uppercase mb-2">
                Sélection Premium
              </div>
              <h2 className="font-playfair font-light text-3xl md:text-4xl text-primary leading-tight mb-8">
                {active.label}
              </h2>
              
              <div className="flex flex-col">
                {active.items.map((item, idx) => (
                  <FadeIn key={item.name} delay={idx * 0.05}>
                    <div className="flex flex-col py-6 border-b border-stone-200/50 group">
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {/* Small gold bullet */}
                          <div className="w-[5px] h-[5px] rounded-full bg-accent opacity-60 group-hover:scale-150 transition-transform duration-300" />
                          <h3 className="font-jost text-base font-normal text-primary group-hover:text-accent transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                        {/* Empty line separator matching Michelin menus */}
                        <div className="flex-1 border-b border-dotted border-stone-200 group-hover:border-accent/30 transition-colors hidden md:block mx-4" />
                        <span className="font-playfair italic text-xs text-accent">Signature</span>
                      </div>
                      {item.desc && (
                        <p className="font-jost text-[0.82rem] font-light text-muted-foreground leading-relaxed mt-2 pl-4">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── NOTE DE BAS ─────────────────────────────────── */}
      <section className="bg-obsidian text-alabaster/80 py-16 px-6 text-center border-t border-white/5">
        <p className="font-jost text-[0.82rem] font-light leading-relaxed max-w-xl mx-auto">
          Toutes nos compositions glacées sont préparées artisanalement chaque jour.<br />
          <span className="text-accent mt-2 block font-normal tracking-[0.1em] uppercase">Agadir, Founty Bay · Ouvert tous les jours de 09:00 à 01:00</span>
        </p>
      </section>
    </div>
  );
}
