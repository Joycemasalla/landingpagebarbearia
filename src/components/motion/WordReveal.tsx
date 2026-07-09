import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  goldFrom?: number; // index at which words start using gold gradient
  as?: "h1" | "h2" | "p";
  children?: ReactNode;
};

export function WordReveal({ text, className, delay = 0, goldFrom }: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline pb-[0.1em] mr-[0.25em]">
          <motion.span
            className={`inline-block ${goldFrom !== undefined && i >= goldFrom ? "text-gradient-gold" : ""}`}
            initial={reduce ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
