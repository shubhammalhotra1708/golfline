import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import FounderPromise from "@/components/FounderPromise";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "About Golfline",
  description:
    "Founded in 1989 in Ludhiana, India. Three decades of premium flat-knit knitwear manufacturing for global D2C brands across Europe, North America, and Asia.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Golfline — 35+ Years of Knitwear Excellence",
    description:
      "Founded in 1989 in Ludhiana, India. Three decades of premium flat-knit manufacturing for global D2C brands.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Three Decades of Knitwear Excellence."
        subtitle="Founded in 1989, Golfline has evolved from a regional supplier into a full-cycle global manufacturing partner for premium D2C brands worldwide."
      />
      <About hideHeader />
      <FounderPromise />
      <CtaStrip />
    </>
  );
}
