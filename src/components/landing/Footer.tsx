import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { MapPin, Clock } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container-x py-16 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt={SITE.name} className="h-20 w-auto object-contain" />
          </div>
          <p className="mt-4 text-sm text-foreground/60 max-w-xs">
            A experiência premium em corte e barba na cidade de Miraí, MG.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/75">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                <FaWhatsapp className="text-gold" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`tel:+${SITE.whatsappNumber}`} className="inline-flex items-center gap-2 hover:text-gold">
                <FaPhone className="text-gold" /> Ligar agora
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                <FaInstagram className="text-gold" /> @barbeariadoromariomirai
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Onde estamos</h4>
          <p className="mt-4 inline-flex items-start gap-2 text-sm text-foreground/75">
            <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
            <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              {SITE.address}
            </a>
          </p>
          <h4 className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">Horários</h4>
          <ul className="mt-3 space-y-2 text-sm text-foreground/75">
            {SITE.hours.map(({ d, h }) => (
              <li key={d} className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-gold" />
                <span className="text-foreground/60">{d}:</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Mapa</h4>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 aspect-video">
            <iframe
              title="Localização da Barbearia do Romário"
              src={SITE.mapEmbed}
              loading="lazy"
              className="h-full w-full grayscale opacity-80"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <p>Feito com estilo em Miraí, MG.</p>
        </div>
      </div>
    </footer>
  );
}
