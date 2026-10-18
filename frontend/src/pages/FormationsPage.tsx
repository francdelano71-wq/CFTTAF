import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Search, Filter, Clock, Check, ArrowRight, Award, GraduationCap, LayoutGrid, Table, Briefcase, Building2 } from 'lucide-react';
import { FORMATIONS, CATEGORIES, Formation } from '../data/formationsData';

interface FormationsPageProps {
  onNavigate: (path: string) => void;
}

export const FormationsPage: React.FC<FormationsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDiploma, setSelectedDiploma] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const filteredFormations = FORMATIONS.filter((f) => {
    const matchCat = selectedCategory === 'all' || f.categoryId === selectedCategory;
    const matchDiploma = selectedDiploma === 'all' || f.diplomaType.toLowerCase().includes(selectedDiploma.toLowerCase());
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
          <div style={{ maxWidth: '860px' }}>
            <span style={{ color: 'var(--taf-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>
              Catalogue Officiel MINEFOP • 18 Filières de Formation & Durées
            </span>
            <h1 style={{ marginBottom: '16px' }}>
              Nos 18 Formations Professionnelles Qualifiantes
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--taf-slate-200)', lineHeight: 1.65 }}>
              Ce catalogue rassemble la synthèse complète des 18 filières professionnelles du <strong>Centre de Formation Professionnelle TAF – Bilingue</strong> à Dschang, avec le détail précis des durées de cours théoriques/pratiques en centre (6 à 9 mois) et des stages en entreprise (2 à 3 mois).
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ padding: '24px 0', backgroundColor: 'var(--taf-plum-dark)', borderBottom: '1px solid rgba(245, 197, 27, 0.2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.1fr 1fr auto', gap: '14px', alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--taf-slate-400)' }} />
              <input
                type="text"
                placeholder="Rechercher par filière, compétence, métier..."
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
                <option value="all">Tous les 5 Pôles (18 filières)</option>
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
                <option value="all">Tous les diplômes (DQP, Certif., Attestation)</option>
                <option value="DQP">DQP (Diplôme de Qualification Professionnelle)</option>
                <option value="Certif">Certificat Technique (Niveau Technicien)</option>
                <option value="Attestation">Attestation / Qualification Pro</option>
              </select>
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'flex', gap: '6px', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '4px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => setViewMode('cards')}
                className={`btn-tactile ${viewMode === 'cards' ? 'active' : ''}`}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: viewMode === 'cards' ? 'var(--taf-gold)' : 'transparent',
                  color: viewMode === 'cards' ? 'var(--taf-dark-base)' : 'var(--taf-slate-300)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
                title="Affichage en cartes"
              >
                <LayoutGrid size={16} />
                <span className="show-md">Cartes</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`btn-tactile ${viewMode === 'table' ? 'active' : ''}`}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: viewMode === 'table' ? 'var(--taf-gold)' : 'transparent',
                  color: viewMode === 'table' ? 'var(--taf-dark-base)' : 'var(--taf-slate-300)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
                title="Affichage en tableau synthétique"
              >
                <Table size={16} />
                <span className="show-md">Tableau</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container">
          {/* Status Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', color: 'var(--taf-slate-300)', fontSize: '0.92rem', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              Affichage de <strong>{filteredFormations.length}</strong> filière{filteredFormations.length > 1 ? 's' : ''} officielle{filteredFormations.length > 1 ? 's' : ''} sur 18
            </div>
            {(selectedCategory !== 'all' || selectedDiploma !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedDiploma('all'); setSearchQuery(''); }}
                style={{ color: 'var(--taf-gold)', fontSize: '0.85rem', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          {/* VUE 1 : CARTES PÉDAGOGIQUES */}
          {viewMode === 'cards' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '30px' }}>
              {filteredFormations.map((f: Formation) => (
                <article
                  key={f.id}
                  className="card-craft"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '0',
                    backgroundColor: 'var(--taf-dark-card)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {/* Visual Cover */}
                  <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                    <img
                      src={f.coverImage}
                      alt={f.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 35%, rgba(16, 13, 16, 0.95) 100%)' }} />
                    
                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '8px' }}>
                      <span className="tag-badge tag-badge-gold">
                        {f.diplomaType}
                      </span>
                      <span className="tag-badge" style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#FFF' }}>
                        N° {f.number}
                      </span>
                    </div>

                    <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--taf-gold)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em' }}>
                        {f.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--taf-white)', lineHeight: 1.25 }}>
                      {f.title}
                    </h2>

                    <p style={{ fontSize: '0.9rem', color: 'var(--taf-slate-300)', lineHeight: 1.6, marginBottom: '18px', flex: 1 }}>
                      {f.shortDescription}
                    </p>

                    {/* Official Durations Strip */}
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius: '8px', padding: '10px 14px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--taf-slate-400)' }}>⏱️ Cours en Centre :</span>
                        <strong style={{ color: 'var(--taf-white)' }}>{f.coursCentreDuration}</strong>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--taf-slate-400)' }}>🏢 Stage Entreprise :</span>
                        <strong style={{ color: 'var(--taf-gold)' }}>{f.stageDuration}</strong>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '4px', marginTop: '2px' }}>
                        <span style={{ color: 'var(--taf-slate-400)' }}>Durée Totale :</span>
                        <strong style={{ color: '#10B981' }}>{f.dureeTotale}</strong>
                      </div>
                    </div>

                    {/* Key Competencies list */}
                    <div style={{ marginBottom: '18px' }}>
                      <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--taf-slate-400)', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                        Compétences clés :
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {f.skills.slice(0, 3).map((skill, sIdx) => (
                          <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--taf-slate-200)' }}>
                            <Check size={14} style={{ color: 'var(--taf-gold)', flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ lineHeight: 1.45 }}>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
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
          )}

          {/* VUE 2 : TABLEAU SYNTHÉTIQUE OFFICIEL DES 18 FILIÈRES */}
          {viewMode === 'table' && (
            <div style={{ backgroundColor: 'var(--taf-dark-card)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <div style={{ padding: '20px 24px', backgroundColor: 'var(--taf-plum-dark)', borderBottom: '1px solid rgba(245, 197, 27, 0.25)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '4px' }}>
                    Tableau Synthétique des 18 Filières de Formation
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--taf-slate-300)' }}>
                    Synthèse officielle MINEFOP : durées de cours théoriques/pratiques en centre et durée des stages en entreprise.
                  </p>
                </div>
                <span className="tag-badge tag-badge-gold">
                  Tutelle MINEFOP • Session 2026/2027
                </span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--taf-slate-300)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      <th style={{ padding: '14px 16px', width: '50px' }}>N°</th>
                      <th style={{ padding: '14px 16px' }}>Spécialité / Filière</th>
                      <th style={{ padding: '14px 16px' }}>Diplôme</th>
                      <th style={{ padding: '14px 16px' }}>Cours (Centre)</th>
                      <th style={{ padding: '14px 16px' }}>Stage (Entreprise)</th>
                      <th style={{ padding: '14px 16px' }}>Durée Totale</th>
                      <th style={{ padding: '14px 16px', textAlign: 'right' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFormations.map((f, idx) => (
                      <tr
                        key={f.id}
                        style={{
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                          backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
                          transition: 'background-color 0.15s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(245, 197, 27, 0.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)')}
                      >
                        <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--taf-gold)' }}>
                          {f.number}
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <strong style={{ color: 'var(--taf-white)', display: 'block' }}>{f.title}</strong>
                          <span style={{ fontSize: '0.78rem', color: 'var(--taf-slate-400)' }}>{f.categoryName}</span>
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span
                            className="tag-badge"
                            style={{
                              backgroundColor: f.diplomaType === 'DQP' ? 'rgba(245, 197, 27, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                              color: f.diplomaType === 'DQP' ? 'var(--taf-gold)' : 'var(--taf-white)',
                              border: f.diplomaType === 'DQP' ? '1px solid var(--taf-gold-border)' : '1px solid rgba(255, 255, 255, 0.12)'
                            }}
                          >
                            {f.diplomaType}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', color: 'var(--taf-slate-200)', whiteSpace: 'nowrap' }}>
                          ⏱️ {f.coursCentreDuration}
                        </td>
                        <td style={{ padding: '14px 16px', color: 'var(--taf-gold)', whiteSpace: 'nowrap' }}>
                          🏢 {f.stageDuration}
                        </td>
                        <td style={{ padding: '14px 16px', fontWeight: 700, color: '#10B981', whiteSpace: 'nowrap' }}>
                          {f.dureeTotale}
                        </td>
                        <td style={{ padding: '14px 16px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                          <div style={{ display: 'inline-flex', gap: '8px' }}>
                            <button
                              onClick={() => onNavigate(`/formations/${f.slug}`)}
                              className="btn btn-secondary btn-sm"
                              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                            >
                              Fiche
                            </button>
                            <button
                              onClick={() => onNavigate(`/admissions?formation=${f.slug}`)}
                              className="btn btn-primary btn-sm"
                              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                            >
                              Candidater
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
