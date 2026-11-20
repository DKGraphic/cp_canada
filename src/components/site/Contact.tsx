import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contact, enquiry } from "./content";

type Errors = Partial<Record<"name" | "email" | "org", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="on-navy relative overflow-hidden bg-navy text-paper">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-electric/20 blur-3xl"
      />
      <div className="shell section-y relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3 text-amber" data-reveal>
              <span aria-hidden="true" className="size-3 rounded-bl-full bg-amber" />
              {contact.heading}
            </p>
            <h2 id="contact-title" className="display-xl mt-6 text-paper" data-reveal>
              {contact.subheading}
            </h2>
          </div>
          <p className="lede text-sky lg:col-span-5" data-reveal>
            {contact.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1" data-stagger>
            {contact.people.map((p, i) => (
              <li key={p.name} className="group flex flex-col gap-6 rounded-md border border-paper/15 bg-paper/[0.04] p-7 transition-colors duration-500 hover:border-paper/35 sm:flex-row lg:flex-row">
                <div className="relative grid size-28 shrink-0 place-items-center overflow-hidden rounded-md bg-navy-deep">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 transition-transform duration-700 group-hover:scale-110",
                      i === 0 ? "bg-electric" : "bg-electric",
                    )}
                    style={{ clipPath: i === 0 ? "polygon(0 0,100% 0,0 100%)" : "polygon(100% 0,100% 100%,0 100%)" }}
                  />
                  <span className="relative text-center text-[0.6875rem] font-medium leading-tight text-sky">
                    {contact.photo}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-paper">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-amber">{p.role}</p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-sky/85">{p.body}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-sky/70">
                    <MapPin aria-hidden="true" className="size-4" />
                    {contact.location}
                  </p>
                  {p.linkedin ? (
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-paper hover:text-amber"
                    >
                      <span className="link-underline">{contact.linkedinLabel}</span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : (
                    <span className="mt-4 inline-flex text-sm font-semibold text-sky/60">[{contact.linkedinLabel}]</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-7" data-reveal>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [values, setValues] = useState({ name: "", email: "", org: "" });
  const [goals, setGoals] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim())) e.email = "Please enter a valid work email.";
    if (!values.org.trim()) e.org = "Please enter your organization.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 700);
  };

  const toggleGoal = (g: string) => setGoals((cur) => (cur.includes(g) ? cur.filter((x) => x !== g) : [...cur, g]));

  return (
    <div id="enquiry" className="relative rounded-md bg-paper p-7 text-ink shadow-panel sm:p-10">
      <span aria-hidden="true" className="absolute right-0 top-0 size-16 rounded-bl-full bg-amber" />
      <h3 className="display-lg max-w-md pr-14 text-navy">{enquiry.heading}</h3>

      {status === "sent" ? (
        <div role="status" className="mt-10 flex flex-col items-start gap-5 rounded-md bg-sky p-8">
          <span className="grid size-12 place-items-center rounded-full bg-navy text-paper">
            <Check className="size-6" />
          </span>
          <p className="display-md text-navy">Thank you, {values.name.split(" ")[0]}.</p>
          <p className="body-copy text-ink">Your message has been received.</p>
          <Button
            variant="ghostNavy"
            size="pill"
            onClick={() => {
              setValues({ name: "", email: "", org: "" });
              setGoals([]);
              setStatus("idle");
            }}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <form noValidate onSubmit={onSubmit} className="mt-10 grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label={enquiry.fields.name} value={values.name} error={errors.name} autoComplete="name" onChange={(v) => setValues((s) => ({ ...s, name: v }))} />
            <Field id="email" type="email" label={enquiry.fields.email} value={values.email} error={errors.email} autoComplete="email" onChange={(v) => setValues((s) => ({ ...s, email: v }))} />
          </div>
          <Field id="org" label={enquiry.fields.org} value={values.org} error={errors.org} autoComplete="organization" onChange={(v) => setValues((s) => ({ ...s, org: v }))} />

          <fieldset>
            <legend className="text-sm font-semibold text-navy">{enquiry.fields.goals}</legend>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {enquiry.goals.map((g) => {
                const on = goals.includes(g);
                return (
                  <label
                    key={g}
                    className={cn(
                      "relative inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-electric",
                      on ? "border-navy bg-navy text-paper" : "border-input text-ink hover:border-navy",
                    )}
                  >
                    <input type="checkbox" className="sr-only" checked={on} onChange={() => toggleGoal(g)} />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-4 place-items-center rounded-full border transition-colors",
                        on ? "border-amber bg-amber text-navy" : "border-input",
                      )}
                    >
                      {on && <Check className="size-3" strokeWidth={3} />}
                    </span>
                    {g}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <p className="text-sm text-muted-foreground">
            <span className="placeholder-box mr-1 inline-block px-1.5 py-0.5 text-navy">{enquiry.privacyPlaceholder}</span>{" "}
            {enquiry.privacyText}
          </p>

          <div>
            <Button type="submit" variant="brand" size="xl" disabled={status === "sending"} className="w-full sm:w-auto">
              {status === "sending" ? "Sending…" : enquiry.submit}
              <ArrowRight />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string | undefined;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`f-${id}`} className="text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={`f-${id}`}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `f-${id}-err` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-12 rounded-sm border-0 border-b-2 bg-sky/60 px-4 text-base text-ink outline-none transition-colors duration-300 focus:border-electric focus:bg-sky",
          error ? "border-amber" : "border-navy/20",
        )}
      />
      {error && (
        <p id={`f-${id}-err`} className="text-sm font-medium text-navy">
          <span aria-hidden="true" className="mr-1.5 inline-block size-2 rounded-full bg-amber" />
          {error}
        </p>
      )}
    </div>
  );
}
