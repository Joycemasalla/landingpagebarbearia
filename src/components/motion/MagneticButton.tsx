import { useRef, type ReactNode, type AnchorHTMLAttributes } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; strength?: number };

export function MagneticButton({ children, strength = 0.35, ...props }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      {...(props as object)}
    >
      {children}
    </motion.a>
  );
}
