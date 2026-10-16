import React from 'react';
import { Hero } from '../components/home/Hero';
import { IntroOverview } from '../components/home/IntroOverview';
import { FormationsCatalogSection } from '../components/home/FormationsCatalogSection';
import { AudiovisuelFocus } from '../components/home/AudiovisuelFocus';
import { StageDiplomeSection } from '../components/home/StageDiplomeSection';
import { AdmissionStepsSection } from '../components/home/AdmissionStepsSection';
import { AccessConditionsSection } from '../components/home/AccessConditionsSection';
import { PedagogicalEnvironment } from '../components/home/PedagogicalEnvironment';
import { FaqSection } from '../components/home/FaqSection';
import { CtaFinalSection } from '../components/home/CtaFinalSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToFormations = () => {
    const el = document.getElementById('formations-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('/formations');
    }
  };

  return (
    <main id="main-content">
      {/* 1. Hero Cinématographique */}
      <Hero onNavigate={onNavigate} onExploreClick={scrollToFormations} />

      {/* 2. Présentation courte du centre */}
      <IntroOverview />

      {/* 3. Sélection éditoriale des 16 formations */}
      <FormationsCatalogSection onNavigate={onNavigate} />

      {/* 4. Section Métiers Audiovisuel & Numérique */}
      <AudiovisuelFocus onNavigate={onNavigate} />

      {/* 5. Section Pratique & Stage en Entreprise (DQP, CQP, AQP) */}
      <StageDiplomeSection onNavigate={onNavigate} />

      {/* 6. Parcours d'inscription en 5 étapes */}
      <AdmissionStepsSection onNavigate={onNavigate} />

      {/* 7. Conditions d'accès et niveaux d'études */}
      <AccessConditionsSection onNavigate={onNavigate} />

      {/* 8. Environnement pédagogique et équipements */}
      <PedagogicalEnvironment />

      {/* 9. Questions Fréquentes (FAQ) */}
      <FaqSection />

      {/* 10. CTA Final de Contact & Inscription */}
      <CtaFinalSection onNavigate={onNavigate} />
    </main>
  );
};
