import React from 'react';
import { ArrowRight, UserCheck, FileText, PhoneCall, GraduationCap, Compass } from 'lucide-react';
import { ADMISSION_STEPS } from '../../data/siteConfig';

interface AdmissionStepsSectionProps {
  onNavigate: (path: string) => void;
}

export const AdmissionStepsSection: React.FC<AdmissionStepsSectionProps> = ({ onNavigate }) => {
  const stepIcons = [Compass, FileText, UserCheck, PhoneCall, GraduationCap];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-dark-base)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            <span>Procédure Simple & Transparente</span>
          </div>
          <h2 style={{ color: 'var(--taf-white)', marginBottom: '14px' }}>
            Comment rejoindre le CFP TAF à Dschang ?
          </h2>
          <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Un accompagnement humain de la première prise de contact jusqu'à l'obtention de votre diplôme.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px', position: 'relative' }}>
          {ADMISSION_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || UserCheck;
            return (
              <div
                key={step.step}
                className="card-craft"
                style={{
                  backgroundColor: 'var(--taf-dark-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px 20px',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(245, 197, 27, 0.12)',
                      color: 'var(--taf-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.15)'
                    }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--taf-white)', marginBottom: '10px' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--taf-slate-300)', lineHeight: 1.55 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => onNavigate('/admissions')}
            className="btn btn-primary"
          >
            <span>Remplir le formulaire de candidature</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
