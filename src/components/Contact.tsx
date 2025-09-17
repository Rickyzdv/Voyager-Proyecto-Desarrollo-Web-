import type { JSX } from "react";

type SocialLink = {
  label: "Instagram" | "X / Twitter" | "YouTube";
  href: string;
  ariaLabel: string;
};

type ContactInfoBlock =
  | { kind: "touch"; title: string; email: string; note: string }
  | { kind: "follow"; title: string; socials: ReadonlyArray<SocialLink> }
  | { kind: "faq"; title: string; note: string; ctaLabel: string; ctaHref: string }
  | { kind: "privacy"; noteHtml: string };

const SOCIALS: ReadonlyArray<SocialLink> = [
  { label: "Instagram", href: "#", ariaLabel: "Instagram" },
  { label: "X / Twitter", href: "#", ariaLabel: "X / Twitter" },
  { label: "YouTube", href: "#", ariaLabel: "YouTube" },
] as const;

const INFO_SIDEBAR: ReadonlyArray<ContactInfoBlock> = [
  { kind: "touch", title: "Get in touch", email: "hello@voyager.app", note: "We read every message." },
  { kind: "follow", title: "Follow", socials: SOCIALS },
  { kind: "faq", title: "FAQ", note: "Before writing, check our common questions.", ctaLabel: "Open FAQ", ctaHref: "#" },
  { kind: "privacy", noteHtml: 'We never share your data with third parties. Learn more in our <a href="#">privacy policy</a>.' },
] as const;

type FormIds = "name" | "email" | "subject" | "message";

type FormFieldMeta = {
  id: FormIds;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

const FORM_ROW_1: ReadonlyArray<FormFieldMeta> = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
  { id: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
] as const;

const FORM_ROW_2: ReadonlyArray<FormFieldMeta> = [
  { id: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
] as const;

const FORM_MESSAGE: FormFieldMeta = {
  id: "message",
  label: "Message",
  type: "textarea",
  placeholder: "Write your message...",
  required: true,
  rows: 5,
};

function Contact(): JSX.Element {
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>
        <p className="section-text">Questions, feedback or collaboration ideas? Write to us.</p>

        <div className="contact-card">
          <form className="contact-form" action="#" method="post">
            <div className="form-row">
              {FORM_ROW_1.map((f) => (
                <div className="field" key={f.id}>
                  <label htmlFor={f.id}>{f.label}</label>
                  <input
                    className="input"
                    id={f.id}
                    name={f.id}
                    type={f.type ?? "text"}
                    placeholder={f.placeholder}
                    required={!!f.required}
                  />
                </div>
              ))}
            </div>

            {FORM_ROW_2.map((f) => (
              <div className="field" key={f.id}>
                <label htmlFor={f.id}>{f.label}</label>
                <input
                  className="input"
                  id={f.id}
                  name={f.id}
                  type={f.type ?? "text"}
                  placeholder={f.placeholder}
                />
              </div>
            ))}

            <div className="field">
              <label htmlFor={FORM_MESSAGE.id}>{FORM_MESSAGE.label}</label>
              <textarea
                className="textarea"
                id={FORM_MESSAGE.id}
                name={FORM_MESSAGE.id}
                rows={FORM_MESSAGE.rows ?? 4}
                placeholder={FORM_MESSAGE.placeholder}
                required={!!FORM_MESSAGE.required}
              />
              <small className="hint">Be as specific as possible (links, dates, destinations, etc.).</small>
            </div>

            <div className="form-row">
              <label className="check">
                <input type="checkbox" required />
                <span>I agree to the privacy policy</span>
              </label>
              <span className="meta">Avg. reply time: <strong>24–48h</strong></span>
            </div>

            <button className="btn" type="submit" disabled>Send message</button>
          </form>

          <aside className="contact-info">
            {INFO_SIDEBAR.map((b, idx) => {
              if (b.kind === "touch") {
                return (
                  <div className="ci-block" key={`ci-${idx}`}>
                    <h4>{b.title}</h4>
                    <a className="ci-link" href={`mailto:${b.email}`}>{b.email}</a>
                    <p className="ci-note">{b.note}</p>
                  </div>
                );
              }
              if (b.kind === "follow") {
                return (
                  <div className="ci-block" key={`ci-${idx}`}>
                    <h4>{b.title}</h4>
                    <ul className="socials">
                      {b.socials.map((s) => (
                        <li key={s.label}>
                          <a href={s.href} aria-label={s.ariaLabel}>{s.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if (b.kind === "faq") {
                return (
                  <div className="ci-block" key={`ci-${idx}`}>
                    <h4>{b.title}</h4>
                    <p className="ci-note">{b.note}</p>
                    <a className="btn small outline" href={b.ctaHref}>{b.ctaLabel}</a>
                  </div>
                );
              }
              return (
                <div className="ci-block muted" key={`ci-${idx}`}>
                  <p className="ci-privacy" dangerouslySetInnerHTML={{ __html: b.noteHtml }} />
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
