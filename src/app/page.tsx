import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FounderPromise from "@/components/FounderPromise";
import WhyChoose from "@/components/WhyChoose";
import Capabilities from "@/components/Capabilities";
import Materials from "@/components/Materials";
import Process from "@/components/Process";
import CtaStrip from "@/components/CtaStrip";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FounderPromise />
      <WhyChoose />
      <div className="divider" />
      <Capabilities />
      <Materials />
      <Process />
      <CtaStrip />
      <About />
      <ContactForm />
    </>
  );
}
