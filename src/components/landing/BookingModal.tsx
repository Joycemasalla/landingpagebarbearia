import { useEffect, useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBooking } from "@/lib/booking-context";
import { SETMORE_URL, waLink } from "@/lib/site";

export function BookingModal() {
  const { isOpen, close } = useBooking();
  const [everOpened, setEverOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const loadedRef = useRef(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  // Mount the iframe on first open and KEEP it mounted so the user's
  // in-progress booking survives an accidental close.
  useEffect(() => {
    if (!isOpen) return;
    if (!everOpened) setEverOpened(true);
    if (loadedRef.current) return; // already loaded — no fresh timeout needed
    setLoaded(false);
    setFailed(false);
    timeoutRef.current = window.setTimeout(() => {
      if (!loadedRef.current) setFailed(true);
    }, 10_000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [isOpen, everOpened]);

  return (
    <Dialog open={isOpen} onOpenChange={(o) => (o ? null : close())}>
      <DialogContent
        className="p-0 gap-0 max-w-4xl w-[95vw] h-[85dvh] max-h-[85dvh] overflow-hidden border-[color:var(--gold)]/30 bg-[color:var(--ink)]"
      >
        <DialogTitle className="sr-only">Agendar horário</DialogTitle>
        <DialogDescription className="sr-only">
          Selecione um serviço e horário para agendar na Barbearia do Romário.
        </DialogDescription>

        <div className="relative h-full w-full">
          {!loaded && !failed && (
            <div className="absolute inset-0 z-10 grid place-items-center bg-[color:var(--ink)]">
              <div className="flex flex-col items-center gap-4 text-foreground/70">
                <Loader2 className="h-8 w-8 animate-spin text-gold" aria-hidden="true" />
                <p className="text-sm uppercase tracking-[0.25em]" role="status">Carregando agenda…</p>
              </div>
            </div>
          )}

          {failed && (
            <div className="absolute inset-0 z-20 grid place-items-center bg-[color:var(--ink)] px-6 text-center">
              <div className="max-w-sm">
                <h3 className="text-2xl">Não foi possível carregar a agenda</h3>
                <p className="mt-3 text-sm text-foreground/70">
                  Sem problemas — você pode agendar direto pelo WhatsApp agora mesmo.
                </p>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold hover:btn-gold-hover mt-6"
                >
                  <FaWhatsapp className="text-xl" aria-hidden="true" /> Agendar pelo WhatsApp
                </a>
              </div>
            </div>
          )}

          {everOpened && !failed && (
            <iframe
              title="Agendamento — Barbearia do Romário"
              src={SETMORE_URL}
              onLoad={() => {
                setLoaded(true);
                loadedRef.current = true;
                if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
              }}
              onError={() => setFailed(true)}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              className="h-full w-full border-0 bg-white"
            />
          )}
        </div>

        {/* Fallback discreto sempre disponível */}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur px-4 py-2 text-xs text-foreground/80 border border-white/10 hover:text-gold hover:border-[color:var(--gold)]/40 transition"
        >
          <FaWhatsapp className="text-[color:var(--whatsapp)]" />
          Prefere WhatsApp? Fale conosco
        </a>
      </DialogContent>
    </Dialog>
  );
}
