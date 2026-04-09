import { CTAButtons } from './CTAGroup';

export function NotFoundPage() {
  return (
    <section className="page-section page-hero not-found-page">
      <div className="container page-stack">
        <div className="section-intro">
          <div className="section-kicker">Not found</div>
          <h1>That route is not part of the public site.</h1>
          <p>
            The requested page is unavailable or has been consolidated into the current Aetheria navigation.
          </p>
        </div>

        <CTAButtons
          primaryHref="/"
          primaryLabel="Return home"
          secondaryHref="/how-it-works"
          secondaryLabel="Review how it works"
          tertiaryHref="/access"
          tertiaryLabel="Contact Aetheria"
        />
      </div>
    </section>
  );
}
