import { createFileRoute } from "@tanstack/react-router";

import { Approach } from "@/components/site/Approach";
import { Capabilities } from "@/components/site/Capabilities";
import { Contact } from "@/components/site/Contact";
import { DeliveryDay } from "@/components/site/DeliveryDay";
import { Engagement, Perspectives, Trust, Why } from "@/components/site/Engagement";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { CaseStudies, Industries } from "@/components/site/Industries";
import { Faq, Insights } from "@/components/site/Insights";
import { Intro } from "@/components/site/Intro";
import { useSiteMotion } from "@/components/site/useSiteMotion";

export const Route = createFileRoute("/")({
  component: CanadaPage,
});

function CanadaPage() {
  useSiteMotion();
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-amber px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Capabilities />
        <Industries />
        <CaseStudies />
        <Approach />
        <DeliveryDay />
        <Engagement />
        <Trust />
        <Why />
        <Perspectives />
        <Insights />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
