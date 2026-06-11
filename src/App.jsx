import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';

import SiteLayout from './components/SiteLayout';
import {
  createLocalizedHotelSchema,
  getLanguageFromPath,
  getLocalizedSeo,
  languageOptions,
  localizePath,
  stripLanguageFromPath,
  supportedLanguageCodes,
  useI18n,
} from './lib/i18n';
import { aliasRedirects, brand } from './lib/siteData';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoomsPage = lazy(() => import('./pages/RoomsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function canonicalPath(pathname) {
  const clean = stripLanguageFromPath(pathname).replace(/\/+$/, '') || '/';
  return aliasRedirects[clean] || clean;
}

function updateMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute(attribute, value);
  }
}

function updateAlternateLinks(pathname) {
  languageOptions.forEach((language) => {
    let node = document.querySelector(`link[rel="alternate"][hreflang="${language.code}"]`);
    if (!node) {
      node = document.createElement('link');
      node.setAttribute('rel', 'alternate');
      node.setAttribute('hreflang', language.code);
      document.head.appendChild(node);
    }

    node.setAttribute(
      'href',
      new URL(localizePath(pathname === '/' ? '/' : `${pathname}/`, language.code), `${brand.baseUrl}/`).toString()
    );
  });
}

function AliasRedirect({ to }) {
  const { path } = useI18n();
  return <Navigate to={path(to)} replace />;
}

function LanguageGate() {
  const { lang } = useParams();
  if (!supportedLanguageCodes.includes(lang)) {
    return <NotFoundPage />;
  }

  return <Outlet />;
}

function PageRoutes() {
  return (
    <>
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
        <Route key={from} path={from.replace(/^\//, '')} element={<AliasRedirect to={to} />} />
      ))}

      <Route path="*" element={<NotFoundPage />} />
    </>
  );
}

function App() {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const pathname = canonicalPath(location.pathname);

  useEffect(() => {
    const meta = getLocalizedSeo(language, pathname);
    const canonicalUrl = new URL(
      localizePath(pathname === '/' ? '/' : `${pathname}/`, language),
      `${brand.baseUrl}/`
    ).toString();

    document.documentElement.lang = language;
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
      schema.textContent = JSON.stringify(createLocalizedHotelSchema(language));
    }

    updateAlternateLinks(pathname);
  }, [language, pathname]);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<SiteLayout />}>
          {PageRoutes()}
          <Route path=":lang" element={<LanguageGate />}>
            {PageRoutes()}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
