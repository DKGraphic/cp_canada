import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { Intro } from "./components/site/Intro";
import { Capabilities } from "./components/site/Capabilities";
import { Industries, CaseStudies } from "./components/site/Industries";
import { Approach } from "./components/site/Approach";
import { DeliveryDay } from "./components/site/DeliveryDay";
import { Engagement, Trust, Why, Perspectives } from "./components/site/Engagement";
import { Insights, Faq } from "./components/site/Insights";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { useSiteMotion } from "./components/site/useSiteMotion";

export default function App() {
  useSiteMotion();
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-full bg-amber px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
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
