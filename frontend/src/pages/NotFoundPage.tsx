import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--taf-dark-base)',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '580px' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '7rem',
            fontWeight: 700,
            color: 'var(--taf-gold)',
            lineHeight: 1,
            display: 'block',
            marginBottom: '10px'
          }}
        >
          404
        </span>

        <h1 style={{ fontSize: '2rem', color: 'var(--taf-white)', marginBottom: '14px' }}>
          Page introuvable
        </h1>

        <p style={{ color: 'var(--taf-slate-300)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
          L'adresse demandée n'existe pas ou la page a été déplacée. Retrouvez nos 16 formations professionnelles ou revenez à la page d'accueil.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
          <button onClick={() => onNavigate('/')} className="btn btn-primary">
            <Home size={16} />
            <span>Retour à l'accueil</span>
          </button>
          <button onClick={() => onNavigate('/formations')} className="btn btn-secondary">
            <span>Catalogue des formations</span>
          </button>
        </div>
      </div>
    </div>
  );
};
