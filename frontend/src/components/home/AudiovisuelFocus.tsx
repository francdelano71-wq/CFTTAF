import React from 'react';
import { Camera, Mic2, Film, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';

interface AudiovisuelFocusProps {
  onNavigate: (path: string) => void;
}

export const AudiovisuelFocus: React.FC<AudiovisuelFocusProps> = ({ onNavigate }) => {
  const highlights = [
    {
      icon: Camera,
      title: 'Prise de Vue & Studio Photo',
      desc: 'Maîtrise complète des boîtiers pros, de l\'éclairage de studio, du portrait et du reportage de terrain.',
      slug: 'photographie-professionnelle'
    },
    {
      icon: Mic2,
      title: 'Studio de Son : Record, Mix, Master',
      desc: 'Enregistrement vocal et acoustique, mixage multipiste et mastering audio aux normes broadcast internationales.',
      slug: 'technicien-de-son'
    },
    {
      icon: Film,
      title: 'Montage Vidéo & Post-Production',
      desc: 'Dérushage, découpage narratif, étalonnage DaVinci Resolve et habillage visuel pour le cinéma et la télévision.',
      slug: 'montage-audiovisuel'
    },
    {
      icon: ShieldAlert,
      title: 'Cybersécurité & Défense des Réseaux',
      desc: 'Sécurisation des architectures informatiques, pare-feu, détection des intrusions et audits préventifs.',
      slug: 'cyber-securite'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-plum-dark)', borderTop: '1px solid rgba(245, 197, 27, 0.2)', borderBottom: '1px solid rgba(245, 197, 27, 0.2)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          {/* Left Column: Visual Media Showcase */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--taf-gold-border)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                position: 'relative'
              }}
            >
              <img
                src="/images/categories/audiovisuel.jpg"
                alt="Studio de son et régie audiovisuelle au Centre TAF"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(37, 23, 29, 0.9) 0%, transparent 60%)'
                }}
              />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                <span className="tag-badge tag-badge-gold" style={{ marginBottom: '8px' }}>
                  Pôle Audiovisuel d'Élite
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--taf-white)', lineHeight: 1.2 }}>
                  Des équipements réels pour une immersion sans compromis
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Explanations and Key Features */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              <span>Focus Industrie Créative & Digitale</span>
            </div>

            <h2 style={{ marginBottom: '20px', color: 'var(--taf-white)' }}>
              Les métiers de l'image, du son et du numérique
            </h2>

            <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--taf-slate-200)', marginBottom: '28px' }}>
              Le secteur créatif camerounais connaît une mutation historique. Pour répondre aux besoins des chaînes télévisées, des studios de cinéma, des agences de publicité et des entreprises technologiques, le CFP TAF forme des profils pointus et polyvalents.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    onClick={() => onNavigate(`/formations/${h.slug}`)}
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 160ms var(--ease-snappy)'
                    }}
                    className="card-craft"
                  >
                    <Icon size={22} style={{ color: 'var(--taf-gold)', marginBottom: '8px' }} />
                    <h4 style={{ fontSize: '1rem', color: 'var(--taf-white)', marginBottom: '6px' }}>
                      {h.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--taf-slate-300)', lineHeight: 1.45 }}>
                      {h.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onNavigate('/formations')}
              className="btn btn-primary"
            >
              <span>Découvrir l'ensemble du pôle audiovisuel</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
