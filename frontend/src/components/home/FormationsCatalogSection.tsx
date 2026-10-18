import React, { useState } from 'react';
import { ArrowRight, Search, Award, Check, Clock } from 'lucide-react';
import { FORMATIONS, CATEGORIES, Formation } from '../../data/formationsData';

interface FormationsCatalogSectionProps {
  onNavigate: (path: string) => void;
}

export const FormationsCatalogSection: React.FC<FormationsCatalogSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFormations = FORMATIONS.filter((f) => {
    const matchesCategory = selectedCategory === 'all' || f.categoryId === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="formations-catalogue" className="section-padding" style={{ backgroundColor: 'var(--taf-dark-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              <span>Offre Pédagogique Officielle MINEFOP</span>
            </div>
            <h2 style={{ color: 'var(--taf-white)' }}>
              18 Formations Professionnelles d'Élite
            </h2>
          </div>

          {/* Real-time search box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--taf-slate-400)' }} />
            <input
              type="text"
              placeholder="Rechercher une filière, compétence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '40px' }}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '36px',
            scrollbarWidth: 'none'
          }}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '10px 18px',
              borderRadius: '6px',
              fontFamily: 'var(--font-display)',
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              fontWeight: 600,
              backgroundColor: selectedCategory === 'all' ? 'var(--taf-gold)' : 'rgba(255, 255, 255, 0.05)',
              color: selectedCategory === 'all' ? 'var(--taf-plum-dark)' : 'var(--taf-slate-300)',
              border: '1px solid',
              borderColor: selectedCategory === 'all' ? 'var(--taf-gold)' : 'rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            className="btn-tactile"
          >
            Toutes les filières (18)
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = FORMATIONS.filter(f => f.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.92rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  fontWeight: 600,
                  backgroundColor: isSelected ? 'var(--taf-gold)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? 'var(--taf-plum-dark)' : 'var(--taf-slate-300)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--taf-gold)' : 'rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                className="btn-tactile"
              >
                <span>{cat.shortName || cat.name}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '1px 6px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? 'var(--taf-plum)' : 'rgba(255,255,255,0.1)',
                    color: isSelected ? 'var(--taf-gold)' : 'var(--taf-white)'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Formations Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '28px' }}>
          {filteredFormations.map((f: Formation) => (
            <div
              key={f.id}
              className="card-craft"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                backgroundColor: 'var(--taf-dark-card)'
              }}
            >
              {/* Media Thumbnail */}
              <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={f.coverImage}
                  alt={f.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(16, 13, 16, 0.95) 100%)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    display: 'flex',
                    gap: '6px'
                  }}
                >
                  <span className="tag-badge tag-badge-gold">
                    {f.diplomaType}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--taf-gold)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {f.categoryName}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--taf-white)' }}>
                  {f.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--taf-slate-300)', lineHeight: 1.55, marginBottom: '16px', flex: 1 }}>
                  {f.shortDescription}
                </p>

                {/* Key Skills highlights */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px', marginBottom: '18px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--taf-slate-400)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Compétences visées :
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {f.skills.slice(0, 2).map((s, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.82rem', color: 'var(--taf-slate-200)' }}>
                        <Check size={14} style={{ color: 'var(--taf-gold)', flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ lineHeight: 1.4 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Official Durations Strip */}
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius: '6px', padding: '8px 12px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '16px', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--taf-slate-300)' }}>
                    <span>⏱️ Centre : <strong>{f.coursCentreDuration}</strong></span>
                    <span>🏢 Stage : <strong style={{ color: 'var(--taf-gold)' }}>{f.stageDuration}</strong></span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '4px', color: 'var(--taf-slate-400)', fontSize: '0.78rem' }}>
                    <span>Cycle complet : <strong style={{ color: '#10B981' }}>{f.dureeTotale}</strong></span>
                    <span>Niveau : {f.accessConditions[0]}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px' }}>
                  <button
                    onClick={() => onNavigate(`/formations/${f.slug}`)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Voir le programme</span>
                  </button>
                  <button
                    onClick={() => onNavigate(`/admissions?formation=${f.slug}`)}
                    className="btn btn-primary btn-sm"
                    title="Candidater à cette formation"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTAs */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            onClick={() => onNavigate('/formations')}
            className="btn btn-outline btn-lg"
          >
            <span>Explorer les 16 fiches détaillées et débouchés</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
