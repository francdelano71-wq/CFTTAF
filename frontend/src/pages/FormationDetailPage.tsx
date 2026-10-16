import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Clock, Briefcase, CheckCircle2, Award, ArrowRight, ShieldCheck, Wrench, MessageCircle, Info } from 'lucide-react';
import { FORMATIONS, Formation } from '../data/formationsData';
import { useSite } from '../context/SiteContext';

interface FormationDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const FormationDetailPage: React.FC<FormationDetailPageProps> = ({ slug, onNavigate }) => {
  const { settings } = useSite();
  const formation = FORMATIONS.find(f => f.slug === slug);

  if (!formation) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '16px' }}>Formation introuvable</h1>
        <p style={{ color: 'var(--taf-slate-300)', marginBottom: '24px' }}>
          La formation demandée n'existe pas ou a été déplacée.
        </p>
        <button onClick={() => onNavigate('/formations')} className="btn btn-primary">
          Retour au catalogue des formations
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh' }}>
      <Breadcrumbs
        items={[
          { label: 'Nos Formations', path: '/formations' },
          { label: formation.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header of Formation */}
      <section
        style={{
          position: 'relative',
          padding: '70px 0 50px 0',
          backgroundColor: 'var(--taf-plum-dark)',
          borderBottom: '1px solid rgba(245, 197, 27, 0.25)'
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span className="tag-badge tag-badge-gold">
                  {formation.diplomaType}
                </span>
                <span className="tag-badge">
                  {formation.categoryName}
                </span>
                <span className="tag-badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34D399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  Inscriptions Ouvertes
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)', color: 'var(--taf-white)', marginBottom: '18px', lineHeight: 1.1 }}>
                {formation.title}
              </h1>

              <p style={{ fontSize: '1.1rem', color: 'var(--taf-slate-200)', lineHeight: 1.65, marginBottom: '28px' }}>
                {formation.shortDescription}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate(`/admissions?formation=${formation.slug}`)}
                  className="btn btn-primary btn-lg"
                >
                  <span>Candidater à cette formation</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20je%20souhaite%20des%20informations%20sur%20la%20formation%20${encodeURIComponent(formation.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Poser une question sur WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Media Image */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--taf-gold-border)', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
              <img
                src={formation.coverImage}
                alt={formation.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
            {/* Left Column: Full Presentation & Program Details */}
            <div>
              {/* Metier presentation */}
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--taf-white)', marginBottom: '16px' }}>
                  Présentation du Métier
                </h2>
                <div style={{ color: 'var(--taf-slate-200)', fontSize: '1.02rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {formation.fullDescription}
                </div>
              </div>

              {/* Competencies */}
              <div style={{ marginBottom: '40px', backgroundColor: 'var(--taf-dark-card)', padding: '28px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Award size={22} style={{ color: 'var(--taf-gold)' }} />
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--taf-white)' }}>
                    Compétences Opérationnelles Visées
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--taf-slate-400)', marginBottom: '18px', fontStyle: 'italic' }}>
                  * Ces compétences constituent les objectifs pédagogiques proposés pour le cycle de qualification d'un an, sous réserve des adaptations du référentiel officiel du centre.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {formation.skills.map((skill, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.94rem', color: 'var(--taf-slate-200)' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--taf-gold)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ lineHeight: 1.5 }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Equipment */}
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Wrench size={20} style={{ color: 'var(--taf-gold)' }} />
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--taf-white)' }}>
                    Outils, Logiciels & Technologies Pratiques
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {formation.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      style={{
                        padding: '10px 18px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--taf-plum)',
                        border: '1px solid var(--taf-gold-border)',
                        color: 'var(--taf-white)',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Outcomes */}
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Briefcase size={20} style={{ color: 'var(--taf-gold)' }} />
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--taf-white)' }}>
                    Débouchés & Opportunités Professionnelles
                  </h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {formation.careerOutcomes.map((co, cIdx) => (
                    <div
                      key={cIdx}
                      style={{
                        padding: '14px 18px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: 'var(--taf-slate-200)',
                        fontSize: '0.92rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span style={{ color: 'var(--taf-gold)', fontWeight: 700 }}>•</span>
                      <span>{co}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Facts Card & Quick Application Box */}
            <div>
              <div
                className="card-craft"
                style={{
                  backgroundColor: 'var(--taf-plum-dark)',
                  border: '1px solid var(--taf-gold)',
                  position: 'sticky',
                  top: '100px'
                }}
              >
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '16px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--taf-gold)', fontWeight: 700, letterSpacing: '0.08em' }}>
                    Fiche Récapitulative
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginTop: '4px' }}>
                    Modalités d'Admission
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', marginBottom: '24px' }}>
                  <div>
                    <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Diplôme Préparé
                    </span>
                    <strong style={{ color: 'var(--taf-gold)', fontSize: '1rem' }}>
                      {formation.diplomaType} (Cadre MINEFOP)
                    </strong>
                  </div>

                  <div>
                    <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Durée de formation
                    </span>
                    <strong style={{ color: 'var(--taf-white)' }}>
                      {formation.durationText}
                    </strong>
                  </div>

                  <div>
                    <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Stage pratique en entreprise
                    </span>
                    <strong style={{ color: 'var(--taf-white)' }}>
                      {formation.stageInfo}
                    </strong>
                  </div>

                  <div>
                    <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Conditions d'accès indicatives
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                      {formation.accessConditions.map((cond, i) => (
                        <span key={i} className="tag-badge">
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Lieu des cours
                    </span>
                    <strong style={{ color: 'var(--taf-white)' }}>
                      Dschang, Immeuble Synergie, 2e étage
                    </strong>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    onClick={() => onNavigate(`/admissions?formation=${formation.slug}`)}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Candidater à cette formation</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`tel:+237${settings.primaryPhone}`}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Appeler un conseiller (+237 {settings.primaryPhone})</span>
                  </a>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--taf-slate-400)' }}>
                  <Info size={14} style={{ color: 'var(--taf-gold)' }} />
                  <span>Dossier examiné sous 48h par le secrétariat.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
