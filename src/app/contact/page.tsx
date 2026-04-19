import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your next knitwear collection with Golfline. Share your brief and receive a formal feasibility study and costing within 48 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Golfline — Request a Quote",
    description:
      "Start your next knitwear collection. Share your brief and receive a formal costing within 48 hours.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Golfline Manufacturing Pvt. Ltd.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  telephone: "+91-161-000-0000",
  email: "enquiries@golfline.com",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Start a Conversation"
        title="Ready to Start Your Next Collection?"
        subtitle="Share your concept or tech pack with our development team. We'll respond with a formal feasibility study and costing — fast."
      />
      <ContactForm hideHeader />
    </>
  );
}
