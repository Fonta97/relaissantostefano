import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import SiteLayout from './components/SiteLayout';
import { aliasRedirects, brand, createHotelSchema, getSeo } from './lib/siteData';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoomsPage = lazy(() => import('./pages/RoomsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function canonicalPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return aliasRedirects[clean] || clean;
}

function updateMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute(attribute, value);
  }
}

function App() {
  const location = useLocation();
  const pathname = canonicalPath(location.pathname);

  useEffect(() => {
    const meta = getSeo(pathname);
    const canonicalUrl = new URL(pathname === '/' ? '/' : `${pathname}/`, `${brand.baseUrl}/`).toString();

    document.documentElement.lang = 'it';
    document.title = meta.title;

    updateMeta('meta[name="description"]', 'content', meta.description);
    updateMeta('link[rel="canonical"]', 'href', canonicalUrl);
    updateMeta('meta[property="og:title"]', 'content', meta.title);
    updateMeta('meta[property="og:description"]', 'content', meta.description);
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl);
    updateMeta('meta[name="twitter:title"]', 'content', meta.title);
    updateMeta('meta[name="twitter:description"]', 'content', meta.description);

    const schema = document.getElementById('hotel-schema');
    if (schema) {
      schema.textContent = JSON.stringify(createHotelSchema());
    }
  }, [pathname]);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="camere-suite" element={<RoomsPage />} />
          <Route path="spa-benessere" element={<ExperiencePage type="spa" />} />
          <Route path="ristorante" element={<ExperiencePage type="restaurant" />} />
          <Route path="sport-activity" element={<ExperiencePage type="sport" />} />
          <Route path="meeting-eventi" element={<ExperiencePage type="meeting" />} />
          <Route path="territorio" element={<ExperiencePage type="territory" />} />
          <Route path="offerte" element={<OffersPage />} />
          <Route path="contatti" element={<ContactPage />} />

          {Object.entries(aliasRedirects).map(([from, to]) => (
            <Route
              key={from}
              path={from.replace(/^\//, '')}
              element={<Navigate to={to} replace />}
            />
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
