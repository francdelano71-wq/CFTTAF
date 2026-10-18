import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUpRight, Award, Shield, CheckCircle2 } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { settings } = useSite();

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Identity & Official Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <img
                src="/brand/logo_taf.png"
                alt="Logo CFP TAF"
                style={{ height: '62px', width: 'auto' }}
              />
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', lineHeight: 1.1 }}>
                  {settings.schoolName}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--taf-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {settings.slogan}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--taf-slate-300)', marginBottom: '20px', lineHeight: 1.6 }}>
              {settings.diplomaPromise}. Formations certifiantes préparant aux diplômes d'État (DQP, CQP, AQP) avec immersion pratique immédiate et équipement professionnel.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontSize: '0.85rem' }}>
              <Award size={18} />
              <span>Conforme aux référentiels du MINEFOP • République du Cameroun</span>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div>
            <h4 style={{ color: 'var(--taf-white)', marginBottom: '18px', fontSize: '1.1rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <li>
                <button onClick={() => handleNav('/')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }} className="hover:text-gold">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/formations')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }} className="hover:text-gold">
                  Catalogue officiel des 18 formations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/a-propos')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }} className="hover:text-gold">
                  À propos du Centre TAF
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/admissions')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }} className="hover:text-gold">
                  Modalités & Inscription
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }} className="hover:text-gold">
                  Nous Contacter à Dschang
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/admin')} style={{ color: 'var(--taf-slate-400)', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Shield size={13} />
                  <span>Espace Direction / Admin</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Domaines Pédagogiques */}
          <div>
            <h4 style={{ color: 'var(--taf-white)', marginBottom: '18px', fontSize: '1.1rem' }}>
              Filières Phares
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <li>
                <button onClick={() => handleNav('/formations/photographie-professionnelle')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }}>
                  Photographie Professionnelle
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/formations/technicien-de-son')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }}>
                  Technicien Son (Record, Mix)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/formations/cyber-securite')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }}>
                  Cyber Sécurité & Réseaux
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/formations/froid-et-climatisation')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }}>
                  Froid et Climatisation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/formations/energie-renouvelable')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }}>
                  Énergie Solaire Photovoltaïque
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/formations/secretariat-bureautique-bilingue')} style={{ color: 'var(--taf-slate-300)', textAlign: 'left' }}>
                  Secrétariat Bureautique Bilingue
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Localisation Dschang */}
          <div>
            <h4 style={{ color: 'var(--taf-white)', marginBottom: '18px', fontSize: '1.1rem' }}>
              Contacts Officiels
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px', fontSize: '0.9rem' }}>
              <MapPin size={20} style={{ color: 'var(--taf-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--taf-white)', display: 'block' }}>{settings.city}, Cameroun</strong>
                <span style={{ color: 'var(--taf-slate-300)' }}>{settings.address}</span>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--taf-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                Lignes Téléphoniques Dédiées
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.86rem' }}>
                {(settings.contacts || []).map((c) => (
                  <a
                    key={c.raw}
                    href={`tel:+237${c.raw}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--taf-slate-200)',
                      padding: '3px 0'
                    }}
                    title={c.label}
                  >
                    <Phone size={12} style={{ color: 'var(--taf-gold)' }} />
                    <span>{c.display}</span>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20je%20souhaite%20des%20informations%20sur%20les%20inscriptions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp Officiel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal and Credits */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {settings.schoolName} (CFP TAF). Tous droits réservés.
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('/mentions-legales')} style={{ color: 'var(--taf-slate-400)' }}>
              Mentions Légales
            </button>
            <button onClick={() => handleNav('/confidentialite')} style={{ color: 'var(--taf-slate-400)' }}>
              Protection des Données & Confidentialité
            </button>
            <button onClick={() => handleNav('/admin')} style={{ color: 'var(--taf-slate-400)' }}>
              Administration
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
