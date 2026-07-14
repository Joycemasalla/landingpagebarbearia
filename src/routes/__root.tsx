import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initMonitoring } from "../lib/monitoring";
import { SmoothScroll } from "../components/motion/SmoothScroll";
import { BookingProvider } from "../lib/booking-context";
import { BookingModal } from "../components/landing/BookingModal";
import { Watermark } from "../components/Watermark";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold hover:btn-gold-hover">Voltar ao início</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Algo deu errado
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente novamente ou volte para a página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold hover:btn-gold-hover"
          >
            Tentar novamente
          </button>
          <a href="/" className="btn-ghost-gold hover:bg-white/5">Ir para o início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Barbearia do Romário — Cortes e Barba em Miraí, MG" },
      { name: "description", content: "A melhor barbearia de Miraí. Cortes modernos, barba na navalha e atendimento premium. Agende online ou pelo WhatsApp." },
      { name: "author", content: "Barbearia do Romário" },
      { name: "theme-color", content: "#111111" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:title", content: "Barbearia do Romário — Cortes e Barba em Miraí, MG" },
      { property: "og:description", content: "Cortes modernos, barba na navalha e atendimento premium em Miraí, MG. Agende online ou pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Barbearia do Romário" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "https://landingpagebarbearia.lovable.app/" },
      { property: "og:image", content: "https://landingpagebarbearia.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Barbearia do Romário — Cortes & Barba em Miraí, MG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Barbearia do Romário — Cortes e Barba em Miraí, MG" },
      { name: "twitter:description", content: "Cortes modernos, barba na navalha e atendimento premium em Miraí, MG." },
      { name: "twitter:image", content: "https://landingpagebarbearia.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "canonical", href: "https://landingpagebarbearia.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://barbeariadoromario.setmore.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Barbearia do Romário",
          image: "https://landingpagebarbearia.lovable.app/og-image.jpg",
          "@id": "https://landingpagebarbearia.lovable.app/",
          url: "https://landingpagebarbearia.lovable.app/",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Lacerda Vernek n°200",
            addressLocality: "Miraí",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "20:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
          ],
          sameAs: ["https://www.instagram.com/barbeariadoromariomirai/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <SmoothScroll />
        <Outlet />
        <BookingModal />
        <Watermark />
      </BookingProvider>
    </QueryClientProvider>
  );
}
