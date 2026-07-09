import { FaStar, FaGoogle } from "react-icons/fa";
import { Marquee } from "@/components/motion/Marquee";

const items = [
  { n: "Lucas Almeida", t: "Melhor barbearia de Miraí, sem dúvida. Atendimento impecável e corte perfeito toda vez.", i: "LA" },
  { n: "Pedro Henrique", t: "Ambiente top, produtos de qualidade e o Romário é um profissional fora de série.", i: "PH" },
  { n: "Marcos Silva", t: "Levo meu filho e vamos juntos. Trato de rei, sempre saímos satisfeitos.", i: "MS" },
  { n: "Rafael Costa", t: "A barba na navalha é outro nível. Já virei cliente fiel.", i: "RC" },
  { n: "Bruno Ferreira", t: "Cheguei sem esperança de encontrar algo desse nível em Miraí. Me surpreendi.", i: "BF" },
  { n: "Diego Martins", t: "Marquei pelo WhatsApp e fui atendido no horário. Recomendo demais.", i: "DM" },
];

function Card({ r }: { r: (typeof items)[number] }) {
  return (
    <figure className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-background border border-white/5 p-6 hover:border-[color:var(--gold)]/40 transition">
      <div className="flex items-center justify-between">
        <div className="flex text-gold text-sm">
          {Array.from({ length: 5 }).map((_, j) => <FaStar key={j} />)}
        </div>
        <FaGoogle className="text-foreground/40" />
      </div>
      <blockquote className="mt-4 text-sm text-foreground/85 leading-relaxed">"{r.t}"</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold text-xs font-semibold">{r.i}</div>
        <div>
          <p className="text-sm text-foreground">{r.n}</p>
          <p className="text-xs text-foreground/50">Cliente verificado</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-[color:var(--ink)] overflow-hidden">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Depoimentos</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            O que os <span className="text-gradient-gold">clientes dizem.</span>
          </h2>
        </div>
      </div>

      <div className="mt-14 space-y-5">
        <Marquee speed={50}>
          {items.map((r) => <Card key={`a-${r.n}`} r={r} />)}
        </Marquee>
        <Marquee speed={60} reverse>
          {[...items].reverse().map((r) => <Card key={`b-${r.n}`} r={r} />)}
        </Marquee>
      </div>
    </section>
  );
}
