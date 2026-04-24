"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  
  // O hook useInView detecta quando o elemento entra na viewport.
  // once: true garante que a animação ocorra apenas na primeira vez.
  // amount: 0.1 significa que a animação dispara quando 10% do elemento estiver visível.
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.section>
  );
}