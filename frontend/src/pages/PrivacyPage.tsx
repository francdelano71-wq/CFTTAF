import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Lock, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const { settings } = useSite();

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh' }}>
      <Breadcrumbs
        items={[{ label: 'Politique de Confidentialité' }]}
        onNavigate={onNavigate}
      />

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--taf-gold)', marginBottom: '14px' }}>
            <Lock size={22} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem' }}>
              Protection des Données Personnelles
            </span>
          </div>

          <h1 style={{ marginBottom: '28px' }}>Politique de Confidentialité</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: 'var(--taf-slate-200)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--taf-gold)', marginBottom: '10px' }}>
                1. Finalité de la Collecte des Données
              </h2>
              <p>
                Les informations recueillies via les formulaires de candidature en ligne et de contact (nom, prénom, numéro de téléphone, ville, niveau d'études, formation souhaitée) sont destinées exclusivement au secrétariat du <strong>{settings.schoolName}</strong> pour l'instruction des dossiers de candidature, l'orientation personnalisée et la communication administrative.
              </p>
            </div>

            <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--taf-gold)', marginBottom: '10px' }}>
                2. Non-Divulgation & Sécurité
              </h2>
              <p>
                Vos données personnelles ne font l'objet d'aucune cession, vente ou commercialisation à des tiers. Elles sont stockées de façon sécurisée et consultables uniquement par les membres habilités de la direction pédagogique du centre.
              </p>
            </div>

            <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)' }}>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--taf-gold)', marginBottom: '10px' }}>
                3. Vos Droits d'Accès et de Rectification
              </h2>
              <p>
                Conformément aux lois applicables sur la protection des données au Cameroun, vous disposez d'un droit d'accès, de modification et de suppression de vos informations personnelles. Pour exercer ce droit, il vous suffit de contacter le secrétariat par téléphone au <strong>{settings.primaryPhone}</strong> ou en vous présentant physiquement à nos bureaux à Dschang.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
