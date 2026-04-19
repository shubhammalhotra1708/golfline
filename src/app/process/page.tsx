import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "A 5-phase knitwear manufacturing process engineered for predictability. From enquiry to export — transparent timelines, zero surprises, on-time delivery.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Our Process | Golfline",
    description:
      "A 5-phase manufacturing process engineered for predictability. From enquiry to export, transparent timelines and zero surprises.",
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Work"
        title="A Process Engineered for Predictability."
        subtitle="B2B buyers need a standardized, repeatable process. Ours is designed to give you certainty at every stage — from first enquiry to final delivery."
      />
      <Process hideHeader />
      <CtaStrip />
    </>
  );
}
