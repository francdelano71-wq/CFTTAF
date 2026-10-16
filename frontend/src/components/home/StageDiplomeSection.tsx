import React from 'react';
import { Award, Briefcase, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { DIPLOMAS } from '../../data/formationsData';

interface StageDiplomeSectionProps {
  onNavigate: (path: string) => void;
}

export const StageDiplomeSection: React.FC<StageDiplomeSectionProps> = ({ onNavigate }) => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-dark-surface)' }}>
      <div className="container">
        {/* Banner with Official Message */}
        <div
          style={{
            backgroundColor: 'var(--taf-plum)',
            border: '2px solid var(--taf-gold)',
            borderRadius: '12px',
            padding: '36px',
            marginBottom: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--taf-gold)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '10px'
            }}
          >
            <Award size={18} />
            <span>Engagement Pédagogique Officiel</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', color: 'var(--taf-white)', marginBottom: '14px' }}>
            « OBTIENS TON DQP, CQP, AQP EN 1 AN AVEC UN STAGE EN ENTREPRISE »
          </h2>

          <p style={{ maxWidth: '72ch', color: 'var(--taf-slate-200)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Cette promesse centrale du CFP TAF traduit notre engagement : allier l'apprentissage d'un métier pointu en atelier à une mise en situation réelle en entreprise pour maximiser votre insertion professionnelle dès la sortie.
          </p>

          <button
            onClick={() => onNavigate('/admissions')}
            className="btn btn-primary"
          >
            <span>Démarrer votre inscription</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3 Diplomas Breakdown */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '32px', color: 'var(--taf-white)', fontSize: '1.6rem' }}>
            Les Titres Professionnels Préparés
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {DIPLOMAS.map((d) => (
              <div
                key={d.code}
                className="card-craft"
                style={{
                  backgroundColor: 'var(--taf-dark-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'var(--taf-gold)',
                      borderBottom: '2px solid var(--taf-gold)',
                      paddingBottom: '4px',
                      marginBottom: '14px'
                    }}
                  >
                    {d.code}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--taf-white)', marginBottom: '10px' }}>
                    {d.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--taf-slate-300)', lineHeight: 1.6 }}>
                    {d.desc}
                  </p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--taf-slate-400)', fontSize: '0.8rem' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--taf-gold)' }} />
                  <span>Cadre officiel MINEFOP Cameroun</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stage En Entreprise Immersion Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '36px',
            alignItems: 'center',
            backgroundColor: 'var(--taf-dark-card)',
            padding: '36px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--taf-gold)', marginBottom: '12px' }}>
              <Briefcase size={22} />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.88rem', letterSpacing: '0.06em' }}>
                Immersion Professionnelle
              </span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--taf-white)', marginBottom: '14px' }}>
              Le stage en entreprise : le tremplin vers l'emploi
            </h3>
            <p style={{ color: 'var(--taf-slate-200)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '16px' }}>
              Au CFP TAF, la formation ne s'arrête pas aux portes des salles de cours. Le stage en entreprise permet à chaque apprenant de se confronter aux contraintes réelles de production, d'enrichir son CV et de se faire repérer par de futurs employeurs.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--taf-slate-300)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--taf-gold)' }} />
                <span>Validation d'un rapport de stage et soutenance devant jury professionnel</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--taf-gold)' }} />
                <span>Placement assisté par le bureau des relations professionnelles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--taf-gold)' }} />
                <span>Possibilité d'embauche directe à l'issue de la période de stage</span>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img
              src="/images/categories/technique.jpg"
              alt="Étudiants TAF en stage pratique en entreprise"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
