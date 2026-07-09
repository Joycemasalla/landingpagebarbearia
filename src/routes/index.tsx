import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Benefits } from "@/components/landing/Benefits";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Gallery } from "@/components/landing/Gallery";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Services />
        <About />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
