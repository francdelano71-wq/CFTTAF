import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const { settings, isAdmin } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Nos Formations', path: '/formations', badge: '16' },
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top emergency & inscription ticker bar */}
      <div
        style={{
          backgroundColor: 'var(--taf-plum-dark)',
          borderBottom: '1px solid rgba(245, 197, 27, 0.25)',
          padding: '6px 0',
          fontSize: '0.8rem',
          color: 'var(--taf-slate-300)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: settings.inscriptionsOpen ? '#10B981' : '#EF4444'
              }}
            />
            <span style={{ fontWeight: 600, color: 'var(--taf-white)' }}>
              {settings.inscriptionsOpen ? `Inscriptions Ouvertes (${settings.inscriptionSession})` : 'Inscriptions Clôturées'}
            </span>
            <span className="show-md" style={{ color: 'var(--taf-gold)', fontWeight: 500 }}>
              • DQP, CQP, AQP en 1 an avec stage
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={`tel:+237${settings.primaryPhone}`}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--taf-gold)', fontWeight: 600 }}
              title="Appeler le secrétariat"
            >
              <Phone size={13} />
              <span>+237 695 673 710</span>
            </a>
            <a
              href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20je%20souhaite%20des%20renseignements%20sur%20les%20formations.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#25D366', fontWeight: 600 }}
              title="Contacter sur WhatsApp"
            >
              <MessageCircle size={13} />
              <span className="show-sm">WhatsApp Direct</span>
            </a>
            <button
              onClick={() => handleNavClick('/admin')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: isAdmin ? 'var(--taf-gold)' : 'var(--taf-slate-400)',
                fontSize: '0.78rem',
                padding: '2px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255,255,255,0.06)'
              }}
              title="Accès Administration"
            >
              <Shield size={12} />
              <span>{isAdmin ? 'Admin Connecté' : 'Portail'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="site-navbar">
        <div className="container nav-container">
          {/* Brand Logo & Name */}
          <div
            className="nav-brand"
            onClick={() => handleNavClick('/')}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <img
              src="/brand/logo_taf.png"
              alt="Logo Centre de Formation Professionnelle TAF"
              className="nav-logo-img"
            />
            <div className="nav-brand-text">
              <span className="nav-school-name">{settings.shortName}</span>
              <span className="nav-school-sub">Formation Bilingue • Dschang</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Navigation principale">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        backgroundColor: 'var(--taf-plum)',
                        color: 'var(--taf-gold)',
                        border: '1px solid var(--taf-gold-border)',
                        padding: '1px 6px',
                        borderRadius: '10px',
                        fontWeight: 700
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button
              onClick={() => handleNavClick('/admissions')}
              className="btn btn-primary btn-sm nav-cta-desktop"
            >
              <span>Candidater</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-tactile nav-burger"
              aria-expanded={mobileMenuOpen}
              style={{
                color: 'var(--taf-white)',
                padding: '8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255,255,255,0.06)'
              }}
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="nav-mobile-drawer"
          style={{
            position: 'fixed',
            inset: 0,
            top: 'calc(var(--header-height) + 33px)',
            backgroundColor: 'rgba(16, 13, 16, 0.98)',
            backdropFilter: 'blur(16px)',
            zIndex: 999,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'var(--taf-plum)' : 'rgba(255,255,255,0.04)',
                    color: isActive ? 'var(--taf-gold)' : 'var(--taf-white)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    textAlign: 'left'
                  }}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: '0.8rem',
                        backgroundColor: 'var(--taf-gold)',
                        color: 'var(--taf-plum-dark)',
                        padding: '2px 8px',
                        borderRadius: '10px'
                      }}
                    >
                      {item.badge} filières
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
            <button
              onClick={() => handleNavClick('/admissions')}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <span>Demander une inscription</span>
              <ArrowRight size={18} />
            </button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <a
                href={`tel:+237${settings.primaryPhone}`}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.85rem' }}
              >
                <Phone size={15} />
                <span>Appeler</span>
              </a>
              <a
                href={`https://wa.me/${settings.primaryWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', fontSize: '0.85rem' }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--taf-slate-400)', marginTop: '8px' }}>
              Dschang, Immeuble Supermarché Synergie, 2e étage
            </p>
          </div>
        </div>
      )}
    </>
  );
};
