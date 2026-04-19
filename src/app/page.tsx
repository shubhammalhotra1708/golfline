import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyChoose from "@/components/WhyChoose";
import FounderPromise from "@/components/FounderPromise";
import Materials from "@/components/Materials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhyChoose />
      <FounderPromise />
      <Materials />
      <ContactForm />
    </>
  );
}
