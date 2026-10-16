import React, { useState } from 'react';
import {
  Users,
  FileCheck,
  Clock,
  CheckCircle2,
  XCircle,
  Settings,
  Shield,
  LogOut,
  Search,
  ExternalLink,
  MessageSquare,
  History,
  Phone,
  Save,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { ApplicationSubmission } from '../../services/api';

interface AdminDashboardPageProps {
  onLogout: () => void;
  onNavigateHome: () => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onLogout, onNavigateHome }) => {
  const {
    settings,
    updateSettings,
    applications,
    updateApplicationStatus,
    contactMessages,
    auditLogs,
    formations
  } = useSite();

  const [activeTab, setActiveTab] = useState<'applications' | 'messages' | 'settings' | 'audit'>('applications');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedApp, setSelectedApp] = useState<ApplicationSubmission | null>(null);
  const [adminNoteInput, setAdminNoteInput] = useState<string>('');

  // Editable settings local state
  const [editableSettings, setEditableSettings] = useState({
    inscriptionsOpen: settings.inscriptionsOpen,
    inscriptionSession: settings.inscriptionSession,
    primaryPhone: settings.primaryPhone,
    address: settings.address,
    hours: settings.hours,
    slogan: settings.slogan
  });

  // Calculate Metrics
  const totalApps = applications.length;
  const newApps = applications.filter(a => a.status === 'new').length;
  const inProgressApps = applications.filter(a => a.status === 'contacted' || a.status === 'under_review').length;
  const acceptedApps = applications.filter(a => a.status === 'accepted').length;

  // Filter applications
  const filteredApps = applications.filter((app) => {
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesSearch =
      searchQuery === '' ||
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery) ||
      (app.reference && app.reference.toLowerCase().includes(searchQuery.toLowerCase())) ||
      app.formationTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleOpenAppModal = (app: ApplicationSubmission) => {
    setSelectedApp(app);
    setAdminNoteInput(app.adminNotes || '');
  };

  const handleSaveAppStatus = (status: ApplicationSubmission['status']) => {
    if (!selectedApp || !selectedApp.id) return;
    updateApplicationStatus(selectedApp.id, status, adminNoteInput);
    setSelectedApp(prev => prev ? { ...prev, status, adminNotes: adminNoteInput } : null);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      ...settings,
      ...editableSettings
    });
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'new':
        return <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', fontSize: '0.78rem', fontWeight: 600 }}>Nouveau</span>;
      case 'contacted':
        return <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(245, 197, 27, 0.2)', color: 'var(--taf-gold)', fontSize: '0.78rem', fontWeight: 600 }}>Contacté</span>;
      case 'under_review':
        return <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: '#C084FC', fontSize: '0.78rem', fontWeight: 600 }}>En Examen</span>;
      case 'accepted':
        return <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontSize: '0.78rem', fontWeight: 600 }}>Admis</span>;
      case 'rejected':
        return <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#F87171', fontSize: '0.78rem', fontWeight: 600 }}>Refusé</span>;
      case 'closed':
        return <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94A3B8', fontSize: '0.78rem', fontWeight: 600 }}>Clôturé</span>;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Admin Header */}
      <header
        style={{
          backgroundColor: 'var(--taf-plum-dark)',
          borderBottom: '1px solid rgba(245, 197, 27, 0.25)',
          padding: '16px 0',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img src="/brand/logo_taf.png" alt="TAF" style={{ height: '42px', width: 'auto' }} />
            <div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--taf-white)', fontWeight: 700 }}>
                Espace Direction • CFP TAF
              </span>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--taf-gold)' }}>
                Dschang, Immeuble Supermarché Synergie, 2e étage
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onNavigateHome}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <ExternalLink size={14} />
              <span>Voir le site</span>
            </button>
            <button
              onClick={onLogout}
              className="btn btn-outline btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <LogOut size={14} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="container" style={{ padding: '32px 24px', flex: 1 }}>
        {/* KPI Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px', marginBottom: '32px' }}>
          {/* Total */}
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--taf-slate-400)', textTransform: 'uppercase', fontWeight: 600 }}>
              Candidatures Reçues
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--taf-gold)', fontWeight: 700, margin: '6px 0' }}>
              {totalApps}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--taf-slate-300)' }}>
              Enregistrées en base
            </span>
          </div>

          {/* New */}
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
            <span style={{ fontSize: '0.8rem', color: '#60A5FA', textTransform: 'uppercase', fontWeight: 600 }}>
              Nouvelles Candidatures
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: '#60A5FA', fontWeight: 700, margin: '6px 0' }}>
              {newApps}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--taf-slate-300)' }}>
              À contacter sous 24h
            </span>
          </div>

          {/* In progress */}
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
            <span style={{ fontSize: '0.8rem', color: '#C084FC', textTransform: 'uppercase', fontWeight: 600 }}>
              Dossiers en Traitement
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: '#C084FC', fontWeight: 700, margin: '6px 0' }}>
              {inProgressApps}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--taf-slate-300)' }}>
              Entretiens en cours
            </span>
          </div>

          {/* Formations actives */}
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--taf-slate-400)', textTransform: 'uppercase', fontWeight: 600 }}>
              Filières Actives
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--taf-white)', fontWeight: 700, margin: '6px 0' }}>
              {formations.length}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--taf-slate-300)' }}>
              Toutes ouvertes
            </span>
          </div>

          {/* Messages */}
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
            <span style={{ fontSize: '0.8rem', color: '#34D399', textTransform: 'uppercase', fontWeight: 600 }}>
              Messages Reçus
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: '#34D399', fontWeight: 700, margin: '6px 0' }}>
              {contactMessages.length}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--taf-slate-300)' }}>
              Formulaire de contact
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px', marginBottom: '28px' }}>
          <button
            onClick={() => setActiveTab('applications')}
            className="btn btn-sm"
            style={{
              backgroundColor: activeTab === 'applications' ? 'var(--taf-gold)' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'applications' ? 'var(--taf-plum-dark)' : 'var(--taf-white)'
            }}
          >
            <Users size={15} />
            <span>Gestion des Candidatures ({applications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className="btn btn-sm"
            style={{
              backgroundColor: activeTab === 'messages' ? 'var(--taf-gold)' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'messages' ? 'var(--taf-plum-dark)' : 'var(--taf-white)'
            }}
          >
            <MessageSquare size={15} />
            <span>Messages ({contactMessages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className="btn btn-sm"
            style={{
              backgroundColor: activeTab === 'settings' ? 'var(--taf-gold)' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'settings' ? 'var(--taf-plum-dark)' : 'var(--taf-white)'
            }}
          >
            <Settings size={15} />
            <span>Paramètres du Site & Inscriptions</span>
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className="btn btn-sm"
            style={{
              backgroundColor: activeTab === 'audit' ? 'var(--taf-gold)' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'audit' ? 'var(--taf-plum-dark)' : 'var(--taf-white)'
            }}
          >
            <History size={15} />
            <span>Journal d'Audit ({auditLogs.length})</span>
          </button>
        </div>

        {/* Tab 1: Applications */}
        {activeTab === 'applications' && (
          <div>
            {/* Filter & Search Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['all', 'new', 'contacted', 'under_review', 'accepted', 'rejected'].map(st => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      backgroundColor: statusFilter === st ? 'var(--taf-plum)' : 'rgba(255,255,255,0.04)',
                      border: '1px solid',
                      borderColor: statusFilter === st ? 'var(--taf-gold)' : 'rgba(255,255,255,0.1)',
                      color: statusFilter === st ? 'var(--taf-gold)' : 'var(--taf-slate-300)'
                    }}
                  >
                    {st === 'all' ? 'Toutes' : st === 'new' ? 'Nouvelles' : st === 'contacted' ? 'Contactées' : st === 'under_review' ? 'En examen' : st === 'accepted' ? 'Admises' : 'Refusées'}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative', width: '280px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--taf-slate-400)' }} />
                <input
                  type="text"
                  placeholder="Rechercher nom, réf, téléphone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '36px', paddingBottom: '8px', paddingTop: '8px', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            {/* Applications Table */}
            <div
              className="card-craft"
              style={{
                backgroundColor: 'var(--taf-dark-card)',
                padding: '0',
                overflowX: 'auto'
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <th style={{ padding: '14px 18px', color: 'var(--taf-gold)', fontWeight: 600 }}>Réf.</th>
                    <th style={{ padding: '14px 18px', color: 'var(--taf-white)', fontWeight: 600 }}>Candidat</th>
                    <th style={{ padding: '14px 18px', color: 'var(--taf-white)', fontWeight: 600 }}>Téléphone</th>
                    <th style={{ padding: '14px 18px', color: 'var(--taf-white)', fontWeight: 600 }}>Formation</th>
                    <th style={{ padding: '14px 18px', color: 'var(--taf-white)', fontWeight: 600 }}>Niveau</th>
                    <th style={{ padding: '14px 18px', color: 'var(--taf-white)', fontWeight: 600 }}>Statut</th>
                    <th style={{ padding: '14px 18px', color: 'var(--taf-white)', fontWeight: 600 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApps.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ padding: '36px', textAlign: 'center', color: 'var(--taf-slate-400)' }}>
                        Aucune candidature trouvée avec les critères sélectionnés.
                      </td>
                    </tr>
                  ) : (
                    filteredApps.map((app) => (
                      <tr
                        key={app.id || app.reference}
                        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background-color 120ms ease' }}
                        className="hover:bg-white/5"
                      >
                        <td style={{ padding: '14px 18px', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--taf-gold)' }}>
                          {app.reference}
                        </td>
                        <td style={{ padding: '14px 18px', fontWeight: 600, color: 'var(--taf-white)' }}>
                          {app.fullName}
                          <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--taf-slate-400)', fontWeight: 400 }}>
                            {app.city}
                          </span>
                        </td>
                        <td style={{ padding: '14px 18px', color: 'var(--taf-slate-200)' }}>
                          <a href={`tel:+237${app.phone}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                            {app.phone}
                          </a>
                        </td>
                        <td style={{ padding: '14px 18px', color: 'var(--taf-slate-200)', maxWidth: '200px' }}>
                          {app.formationTitle}
                        </td>
                        <td style={{ padding: '14px 18px', color: 'var(--taf-slate-300)' }}>
                          {app.educationLevel}
                        </td>
                        <td style={{ padding: '14px 18px' }}>
                          {getStatusBadge(app.status)}
                        </td>
                        <td style={{ padding: '14px 18px' }}>
                          <button
                            onClick={() => handleOpenAppModal(app)}
                            className="btn btn-secondary btn-sm"
                            style={{ fontSize: '0.78rem', padding: '6px 12px' }}
                          >
                            <span>Gérer</span>
                            <ChevronRight size={13} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Messages */}
        {activeTab === 'messages' && (
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '18px' }}>
              Messages Reçus depuis le Site ({contactMessages.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactMessages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    padding: '18px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <strong style={{ color: 'var(--taf-gold)', fontSize: '1.05rem' }}>{msg.fullName}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--taf-slate-400)' }}>
                      {new Date(msg.createdAt || '').toLocaleString('fr-FR')}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--taf-slate-300)', marginBottom: '10px' }}>
                    <span>Téléphone : <a href={`tel:+237${msg.phone}`} style={{ color: 'var(--taf-gold)' }}>{msg.phone}</a></span>
                    {msg.email && <span>E-mail : {msg.email}</span>}
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--taf-white)', fontSize: '0.92rem', marginBottom: '6px' }}>
                    Sujet : {msg.subject}
                  </div>
                  <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Settings */}
        {activeTab === 'settings' && (
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)', maxWidth: '780px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--taf-white)', marginBottom: '20px' }}>
              Configuration des Paramètres du Centre TAF
            </h3>

            <form onSubmit={handleSaveSettings}>
              {/* Statut des inscriptions */}
              <div className="form-group" style={{ backgroundColor: 'var(--taf-plum)', padding: '16px', borderRadius: '8px', border: '1px solid var(--taf-gold-border)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={editableSettings.inscriptionsOpen}
                    onChange={(e) => setEditableSettings({ ...editableSettings, inscriptionsOpen: e.target.checked })}
                    style={{ accentColor: 'var(--taf-gold)', width: '20px', height: '20px' }}
                  />
                  <div>
                    <strong style={{ color: 'var(--taf-white)', fontSize: '1rem', display: 'block' }}>
                      Inscriptions ouvertes au public
                    </strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--taf-slate-300)' }}>
                      Active ou désactive le statut public des candidatures sur le hero et les bannières.
                    </span>
                  </div>
                </label>
              </div>

              {/* Session name */}
              <div className="form-group">
                <label className="form-label">Nom de la session active</label>
                <input
                  type="text"
                  className="form-input"
                  value={editableSettings.inscriptionSession}
                  onChange={(e) => setEditableSettings({ ...editableSettings, inscriptionSession: e.target.value })}
                />
              </div>

              {/* Téléphone Principal */}
              <div className="form-group">
                <label className="form-label">Numéro Principal & WhatsApp</label>
                <input
                  type="text"
                  className="form-input"
                  value={editableSettings.primaryPhone}
                  onChange={(e) => setEditableSettings({ ...editableSettings, primaryPhone: e.target.value })}
                />
              </div>

              {/* Adresse */}
              <div className="form-group">
                <label className="form-label">Adresse officielle</label>
                <input
                  type="text"
                  className="form-input"
                  value={editableSettings.address}
                  onChange={(e) => setEditableSettings({ ...editableSettings, address: e.target.value })}
                />
              </div>

              {/* Horaires */}
              <div className="form-group">
                <label className="form-label">Horaires d'ouverture</label>
                <input
                  type="text"
                  className="form-input"
                  value={editableSettings.hours}
                  onChange={(e) => setEditableSettings({ ...editableSettings, hours: e.target.value })}
                />
              </div>

              {/* Slogan */}
              <div className="form-group">
                <label className="form-label">Slogan officiel</label>
                <input
                  type="text"
                  className="form-input"
                  value={editableSettings.slogan}
                  onChange={(e) => setEditableSettings({ ...editableSettings, slogan: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Save size={16} />
                <span>Enregistrer les paramètres institutionnels</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 4: Audit Logs */}
        {activeTab === 'audit' && (
          <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '16px' }}>
              Journal d'Audit & Traçabilité des Actions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {auditLogs.map((log) => (
                <div
                  key={log.id}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.85rem'
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--taf-gold)', marginRight: '10px' }}>
                      [{log.action}]
                    </span>
                    <span style={{ color: 'var(--taf-white)' }}>{log.details}</span>
                  </div>
                  <span style={{ color: 'var(--taf-slate-400)', fontSize: '0.78rem' }}>
                    {new Date(log.timestamp).toLocaleString('fr-FR')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal for Managing an Application */}
      {selectedApp && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            className="card-craft"
            style={{
              width: '100%',
              maxWidth: '600px',
              backgroundColor: 'var(--taf-dark-card)',
              border: '2px solid var(--taf-gold)',
              padding: '28px',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px' }}>
              <div>
                <span style={{ color: 'var(--taf-gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  Dossier : {selectedApp.reference}
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--taf-white)' }}>
                  {selectedApp.fullName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                style={{ color: 'var(--taf-slate-400)', fontSize: '1.4rem', lineHeight: 1 }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.9rem', marginBottom: '20px' }}>
              <div>
                <span style={{ color: 'var(--taf-slate-400)', fontSize: '0.8rem' }}>Téléphone :</span>
                <div>
                  <a href={`tel:+237${selectedApp.phone}`} style={{ color: 'var(--taf-gold)', fontWeight: 600 }}>
                    {selectedApp.phone}
                  </a>
                </div>
              </div>

              <div>
                <span style={{ color: 'var(--taf-slate-400)', fontSize: '0.8rem' }}>Ville :</span>
                <strong style={{ color: 'var(--taf-white)' }}>{selectedApp.city}</strong>
              </div>

              <div>
                <span style={{ color: 'var(--taf-slate-400)', fontSize: '0.8rem' }}>Formation souhaitée :</span>
                <strong style={{ color: 'var(--taf-gold)' }}>{selectedApp.formationTitle}</strong>
              </div>

              <div>
                <span style={{ color: 'var(--taf-slate-400)', fontSize: '0.8rem' }}>Niveau :</span>
                <strong style={{ color: 'var(--taf-white)' }}>{selectedApp.educationLevel}</strong>
              </div>
            </div>

            {selectedApp.message && (
              <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '14px', borderRadius: '6px', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--taf-slate-400)', display: 'block', marginBottom: '4px' }}>
                  Message du candidat :
                </span>
                <p style={{ color: 'var(--taf-slate-200)', fontSize: '0.88rem' }}>
                  {selectedApp.message}
                </p>
              </div>
            )}

            {/* Change Status Buttons */}
            <div style={{ marginBottom: '22px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--taf-white)', display: 'block', marginBottom: '8px' }}>
                Changer le statut de la candidature :
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button onClick={() => handleSaveAppStatus('contacted')} className="btn btn-secondary btn-sm">
                  Marquer Contacté
                </button>
                <button onClick={() => handleSaveAppStatus('under_review')} className="btn btn-secondary btn-sm">
                  En Examen
                </button>
                <button onClick={() => handleSaveAppStatus('accepted')} className="btn btn-primary btn-sm">
                  Valider / Admis
                </button>
                <button onClick={() => handleSaveAppStatus('rejected')} className="btn btn-outline btn-sm" style={{ color: '#F87171', borderColor: '#F87171' }}>
                  Refuser
                </button>
              </div>
            </div>

            {/* Admin Notes */}
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label">Notes internes de la direction</label>
              <textarea
                rows={3}
                className="form-textarea"
                placeholder="Ajoutez des observations (ex: entretien fixé au 18 octobre, pièces manquantes...)"
                value={adminNoteInput}
                onChange={(e) => setAdminNoteInput(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => handleSaveAppStatus(selectedApp.status || 'contacted')}
                className="btn btn-primary btn-sm"
              >
                <span>Sauvegarder les notes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
