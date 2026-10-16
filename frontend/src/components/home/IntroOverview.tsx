import React from 'react';
import { Target, CheckCircle2, Award, Globe2, Briefcase } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export const IntroOverview: React.FC = () => {
  const { settings } = useSite();

  const pillars = [
    {
      icon: Target,
      title: 'Pratique Intensive',
      desc: 'Ateliers équipés, matériel professionnel réel et projets concrets dès les premières semaines de cours.'
    },
    {
      icon: Globe2,
      title: 'Dimension Bilingue',
      desc: 'Un enseignement bilingue français-anglais pour multiplier vos opportunités d\'embauche au Cameroun et à l\'international.'
    },
    {
      icon: Award,
      title: 'Diplômes d\'État (MINEFOP)',
      desc: 'Préparation rigoureuse aux examens officiels nationaux : DQP, CQP et AQP reconnus par le Ministère.'
    },
    {
      icon: Briefcase,
      title: 'Stage en Entreprise',
      desc: 'Immersion obligatoire en milieu professionnel pour transformer vos compétences en véritable expérience d\'embauche.'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-dark-surface)' }}>
      <div className="container">
        <div className="intro-overview-grid">
          {/* Left Text */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              <span>Institution Pédagogique de Référence</span>
            </div>

            <h2 style={{ marginBottom: '22px', color: 'var(--taf-white)' }}>
              Une formation taillée pour <span className="text-gold">l'emploi immédiat</span>
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--taf-slate-200)', marginBottom: '20px' }}>
              Situé au cœur de la ville universitaire de <strong>Dschang</strong> (Immeuble Supermarché Synergie, 2e étage), le <strong>Centre de Formation Professionnelle TAF – Bilingue</strong> forme les futurs techniciens, créatifs et gestionnaires dont les entreprises ont urgemment besoin.
            </p>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--taf-slate-300)', marginBottom: '28px' }}>
              Notre approche pédagogique rompt avec la théorie abstraite : chaque heure passée au centre est dédiée à la maîtrise d'outils professionnels, de gestes techniques et de méthodes de travail conformes aux exigences du marché de l'emploi.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--taf-slate-200)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--taf-gold)' }} />
                <span>Accessible avec ou sans Baccalauréat (dès le CEP, CAP, BEPC, GCE)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--taf-slate-200)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--taf-gold)' }} />
                <span>Accompagnement personnalisé pour le stage d'insertion professionnelle</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--taf-slate-200)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--taf-gold)' }} />
                <span>Horaires aménagés et promotions à effectifs encadrés</span>
              </div>
            </div>
          </div>

          {/* Right Cards: 4 Pillars (Pure White & Ventablack) */}
          <div className="pillars-grid">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="card-craft card-pillar-white"
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(217, 119, 6, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#b45309',
                      marginBottom: '16px'
                    }}
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: '8px', color: '#050505', letterSpacing: '-0.01em' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#111111', lineHeight: 1.6, fontWeight: 500 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
