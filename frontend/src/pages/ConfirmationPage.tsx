import React from 'react';
import { CheckCircle2, Printer, MessageCircle, ArrowRight, ShieldCheck, Phone, Home } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface ConfirmationPageProps {
  reference: string;
  onNavigate: (path: string) => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ reference, onNavigate }) => {
  const { settings, applications } = useSite();
  const application = applications.find(a => a.reference === reference);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        {/* Receipt Card */}
        <div
          className="card-craft"
          style={{
            backgroundColor: 'var(--taf-dark-card)',
            border: '2px solid var(--taf-gold)',
            padding: 'clamp(28px, 5vw, 44px)',
            position: 'relative'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '24px', marginBottom: '28px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                border: '1px solid rgba(16, 185, 129, 0.4)'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <span style={{ fontSize: '0.85rem', color: 'var(--taf-gold)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>
              Récépissé de Pré-Inscription Officiel
            </span>

            <h1 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', color: 'var(--taf-white)', marginTop: '6px', marginBottom: '8px' }}>
              Candidature Enregistrée !
            </h1>

            <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.95rem' }}>
              Votre demande a été transmise avec succès au secrétariat du Centre de Formation Professionnelle TAF.
            </p>
          </div>

          {/* Reference Banner */}
          <div
            style={{
              backgroundColor: 'var(--taf-plum)',
              border: '1px solid var(--taf-gold-border)',
              borderRadius: '8px',
              padding: '18px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '28px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--taf-slate-400)', fontWeight: 600, display: 'block' }}>
                Numéro de Référence Dossier
              </span>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--taf-gold)', letterSpacing: '0.05em' }}>
                {reference}
              </strong>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34D399', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={18} />
              <span>Dossier Actif • En attente de contact</span>
            </div>
          </div>

          {/* Summary Details */}
          {application && (
            <div style={{ marginBottom: '28px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px', fontSize: '0.9rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--taf-white)', marginBottom: '14px' }}>
                Récapitulatif de votre candidature
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', color: 'var(--taf-slate-300)' }}>
                <div>
                  <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem' }}>Candidat :</span>
                  <strong style={{ color: 'var(--taf-white)' }}>{application.fullName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem' }}>Téléphone :</span>
                  <strong style={{ color: 'var(--taf-white)' }}>{application.phone}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem' }}>Formation choisie :</span>
                  <strong style={{ color: 'var(--taf-gold)' }}>{application.formationTitle}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--taf-slate-400)', display: 'block', fontSize: '0.8rem' }}>Niveau déclaré :</span>
                  <strong style={{ color: 'var(--taf-white)' }}>{application.educationLevel}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps Instructions */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--taf-white)', marginBottom: '14px' }}>
              Prochaines étapes :
            </h3>
            <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--taf-slate-300)', fontSize: '0.92rem' }}>
              <li>
                <strong>Appel du conseiller (24h–48h) :</strong> Un membre de l'équipe TAF vous contactera sur votre téléphone ou WhatsApp pour convenir d'un rendez-vous.
              </li>
              <li>
                <strong>Constitution du dossier :</strong> Préparez 2 photos d'identité, la copie de votre CNI ou acte de naissance, et le relevé de votre dernier diplôme (CEP, BEPC, Bac, etc.).
              </li>
              <li>
                <strong>Confirmation d'inscription :</strong> Présentez-vous à notre campus à Dschang (Immeuble Supermarché Synergie, 2e étage) pour finaliser votre admission.
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
            <button
              onClick={handlePrint}
              className="btn btn-secondary"
            >
              <Printer size={16} />
              <span>Imprimer le reçu</span>
            </button>

            <a
              href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20j%27ai%20soumis%20ma%20candidature%20avec%20la%20r%C3%A9f%C3%A9rence%20${reference}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={16} />
              <span>Contacter le secrétariat sur WhatsApp</span>
            </a>

            <button
              onClick={() => onNavigate('/')}
              className="btn btn-outline"
              style={{ marginLeft: 'auto' }}
            >
              <Home size={16} />
              <span>Retour à l'accueil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
