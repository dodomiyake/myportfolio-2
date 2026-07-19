"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { contactSchema, ContactValues } from "@/lib/validation";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function submit(data: ContactValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const raw = await res.text();
      let payload: { error?: string; ok?: boolean } | null = null;
      if (raw.trim()) {
        try {
          payload = JSON.parse(raw) as { error?: string; ok?: boolean };
        } catch {
          payload = null;
        }
      }

      if (!res.ok) {
        setSubmitError(payload?.error ?? "Could not send your message. Please try again.");
        return;
      }

      setSent(true);
      reset();
    } catch {
      setSubmitError("Could not send your message. Please try again.");
    }
  }

  return (
    <Section
      id="contact"
      index="07"
      kicker="Start a project"
      title="Let’s make something useful."
      className="contact-section"
    >
      <div className="contact-grid">
        <div className="contact-copy reveal">
          <p>
            Have a product to build, a problem to solve, or an ambitious idea? Let’s create something
            useful.
          </p>
          <a href={`mailto:${portfolio.email}`}>
            {portfolio.email} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={portfolio.social.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={portfolio.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        {sent ? (
          <div className="success reveal" role="status">
            <CheckCircle2 aria-hidden="true" />
            <h3>Message sent.</h3>
            <p>Thanks for reaching out — I’ll get back to you soon.</p>
            <button type="button" className="button ghost" onClick={() => setSent(false)}>
              Send another
            </button>
          </div>
        ) : (
          <form className="contact-form reveal" onSubmit={handleSubmit(submit)} noValidate>
            <label>
              Name
              <input
                {...register("name")}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              <span id="name-error" role={errors.name ? "alert" : undefined}>
                {errors.name?.message}
              </span>
            </label>
            <label>
              Email
              <input
                type="email"
                {...register("email")}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              <span id="email-error" role={errors.email ? "alert" : undefined}>
                {errors.email?.message}
              </span>
            </label>
            <label>
              Project type
              <select
                {...register("projectType")}
                defaultValue=""
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? "projectType-error" : undefined}
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Full-stack web development</option>
                <option>Frontend development</option>
                <option>Backend and API development</option>
                <option>E-commerce development</option>
                <option>Responsive website development</option>
                <option>Authentication and user accounts</option>
                <option>Database integration</option>
                <option>Payment integration</option>
                <option>Real-time application features</option>
                <option>Application maintenance and improvements</option>
                <option>Technical collaboration</option>
                <option>Other</option>
              </select>
              <span id="projectType-error" role={errors.projectType ? "alert" : undefined}>
                {errors.projectType?.message}
              </span>
            </label>
            <label>
              Message
              <textarea
                rows={5}
                {...register("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <span id="message-error" role={errors.message ? "alert" : undefined}>
                {errors.message?.message}
              </span>
            </label>
            {submitError && (
              <p className="form-error" role="alert">
                {submitError}
              </p>
            )}
            <button className="button primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send enquiry"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
