import { motion } from "framer-motion";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import heroImg from "@/assets/hero-barber.jpg";
import { waLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Barbeiro realizando corte moderno em cliente na Barbearia do Romário"
        width={1600}
        height={1808}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-transparent" />

      <div className="relative container-x flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-black/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Miraí — MG
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-foreground">
            Seu visual <br />
            <span className="text-gradient-gold">começa aqui.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/80 font-light">
            Cortes modernos, barba na navalha e um atendimento pensado nos mínimos detalhes.
            A experiência premium que sua rotina merece.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold hover:btn-gold-hover">
              <FaWhatsapp className="text-xl" /> Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost-gold hover:bg-white/5">
              Ver serviços
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
            </div>
            <div className="text-sm text-foreground/70">
              <span className="text-foreground font-medium">+800 clientes</span> satisfeitos · Horário marcado
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#servicos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/50 hover:text-gold"
        >
          role para descobrir ↓
        </motion.a>
      </div>
    </section>
  );
}
