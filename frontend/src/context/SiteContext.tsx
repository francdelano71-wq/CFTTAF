import React, { createContext, useContext, useState, useEffect } from 'react';
import { Formation, FORMATIONS } from '../data/formationsData';
import { SiteSettings, INITIAL_SETTINGS } from '../data/siteConfig';
import { api, ApplicationSubmission, ContactMessage, AuditLog } from '../services/api';

interface SiteContextType {
  settings: SiteSettings;
  formations: Formation[];
  applications: ApplicationSubmission[];
  contactMessages: ContactMessage[];
  auditLogs: AuditLog[];
  isAdmin: boolean;
  activeToast: string | null;
  showToast: (msg: string) => void;
  updateSettings: (newSettings: SiteSettings) => void;
  updateApplicationStatus: (id: string, status: ApplicationSubmission['status'], adminNotes?: string) => void;
  refreshApplications: () => void;
  submitApplication: (data: Omit<ApplicationSubmission, 'id' | 'reference' | 'status' | 'createdAt'>) => Promise<{ success: boolean; reference: string; message: string }>;
  submitContact: (data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>) => Promise<{ success: boolean; message: string }>;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);
  const [formations] = useState<Formation[]>(FORMATIONS);
  const [applications, setApplications] = useState<ApplicationSubmission[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  useEffect(() => {
    // Load initial settings
    api.getSiteSettings().then(setSettings);
    setApplications(api.admin.getApplications());
    setContactMessages(api.admin.getContactMessages());
    setAuditLogs(api.admin.getAuditLogs());
    setIsAdmin(api.admin.isAuthenticated());
  }, []);

  const showToast = (msg: string) => {
    setActiveToast(msg);
    setTimeout(() => {
      setActiveToast(null);
    }, 4500);
  };

  const updateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
    api.admin.saveSettings(newSettings);
    setAuditLogs(api.admin.getAuditLogs());
    showToast('Paramètres institutionnels mis à jour avec succès.');
  };

  const updateApplicationStatus = (id: string, status: ApplicationSubmission['status'], adminNotes?: string) => {
    const updated = api.admin.updateApplicationStatus(id, status, adminNotes);
    setApplications(updated);
    setAuditLogs(api.admin.getAuditLogs());
    showToast(`Statut de la candidature mis à jour : ${status}`);
  };

  const refreshApplications = () => {
    setApplications(api.admin.getApplications());
    setContactMessages(api.admin.getContactMessages());
    setAuditLogs(api.admin.getAuditLogs());
  };

  const submitApplication = async (data: Omit<ApplicationSubmission, 'id' | 'reference' | 'status' | 'createdAt'>) => {
    const res = await api.submitApplication(data);
    refreshApplications();
    return res;
  };

  const submitContact = async (data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>) => {
    const res = await api.submitContactMessage(data);
    refreshApplications();
    return res;
  };

  const loginAdmin = (password: string) => {
    const success = api.admin.login(password);
    if (success) {
      setIsAdmin(true);
      refreshApplications();
      showToast('Bienvenue dans l\'espace de gestion CFP TAF.');
    }
    return success;
  };

  const logoutAdmin = () => {
    api.admin.logout();
    setIsAdmin(false);
    showToast('Déconnexion de l\'administration effectuée.');
  };

  return (
    <SiteContext.Provider
      value={{
        settings,
        formations,
        applications,
        contactMessages,
        auditLogs,
        isAdmin,
        activeToast,
        showToast,
        updateSettings,
        updateApplicationStatus,
        refreshApplications,
        submitApplication,
        submitContact,
        loginAdmin,
        logoutAdmin
      }}
    >
      {children}
      {activeToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            backgroundColor: 'var(--taf-plum)',
            border: '1px solid var(--taf-gold)',
            color: '#FFFFFF',
            padding: '14px 22px',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.92rem',
            fontWeight: 500
          }}
        >
          <span style={{ color: 'var(--taf-gold)', fontSize: '1.2rem' }}>✓</span>
          <span>{activeToast}</span>
        </div>
      )}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
