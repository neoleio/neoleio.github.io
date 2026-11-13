
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
};

export default function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 35 },
    left: { x: -35, y: 0 },
    right: { x: 35, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, ...offsets[direction] }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.75,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
