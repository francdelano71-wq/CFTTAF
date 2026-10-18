export interface ContactNumber {
  display: string;
  raw: string;
  whatsapp: boolean;
  label?: string;
}

export interface SiteSettings {
  schoolName: string;
  shortName: string;
  city: string;
  address: string;
  slogan: string;
  diplomaPromise: string;
  heroTitle: string;
  heroSubtitle: string;
  inscriptionsOpen: boolean;
  inscriptionSession: string;
  contacts: ContactNumber[];
  primaryPhone: string;
  primaryWhatsapp: string;
  hours: string;
  mission: string;
  vision: string;
  values: string[];
}

export const INITIAL_SETTINGS: SiteSettings = {
  schoolName: 'Centre de Formation Professionnelle TAF – Bilingue',
  shortName: 'CFP TAF',
  city: 'Dschang',
  address: 'Immeuble Supermarché Synergie, 2e étage, Dschang, Région de l\'Ouest, Cameroun',
  slogan: 'LE SAVOIR-FAIRE DEVIENT UN MÉTIER',
  diplomaPromise: 'OBTIENS TON DQP, CQP, AQP EN 1 AN AVEC UN STAGE EN ENTREPRISE',
  heroTitle: 'APPRENDS. PRATIQUE. DEVIENS PROFESSIONNEL.',
  heroSubtitle: 'Des compétences concrètes, des formations professionnelles et une préparation aux réalités du monde du travail. Construis ton parcours avec le Centre de Formation Professionnelle TAF à Dschang.',
  inscriptionsOpen: true,
  inscriptionSession: 'Session 2026/2027',
  contacts: [
    { display: '695 673 710', raw: '695673710', whatsapp: true, label: 'Ligne Principale & WhatsApp' },
    { display: '687 375 696', raw: '687375696', whatsapp: true, label: 'Secrétariat & Inscriptions' },
    { display: '682 997 050', raw: '682997050', whatsapp: false, label: 'Orientation' },
    { display: '672 401 907', raw: '672401907', whatsapp: false, label: 'Assistance Candidats' },
    { display: '653 352 052', raw: '653352052', whatsapp: false, label: 'Service Pédagogique' },
    { display: '697 610 104', raw: '697610104', whatsapp: false, label: 'Relations Entreprises' }
  ],
  primaryPhone: '695673710',
  primaryWhatsapp: '237695673710',
  hours: 'Lundi au Vendredi : 08h00 – 17h30 | Samedi : 08h30 – 13h00',
  mission: 'Former des professionnels directement opérationnels par une pratique intensive, des équipements réels et une immersion en entreprise.',
  vision: 'Devenir le pôle d\'excellence de référence en formation professionnelle pratique et bilingue dans la région de l\'Ouest Cameroun et au-delà.',
  values: [
    'Rigueur & Discipline professionnelle',
    'Pratique concrète sur le terrain',
    'Bilinguisme opérationnel (Français & Anglais)',
    'Insertion et accompagnement de carrière'
  ]
};

export const FAQ_ITEMS = [
  {
    question: 'Quels sont les diplômes préparés au Centre TAF ?',
    answer: 'Le Centre prépare aux titres professionnels d\'État, notamment le DQP (Diplôme de Qualification Professionnelle), le CQP (Certificat de Qualification Professionnelle) et l\'AQP (Attestation de Qualification Professionnelle), conformément aux référentiels du MINEFOP.'
  },
  {
    question: 'Quelle est la durée moyenne des formations ?',
    answer: 'La plupart des parcours complets sont conçus sur une durée d\'un an, combinant des modules théoriques ciblés, une pratique intensive en atelier ou laboratoire et un stage obligatoire en entreprise.'
  },
  {
    question: 'Le stage en entreprise est-il garanti pour tous les apprenants ?',
    answer: 'Le centre accompagne activement chaque apprenant dans sa recherche et son placement en stage grâce à son réseau d\'entreprises partenaires à Dschang, Bafoussam, Douala et Yaoundé. La validation du stage fait partie intégrante de l\'évaluation.'
  },
  {
    question: 'Puis-je m\'inscrire si je n\'ai pas le Baccalauréat ?',
    answer: 'Oui ! Les filières du Centre TAF sont accessibles dès le CEP, le CAP, le BEPC ou les GCE O Level selon la formation choisie. Des filières spécialisées comme la cybersécurité recommandent le Baccalauréat ou un test de niveau.'
  },
  {
    question: 'Où se situe exactement le Centre de Formation Professionnelle TAF ?',
    answer: 'Nous sommes situés en plein cœur de la ville de Dschang, à l\'Immeuble Supermarché Synergie, au 2e étage. L\'accès est central, sécurisé et bien desservi par les transports.'
  },
  {
    question: 'Comment se déroule la procédure de candidature en ligne ?',
    answer: 'La demande d\'inscription en ligne vous permet de réserver une place et d\'initier votre dossier. Un conseiller pédagogique du centre vous contacte sous 24 à 48 heures pour vérifier votre dossier, vous orienter et finaliser les formalités administratives.'
  }
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Choisir sa filière',
    description: 'Explorez notre catalogue de 18 formations et identifiez le métier qui correspond à vos aspirations et compétences.'
  },
  {
    step: '02',
    title: 'Vérifier les conditions',
    description: 'Consultez les prérequis (CEP, CAP, BEPC, Bac, GCE) et préparez les pièces de votre parcours scolaire.'
  },
  {
    step: '03',
    title: 'Demande d\'inscription',
    description: 'Remplissez le formulaire en ligne en 2 minutes ou présentez-vous directement à notre secrétariat au 2e étage.'
  },
  {
    step: '04',
    title: 'Entretien d\'orientation',
    description: 'Échangez avec nos conseillers pour valider votre projet professionnel, vos facilités de paiement et votre planning.'
  },
  {
    step: '05',
    title: 'Démarrage & Stage',
    description: 'Intégrez votre promotion, pratiquez dans nos ateliers équipés et démarrez votre stage professionnel en entreprise.'
  }
];
