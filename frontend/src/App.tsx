import React, { useState, useEffect } from 'react';
import { SiteProvider, useSite } from './context/SiteContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { FormationsPage } from './pages/FormationsPage';
import { FormationDetailPage } from './pages/FormationDetailPage';
import { AboutPage } from './pages/AboutPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

const AppContent: React.FC = () => {
  const { isAdmin, logoutAdmin } = useSite();
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.hash ? window.location.hash.replace('#', '') : '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash ? window.location.hash.replace('#', '') : '/';
      setCurrentPath(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  // Route matching
  const renderCurrentPage = () => {
    // Clean query parameters from path if any
    const [basePath, queryString] = currentPath.split('?');
    const queryParams = new URLSearchParams(queryString || '');

    if (basePath === '/' || basePath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    if (basePath === '/formations') {
      return <FormationsPage onNavigate={navigate} />;
    }

    if (basePath.startsWith('/formations/')) {
      const slug = basePath.replace('/formations/', '');
      return <FormationDetailPage slug={slug} onNavigate={navigate} />;
    }

    if (basePath === '/a-propos') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (basePath === '/admissions') {
      const initialFormation = queryParams.get('formation') || undefined;
      return <AdmissionsPage initialFormationSlug={initialFormation} onNavigate={navigate} />;
    }

    if (basePath.startsWith('/confirmation/')) {
      const ref = basePath.replace('/confirmation/', '');
      return <ConfirmationPage reference={ref} onNavigate={navigate} />;
    }

    if (basePath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (basePath === '/mentions-legales') {
      return <LegalPage onNavigate={navigate} />;
    }

    if (basePath === '/confidentialite') {
      return <PrivacyPage onNavigate={navigate} />;
    }

    if (basePath === '/admin') {
      if (isAdmin) {
        return <AdminDashboardPage onLogout={logoutAdmin} onNavigateHome={() => navigate('/')} />;
      }
      return <AdminLoginPage onSuccess={() => navigate('/admin')} onNavigateHome={() => navigate('/')} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  const isAdminPage = currentPath.startsWith('/admin') && isAdmin;

  return (
    <>
      {!isAdminPage && <Navbar currentPath={currentPath} onNavigate={navigate} />}
      <div style={{ flex: 1 }}>{renderCurrentPage()}</div>
      {!isAdminPage && <Footer onNavigate={navigate} />}
    </>
  );
};

export const App: React.FC = () => {
  return (
    <SiteProvider>
      <AppContent />
    </SiteProvider>
  );
};
