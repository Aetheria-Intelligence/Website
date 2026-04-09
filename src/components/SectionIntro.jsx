import { createElement } from 'react';

export function SectionIntro({ kicker, title, body, as = 'h2', className = '', align = 'left' }) {
  const classes = ['section-intro', align === 'center' ? 'section-intro-center' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {kicker ? <div className="section-kicker">{kicker}</div> : null}
      {createElement(as, null, title)}
      {body ? <p>{body}</p> : null}
    </div>
  );
}
