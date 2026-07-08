import { motion } from "framer-motion";
import { Scissors, Wind, Sparkles, ShieldCheck, Clock, Award } from "lucide-react";

const items = [
  { Icon: Scissors, title: "Cortes modernos", desc: "Técnicas atualizadas para cada estilo." },
  { Icon: Award, title: "Barba na navalha", desc: "Acabamento perfeito, pele impecável." },
  { Icon: Sparkles, title: "Atendimento personalizado", desc: "Cada cliente é único. E é assim que tratamos." },
  { Icon: Wind, title: "Ambiente climatizado", desc: "Conforto do início ao fim do atendimento." },
  { Icon: ShieldCheck, title: "Produtos profissionais", desc: "Só o melhor no seu cabelo e barba." },
  { Icon: Clock, title: "Agendamento rápido", desc: "Reserve seu horário direto pelo WhatsApp." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Por que nos escolher</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Uma experiência <span className="text-gradient-gold">acima da média.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/5 bg-[color:var(--ink)] p-7 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-black/60 border border-[color:var(--gold)]/30 text-gold group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)] transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
