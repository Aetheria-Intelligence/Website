import { SectionIntro } from './SectionIntro';

export function CategoryContrast({
  kicker = 'Category boundary',
  title = 'Ordinary AI execution stops too late.',
  body = 'Governed execution evaluates the request before it reaches a live system.',
  rows = [],
}) {
  return (
    <section className="category-contrast">
      <SectionIntro
        className="category-contrast-intro"
        kicker={kicker}
        title={title}
        body={body}
      />

      <div className="contrast-table-shell">
        <table className="contrast-table" aria-label="Conventional execution versus governed execution">
          <thead>
            <tr>
              <th scope="col" className="contrast-header contrast-header-label">System property</th>
              <th scope="col" className="contrast-header">Conventional execution</th>
              <th scope="col" className="contrast-header contrast-header-strong">Governed execution</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="contrast-row">
                <th scope="row" className="contrast-label">{row.label}</th>
                <td className="contrast-cell contrast-cell-muted">
                  <p>{row.conventional}</p>
                </td>
                <td className="contrast-cell contrast-cell-strong">
                  <p>{row.governed}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
