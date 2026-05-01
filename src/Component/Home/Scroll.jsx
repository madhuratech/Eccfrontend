import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function ScrollToTopFan() {
  const [show, setShow] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      setShow(currentScrollY > 300);
      setRotation((prev) => prev + diff * 0.7);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/85 shadow-lg backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <div className="relative flex h-8 w-8 items-center justify-center">
            {/* rotating wings only */}
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute h-3 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-300" />
              <div className="absolute h-3 w-8 rotate-[120deg] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-300" />
              <div className="absolute h-3 w-8 rotate-[240deg] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-300" />
            </motion.div>

            {/* static center arrow */}
            <div className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/95 ring-1 ring-white/10">
              <ArrowUp className="h-3.5 w-3.5 text-white" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopFan;