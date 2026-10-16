import React from 'react';
import { ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

interface CtaFinalSectionProps {
  onNavigate: (path: string) => void;
}

export const CtaFinalSection: React.FC<CtaFinalSectionProps> = ({ onNavigate }) => {
  const { settings } = useSite();

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-dark-base)', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: 'var(--taf-plum)',
            border: '2px solid var(--taf-gold)',
            padding: 'clamp(36px, 6vw, 64px)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
          }}
        >
          {/* Subtle background glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245, 197, 27, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--taf-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px'
              }}
            >
              Session {settings.inscriptionSession} • Places Limitées
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--taf-white)', marginBottom: '18px', lineHeight: 1.1 }}>
              Prêt à transformer votre savoir-faire en métier d'avenir ?
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--taf-slate-200)', lineHeight: 1.65, marginBottom: '32px' }}>
              Nos conseillers sont disponibles à Dschang pour étudier votre projet professionnel, valider vos prérequis et préparer votre rentrée au Centre de Formation Professionnelle TAF.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <button
                onClick={() => onNavigate('/admissions')}
                className="btn btn-primary btn-lg"
              >
                <span>Demander une inscription en ligne</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20je%20souhaite%20m%27inscrire%20pour%20la%20prochaine%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>Échanger sur WhatsApp</span>
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.88rem',
                color: 'var(--taf-slate-300)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--taf-gold)' }} />
                <span>Immeuble Supermarché Synergie, 2e étage, Dschang</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--taf-gold)' }} />
                <span>Standard : 695 673 710 / 687 375 696</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
