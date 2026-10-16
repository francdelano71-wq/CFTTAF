import { FORMATIONS, Formation } from '../data/formationsData';
import { INITIAL_SETTINGS, SiteSettings } from '../data/siteConfig';

export interface ApplicationSubmission {
  id?: string;
  reference?: string;
  fullName: string;
  phone: string;
  email?: string;
  city: string;
  formationId: string;
  formationTitle: string;
  educationLevel: string;
  preferredContactMethod: 'phone' | 'whatsapp' | 'email';
  message?: string;
  privacyConsent: boolean;
  status?: 'new' | 'contacted' | 'under_review' | 'accepted' | 'rejected' | 'closed';
  adminNotes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactMessage {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  status?: 'new' | 'read' | 'replied' | 'archived';
  createdAt?: string;
}

export interface AuditLog {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  details: string;
  author: string;
  timestamp: string;
}

const STORAGE_KEYS = {
  APPLICATIONS: 'cfptaf_applications',
  MESSAGES: 'cfptaf_messages',
  SETTINGS: 'cfptaf_settings',
  FORMATIONS: 'cfptaf_formations',
  AUDIT_LOGS: 'cfptaf_audit_logs',
  AUTH_TOKEN: 'cfptaf_admin_token'
};

// Seed initial localStorage state if empty
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SETTINGS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.FORMATIONS)) {
    localStorage.setItem(STORAGE_KEYS.FORMATIONS, JSON.stringify(FORMATIONS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.APPLICATIONS)) {
    const demoApps: ApplicationSubmission[] = [
      {
        id: 'app-1',
        reference: 'TAF-2026-8421',
        fullName: 'Kenfack Jean-Pierre',
        phone: '695123456',
        email: 'kenfack.jp@example.cm',
        city: 'Dschang',
        formationId: '1',
        formationTitle: 'Photographie Professionnelle',
        educationLevel: 'Baccalauréat',
        preferredContactMethod: 'whatsapp',
        message: 'Passionné de prise de vue studio et reportage photo.',
        privacyConsent: true,
        status: 'new',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
      },
      {
        id: 'app-2',
        reference: 'TAF-2026-7833',
        fullName: 'Ngono Marie Chantal',
        phone: '677987654',
        email: 'ngono.m@example.cm',
        city: 'Bafoussam',
        formationId: '7',
        formationTitle: 'Cyber Sécurité',
        educationLevel: 'Baccalauréat',
        preferredContactMethod: 'phone',
        message: 'Intéressée par la sécurité réseau et la protection des données.',
        privacyConsent: true,
        status: 'contacted',
        adminNotes: 'Candidate contactée par téléphone, dossier pré-validé.',
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
      },
      {
        id: 'app-3',
        reference: 'TAF-2026-6109',
        fullName: 'Tchinda Boris',
        phone: '655443322',
        city: 'Dschang',
        formationId: '12',
        formationTitle: 'Froid et Climatisation',
        educationLevel: 'CAP',
        preferredContactMethod: 'phone',
        message: 'Prêt pour la pratique en atelier frigorifique.',
        privacyConsent: true,
        status: 'under_review',
        createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
      }
    ];
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(demoApps));
  }
  if (!localStorage.getItem(STORAGE_KEYS.MESSAGES)) {
    const demoMessages: ContactMessage[] = [
      {
        id: 'msg-1',
        fullName: 'M. Kamdem Lucas',
        phone: '699887766',
        email: 'kamdem@enterprise.cm',
        subject: 'Partenariat stage pour étudiants en Électricité & Froid',
        message: 'Bonjour, notre entreprise à Bafoussam souhaite accueillir 3 stagiaires du CFP TAF pour la rentrée.',
        status: 'new',
        createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
      }
    ];
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(demoMessages));
  }
  if (!localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS)) {
    const initialLogs: AuditLog[] = [
      {
        id: 'log-1',
        action: 'INITIALISATION',
        entityType: 'SYSTEM',
        entityId: 'SYSTEM',
        details: 'Initialisation du catalogue de 16 formations et des paramètres officiels TAF.',
        author: 'Système',
        timestamp: new Date().toISOString()
      }
    ];
    localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify(initialLogs));
  }
};

// Auto-run initialization on module load
if (typeof window !== 'undefined') {
  initializeStorage();
}

export const api = {
  // Public Formations
  getFormations: async (): Promise<Formation[]> => {
    try {
      const res = await fetch('/api/v1/formations');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback to local storage
    }
    const stored = localStorage.getItem(STORAGE_KEYS.FORMATIONS);
    return stored ? JSON.parse(stored) : FORMATIONS;
  },

  getFormationBySlug: async (slug: string): Promise<Formation | undefined> => {
    const formations = await api.getFormations();
    return formations.find(f => f.slug === slug);
  },

  // Public Settings
  getSiteSettings: async (): Promise<SiteSettings> => {
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    let local: Partial<SiteSettings> = {};
    try {
      local = stored ? JSON.parse(stored) : {};
    } catch {
      local = {};
    }
    let remote: Partial<SiteSettings> = {};
    try {
      const res = await fetch('/api/v1/site-settings/public');
      if (res.ok) {
        remote = await res.json();
      }
    } catch {
      // Fallback to local
    }
    const merged: SiteSettings = { ...INITIAL_SETTINGS, ...local, ...remote };
    // Guarantee array fields are always arrays
    if (!Array.isArray(merged.contacts) || merged.contacts.length === 0) merged.contacts = INITIAL_SETTINGS.contacts;
    if (!Array.isArray(merged.values) || merged.values.length === 0) merged.values = INITIAL_SETTINGS.values;
    return merged;
  },

  // Submit Application
  submitApplication: async (data: Omit<ApplicationSubmission, 'id' | 'reference' | 'status' | 'createdAt'>): Promise<{ success: boolean; reference: string; message: string }> => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const reference = `TAF-2026-${randomSuffix}`;
    const newApp: ApplicationSubmission = {
      ...data,
      id: `app-${Date.now()}`,
      reference,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/v1/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newApp)
      });
      if (res.ok) {
        const json = await res.json();
        return { success: true, reference: json.reference || reference, message: 'Candidature enregistrée avec succès.' };
      }
    } catch {
      // Network fallback
    }

    // Persist locally
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]');
    current.unshift(newApp);
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(current));

    return {
      success: true,
      reference,
      message: 'Votre demande d\'inscription a été transmise avec succès au secrétariat du CFP TAF.'
    };
  },

  // Submit Contact Message
  submitContactMessage: async (data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<{ success: boolean; message: string }> => {
    const newMsg: ContactMessage = {
      ...data,
      id: `msg-${Date.now()}`,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/v1/contact-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMsg)
      });
      if (res.ok) {
        return { success: true, message: 'Message transmis avec succès.' };
      }
    } catch {
      // Network fallback
    }

    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    current.unshift(newMsg);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(current));

    return { success: true, message: 'Votre message a été transmis à la direction du Centre TAF.' };
  },

  // Admin API Methods
  admin: {
    login: (password: string): boolean => {
      // Standard initial admin credentials: admin / TAF2026! or direct key
      if (password === 'TAF2026!' || password === 'admin' || password === 'dschang2026') {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, 'admin_session_token_' + Date.now());
        api.admin.logAudit('CONNEXION', 'ADMIN', 'Session', 'Connexion réussie au panneau d\'administration.');
        return true;
      }
      return false;
    },

    logout: () => {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    },

    isAuthenticated: (): boolean => {
      return !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    },

    getApplications: (): ApplicationSubmission[] => {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]');
    },

    updateApplicationStatus: (id: string, status: ApplicationSubmission['status'], adminNotes?: string) => {
      const apps: ApplicationSubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]');
      const index = apps.findIndex(a => a.id === id);
      if (index !== -1) {
        apps[index].status = status;
        if (adminNotes !== undefined) {
          apps[index].adminNotes = adminNotes;
        }
        apps[index].updatedAt = new Date().toISOString();
        localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps));
        api.admin.logAudit('MODIFICATION_STATUT', 'CANDIDATURE', apps[index].reference || id, `Statut mis à jour vers: ${status}`);
      }
      return apps;
    },

    getContactMessages: (): ContactMessage[] => {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    },

    updateContactMessageStatus: (id: string, status: ContactMessage['status']) => {
      const msgs: ContactMessage[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
      const index = msgs.findIndex(m => m.id === id);
      if (index !== -1) {
        msgs[index].status = status;
        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(msgs));
      }
      return msgs;
    },

    saveSettings: (settings: SiteSettings) => {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
      api.admin.logAudit('MODIFICATION_PARAMETRES', 'SETTINGS', 'Global', 'Mise à jour des coordonnées et textes institutionnels');
    },

    getAuditLogs: (): AuditLog[] => {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS) || '[]');
    },

    logAudit: (action: string, entityType: string, entityId: string, details: string) => {
      const logs: AuditLog[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS) || '[]');
      const newLog: AuditLog = {
        id: `log-${Date.now()}`,
        action,
        entityType,
        entityId,
        details,
        author: 'Directeur / Admin TAF',
        timestamp: new Date().toISOString()
      };
      logs.unshift(newLog);
      localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify(logs.slice(0, 100)));
    }
  }
};
