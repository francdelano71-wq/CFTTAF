import React from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';

interface AccessConditionsSectionProps {
  onNavigate: (path: string) => void;
}

export const AccessConditionsSection: React.FC<AccessConditionsSectionProps> = ({ onNavigate }) => {
  const levels = [
    {
      level: 'CEP / Débutant',
      sectors: 'Froid & Climatisation, Plomberie & Tuyauterie, Électricité Bâtiment, Cosmétique',
      desc: 'Accès aux formations pratiques et attestations de qualification professionnelle (AQP). Motivation et aptitudes manuelles requises.'
    },
    {
      level: 'CAP / BEPC / GCE O Level',
      sectors: 'Photographie, Montage Vidéo, Secrétariat Bureautique, Énergie Solaire, Froid, Électricité',
      desc: 'Accès direct aux cycles complets menant au CQP et DQP d\'État. Entretien d\'évaluation et constitution du dossier.'
    },
    {
      level: 'Baccalauréat / GCE A Level',
      sectors: 'Cyber Sécurité, Webmaster, Design Graphique, Technicien Son, Secrétariat de Direction',
      desc: 'Accès aux filières techniques avancées et de gestion stratégique menant aux diplômes DQP et opportunités de spécialisation.'
    },
    {
      level: 'Reconversion Professionnelle',
      sectors: 'Toutes les filières selon projet professionnel',
      desc: 'Pour salariés, entrepreneurs ou demandeurs d\'emploi souhaitant acquérir un savoir-faire immédiatement monétisable en 1 an.'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-dark-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            <span>Critères d'Admission Officiels</span>
          </div>
          <h2 style={{ color: 'var(--taf-white)', marginBottom: '14px' }}>
            Conditions d'Accès & Niveaux d'Études
          </h2>
          <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Une formation pour chaque niveau d'études. Au CFP TAF, votre motivation et votre rigueur pratique constituent le premier critère de réussite.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {levels.map((item, idx) => (
            <div
              key={idx}
              className="card-craft"
              style={{
                backgroundColor: 'var(--taf-dark-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'inline-block', padding: '6px 12px', borderRadius: '4px', backgroundColor: 'var(--taf-plum)', color: 'var(--taf-gold)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', border: '1px solid var(--taf-gold-border)' }}>
                  {item.level}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--taf-white)', marginBottom: '10px' }}>
                  Filières accessibles :
                </h3>
                <p style={{ color: 'var(--taf-slate-200)', fontSize: '0.88rem', fontWeight: 500, marginBottom: '14px', lineHeight: 1.5 }}>
                  {item.sectors}
                </p>
                <p style={{ color: 'var(--taf-slate-400)', fontSize: '0.84rem', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => onNavigate('/admissions')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--taf-gold)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                  className="hover:underline"
                >
                  <span>Consulter les pièces requises</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on official validation */}
        <div
          style={{
            marginTop: '36px',
            padding: '16px 20px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            fontSize: '0.85rem',
            color: 'var(--taf-slate-300)'
          }}
        >
          <Info size={18} style={{ color: 'var(--taf-gold)', flexShrink: 0, marginTop: '2px' }} />
          <span>
            <strong>Note administrative :</strong> L'admission définitive dans chaque filière est prononcée par la commission pédagogique du centre après vérification des diplômes d'origine ou test de positionnement.
          </span>
        </div>
      </div>
    </section>
  );
};
