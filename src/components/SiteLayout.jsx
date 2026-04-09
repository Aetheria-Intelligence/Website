import { Menu, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT_EMAIL, ONE_PAGER_HREF, PRIMARY_NAV, SEO_EXPLAINERS } from '../data/siteData';

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function resolvePageLabel(pathname) {
  const normalizedPath = normalizePathname(pathname);
  const route = [...PRIMARY_NAV, ...SEO_EXPLAINERS].find((item) => item.href === normalizedPath);

  return route?.label || 'page';
}

export function SiteLayout({ children }) {
  const location = useLocation();
  const mainRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const currentPageLabel = useMemo(() => resolvePageLabel(location.pathname), [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);

    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      window.requestAnimationFrame(() => {
        mainRef.current?.focus({ preventScroll: true });
      });
    }

    setAnnouncement(`Navigated to ${currentPageLabel}.`);
  }, [currentPageLabel, location.hash, location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (menuOpen && window.innerWidth <= 992) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`site-shell${menuOpen ? ' site-shell-nav-open' : ''}`}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      <header className="topbar">
        <div className="container topbar-inner">
          <Link className="brand-link" to="/" aria-label="Aetheria home">
            <img src="/assets/img/hero-logo.webp" alt="Aetheria" className="brand-logo" />
            <div className="brand-lockup">
              <span className="brand-name">Aetheria</span>
              <span className="brand-tag">Governed execution infrastructure</span>
            </div>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="sr-only">{menuOpen ? 'Close navigation' : 'Open navigation'}</span>
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>

          <div className={`topbar-controls${menuOpen ? ' is-open' : ''}`}>
            <nav id="primary-navigation" className="primary-nav" aria-label="Primary">
              {PRIMARY_NAV.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                  end={item.href === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="topbar-actions">
              <Link className="button button-primary button-compact" to="/access">
                Request Access
              </Link>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
      </header>

      <main id="main-content" className="site-main" ref={mainRef} tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="section-kicker">Aetheria</div>
            <p>
              Governed AI infrastructure for consequential systems. Authority resolves before action,
              and portable proof remains after every decision.
            </p>
          </div>

          <div className="footer-group">
            <div className="footer-heading">Explore</div>
            <div className="footer-links">
              {PRIMARY_NAV.map((item) => (
                <NavLink key={item.href} to={item.href} className="footer-link" end={item.href === '/'}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-group">
            <div className="footer-heading">Explainers</div>
            <div className="footer-links">
              {SEO_EXPLAINERS.slice(0, 3).map((item) => (
                <NavLink key={item.href} className="footer-link" to={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-group">
            <div className="footer-heading">Resources</div>
            <div className="footer-links">
              <Link className="footer-link" to="/access">
                Request Access
              </Link>
              <a className="footer-link" href={ONE_PAGER_HREF} target="_blank" rel="noreferrer">
                One-pager <span className="sr-only">opens in a new tab</span>
              </a>
              <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              <NavLink className="footer-link" to="/privacy">
                Privacy
              </NavLink>
              <NavLink className="footer-link" to="/terms">
                Terms
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
