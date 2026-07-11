import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useBooking } from "@/lib/booking-context";

const services = [
  {
    title: "Corte Masculino",
    desc: "Corte moderno ou clássico, finalizado com produtos profissionais.",
    price: "R$ 40",
    featured: false,
  },
  {
    title: "Combo Corte + Barba",
    desc: "A experiência completa: visual renovado dos pés à cabeça.",
    price: "R$ 70",
    featured: true,
  },
  {
    title: "Barba na Navalha",
    desc: "Toalha quente, óleo, navalha e finalização impecável.",
    price: "R$ 35",
    featured: false,
  },
];

export function Services() {
  const { open } = useBooking();
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Serviços</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Escolha o seu <span className="text-gradient-gold">estilo.</span>
          </h2>
          <p className="mt-4 text-foreground/70">
            Preços justos. Padrão premium. Você sai daqui como novo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all hover:-translate-y-1 ${
                s.featured
                  ? "bg-gradient-to-b from-[color:var(--ink)] to-black border-[color:var(--gold)]/50 shadow-[var(--shadow-elegant)]"
                  : "bg-[color:var(--ink)] border-white/5 hover:border-[color:var(--gold)]/30"
              }`}
            >
              {s.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold text-[color:var(--ink)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Recomendado
                </span>
              )}
              <h3 className="text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 min-h-[3rem]">{s.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-display text-gradient-gold">{s.price}</span>
                <span className="text-xs text-foreground/50">a partir de</span>
              </div>
              <button
                type="button"
                onClick={open}
                className={`mt-8 ${s.featured ? "btn-gold hover:btn-gold-hover" : "btn-ghost-gold hover:bg-white/5"}`}
              >
                <FaWhatsapp /> Agendar
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
