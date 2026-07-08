import { motion } from "framer-motion";
import { FaStar, FaGoogle } from "react-icons/fa";

const items = [
  { n: "Lucas Almeida", t: "Melhor barbearia de Miraí, sem dúvida. Atendimento impecável e corte perfeito toda vez.", i: "LA" },
  { n: "Pedro Henrique", t: "Ambiente top, produtos de qualidade e o Romário é um profissional fora de série.", i: "PH" },
  { n: "Marcos Silva", t: "Levo meu filho e vamos juntos. Trato de rei, sempre saímos satisfeitos.", i: "MS" },
  { n: "Rafael Costa", t: "A barba na navalha é outro nível. Já virei cliente fiel.", i: "RC" },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-[color:var(--ink)]">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Depoimentos</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            O que os <span className="text-gradient-gold">clientes dizem.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((r, i) => (
            <motion.figure
              key={r.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-background border border-white/5 p-6 hover:border-[color:var(--gold)]/30 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-gold text-sm">
                  {Array.from({ length: 5 }).map((_, j) => <FaStar key={j} />)}
                </div>
                <FaGoogle className="text-foreground/40" />
              </div>
              <blockquote className="mt-4 text-sm text-foreground/85 leading-relaxed">
                "{r.t}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold text-xs font-semibold">
                  {r.i}
                </div>
                <div>
                  <p className="text-sm text-foreground">{r.n}</p>
                  <p className="text-xs text-foreground/50">Cliente verificado</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
