import { Link } from 'react-router-dom';

function isExternalHref(href = '') {
  return /^(https?:\/\/|mailto:|tel:)/.test(href) || /\.(pdf|zip|docx?|pptx?|xlsx?)(?:$|[?#])/.test(href);
}

function ActionLink({ href, label, variant = 'secondary' }) {
  if (!href || !label) {
    return null;
  }

  const className = `button button-${variant}`;

  if (isExternalHref(href)) {
    const opensNewContext = href.startsWith('http') || /\.(pdf|zip|docx?|pptx?|xlsx?)(?:$|[?#])/.test(href);

    return (
      <a className={className} href={href} target={opensNewContext ? '_blank' : undefined} rel={opensNewContext ? 'noreferrer' : undefined}>
        {label}
        {opensNewContext ? <span className="sr-only"> opens in a new tab</span> : null}
      </a>
    );
  }

  return (
    <Link className={className} to={href}>
      {label}
    </Link>
  );
}

export function CTAButtons({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tertiaryHref,
  tertiaryLabel,
  className = '',
  center = false,
}) {
  return (
    <div className={`button-row${center ? ' button-row-center' : ''}${className ? ` ${className}` : ''}`}>
      <ActionLink href={primaryHref} label={primaryLabel} variant="primary" />
      <ActionLink href={secondaryHref} label={secondaryLabel} variant="secondary" />
      <ActionLink href={tertiaryHref} label={tertiaryLabel} variant="tertiary" />
    </div>
  );
}

export function CTAGroup({
  kicker = 'Next step',
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tertiaryHref,
  tertiaryLabel,
  center = false,
}) {
  return (
    <section className="cta-panel panel">
      <div className="cta-panel-copy">
        <div className="section-kicker">{kicker}</div>
        {title ? <h2>{title}</h2> : null}
        {body ? <p>{body}</p> : null}
      </div>
      <CTAButtons
        center={center}
        primaryHref={primaryHref}
        primaryLabel={primaryLabel}
        secondaryHref={secondaryHref}
        secondaryLabel={secondaryLabel}
        tertiaryHref={tertiaryHref}
        tertiaryLabel={tertiaryLabel}
      />
    </section>
  );
}
