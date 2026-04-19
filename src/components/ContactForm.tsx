"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ hideHeader = false }: { hideHeader?: boolean }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      quantity: formData.get("quantity") as string,
      category: formData.get("category") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      {!hideHeader && (
        <>
          <div className={styles.eyebrow}>
            <span className={styles.line} />
            Start a Conversation
          </div>
          <h2 className={`section-title ${styles.title}`}>
            Ready to Start Your<br />
            Next Collection?
          </h2>
          <p className={`section-sub ${styles.sub}`}>
            Share your concept or tech pack with our development team. We&apos;ll
            respond with a formal feasibility study and costing — fast.
          </p>
        </>
      )}

      <div className={styles.grid}>
        <div className={styles.info}>
          <p>
            Whether you&apos;re a growing D2C brand seeking your first
            manufacturing partner or an established label looking for a more
            reliable alternative — we&apos;re ready to talk.
          </p>

          <div className={styles.detail}>
            <span className={styles.cdLabel}>Location</span>
            <span className={styles.cdVal}>Ludhiana, Punjab, India</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.cdLabel}>Email</span>
            <span className={styles.cdVal}>enquiries@golfline.com</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.cdLabel}>Phone</span>
            <span className={styles.cdVal}>+91 (161) 000-0000</span>
          </div>

          <div className={styles.responseBadge}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
              <path
                d="M7 4v3l2 2"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            Average response: &lt; 48 hours
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" placeholder="Jane" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" placeholder="Smith" required />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="company">Company Name</label>
            <input id="company" name="company" type="text" placeholder="Acme Apparel Ltd." required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Business Email</label>
            <input id="email" name="email" type="email" placeholder="jane@company.com" required />
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="quantity">Estimated Order Quantity</label>
              <select id="quantity" name="quantity" defaultValue="">
                <option value="" disabled>
                  Select range
                </option>
                <option>Under 500 units</option>
                <option>500 – 1,000 units</option>
                <option>1,000 – 5,000 units</option>
                <option>5,000 – 10,000 units</option>
                <option>10,000+ units</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="category">Product Category</label>
              <select id="category" name="category" defaultValue="">
                <option value="" disabled>
                  Select category
                </option>
                <option>Cashmere / Noble Fiber</option>
                <option>Merino / Lambswool</option>
                <option>Cotton / Cotton Blends</option>
                <option>Performance Blends</option>
                <option>Not yet decided</option>
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Brief / Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your project, reference styles, or attach a tech pack. The more context you provide, the more precise our response will be."
              required
            />
          </div>

          {status === "error" && (
            <p className={styles.errorMsg}>{errorMessage}</p>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "submitting"}
            style={
              status === "success"
                ? { background: "#3B6D11", color: "#EAF3DE" }
                : undefined
            }
          >
            {status === "submitting"
              ? "Sending..."
              : status === "success"
                ? "Enquiry Received \u2713"
                : "Submit Enquiry \u2192"}
          </button>
        </form>
      </div>
    </section>
  );
}
