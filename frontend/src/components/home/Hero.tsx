import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, ChevronDown, Award, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

interface HeroProps {
  onNavigate: (path: string) => void;
  onExploreClick: () => void;
}

const HERO_SCREENSHOTS = [
  {
    src: '/brand/section-a.png',
    title: 'Photographie Professionnelle',
    category: '1. Pôle Audiovisuel & Photo',
    desc: 'Prise de vue studio, reportage, éclairage et post-traitement.',
    path: '/formations/photographe-professionnel'
  },
  {
    src: '/brand/section-b.png',
    title: 'Graphisme de Production & PAO',
    category: '2. Pôle Montage, Design & Web',
    desc: 'Identités visuelles, chartes graphiques, édition et communication.',
    path: '/formations/graphisme-production-pao'
  },
  {
    src: '/brand/section-c.png',
    title: 'Montage Audiovisuel & Vidéo',
    category: '2. Pôle Montage, Design & Web',
    desc: 'Rythme narratif, assemblage vidéo, étalonnage et post-production.',
    path: '/formations/montage-audiovisuel-realisation'
  },
  {
    src: '/brand/section-d.png',
    title: 'Webmaster & Conception Web',
    category: '2. Pôle Montage, Design & Web',
    desc: 'Création, intégration, CMS, déploiement et maintenance web.',
    path: '/formations/webmaster-conception-web'
  },
  {
    src: '/brand/section-e.png',
    title: 'Technicien de Son (TAF)',
    category: '1. Pôle Audiovisuel & Photo',
    desc: 'Studio et plateau, mixage multipiste, acoustique et mastering.',
    path: '/formations/technicien-de-son'
  },
  {
    src: '/brand/section-f.png',
    title: 'Secrétariat de Direction',
    category: '5. Pôle Secrétariat & Direction',
    desc: 'Assistance stratégique, coordination d\'équipe et gestion de direction.',
    path: '/formations/secretariat-de-direction'
  }
];

export const Hero: React.FC<HeroProps> = ({ onNavigate, onExploreClick }) => {
  const { settings } = useSite();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Animation d'écriture et d'effacement avec surbrillance pour le grand titre
  const heroTitles = [
    settings.heroTitle || 'APPRENDS. PRATIQUE. DEVIENS PROFESSIONNEL.',
    "18 FORMATIONS D'ÉLITE RECONNUES MINEFOP",
    "OBTIENS TON DQP EN 1 AN AVEC UN STAGE RÉEL",
    "LE SAVOIR-FAIRE DEVIENT UN VÉRITABLE MÉTIER"
  ];

  const [titleIdx, setTitleIdx] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [typePhase, setTypePhase] = useState<'typing' | 'paused' | 'highlighting' | 'deleting'>('typing');

  useEffect(() => {
    const currentFullTitle = heroTitles[titleIdx % heroTitles.length];
    let timer: ReturnType<typeof setTimeout>;

    if (typePhase === 'typing') {
      if (displayedTitle.length < currentFullTitle.length) {
        timer = setTimeout(() => {
          setDisplayedTitle(currentFullTitle.slice(0, displayedTitle.length + 1));
        }, 55);
      } else {
        // Pause de 2.2 secondes après l'écriture complète
        timer = setTimeout(() => {
          setTypePhase('highlighting');
        }, 2200);
      }
    } else if (typePhase === 'highlighting') {
      // Surbrillance dorée éclatante pendant 700ms avant l'effacement
      timer = setTimeout(() => {
        setTypePhase('deleting');
      }, 700);
    } else if (typePhase === 'deleting') {
      if (displayedTitle.length > 0) {
        timer = setTimeout(() => {
          setDisplayedTitle(currentFullTitle.slice(0, displayedTitle.length - 1));
        }, 25);
      } else {
        // Effacement terminé -> passage au titre suivant
        setTypePhase('typing');
        setTitleIdx((prev) => (prev + 1) % heroTitles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedTitle, typePhase, titleIdx, heroTitles]);

  // Rotation automatique toutes les 10 secondes
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SCREENSHOTS.length);
    }, 10000); // 10 secondes

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + HERO_SCREENSHOTS.length) % HERO_SCREENSHOTS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % HERO_SCREENSHOTS.length);
  };

  const currentItem = HERO_SCREENSHOTS[currentIndex];

  return (
    <section className="hero-cinema" aria-label="Hero cinématographique CFP TAF">
      {/* Background Cinematic Media */}
      <div className="hero-media-wrapper">
        <img
          src="/images/hero_cinematic.jpg"
          alt="Étudiants du Centre de Formation Professionnelle TAF sur un plateau audiovisuel et en atelier à Dschang"
          loading="eager"
        />
      </div>

      {/* Scrim Overlay ensuring AAA legibility */}
      <div className="hero-overlay-scrim" />

      {/* Hero Content with 2-Column Grid (Left: Content, Right: 10s Screenshot Showcase) */}
      <div className="container hero-content">
        <div className="hero-content-grid">
          {/* Left Column: Headlines, Diplomas, CTAs */}
          <div>
            {/* Official Slogan */}
            <div className="hero-subtitle-slogan">
              <span>{settings.slogan}</span>
            </div>

            {/* Main Headline avec animation d'écriture, effacement et surbrillance */}
            <h1 
              className="hero-animated-title"
              aria-label={settings.heroTitle}
            >
              <span className={typePhase === 'highlighting' || typePhase === 'deleting' ? 'hero-title-highlighted' : 'hero-title-normal'}>
                {displayedTitle || '\u00A0'}
              </span>
              <span className="hero-typewriter-cursor" aria-hidden="true">|</span>
            </h1>

            {/* Institutional Promise Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 16px',
                borderRadius: '6px',
                backgroundColor: 'rgba(37, 23, 29, 0.85)',
                border: '1px solid var(--taf-gold-border)',
                marginBottom: '20px',
                color: 'var(--taf-gold)',
                fontSize: '0.88rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              <Award size={18} style={{ color: 'var(--taf-gold)' }} />
              <span>{settings.diplomaPromise}</span>
            </div>

            {/* Lead Paragraph */}
            <p className="hero-lead">
              {settings.heroSubtitle}
            </p>

            {/* Action Buttons Row */}
            <div className="hero-actions-row">
              <button
                onClick={() => onNavigate('/formations')}
                className="btn btn-primary btn-lg"
                id="hero-btn-formations"
              >
                <span>Découvrir nos formations</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onNavigate('/admissions')}
                className="btn btn-secondary btn-lg"
                id="hero-btn-admissions"
              >
                <span>Demander une inscription</span>
              </button>

              <a
                href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20je%20souhaite%20parler%20%C3%A0%20un%20conseiller%20d%27orientation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                id="hero-btn-whatsapp"
              >
                <MessageCircle size={18} style={{ color: '#25D366' }} />
                <span>Parler à un conseiller</span>
              </a>
            </div>

            {/* Location & Status Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginTop: '36px',
                fontSize: '0.85rem',
                color: 'var(--taf-slate-300)',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--taf-gold)', fontWeight: 600 }}>Localisation :</span>
                <span>Dschang, Immeuble Supermarché Synergie, 2e étage</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--taf-gold)', fontWeight: 600 }}>Régime :</span>
                <span>Formation Pratique Bilingue</span>
              </div>
            </div>
          </div>

          {/* Right Column: 10-Second Auto-Rotating Screenshots Showcase */}
          <div className="hero-showcase-wrapper">
            <div
              className="hero-showcase-card"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Card Header */}
              <div className="hero-showcase-header">
                <div className="hero-showcase-badge">
                  <span className="hero-pulse-dot" />
                  <span>En Vedette • Formation</span>
                </div>
                <span className="hero-showcase-count">
                  0{currentIndex + 1} / 0{HERO_SCREENSHOTS.length}
                </span>
              </div>

              {/* Screenshot Display Frame */}
              <div
                className="hero-showcase-img-frame"
                onClick={() => onNavigate(currentItem.path || '/formations')}
                title={`Cliquer pour voir la formation ${currentItem.title}`}
              >
                <img
                  key={currentItem.src}
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="hero-showcase-img"
                  loading="eager"
                />
              </div>

              {/* 10-Second Progress Bar */}
              <div className="hero-showcase-timer-bar">
                <div
                  key={currentIndex}
                  className="hero-showcase-timer-fill"
                  style={{
                    animation: isPaused ? 'none' : 'progress10s 10s linear infinite',
                    width: isPaused ? '50%' : undefined
                  }}
                />
              </div>

              {/* Card Footer: Navigation Dots & Arrow Controls */}
              <div className="hero-showcase-footer">
                <div className="hero-showcase-dots">
                  {HERO_SCREENSHOTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`hero-showcase-dot ${idx === currentIndex ? 'active' : ''}`}
                      aria-label={`Afficher capture ${idx + 1}`}
                      title={HERO_SCREENSHOTS[idx].title}
                    />
                  ))}
                </div>

                <div className="hero-showcase-arrows">
                  <button
                    onClick={handlePrev}
                    className="hero-showcase-arrow-btn"
                    aria-label="Image précédente"
                    title="Précédent"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="hero-showcase-arrow-btn"
                    aria-label="Image suivante"
                    title="Suivant (défilement automatique 10s)"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discrete Scroll Indicator */}
      <button
        onClick={onExploreClick}
        className="hero-scroll-indicator"
        aria-label="Défiler vers la suite"
      >
        <span>Explorer</span>
        <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
      </button>
    </section>
  );
};
