import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import aboutImg from "@/assets/about-romario.jpg";
import { waLink } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[color:var(--ink)]">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/20">
            <img
              src={aboutImg}
              alt="Romário, barbeiro fundador da Barbearia do Romário em Miraí"
              width={1200}
              height={1408}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden sm:block glass rounded-2xl px-5 py-4">
            <p className="text-3xl text-gradient-gold font-display">+10 anos</p>
            <p className="text-xs uppercase tracking-[0.25em] text-foreground/70">de profissão</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Sobre</p>
          <h2 className="mt-3 text-4xl sm:text-5xl leading-[1.05]">
            Feito à mão. <br /> <span className="text-gradient-gold">Com propósito.</span>
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Sou o Romário e há mais de uma década transformo o visual de homens
              que valorizam qualidade. O que começou como paixão virou um espaço
              onde cada corte é feito com atenção total ao seu estilo.
            </p>
            <p>
              Na minha barbearia, o tempo é seu. Nada de correria, nada de
              atendimento genérico — aqui você senta na cadeira e sai com a
              certeza de que fez a escolha certa.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <Stat n="10+" l="Anos" />
            <Stat n="800+" l="Clientes" />
            <Stat n="5.0" l="Avaliação" />
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hover:btn-gold-hover mt-10"
          >
            <FaWhatsapp className="text-lg" /> Marcar meu horário
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="text-3xl text-gradient-gold font-display">{n}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">{l}</p>
    </div>
  );
}
