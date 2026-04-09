import { useMemo, useState } from 'react';
import { CONTACT_EMAIL } from '../data/siteData';
import { ACCESS_INQUIRY_OPTIONS } from '../data/r9Data';

const INITIAL_FORM = {
  inquiryType: ACCESS_INQUIRY_OPTIONS[0]?.value || 'request-access',
  name: '',
  company: '',
  role: '',
  email: '',
  useCase: '',
  message: '',
};

function optionLabel(value) {
  return ACCESS_INQUIRY_OPTIONS.find((option) => option.value === value)?.label || 'Request access';
}

function buildSubject(form) {
  const suffix = form.company || form.name || 'Aetheria inquiry';
  return `Aetheria ${optionLabel(form.inquiryType)} — ${suffix}`;
}

function buildBody(form) {
  return [
    `Inquiry type: ${optionLabel(form.inquiryType)}`,
    `Name: ${form.name || 'Not provided'}`,
    `Company: ${form.company || 'Not provided'}`,
    `Role: ${form.role || 'Not provided'}`,
    `Email: ${form.email || 'Not provided'}`,
    `Environment / use case: ${form.useCase || 'Not provided'}`,
    '',
    'Current question',
    form.message || 'Not provided',
  ].join('\n');
}

export function InquiryForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('');

  const subject = useMemo(() => buildSubject(form), [form]);
  const body = useMemo(() => buildBody(form), [form]);
  const mailtoHref = useMemo(
    () => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [body, subject],
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = mailtoHref;
    setStatus('Opening your email client with the inquiry prepared.');
  }

  async function handleCopy() {
    const payload = `To: ${CONTACT_EMAIL}\nSubject: ${subject}\n\n${body}`;

    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard unavailable');
      }

      await navigator.clipboard.writeText(payload);
      setStatus('Inquiry details copied.');
    } catch {
      setStatus('Copy is unavailable in this browser. Use Request Access or email directly.');
    }
  }

  return (
    <section className="inquiry-panel panel">
      <div className="inquiry-panel-copy">
        <div className="section-kicker">Request access</div>
        <h2>Structured inquiry. Direct conversation.</h2>
        <p>
          Use the form to prepare the first note. It opens an addressed email with the details already structured,
          so the initial conversation starts with environment, control boundary, and proof requirements.
        </p>
      </div>

      <form className="inquiry-form" onSubmit={handleSubmit} aria-describedby="inquiry-helper inquiry-status">
        <p id="inquiry-helper" className="inquiry-helper-text">
          Required fields are marked automatically by your browser. Include the action boundary, the approvals that
          matter, and the proof you expect to retain.
        </p>

        <label className="field">
          <span>Inquiry type</span>
          <select name="inquiryType" value={form.inquiryType} onChange={handleChange}>
            {ACCESS_INQUIRY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="field-grid">
          <label className="field">
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} autoComplete="name" required />
          </label>

          <label className="field">
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />
          </label>
        </div>

        <div className="field-grid">
          <label className="field">
            <span>Company</span>
            <input name="company" value={form.company} onChange={handleChange} autoComplete="organization" />
          </label>

          <label className="field">
            <span>Role</span>
            <input name="role" value={form.role} onChange={handleChange} autoComplete="organization-title" />
          </label>
        </div>

        <label className="field">
          <span>Environment / use case</span>
          <textarea
            name="useCase"
            rows={3}
            value={form.useCase}
            onChange={handleChange}
            placeholder="Describe the environment, action classes, or deployment question."
          />
        </label>

        <label className="field">
          <span>Current question</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What must the system be allowed to do, deny, or prove?"
          />
        </label>

        <div className="inquiry-actions">
          <button className="button button-primary" type="submit">
            Request Access
          </button>
          <button className="button button-secondary" type="button" onClick={handleCopy}>
            Copy inquiry
          </button>
          <a className="button button-tertiary" href={`mailto:${CONTACT_EMAIL}`}>
            Email directly
          </a>
        </div>

        <div className="inquiry-preview" aria-label="Prepared inquiry preview">
          <div className="inquiry-preview-head">
            <div className="section-kicker">Prepared email</div>
            <strong>{subject}</strong>
          </div>
          <div className="inquiry-preview-meta">To: {CONTACT_EMAIL}</div>
          <pre className="inquiry-preview-body">{body}</pre>
        </div>

        <div id="inquiry-status" className="inquiry-note" role="status" aria-live="polite" aria-atomic="true">
          {status || `Direct email: ${CONTACT_EMAIL}`}
        </div>
      </form>
    </section>
  );
}
