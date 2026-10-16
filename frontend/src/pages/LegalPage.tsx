import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Shield } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  const { settings } = useSite();

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh' }}>
      <Breadcrumbs
        items={[{ label: 'Mentions Légales' }]}
        onNavigate={onNavigate}
      />

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--taf-gold)', marginBottom: '14px' }}>
            <Shield size={22} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem' }}>
              Informations Réglementaires
            </span>
          </div>

          <h1 style={{ marginBottom: '28px' }}>Mentions Légales</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: 'var(--taf-slate-200)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--taf-gold)', marginBottom: '10px' }}>
                1. Éditeur de la Plateforme
              </h2>
              <p>
                <strong>Dénomination officielle :</strong> {settings.schoolName}<br />
                <strong>Sigle :</strong> {settings.shortName}<br />
                <strong>Siège pédagogique et administratif :</strong> {settings.address}<br />
                <strong>Contacts officiels :</strong> {(settings.contacts || []).map(c => c.display).join(' • ')}<br />
                <strong>Tutelle administrative :</strong> Ministère de l'Emploi et de la Formation Professionnelle (MINEFOP) — République du Cameroun.
              </p>
            </div>

            <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--taf-gold)', marginBottom: '10px' }}>
                2. Nature des Formations et Titres Préparés
              </h2>
              <p>
                Le Centre de Formation Professionnelle TAF – Bilingue prépare aux diplômes et certifications professionnelles d'État (DQP, CQP, AQP) selon les référentiels approuvés. Les informations pédagogiques, compétences et débouchés présentés sur le site ont un caractère informatif et sont confirmés lors de l'inscription officielle.
              </p>
            </div>

            <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--taf-gold)', marginBottom: '10px' }}>
                3. Propriété Intellectuelle
              </h2>
              <p>
                Les logos, emblèmes, graphismes, textes, visuels de formations et créations multimédias figurant sur ce site sont la propriété exclusive du Centre de Formation Professionnelle TAF ou font l'objet d'autorisations d'exploitation. Toute reproduction totale ou partielle sans accord préalable est strictement interdite.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
