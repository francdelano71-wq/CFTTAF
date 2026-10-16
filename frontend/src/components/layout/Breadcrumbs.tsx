import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav
      aria-label="Fil d'Ariane"
      style={{
        padding: '14px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        backgroundColor: 'rgba(16, 13, 16, 0.6)',
        fontSize: '0.86rem'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <button
          onClick={() => onNavigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: 'var(--taf-slate-400)',
            transition: 'color 120ms ease'
          }}
          className="hover:text-gold"
        >
          <Home size={14} />
          <span>Accueil</span>
        </button>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight size={14} style={{ color: 'var(--taf-slate-400)' }} />
              {isLast || !item.path ? (
                <span style={{ color: 'var(--taf-gold)', fontWeight: 600 }}>
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.path!)}
                  style={{ color: 'var(--taf-slate-300)', transition: 'color 120ms ease' }}
                  className="hover:text-gold"
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
