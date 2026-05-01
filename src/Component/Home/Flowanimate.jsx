import React from "react";
import { motion } from "framer-motion";

const energyNodes = [
  { id: 1, left: "10%", top: "20%", delay: 0 },
  { id: 2, left: "24%", top: "70%", delay: 1.1 },
  { id: 3, left: "38%", top: "28%", delay: 0.5 },
  { id: 4, left: "58%", top: "76%", delay: 1.7 },
  { id: 5, left: "74%", top: "22%", delay: 0.9 },
  { id: 6, left: "88%", top: "56%", delay: 1.4 },
];

const sparkSymbols = [
  { id: 1, symbol: "⚡", size: "text-lg", left: "14%", top: "24%", delay: 0.3 },
  { id: 2, symbol: "⚡", size: "text-base", left: "46%", top: "16%", delay: 1.1 },
  { id: 3, symbol: "⚡", size: "text-xl", left: "70%", top: "72%", delay: 0.8 },
  { id: 4, symbol: "⚡", size: "text-base", left: "84%", top: "30%", delay: 1.6 },
];

const flowLines = [
  {
    id: 1,
    width: "440px",
    left: "-6%",
    top: "24%",
    rotate: "-8deg",
    duration: 8,
    delay: 0,
  },
  {
    id: 2,
    width: "360px",
    left: "18%",
    top: "60%",
    rotate: "7deg",
    duration: 9,
    delay: 1,
  },
  {
    id: 3,
    width: "400px",
    left: "52%",
    top: "30%",
    rotate: "-10deg",
    duration: 7.5,
    delay: 0.7,
  },
  {
    id: 4,
    width: "300px",
    left: "66%",
    top: "78%",
    rotate: "-16deg",
    duration: 8.5,
    delay: 1.2,
  },
];

function AnimatedEnergyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient glows */}
      <motion.div
        className="absolute left-[-120px] top-[-60px] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
          x: [0, 20, 0],
          y: [0, 16, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-80px] right-[-100px] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, -18, 0],
          y: [0, -12, 0],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[32%] top-[34%] h-80 w-80 rounded-full bg-emerald-400/5 blur-3xl"
        animate={{
          scale: [1, 1.14, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Core glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.06] blur-[120px]"
        animate={{
          scale: [0.95, 1.06, 0.95],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      {/* Sweeping vertical beam */}
      <motion.div
        className="absolute top-[-20%] h-[140%] w-32 rotate-[14deg] bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent blur-2xl"
        animate={{ x: ["-15%", "120%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Rotating orbit rings */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/80 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
      </motion.div>

      {/* Flow lines */}
      {flowLines.map((line) => (
        <div
          key={line.id}
          className="absolute h-[2px] overflow-hidden rounded-full bg-white/5"
          style={{
            width: line.width,
            left: line.left,
            top: line.top,
            transform: `rotate(${line.rotate})`,
          }}
        >
          <motion.div
            className="h-full w-24 rounded-full bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent blur-[1px]"
            animate={{ x: ["-140px", "560px"] }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
            }}
          />
          <motion.div
            className="absolute top-0 h-full w-14 rounded-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent blur-[2px]"
            animate={{ x: ["-160px", "580px"] }}
            transition={{
              duration: line.duration + 1.6,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay + 0.9,
            }}
          />
        </div>
      ))}

      {/* Energy nodes */}
      {energyNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ left: node.left, top: node.top }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 4.5 + node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/15"
            animate={{
              scale: [0.9, 1.9, 0.9],
              opacity: [0, 0.28, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: node.delay,
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-2xl"
            animate={{
              scale: [0.8, 1.15, 0.8],
              opacity: [0.16, 0.3, 0.16],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />

          <motion.div
            className="relative h-2.5 w-2.5 rounded-full bg-emerald-300/85 shadow-[0_0_20px_rgba(52,211,153,0.9)]"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Lightning sparks */}
      {sparkSymbols.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.size} font-semibold text-emerald-300/10`}
          style={{ left: item.left, top: item.top }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, -3, 0],
            scale: [1, 1.06, 1],
            opacity: [0.04, 0.14, 0.04],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-emerald-300/20"
          style={{
            width: i % 3 === 0 ? "5px" : i % 2 === 0 ? "4px" : "3px",
            height: i % 3 === 0 ? "5px" : i % 2 === 0 ? "4px" : "3px",
            left: `${5 + i * 5.2}%`,
            top: `${8 + (i % 6) * 14}%`,
            boxShadow: "0 0 14px rgba(52,211,153,0.35)",
          }}
          animate={{
            y: [0, -16, 0],
            x: [0, 6, 0],
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.18,
          }}
        />
      ))}

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(2,6,23,0.3)_100%)]" />
    </div>
  );
}

export default AnimatedEnergyBackground;