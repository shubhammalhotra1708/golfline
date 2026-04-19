import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Materials from "@/components/Materials";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Premium fibers sourced with precision: cashmere, merino wool, lambswool, cotton, and technical performance blends for luxury knitwear manufacturing.",
  alternates: {
    canonical: "/materials",
  },
  openGraph: {
    title: "Materials | Golfline",
    description:
      "Premium fibers sourced with precision: cashmere, merino wool, lambswool, cotton, and technical performance blends.",
  },
};

export default function MaterialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Material Expertise"
        title="The World's Finest Fibers, Sourced with Precision."
        subtitle="We source premium materials to ensure the hand-feel matches your brand's positioning — from ultra-luxury noble fibers to high-performance blends."
      />
      <Materials hideHeader />
      <CtaStrip />
    </>
  );
}
