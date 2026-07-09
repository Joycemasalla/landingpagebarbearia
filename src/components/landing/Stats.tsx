import { motion } from "framer-motion";
import { CountUp } from "@/components/motion/CountUp";

const stats = [
  { to: 800, suffix: "+", label: "Clientes satisfeitos" },
  { to: 5, suffix: "★", label: "Avaliação média Google" },
  { to: 6, suffix: " anos", label: "De tradição em Miraí" },
  { to: 15, suffix: "min", label: "Tempo médio de espera" },
];

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-[color:var(--ink)]/60 py-16">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="font-display text-5xl sm:text-6xl text-gradient-gold leading-none">
              <CountUp to={s.to} suffix={s.suffix} />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-foreground/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
