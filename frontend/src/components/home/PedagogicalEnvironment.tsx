import React from 'react';
import { Layers, ShieldCheck, Cpu, Zap, Camera } from 'lucide-react';

export const PedagogicalEnvironment: React.FC = () => {
  const facilities = [
    {
      title: 'Studio Son & Plateau Audiovisuel',
      desc: 'Consoles de mixage professionnelles, micros de référence, caméras 4K et stations DaVinci Resolve.',
      image: '/images/categories/audiovisuel.jpg',
      tag: 'Audiovisuel & Musique'
    },
    {
      title: 'Atelier Froid, Climatisation & Solaire',
      desc: 'Bancs d\'essais frigorifiques réels, stations de récupération, onduleurs solaires hybrides et panneaux photovoltaïques.',
      image: '/images/categories/technique.jpg',
      tag: 'Génie Énergétique'
    },
    {
      title: 'Laboratoire Cyber & Systèmes',
      desc: 'Réseaux locaux isolés, postes dédiés aux simulations d\'intrusion, firewalls et développement web.',
      image: '/images/categories/cyber_digital.jpg',
      tag: 'Technologie & Réseaux'
    },
    {
      title: 'Atelier Esthétique & Cosmétologie',
      desc: 'Postes de soins du visage complets, tables professionnelles, lampes d\'analyse cutanée et formulation.',
      image: '/images/categories/esthetique.jpg',
      tag: 'Beauté & Soins'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--taf-dark-base)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            <span>Infrastructures & Matériel Pédagogique</span>
          </div>
          <h2 style={{ color: 'var(--taf-white)', marginBottom: '14px' }}>
            Un environnement dédié à la pratique réelle
          </h2>
          <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Pour apprendre un métier, rien ne remplace le contact physique avec les machines, les logiciels et les équipements réels utilisés par les entreprises.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="card-craft"
              style={{
                padding: '0',
                backgroundColor: 'var(--taf-dark-card)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', height: '190px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={fac.image}
                  alt={fac.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(16, 13, 16, 0.9) 0%, transparent 60%)' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(37, 23, 29, 0.85)',
                    color: 'var(--taf-gold)',
                    border: '1px solid var(--taf-gold-border)'
                  }}
                >
                  {fac.tag}
                </span>
              </div>

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--taf-white)', marginBottom: '8px' }}>
                  {fac.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--taf-slate-300)', lineHeight: 1.55 }}>
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
