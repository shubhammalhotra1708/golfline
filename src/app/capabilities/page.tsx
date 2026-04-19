import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Capabilities from "@/components/Capabilities";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Design development, private label manufacturing, precision sampling, and rigorous QA/QC. Full-cycle knitwear production under one roof in Ludhiana, India.",
  alternates: {
    canonical: "/capabilities",
  },
  openGraph: {
    title: "Capabilities | Golfline",
    description:
      "Design development, private label manufacturing, precision sampling, and rigorous QA/QC. Full-cycle knitwear production under one roof.",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Core Competencies"
        title="Technical Consulting, Not Just a Factory."
        subtitle="We approach every brief as a technical problem to be solved — with feasibility, scalability, and brand integrity at the centre."
      />
      <Capabilities hideHeader />
      <CtaStrip />
    </>
  );
}
