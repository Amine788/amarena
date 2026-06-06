import { Outlet, useLocation } from "react-router";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function Root() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const ringRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const targetPos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  // Scroll to top on path change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Loading animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Custom Cursor mouse movement and lag animation
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setShowCursor(true);
      setCursorPos({ x: e.clientX, y: e.clientY });
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      setShowCursor(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Easing for the cursor outer ring
    const animateRing = () => {
      const ease = 0.15; // interpolation factor
      const dx = targetPos.current.x - ringRef.current.x;
      const dy = targetPos.current.y - ringRef.current.y;
      
      ringRef.current.x += dx * ease;
      ringRef.current.y += dy * ease;
      
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      animationFrameId.current = requestAnimationFrame(animateRing);
    };

    animationFrameId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // Hover detection for buttons and interactive items
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("interactive-hover");

      if (isInteractive) {
        setIsHovered(true);
        document.body.classList.add("cursor-hovering");
      } else {
        setIsHovered(false);
        document.body.classList.remove("cursor-hovering");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("cursor-hovering");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 selection:bg-accent/20">
      {/* Cinematic Custom Cursor */}
      {showCursor && (
        <>
          <div 
            className="custom-cursor hidden md:block" 
            style={{ left: cursorPos.x, top: cursorPos.y }} 
          />
          <div 
            className="custom-cursor-ring hidden md:block" 
            style={{ left: ringPos.x, top: ringPos.y }} 
          />
        </>
      )}

      {/* Luxury Brand Intro Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              y: "-100%", 
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian text-alabaster"
          >
            <div className="flex flex-col items-center max-w-md w-full px-6">
              {/* Gold Logo Animation */}
              <motion.img 
                src="/logo.png" 
                alt="Amarena" 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                  height: "300px",
                  width: "auto",
                  objectFit: "contain",
                  marginBottom: "24px"
                }}
              />
              <motion.h1 
                className="font-playfair font-normal text-2xl tracking-[0.3em] uppercase text-accent mb-6 animate-letter-draw"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                AMARENA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="font-jost text-[0.6rem] tracking-[0.25em] uppercase text-alabaster/70 mb-10"
              >
                La Mama Del Gelato
              </motion.p>
              
              {/* Luxury Minimalist Loading Bar */}
              <div className="w-48 h-[1px] bg-alabaster/10 relative overflow-hidden">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut", repeat: 0 }}
                  className="absolute inset-y-0 w-full bg-accent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
