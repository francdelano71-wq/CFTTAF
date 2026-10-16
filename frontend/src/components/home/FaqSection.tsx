import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/siteConfig';
import { useSite } from '../../context/SiteContext';

export const FaqSection: React.FC = () => {
  const { settings } = useSite();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-dark-surface)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            <HelpCircle size={16} />
            <span>Réponses Pratiques</span>
          </div>
          <h2 style={{ color: 'var(--taf-white)', marginBottom: '14px' }}>
            Questions Fréquemment Posées
          </h2>
          <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.98rem' }}>
            Tout ce que vous devez savoir sur les cursus, les diplômes et la vie au CFP TAF.
          </p>
        </div>

        {/* Accordions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--taf-dark-card)',
                  border: isOpen ? '1px solid var(--taf-gold)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'border-color 180ms ease'
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    color: isOpen ? 'var(--taf-gold)' : 'var(--taf-white)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                  className="btn-tactile"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
                      color: isOpen ? 'var(--taf-gold)' : 'var(--taf-slate-400)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 20px 22px',
                      color: 'var(--taf-slate-300)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <p style={{ paddingTop: '14px' }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div
          style={{
            marginTop: '36px',
            textAlign: 'center',
            padding: '24px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.92rem', marginBottom: '14px' }}>
            Vous avez une question spécifique sur une filière ou les facilités de paiement ?
          </p>
          <a
            href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20j%27ai%20une%20question%20sur%20les%20formations.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={15} />
            <span>Discuter directement avec un conseiller</span>
          </a>
        </div>
      </div>
    </section>
  );
};
