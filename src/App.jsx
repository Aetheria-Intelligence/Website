import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { PageMeta } from './components/PageMeta';
import { SiteLayout } from './components/SiteLayout';
import { AccessPage } from './pages/AccessPage';
import { AIDecisionVsExecutionPage } from './pages/AIDecisionVsExecutionPage';
import { AIActionGovernancePage } from './pages/AIActionGovernancePage';
import { AIExecutionControlPage } from './pages/AIExecutionControlPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { BoundedAISystemsPage } from './pages/BoundedAISystemsPage';
import { CompanyPage } from './pages/CompanyPage';
import { EnforcementLayersPage } from './pages/EnforcementLayersPage';
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { LegalPage } from './pages/LegalPage';
import { PlatformPage } from './pages/PlatformPage';
import { ProofPage } from './pages/ProofPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { ROUTE_META } from './data/routeMeta';

function RoutePage({ meta, children }) {
  return (
    <>
      <PageMeta {...meta} />
      {children}
    </>
  );
}

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route
          path="/"
          element={(
            <RoutePage meta={ROUTE_META['/']}>
              <HomePage />
            </RoutePage>
          )}
        />

        <Route path="/system" element={<Navigate to="/how-it-works" replace />} />
        <Route
          path="/how-it-works"
          element={(
            <RoutePage meta={ROUTE_META['/how-it-works']}>
              <HowItWorksPage />
            </RoutePage>
          )}
        />

        <Route path="/capabilities" element={<Navigate to="/platform" replace />} />
        <Route path="/atlas" element={<Navigate to="/platform" replace />} />
        <Route
          path="/platform"
          element={(
            <RoutePage meta={ROUTE_META['/platform']}>
              <PlatformPage />
            </RoutePage>
          )}
        />

        <Route path="/scenarios" element={<Navigate to="/use-cases" replace />} />
        <Route
          path="/use-cases"
          element={(
            <RoutePage meta={ROUTE_META['/use-cases']}>
              <UseCasesPage />
            </RoutePage>
          )}
        />

        <Route path="/evidence" element={<Navigate to="/proof" replace />} />
        <Route
          path="/proof"
          element={(
            <RoutePage meta={ROUTE_META['/proof']}>
              <ProofPage />
            </RoutePage>
          )}
        />

        <Route path="/runtime" element={<Navigate to="/architecture" replace />} />
        <Route path="/ai-execution-governance" element={<Navigate to="/architecture" replace />} />
        <Route
          path="/architecture"
          element={(
            <RoutePage meta={ROUTE_META['/architecture']}>
              <ArchitecturePage />
            </RoutePage>
          )}
        />

        <Route
          path="/company"
          element={(
            <RoutePage meta={ROUTE_META['/company']}>
              <CompanyPage />
            </RoutePage>
          )}
        />

        <Route
          path="/access"
          element={(
            <RoutePage meta={ROUTE_META['/access']}>
              <AccessPage />
            </RoutePage>
          )}
        />

        <Route
          path="/privacy"
          element={(
            <RoutePage meta={ROUTE_META['/privacy']}>
              <LegalPage variant="privacy" />
            </RoutePage>
          )}
        />
        <Route
          path="/terms"
          element={(
            <RoutePage meta={ROUTE_META['/terms']}>
              <LegalPage variant="terms" />
            </RoutePage>
          )}
        />

        <Route
          path="/ai-execution-control"
          element={(
            <RoutePage meta={ROUTE_META['/ai-execution-control']}>
              <AIExecutionControlPage />
            </RoutePage>
          )}
        />
        <Route path="/ai-governance-system" element={<Navigate to="/ai-action-governance" replace />} />
        <Route
          path="/ai-action-governance"
          element={(
            <RoutePage meta={ROUTE_META['/ai-action-governance']}>
              <AIActionGovernancePage />
            </RoutePage>
          )}
        />
        <Route
          path="/bounded-ai-systems"
          element={(
            <RoutePage meta={ROUTE_META['/bounded-ai-systems']}>
              <BoundedAISystemsPage />
            </RoutePage>
          )}
        />
        <Route
          path="/ai-decision-vs-execution"
          element={(
            <RoutePage meta={ROUTE_META['/ai-decision-vs-execution']}>
              <AIDecisionVsExecutionPage />
            </RoutePage>
          )}
        />
        <Route path="/ai-safety-enforcement" element={<Navigate to="/why-ai-needs-enforcement-layers" replace />} />
        <Route
          path="/why-ai-needs-enforcement-layers"
          element={(
            <RoutePage meta={ROUTE_META['/why-ai-needs-enforcement-layers']}>
              <EnforcementLayersPage />
            </RoutePage>
          )}
        />

        <Route
          path="*"
          element={(
            <RoutePage
              meta={{
                title: 'Not Found',
                path: '/',
                description: 'The requested route is not available on the public Aetheria site.',
                noIndex: true,
              }}
            >
              <NotFoundPage />
            </RoutePage>
          )}
        />
      </Routes>
    </SiteLayout>
  );
}
