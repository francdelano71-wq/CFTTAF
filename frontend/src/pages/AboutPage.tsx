import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Award, Compass, Eye, HeartHandshake, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { settings } = useSite();

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh' }}>
      <Breadcrumbs
        items={[{ label: 'À Propos' }]}
        onNavigate={onNavigate}
      />

      {/* Page Header */}
      <section style={{ padding: '60px 0 40px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'var(--taf-dark-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ color: 'var(--taf-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>
              Institution & Vision
            </span>
            <h1 style={{ marginBottom: '16px' }}>
              Centre de Formation Professionnelle TAF – Bilingue
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--taf-slate-200)', lineHeight: 1.6 }}>
              {settings.slogan}. Un centre d'excellence technique et humaine ancré à Dschang, dédié à l'insertion professionnelle et aux métiers de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'flex-start', marginBottom: '64px' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--taf-white)' }}>
                Notre Histoire & Notre Vocation
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--taf-slate-300)', fontSize: '1rem', lineHeight: 1.7 }}>
                <p>
                  Implanté dans la région de l'Ouest du Cameroun, à <strong>Dschang</strong> (Immeuble Supermarché Synergie, 2e étage), le <strong>Centre de Formation Professionnelle TAF</strong> est né d'un constat sans équivoque : les diplômes académiques classiques ne répondent plus toujours aux besoins concrets et opérationnels des entreprises du XXIe siècle.
                </p>
                <p>
                  Notre réponse est radicalement pratique : concevoir des programmes de qualification intensive sur un an, encadrés par des professionnels en activité, sur des plateaux techniques réels, et sanctionnés par les diplômes officiels d'État <strong>DQP, CQP et AQP</strong> sous la tutelle du Ministère de l'Emploi et de la Formation Professionnelle (MINEFOP).
                </p>
                <p>
                  Qu'il s'agisse de captation audiovisuelle, de sonorisation de concerts, de sécurisation de serveurs, de maintenance frigorifique ou d'assistance de direction bilingue, chaque apprenant acquiert un savoir-faire éprouvé qui fait de lui une recrue immédiate sur le marché.
                </p>
              </div>

              {/* Bilingual Section */}
              <div
                style={{
                  marginTop: '32px',
                  padding: '24px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--taf-plum)',
                  border: '1px solid var(--taf-gold-border)'
                }}
              >
                <h3 style={{ fontSize: '1.3rem', color: 'var(--taf-gold)', marginBottom: '10px' }}>
                  L'Avantage Compétitif du Bilinguisme
                </h3>
                <p style={{ color: 'var(--taf-slate-200)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Dans un Cameroun bilingue et une sous-région CEMAC ouverte sur le monde, la maîtrise conjointe du français et de l'anglais technique constitue un atout décisif. Le CFP TAF intègre une composante linguistique appliquée à chaque métier enseigné pour permettre à ses lauréats de collaborer aisément avec des partenaires nationaux et internationaux.
                </p>
              </div>
            </div>

            {/* Right Side: Campus & Identity Box */}
            <div>
              <div
                className="card-craft"
                style={{
                  backgroundColor: 'var(--taf-dark-card)',
                  marginBottom: '28px'
                }}
              >
                <img
                  src="/brand/flyer_taf.jpeg"
                  alt="Affiche officielle CFP TAF"
                  style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
                />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '10px' }}>
                  Identité & Campus de Dschang
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--taf-slate-300)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} style={{ color: 'var(--taf-gold)' }} />
                    <span>Immeuble Supermarché Synergie, 2e étage, Dschang</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--taf-gold)' }} />
                    <span>Agréé MINEFOP • Titres DQP / CQP / AQP</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={16} style={{ color: 'var(--taf-gold)' }} />
                    <span>16 filières qualifiantes actives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars: Mission, Vision, Values, Direction */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '48px' }}>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '36px', color: 'var(--taf-white)' }}>
              Les Fondements Institutionnels
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {/* Mission */}
              <div className="card-craft">
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--taf-gold-subtle)', color: 'var(--taf-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Compass size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '10px' }}>
                  Notre Mission
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--taf-slate-300)', lineHeight: 1.6 }}>
                  {settings.mission}
                </p>
              </div>

              {/* Vision */}
              <div className="card-craft">
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--taf-gold-subtle)', color: 'var(--taf-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Eye size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '10px' }}>
                  Notre Vision
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--taf-slate-300)', lineHeight: 1.6 }}>
                  {settings.vision}
                </p>
              </div>

              {/* Values */}
              <div className="card-craft">
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--taf-gold-subtle)', color: 'var(--taf-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <HeartHandshake size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '10px' }}>
                  Nos Valeurs
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--taf-slate-300)' }}>
                  {(settings.values || []).map((v, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--taf-gold)', fontWeight: 700 }}>•</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button
              onClick={() => onNavigate('/formations')}
              className="btn btn-primary btn-lg"
            >
              <span>Découvrir l'ensemble des 16 formations</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
