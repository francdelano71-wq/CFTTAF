import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Search, Filter, Clock, Check, ArrowRight, Award, GraduationCap } from 'lucide-react';
import { FORMATIONS, CATEGORIES, Formation } from '../data/formationsData';

interface FormationsPageProps {
  onNavigate: (path: string) => void;
}

export const FormationsPage: React.FC<FormationsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDiploma, setSelectedDiploma] = useState<string>('all');

  const filteredFormations = FORMATIONS.filter((f) => {
    const matchCat = selectedCategory === 'all' || f.categoryId === selectedCategory;
    const matchDiploma = selectedDiploma === 'all' || f.diplomaType.includes(selectedDiploma);
    const matchQuery =
      searchQuery === '' ||
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.careerOutcomes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      f.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCat && matchDiploma && matchQuery;
  });

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh' }}>
      <Breadcrumbs
        items={[{ label: 'Nos Formations' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section style={{ padding: '60px 0 40px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'var(--taf-dark-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span style={{ color: 'var(--taf-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>
              Catalogue Pédagogique Officiel • Session 2026/2027
            </span>
            <h1 style={{ marginBottom: '16px' }}>
              Nos Formations Professionnelles Qualifiantes
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--taf-slate-200)', lineHeight: 1.65 }}>
              16 filières d'avenir réparties en 5 pôles d'excellence : de l'audiovisuel et du son à la cybersécurité, du froid et de l'énergie solaire au secrétariat bilingue et à l'esthétique.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ padding: '28px 0', backgroundColor: 'var(--taf-plum-dark)', borderBottom: '1px solid rgba(245, 197, 27, 0.2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--taf-slate-400)' }} />
              <input
                type="text"
                placeholder="Rechercher par métier, compétence (ex: son, froid, cyber)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '40px' }}
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select"
              >
                <option value="all">Tous les secteurs (16 formations)</option>
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Diploma Type Filter */}
            <div>
              <select
                value={selectedDiploma}
                onChange={(e) => setSelectedDiploma(e.target.value)}
                className="form-select"
              >
                <option value="all">Tous les diplômes (DQP, CQP, AQP)</option>
                <option value="DQP">DQP (Diplôme de Qualification Professionnelle)</option>
                <option value="CQP">CQP (Certificat de Qualification Professionnelle)</option>
                <option value="AQP">AQP (Attestation de Qualification)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', color: 'var(--taf-slate-300)', fontSize: '0.92rem' }}>
            <span>
              Affichage de <strong>{filteredFormations.length}</strong> formation{filteredFormations.length > 1 ? 's' : ''} disponible{filteredFormations.length > 1 ? 's' : ''}
            </span>
            {(selectedCategory !== 'all' || selectedDiploma !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedDiploma('all'); setSearchQuery(''); }}
                style={{ color: 'var(--taf-gold)', fontSize: '0.85rem', textDecoration: 'underline' }}
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
            {filteredFormations.map((f: Formation) => (
              <article
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
                {/* Visual Cover */}
                <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={f.coverImage}
                    alt={f.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(16, 13, 16, 0.95) 100%)' }} />
                  
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px' }}>
                    <span className="tag-badge tag-badge-gold">
                      {f.diplomaType}
                    </span>
                    <span className="tag-badge" style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#FFF' }}>
                      Stage inclus
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--taf-gold)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '8px' }}>
                    {f.categoryName}
                  </span>

                  <h2 style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--taf-white)', lineHeight: 1.2 }}>
                    {f.title}
                  </h2>

                  <p style={{ fontSize: '0.92rem', color: 'var(--taf-slate-300)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    {f.shortDescription}
                  </p>

                  {/* Skills Snapshot */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--taf-slate-400)', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                      Compétences clés enseignées :
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {f.skills.slice(0, 3).map((skill, sIdx) => (
                        <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--taf-slate-200)' }}>
                          <Check size={14} style={{ color: 'var(--taf-gold)', flexShrink: 0, marginTop: '3px' }} />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta info */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--taf-slate-400)', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} style={{ color: 'var(--taf-gold)' }} />
                      <span>{f.durationText}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <GraduationCap size={14} />
                      <span>{f.accessConditions[0]}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button
                      onClick={() => onNavigate(`/formations/${f.slug}`)}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Fiche complète</span>
                    </button>
                    <button
                      onClick={() => onNavigate(`/admissions?formation=${f.slug}`)}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Candidater</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
