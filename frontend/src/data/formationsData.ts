export interface Formation {
  id: string;
  number: number;
  slug: string;
  title: string;
  categoryId: string;
  categoryName: string;
  poleNumber: number;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  skills: string[];
  careerOutcomes: string[];
  accessConditions: string[];
  durationText: string;
  coursCentreDuration: string;
  stageDuration: string;
  dureeTotale: string;
  stageInfo: string;
  tools: string[];
  featured: boolean;
  sortOrder: number;
  seoTitle: string;
  seoDescription: string;
  diplomaType: 'DQP' | 'Attestation' | 'Certif. Tech.' | string;
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  coverImage: string;
  iconName: string;
  poleNumber: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'audiovisuel-musique',
    name: '1. Pôle Audiovisuel, Musique & Arts Photographiques',
    shortName: 'Audiovisuel & Photo',
    slug: 'audiovisuel-musique-photo',
    description: 'Techniques du son, régie DJ, prise de vue technique en studio et laboratoire photo numérique.',
    coverImage: '/images/categories/audiovisuel.jpg',
    iconName: 'Camera',
    poleNumber: 1
  },
  {
    id: 'montage-design-info',
    name: '2. Pôle Montage Vidéo, Design & Informatique',
    shortName: 'Montage, Design & Web',
    slug: 'montage-design-informatique',
    description: 'Montage cinématographique, infographie PAO, conception de sites web et développement applicatif.',
    coverImage: '/images/categories/cyber_digital.jpg',
    iconName: 'Video',
    poleNumber: 2
  },
  {
    id: 'maintenance-electricite',
    name: '3. Pôle Maintenance, Électricité & Énergie',
    shortName: 'Maintenance & Électricité',
    slug: 'maintenance-electricite-plomberie',
    description: 'Maintenance des parcs informatiques, administration réseau, électricité bâtiment et plomberie sanitaire.',
    coverImage: '/images/categories/technique.jpg',
    iconName: 'Wrench',
    poleNumber: 3
  },
  {
    id: 'solaire-centrale-gestion',
    name: '4. Pôle Énergies Solaire, Centrale Électrique & Gestion',
    shortName: 'Solaire & Gestion',
    slug: 'energies-solaires-gestion',
    description: 'Installations photovoltaïques, maintenance solaire, conduite de centrale électrique et comptabilité OHADA.',
    coverImage: '/images/categories/technique.jpg',
    iconName: 'Zap',
    poleNumber: 4
  },
  {
    id: 'secretariat-administration',
    name: '5. Pôle Secrétariat & Administration',
    shortName: 'Secrétariat & Direction',
    slug: 'secretariat-administration',
    description: 'Secrétariat bureautique bilingue, gestion administrative et assistance stratégique de direction.',
    coverImage: '/images/categories/administration.jpg',
    iconName: 'Briefcase',
    poleNumber: 5
  }
];

export const FORMATIONS: Formation[] = [
  // =========================================================================
  // 1. PÔLE AUDIOVISUEL, MUSIQUE & ARTS PHOTOGRAPHIQUES
  // =========================================================================
  {
    id: '1',
    number: 1,
    slug: 'technicien-de-son',
    title: 'Technicien de Son (TAF)',
    categoryId: 'audiovisuel-musique',
    categoryName: 'Pôle Audiovisuel, Musique & Arts Photographiques',
    poleNumber: 1,
    shortDescription: 'Captation, prise de son, sonorisation d\'événements et traitement acoustique sur bancs de montage audio et consoles numériques.',
    fullDescription: 'Cette formation prépare des techniciens du son polyvalents et immédiatement opérationnels. Les apprenants maîtrisent l\'installation et le réglage des microphones selon les configurations acoustiques, l\'exploitation des consoles numériques de mixage, la prise de son en studio, l\'enregistrement d\'instruments et le traitement du signal audio pour le live, le broadcast et la post-production.',
    coverImage: '/brand/section-e.png',
    skills: [
      'Installation, réglage des microphones et gestion des consoles de mixage',
      'Prise de son en studio, enregistrement d\'instruments et enregistrement direct',
      'Traitement du signal, mixage audio et post-production sonore',
      'Sonorisation d\'événements en direct, traitement acoustique et retours de scène'
    ],
    careerOutcomes: [
      'Technicien son studio et scène',
      'Opérateur prise de son (Radio, Télévision, Cinéma)',
      'Sound designer et régisseur audio'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Immersion de 12 semaines en studio d\'enregistrement professionnel, station de radio, chaîne TV ou entreprise événementielle partenaire.',
    tools: ['Consoles numériques (Yamaha, Behringer X32)', 'Pro Tools', 'Logic Pro', 'Microphones Neumann, Shure, Rode', 'Processeurs DSP'],
    featured: true,
    sortOrder: 1,
    seoTitle: 'Formation Technicien de Son (DQP) à Dschang | CFP TAF',
    seoDescription: 'Devenez technicien de son qualifié (DQP MINEFOP) à Dschang. 9 mois de pratique studio + 3 mois de stage en entreprise au CFP TAF.',
    diplomaType: 'DQP'
  },
  {
    id: '2',
    number: 2,
    slug: 'animateur-musical-dj',
    title: 'Animateur Musical & Disc-Jockey',
    categoryId: 'audiovisuel-musique',
    categoryName: 'Pôle Audiovisuel, Musique & Arts Photographiques',
    poleNumber: 1,
    shortDescription: 'Animation d\'événements publics/privés, programmation musicale, maîtrise des régies DJ et techniques d\'expression orale.',
    fullDescription: 'Formation intensive dédiée aux professionnels de l\'ambiance et de la musique. Vous apprenez la maîtrise des régies sonores, des platines DJ professionnelles, des contrôleurs numériques et logiciels de pointe (Serato, Traktor), ainsi que la programmation harmonique, les transitions rythmiques et l\'art de l\'animation micro pour scènes, radios et grands événements.',
    coverImage: '/images/categories/audiovisuel.jpg',
    skills: [
      'Maîtrise des régies son, Platines DJ, contrôleurs et logiciels (Serato, Traktor)',
      'Programmation et enchaînement harmonique des registres musicaux',
      'Techniques d\'animation micro, gestion d\'ambiance et éclairage scénique de base',
      'Câblage, sécurité sonore et gestion des retours'
    ],
    careerOutcomes: [
      'Animateur musical professionnel',
      'DJ professionnel (Clubs, festivals, réceptions)',
      'Animateur radio et présentateur événementiel'
    ],
    accessConditions: ['CEP', 'BEPC', 'CAP', 'Baccalauréat'],
    durationText: '6 mois en centre (720h) + 2 mois de stage en entreprise',
    coursCentreDuration: '6 mois (720 heures)',
    stageDuration: '2 mois (8 semaines)',
    dureeTotale: '8 mois',
    stageInfo: 'Stage de 8 semaines en station de radio locale, club de prestige ou auprès de prestataires événementiels majeurs.',
    tools: ['Contrôleurs Pioneer DJ', 'Serato DJ Pro', 'Traktor Pro', 'Casques professionnels Sennheiser', 'Micros sans fil HF'],
    featured: false,
    sortOrder: 2,
    seoTitle: 'Formation Animateur Musical & DJ à Dschang | CFP TAF',
    seoDescription: 'Formation pratique DJ et animateur musical à Dschang. 6 mois de cours pratiques + 2 mois de stage avec régie son professionnelle.',
    diplomaType: 'Attestation'
  },
  {
    id: '3',
    number: 3,
    slug: 'photographe-professionnel',
    title: 'Photographe Professionnel',
    categoryId: 'audiovisuel-musique',
    categoryName: 'Pôle Audiovisuel, Musique & Arts Photographiques',
    poleNumber: 1,
    shortDescription: 'Maîtrise de la prise de vue technique en studio et en extérieur, gestion de la lumière et post-traitement d\'images.',
    fullDescription: 'Cette formation forme des photographes créatifs et techniquement accomplis. Les apprenants explorent la maîtrise manuelle des boîtiers professionnels, la gestion de la profondeur de champ, le cadrage, l\'éclairage de studio (flashs, diffuseurs, boîtes à lumière) ainsi que le développement numérique RAW et la retouche de précision sous Lightroom et Photoshop.',
    coverImage: '/brand/section-a.png',
    skills: [
      'Gestion du cadrage, de l\'exposition, de la profondeur de champ et des objectifs',
      'Éclairage de studio (flashs, réflecteurs, boîtes à lumière) pour portrait et produit',
      'Retouche numérique et développement RAW (Lightroom, Photoshop)',
      'Reportage extérieur, photographie institutionnelle et événementielle'
    ],
    careerOutcomes: [
      'Photographe de studio indépendant ou salarié',
      'Reporter-photographe et photojournaliste',
      'Photographe événementiel et corporate'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines en studio photo de référence, agence de communication ou organe de presse.',
    tools: ['Boîtiers plein format Canon/Sony/Nikon', 'Flashs de studio Godox/Elinchrom', 'Lightroom Classic', 'Adobe Photoshop'],
    featured: true,
    sortOrder: 3,
    seoTitle: 'Formation Photographe Professionnel (DQP) à Dschang | CFP TAF',
    seoDescription: 'Obtenez votre DQP de Photographe Professionnel à Dschang au CFP TAF. Studio équipé, flashs, retouche RAW et stage garanti.',
    diplomaType: 'DQP'
  },
  {
    id: '4',
    number: 4,
    slug: 'operateur-laboratoire-photo',
    title: 'Opérateur de Laboratoire Photographique',
    categoryId: 'audiovisuel-musique',
    categoryName: 'Pôle Audiovisuel, Musique & Arts Photographiques',
    poleNumber: 1,
    shortDescription: 'Traitement technique des tirages, gestion des chaînes d\'impression photo numériques, étalonnage et finition des supports.',
    fullDescription: 'Spécialisation axée sur le tirage d\'art et l\'impression photo numérique professionnelle. Vous apprendrez la gestion de la chaîne graphique de laboratoire, le calibrage d\'écrans, la gestion des profils colorimétriques ICC, la préparation prépresse, l\'exploitation des traceurs grand format, ainsi que le contrecollage, la plastification et la finition des tirages.',
    coverImage: '/images/categories/audiovisuel.jpg',
    skills: [
      'Développement, tirage numérique et gestion de la chaîne graphique de laboratoire',
      'Étalonnage des couleurs, gestion des profils ICC et préparation prépresse photo',
      'Finition, plastification, contrecollage et contrôle qualité des imprimés',
      'Maintenance préventive des traceurs jet d\'encre et minilabs numériques'
    ],
    careerOutcomes: [
      'Technicien de laboratoire photo',
      'Opérateur d\'impression numérique grand format',
      'Responsable de production print en imprimerie numérique'
    ],
    accessConditions: ['CEP', 'BEPC', 'CAP', 'Baccalauréat'],
    durationText: '6 mois en centre (720h) + 2 mois de stage en entreprise',
    coursCentreDuration: '6 mois (720 heures)',
    stageDuration: '2 mois (8 semaines)',
    dureeTotale: '8 mois',
    stageInfo: 'Stage pratique de 8 semaines en laboratoire photo numérique, imprimerie offset/numérique ou atelier de tirage d\'art.',
    tools: ['Traceurs Epson / Canon grand format', 'Calibreurs colorimétriques X-Rite', 'Plastifieuses à chaud et à froid', 'Logiciels RIP d\'impression'],
    featured: false,
    sortOrder: 4,
    seoTitle: 'Formation Opérateur de Laboratoire Photo à Dschang | CFP TAF',
    seoDescription: 'Apprenez le tirage d\'art et la gestion des chaînes d\'impression photo numériques au CFP TAF Dschang. 6 mois cours + 2 mois stage.',
    diplomaType: 'Attestation'
  },

  // =========================================================================
  // 2. PÔLE MONTAGE VIDÉO, DESIGN & INFORMATIQUE
  // =========================================================================
  {
    id: '5',
    number: 5,
    slug: 'montage-audiovisuel-realisation',
    title: 'Montage Audiovisuel & Réalisation Vidéo',
    categoryId: 'montage-design-info',
    categoryName: 'Pôle Montage Vidéo, Design & Informatique',
    poleNumber: 2,
    shortDescription: 'Captation vidéo, scénarisation, montage numérique professionnel, étalonnage et habillage graphique d\'images animées.',
    fullDescription: 'Une formation complète pour devenir réalisateur et monteur vidéo recherché. De la scénarisation à la prise de vue avec caméras cinéma professionnelles (éclairage 3 points, mouvements de caméra stabilisés), jusqu\'au montage virtuel sur Premiere Pro et DaVinci Resolve, vous maîtriserez l\'art du rythme visuel, l\'étalonnage colorimétrique et l\'habillage graphique.',
    coverImage: '/brand/section-c.png',
    skills: [
      'Prise de vue vidéo, cadrage, mouvements de caméra et éclairage 3 points',
      'Montage virtuel (Premiere Pro, DaVinci), synchronisation et mixage audio',
      'Étalonnage, effets visuels de base, titrage et exportation multi-formats',
      'Scénarisation, découpage technique et réalisation de projets audiovisuels'
    ],
    careerOutcomes: [
      'Monteur vidéo professionnel (TV, Cinéma, Web)',
      'Cadreur / Cameraman de plateau et de reportage',
      'Vidéaste web, créateur de contenus et réalisateur indépendant'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines au sein d\'une maison de production audiovisuelle, agence de communication ou chaîne de télévision.',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve Studio', 'After Effects', 'Caméras cinéma 4K Blackmagic/Sony', 'Gimbals DJI Ronin'],
    featured: true,
    sortOrder: 5,
    seoTitle: 'Formation Montage Audiovisuel & Vidéo (DQP) à Dschang | CFP TAF',
    seoDescription: 'Obtenez votre DQP en Montage Audiovisuel et Réalisation Vidéo à Dschang. Caméras 4K, bancs de montage DaVinci et Premiere Pro.',
    diplomaType: 'DQP'
  },
  {
    id: '6',
    number: 6,
    slug: 'graphisme-production-pao',
    title: 'Graphisme de Production & PAO',
    categoryId: 'montage-design-info',
    categoryName: 'Pôle Montage Vidéo, Design & Informatique',
    poleNumber: 2,
    shortDescription: 'Conception visuelle, identité de marque, illustration vectorielle, retouche d\'image et préparation technique à l\'impression.',
    fullDescription: 'Formation de référence pour concevoir des identités de marque percutantes et maîtriser toute la chaîne graphique. Vous développerez une expertise approfondie de la suite Adobe (Photoshop, Illustrator, InDesign), de la typographie éditoriale, de la création de logos et chartes graphiques, ainsi que des règles techniques d\'imposition et de contrôle prépresse.',
    coverImage: '/brand/section-b.png',
    skills: [
      'Création de charte graphique, logos, affiches, dépliants et packaging',
      'Maîtrise experte de la suite Adobe (Photoshop, Illustrator, InDesign)',
      'Gestion de la chaîne graphique, imposition et contrôle prépresse',
      'Conception d\'assets digitaux pour réseaux sociaux et communication de marque'
    ],
    careerOutcomes: [
      'Graphiste maquettiste en agence ou entreprise',
      'Designer visuel et illustrateur de marque',
      'Exécutant PAO en imprimerie ou maison d\'édition'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines en agence de communication visuelle, studio de design graphique ou imprimerie moderne.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Tablettes graphiques Wacom', 'Nuanciers Pantone'],
    featured: true,
    sortOrder: 6,
    seoTitle: 'Formation Graphisme de Production & PAO (DQP) à Dschang | CFP TAF',
    seoDescription: 'Formation DQP Graphisme et PAO à Dschang au CFP TAF. Identités visuelles, packaging, Illustrator, InDesign et stage professionnel.',
    diplomaType: 'DQP'
  },
  {
    id: '7',
    number: 7,
    slug: 'webmaster-conception-web',
    title: 'Webmaster & Conception Web',
    categoryId: 'montage-design-info',
    categoryName: 'Pôle Montage Vidéo, Design & Informatique',
    poleNumber: 2,
    shortDescription: 'Création, administration, référencement et maintenance de sites web statiques et dynamiques.',
    fullDescription: 'Cette formation apprend à concevoir, administrer et pérenniser des sites web modernes. Les apprenants s\'approprient l\'intégration web sémantique (HTML5, CSS3, JavaScript moderne), la création de sites et boutiques sous WordPress, l\'optimisation du référencement naturel (SEO) et la gestion technique d\'hébergements, noms de domaine et sécurité SSL.',
    coverImage: '/brand/section-d.png',
    skills: [
      'Intégration web (HTML5, CSS3, JavaScript) et CMS (WordPress)',
      'Optimisation du référencement naturel (SEO) et webdesign ergonomique (UI/UX)',
      'Gestion d\'hébergement, sécurisation et mises à jour de sites internet',
      'Maintenance technique, sauvegardes et dépannage de plateformes web'
    ],
    careerOutcomes: [
      'Webmaster d\'entreprise ou d\'organisation',
      'Intégrateur web et gestionnaire de sites CMS',
      'Administrateur de plateformes e-commerce et de portails'
    ],
    accessConditions: ['BEPC', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines en agence web, entreprise de services numériques (ESN) ou département informatique d\'entreprise.',
    tools: ['VS Code', 'WordPress & WooCommerce', 'Figma', 'Git / GitHub', 'cPanel / Plesk', 'Google Search Console'],
    featured: true,
    sortOrder: 7,
    seoTitle: 'Formation Webmaster & Conception Web (DQP) à Dschang | CFP TAF',
    seoDescription: 'Devenez Webmaster certifié (DQP MINEFOP) à Dschang. HTML5, CSS3, WordPress, SEO, hébergement web et stage garanti.',
    diplomaType: 'DQP'
  },
  {
    id: '8',
    number: 8,
    slug: 'developpement-applications',
    title: 'Développement d\'Applications',
    categoryId: 'montage-design-info',
    categoryName: 'Pôle Montage Vidéo, Design & Informatique',
    poleNumber: 2,
    shortDescription: 'Conception, programmation logicielle, développement web/mobile et gestion des bases de données.',
    fullDescription: 'Plongez au cœur de l\'ingénierie logicielle. Vous apprendrez à analyser les besoins clients, à modéliser des bases de données relationnelles (UML, Merise, SQL), à programmer en orienté objet avec Python, PHP, Java et JavaScript, et à concevoir, tester et déployer des applications web et mobiles robustes et sécurisées.',
    coverImage: '/images/categories/cyber_digital.jpg',
    skills: [
      'Analyse des besoins et modélisation logique de bases de données (UML/Merise)',
      'Programmation Orientée Objet (Python, PHP, Java, JavaScript)',
      'Tests, débogage et déploiement d\'applications fonctionnelles',
      'Conception d\'API RESTful, requêtes SQL et architecture logicielle'
    ],
    careerOutcomes: [
      'Développeur d\'applications logicielles',
      'Développeur Web Full-Stack / Backend',
      'Développeur d\'applications mobiles'
    ],
    accessConditions: ['Baccalauréat C, D, TI ou équivalent', 'GCE A Level scientifique'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines en entreprise de développement de logiciels, startup technologique ou bureau d\'ingénierie informatique.',
    tools: ['VS Code / IntelliJ', 'Python / PHP / JavaScript', 'MySQL / PostgreSQL', 'Git & GitHub', 'Postman', 'Docker'],
    featured: true,
    sortOrder: 8,
    seoTitle: 'Formation Développement d\'Applications (DQP) à Dschang | CFP TAF',
    seoDescription: 'Devenez Développeur d\'Applications qualifié au CFP TAF Dschang. POO, Python, PHP, bases de données, applications web et mobiles.',
    diplomaType: 'DQP'
  },

  // =========================================================================
  // 3. PÔLE MAINTENANCE, ÉLECTRICITÉ & ÉNERGIE
  // =========================================================================
  {
    id: '9',
    number: 9,
    slug: 'maintenance-informatique',
    title: 'Maintenance Informatique',
    categoryId: 'maintenance-electricite',
    categoryName: 'Pôle Maintenance, Électricité & Énergie',
    poleNumber: 3,
    shortDescription: 'Diagnostic, assemblage, réparation matérielle, installation de systèmes d\'exploitation et maintenance logicielle.',
    fullDescription: 'Le technicien informatique est le garant du bon fonctionnement des outils de travail numériques. Cette formation vous enseigne l\'assemblage complet d\'ordinateurs, le diagnostic précis des pannes matérielles (carte mère, mémoire, disque, alimentation), l\'installation et l\'optimisation des systèmes Windows/Linux, la désinfection de logiciels malveillants et la sauvegarde des données.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Assemblage d\'ordinateurs, diagnostic de pannes et remplacement de composants',
      'Installation, configuration et nettoyage de systèmes Windows/Linux',
      'Sauvegarde de données, suppression de logiciels malveillants et maintenance préventive',
      'Gestion thermique, entretien physique des circuits et dépannage des périphériques'
    ],
    careerOutcomes: [
      'Technicien de maintenance informatique',
      'Technicien support Helpdesk / Assistance utilisateurs',
      'Responsable de parc informatique en entreprise'
    ],
    accessConditions: ['CEP', 'BEPC', 'CAP', 'Baccalauréat'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines au service informatique d\'une grande entreprise, administration publique ou atelier de maintenance informatique.',
    tools: ['Multimètres numériques', 'Kits d\'outils de précision', 'Testeurs d\'alimentations', 'Logiciels de diagnostic matériel (MemTest, CrystalDisk)'],
    featured: false,
    sortOrder: 9,
    seoTitle: 'Formation Maintenance Informatique (DQP) à Dschang | CFP TAF',
    seoDescription: 'Formation pratique en Maintenance Informatique au CFP TAF Dschang. Dépannage hardware, OS, sécurité et stage professionnel.',
    diplomaType: 'DQP'
  },
  {
    id: '10',
    number: 10,
    slug: 'maintenance-reseau-informatique',
    title: 'Maintenance Réseau Informatique',
    categoryId: 'maintenance-electricite',
    categoryName: 'Pôle Maintenance, Électricité & Énergie',
    poleNumber: 3,
    shortDescription: 'Déploiement, configuration, sécurisation et administration des infrastructures réseaux d\'entreprise.',
    fullDescription: 'Spécialisez-vous dans la mise en place et l\'administration des réseaux d\'entreprise. Vous apprendrez le câblage cuivre et fibre, le brassage de baies de serveurs, la configuration des commutateurs et routeurs, la gestion des plans d\'adressage IP, des sous-réseaux et VLANs, ainsi que la sécurisation des accès et la mise en place de VPN d\'entreprise.',
    coverImage: '/images/categories/cyber_digital.jpg',
    skills: [
      'Câblage réseau, brassage de baies et configuration des commutateurs/routeurs',
      'Configuration de réseaux LAN/WLAN, adressage IP, sous-réseaux et VPN',
      'Gestion des accès, sécurité réseau et supervision du trafic',
      'Diagnostic des pannes de connectivité et sécurisation pare-feu'
    ],
    careerOutcomes: [
      'Technicien réseau et télécoms',
      'Administrateur réseau junior en entreprise',
      'Technicien d\'infrastructure et câblage structuré'
    ],
    accessConditions: ['BEPC', 'Baccalauréat scientifique/technique', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines auprès d\'un fournisseur d\'accès internet, opérateur télécom ou au service réseau d\'une grande organisation.',
    tools: ['Testeurs de câbles et réflectomètres', 'Pinces à sertir pro', 'Équipements Cisco / MikroTik', 'Wireshark', 'Packet Tracer'],
    featured: true,
    sortOrder: 10,
    seoTitle: 'Formation Maintenance Réseau Informatique (DQP) à Dschang | CFP TAF',
    seoDescription: 'Devenez Technicien Réseau certifié (DQP MINEFOP) au CFP TAF Dschang. Câblage, switchs, routeurs, VPN et sécurité d\'entreprise.',
    diplomaType: 'DQP'
  },
  {
    id: '11',
    number: 11,
    slug: 'electricite-du-batiment',
    title: 'Électricité du Bâtiment',
    categoryId: 'maintenance-electricite',
    categoryName: 'Pôle Maintenance, Électricité & Énergie',
    poleNumber: 3,
    shortDescription: 'Réalisation, câblage, mise en service et maintenance des installations électriques dans les bâtiments.',
    fullDescription: 'Le métier fondamental du génie électrique appliqué au bâtiment. Cette formation pratique forme des électriciens capables de lire et concevoir des schémas unifilaires et multifilaires, de réaliser la pose de conduits et le tirage de câbles, de raccorder les tableaux électriques de distribution, d\'assurer la mise à la terre et de dépanner rapidement toute installation.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Lecture et réalisation de schémas électriques unifilaires et multifilaires',
      'Pose de conduits, tirage de câbles et raccordement de tableaux électriques',
      'Contrôle de conformité, mise à la terre et dépannage d\'urgence',
      'Installation d\'éclairages, prises, disjoncteurs différentiels et inverseurs'
    ],
    careerOutcomes: [
      'Électricien bâtiment (résidentiel et tertiaire)',
      'Monteur-câbleur de tableaux et armoires électriques',
      'Agent de maintenance électrique d\'immeuble ou complexe'
    ],
    accessConditions: ['CEP', 'BEPC', 'CAP'],
    durationText: '7 mois en centre (840h) + 2 mois de stage en entreprise',
    coursCentreDuration: '7 mois (840 heures)',
    stageDuration: '2 mois (8 semaines)',
    dureeTotale: '9 mois',
    stageInfo: 'Stage de 8 semaines sur chantiers de construction de bâtiments, entreprises de BTP ou sociétés d\'installation électrique.',
    tools: ['Pinces dénudeuses et coupe-câbles isolées 1000V', 'Vérificateurs d\'absence de tension (VAT)', 'Telluromètres (mesureurs de terre)', 'Perforateurs'],
    featured: false,
    sortOrder: 11,
    seoTitle: 'Formation Électricité du Bâtiment à Dschang | CFP TAF',
    seoDescription: 'Formation qualifiante en Électricité du Bâtiment à Dschang. Câblage, tableaux, schémas, mise à la terre et stage sur chantier.',
    diplomaType: 'Attestation'
  },
  {
    id: '12',
    number: 12,
    slug: 'plomberie-installation-sanitaire',
    title: 'Plomberie & Installation Sanitaire',
    categoryId: 'maintenance-electricite',
    categoryName: 'Pôle Maintenance, Électricité & Énergie',
    poleNumber: 3,
    shortDescription: 'Installation, raccordement, mise en service et réparation des réseaux d\'eau et des équipements sanitaires.',
    fullDescription: 'Un métier pratique indispensable et hautement rentable. Vous apprendrez à travailler tous les matériaux de tuyauterie (cuivre, PVC, multicouche, PPR), à réaliser les soudures et raccords étanches, à installer les sanitaires modernes (douches, lavabos, WC, chauffe-eau), à concevoir les circuits d\'alimentation et d\'évacuation et à effectuer la recherche méthodique de fuites.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Découpe, façonnage et soudure/brasage des tuyaux (Cuivre, PVC, Multicouche)',
      'Pose d\'équipements sanitaires (lavabos, WC, douches) et chauffe-eau',
      'Recherche de fuites et réparation des canalisations',
      'Installation de réservoirs, pompes surpresseurs et réseaux gravitaires'
    ],
    careerOutcomes: [
      'Plombier sanitaire indépendant ou en entreprise BTP',
      'Installateur sanitaire et thermique',
      'Agent d\'entretien des réseaux d\'eau d\'hôtels et résidences'
    ],
    accessConditions: ['CEP', 'BEPC', 'CAP'],
    durationText: '9 mois en centre (1 080h) + 2 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '2 mois (8 semaines)',
    dureeTotale: '11 mois',
    stageInfo: 'Stage pratique de 8 semaines en entreprise de plomberie-sanitaire, société de BTP ou service de maintenance hôtelière.',
    tools: ['Postes de soudure / chalumeaux', 'Pinces à sertir multicouche', 'Cintreuses de tubes', 'Clés serre-tubes', 'Pompes d\'épreuve'],
    featured: false,
    sortOrder: 12,
    seoTitle: 'Formation Plomberie & Installation Sanitaire (DQP) à Dschang | CFP TAF',
    seoDescription: 'Obtenez votre DQP en Plomberie et Installation Sanitaire à Dschang au CFP TAF. Réseaux d\'eau, chauffe-eau, tuyauterie et stage pratique.',
    diplomaType: 'DQP'
  },

  // =========================================================================
  // 4. PÔLE ÉNERGIES SOLAIRE, CENTRALE ÉLECTRIQUE & GESTION
  // =========================================================================
  {
    id: '13',
    number: 13,
    slug: 'installateur-systemes-photovoltaiques',
    title: 'Installateur de Systèmes Photovoltaïques',
    categoryId: 'solaire-centrale-gestion',
    categoryName: 'Pôle Énergies Solaire, Centrale Électrique & Gestion',
    poleNumber: 4,
    shortDescription: 'Dimensionnement, fixation, raccordement et mise en service d\'installations solaires autonomes et raccordées.',
    fullDescription: 'Cette formation forme des techniciens hautement qualifiés dans la transition énergétique. Vous apprendrez à évaluer le bilan de puissance d\'un site, dimensionner le champ de capteurs solaires et le stockage batterie, installer les structures sur toitures et sols, raccorder onduleurs hybrides et régulateurs MPPT, et mettre en service des systèmes autonomes ou connectés au réseau.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Évaluation du profil de consommation et dimensionnement des panneaux et batteries',
      'Pose de structures d\'ancrage, montage des panneaux solaires et câblage',
      'Raccordement des onduleurs, régulateurs et organes de protection',
      'Mise en service, tests de charge et sécurité des circuits DC/AC'
    ],
    careerOutcomes: [
      'Technicien installateur photovoltaïque',
      'Monteur solaire en entreprise d\'énergie renouvelable',
      'Entrepreneur installateur de solutions solaires autonomes'
    ],
    accessConditions: ['BEPC', 'CAP Électricité', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines au sein d\'une entreprise d\'énergie solaire, ONG d\'électrification rurale ou bureau d\'ingénierie énergétique.',
    tools: ['Pinces ampèremétriques DC', 'Solarimètres', 'Outils de sertissage connecteurs MC4', 'Logiciels de dimensionnement solaire'],
    featured: true,
    sortOrder: 13,
    seoTitle: 'Formation Installateur Photovoltaïque (Certif. Tech.) à Dschang | CFP TAF',
    seoDescription: 'Formation Technicien Solaire Photovoltaïque à Dschang. Dimensionnement, panneaux, onduleurs hybrides, batteries et stage garanti.',
    diplomaType: 'Certif. Tech.'
  },
  {
    id: '14',
    number: 14,
    slug: 'maintenancier-systemes-solaires',
    title: 'Maintenancier de Systèmes Solaires',
    categoryId: 'solaire-centrale-gestion',
    categoryName: 'Pôle Énergies Solaire, Centrale Électrique & Gestion',
    poleNumber: 4,
    shortDescription: 'Inspection, contrôle technique, diagnostic de dysfonctionnement et maintenance préventive/curative d\'installations solaires.',
    fullDescription: 'Spécialisation pointue sur la durabilité et l\'optimisation des parcs solaires. Vous apprendrez à tester la capacité réelle des parcs de batteries, à diagnostiquer les défauts de production des cellules photovoltaïques, à remplacer les composants électroniques défectueux sur onduleurs et régulateurs, et à appliquer les protocoles de maintenance préventive pour éviter les pannes.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Contrôle de l\'état des batteries, mesure des tensions/courants et nettoyage de panneaux',
      'Diagnostic de pannes sur onduleurs, régulateurs et bancs d\'accumulation',
      'Remplacement des composants défectueux et optimisation de rendement',
      'Tenue des carnets d\'entretien et maintenance curative d\'urgence'
    ],
    careerOutcomes: [
      'Maintenancier solaire en entreprise ou collectivité',
      'Agent de maintenance et SAV photovoltaïque',
      'Technicien d\'inspection et d\'audit des installations solaires'
    ],
    accessConditions: ['CEP', 'BEPC', 'CAP'],
    durationText: '6 mois en centre (720h) + 2 mois de stage en entreprise',
    coursCentreDuration: '6 mois (720 heures)',
    stageDuration: '2 mois (8 semaines)',
    dureeTotale: '8 mois',
    stageInfo: 'Stage de 8 semaines en service après-vente d\'entreprises solaires ou auprès d\'opérateurs de mini-réseaux électriques.',
    tools: ['Testeurs de batteries professionnels', 'Caméras thermiques d\'inspection solaire', 'Multimètres industriels', 'Kits d\'entretien'],
    featured: false,
    sortOrder: 14,
    seoTitle: 'Formation Maintenancier de Systèmes Solaires à Dschang | CFP TAF',
    seoDescription: 'Apprenez le diagnostic et la maintenance des installations solaires et batteries au CFP TAF Dschang. 6 mois cours + 2 mois stage.',
    diplomaType: 'Attestation'
  },
  {
    id: '15',
    number: 15,
    slug: 'pupitreur-centrale-electrique',
    title: 'Pupitreur de Centrale Électrique',
    categoryId: 'solaire-centrale-gestion',
    categoryName: 'Pôle Énergies Solaire, Centrale Électrique & Gestion',
    poleNumber: 4,
    shortDescription: 'Conduite, surveillance et contrôle des paramètres de fonctionnement des centrales électriques depuis les salles de commande.',
    fullDescription: 'Le pilote opérationnel des unités de production d\'électricité. Vous apprendrez à exploiter les salles de commande, à superviser les compteurs de charge, variateurs, automates et fréquencemètres, à exécuter les manœuvres critiques de couplage ou découplage des alternateurs et groupes de production sur le réseau, et à consigner scrupuleusement les alarmes et indicateurs.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Surveillance des pupitres de commande, compteurs, variateurs et automates',
      'Manœuvres de couplage/séparation des groupes électrogènes ou turbines',
      'Gestion des alarmes, consignation des données et application des protocoles de sécurité',
      'Conduite d\'unités de production et prévention des incidents de réseau'
    ],
    careerOutcomes: [
      'Pupitreur de centrale électrique (thermique, hydroélectrique, solaire)',
      'Opérateur de salle de commande électrique en industrie',
      'Technicien d\'exploitation de sous-stations et postes de transformation'
    ],
    accessConditions: ['Baccalauréat technique (F3, TI, C, D)', 'GCE A Level technique'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines en centrale de production d\'énergie, grande industrie manufacturière ou société de distribution d\'électricité.',
    tools: ['Pupitres de supervision SCADA', 'Automates programmables', 'Enregistreurs de paramètres réseau', 'Simulateurs de conduite'],
    featured: true,
    sortOrder: 15,
    seoTitle: 'Formation Pupitreur de Centrale Électrique (Certif. Tech.) à Dschang | CFP TAF',
    seoDescription: 'Devenez Pupitreur de Centrale Électrique certifié au CFP TAF Dschang. Salles de commande, couplage turbines, automates et stage.',
    diplomaType: 'Certif. Tech.'
  },
  {
    id: '16',
    number: 16,
    slug: 'comptabilite-informatisee-gestion',
    title: 'Comptabilité Informatisée & Gestion',
    categoryId: 'solaire-centrale-gestion',
    categoryName: 'Pôle Énergies Solaire, Centrale Électrique & Gestion',
    poleNumber: 4,
    shortDescription: 'Application des règles comptables OHADA, tenue de livres financiers et utilisation des progiciels comptables.',
    fullDescription: 'Une formation rigoureuse et très demandée par toutes les entreprises. Vous apprendrez la saisie et le classement des pièces comptables, la tenue des journaux de caisse et de banque, le suivi des facturations et relances, l\'élaboration des bulletins de paie et déclarations sociales (CNPS, DIP), et l\'utilisation experte des logiciels de comptabilité de référence (Sage Saari).',
    coverImage: '/images/categories/administration.jpg',
    skills: [
      'Application des règles comptables OHADA, tenue de livres financiers et journaux',
      'Saisie des pièces comptables, tenue de caisse/banque et facturation',
      'Gestion de la paie, déclarations fiscales et sociales (DIP, CNPS)',
      'Utilisation avancée des logiciels comptables (Sage Saari Comptabilité, Excel)'
    ],
    careerOutcomes: [
      'Aide-comptable / Assistant comptable en PME ou cabinet',
      'Gestionnaire de paie et facturation',
      'Caissier d\'entreprise ou chargé des opérations financières'
    ],
    accessConditions: ['BEPC', 'CAP Commercial', 'Baccalauréat (G2, CG, ACC)', 'GCE O/A Level Commercial'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines au sein d\'un cabinet d\'expertise comptable, service financier d\'entreprise ou institution de microfinance.',
    tools: ['Sage Saari Comptabilité 100', 'Sage Paie & RH', 'Microsoft Excel avancé', 'Plateformes de télédéclarations fiscales'],
    featured: true,
    sortOrder: 16,
    seoTitle: 'Formation Comptabilité Informatisée & Gestion (DQP) à Dschang | CFP TAF',
    seoDescription: 'Obtenez votre DQP en Comptabilité Informatisée à Dschang au CFP TAF. Système OHADA, Sage Saari, paie, fiscalité et stage en entreprise.',
    diplomaType: 'DQP'
  },

  // =========================================================================
  // 5. PÔLE SECRÉTARIAT, ADMINISTRATION & RÉCAPITULATIF
  // =========================================================================
  {
    id: '17',
    number: 17,
    slug: 'secretariat-bureautique-bilingue-comptable',
    title: 'Secrétariat (Bureautique, Bilingue, Comptable)',
    categoryId: 'secretariat-administration',
    categoryName: 'Pôle Secrétariat & Administration',
    poleNumber: 5,
    shortDescription: 'Exécution des travaux administratifs, rédaction de correspondances, accueil des usagers et opérations de gestion de niveau 1.',
    fullDescription: 'Une formation complète offrant un profil polyvalent hautement attractif sur le marché du travail camerounais et international. Vous développerez une vitesse de saisie dactylographique professionnelle, une excellente expression écrite et orale bilingue (français/anglais), le traitement du courrier et la tenue des opérations de caisse et de trésorerie élémentaires.',
    coverImage: '/images/categories/administration.jpg',
    skills: [
      'Saisie rapide, mise en page et rédaction de documents administratifs/commerciaux',
      'Accueil physique/téléphonique bilingue (français/anglais) et gestion du courrier',
      'Tenue des journaux de trésorerie de base et archivage méthodique',
      'Maîtrise des logiciels bureautiques de référence (Word, Excel, PowerPoint)'
    ],
    careerOutcomes: [
      'Secrétaire bureautique en entreprise ou administration',
      'Secrétaire bilingue français / anglais',
      'Secrétaire comptable en PME ou cabinet professionnel'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines au secrétariat d\'une entreprise bilingue, organisation internationale, ONG ou administration.',
    tools: ['Suite Microsoft Office 365 (Word, Excel, PowerPoint)', 'Logiciels de dactylographie rapide', 'Messageries professionnelles', 'Outils d\'archivage'],
    featured: true,
    sortOrder: 17,
    seoTitle: 'Formation Secrétariat Bilingue & Comptable (DQP) à Dschang | CFP TAF',
    seoDescription: 'Formation DQP Secrétariat Bureautique, Bilingue et Comptable à Dschang au CFP TAF. 9 mois cours + 3 mois stage en entreprise.',
    diplomaType: 'DQP'
  },
  {
    id: '18',
    number: 18,
    slug: 'secretariat-de-direction',
    title: 'Secrétariat de Direction',
    categoryId: 'secretariat-administration',
    categoryName: 'Pôle Secrétariat & Administration',
    poleNumber: 5,
    shortDescription: 'Assistance stratégique aux dirigeants, coordination de projets, gestion des flux d\'information et organisation logistique.',
    fullDescription: 'Le collaborateur direct des cadres dirigeants et directeurs généraux. Cette formation d\'élite vous prépare à organiser l\'agenda exécutif, planifier les conseils et séminaires d\'entreprise, gérer les flux documentaires confidentiels, rédiger des comptes rendus de réunions décisionnelles et assurer l\'interface diplomatique et courtoise avec les partenaires stratégiques.',
    coverImage: '/brand/section-f.png',
    skills: [
      'Préparation et suivi des dossiers de projets, rédaction de procès-verbaux et rapports',
      'Organisation de réunions, séminaires et gestion des déplacements professionnels',
      'Veille de l\'information, gestion documentaire et traitement des urgences',
      'Assistance managériale confidentielle et coordination d\'équipe de direction'
    ],
    careerOutcomes: [
      'Secrétaire de direction générale',
      'Assistant(e) de manager ou de direction générale',
      'Office manager et coordinateur(trice) administratif(ve)'
    ],
    accessConditions: ['Baccalauréat (toutes séries)', 'GCE A Level'],
    durationText: '9 mois en centre (1 080h) + 3 mois de stage en entreprise',
    coursCentreDuration: '9 mois (1 080 heures)',
    stageDuration: '3 mois (12 semaines)',
    dureeTotale: '12 mois',
    stageInfo: 'Stage de 12 semaines à la direction générale d\'une grande société, institution bancaire ou organisation de premier plan.',
    tools: ['Microsoft 365 Business (Outlook, Word, Excel, Teams)', 'Outils collaboratifs de gestion de projets', 'Outils de visio-conférence haute sécurité'],
    featured: true,
    sortOrder: 18,
    seoTitle: 'Formation Secrétariat de Direction (DQP) à Dschang | CFP TAF',
    seoDescription: 'Devenez Secrétaire de Direction qualifié (DQP MINEFOP) au CFP TAF Dschang. Assistance exécutive, gestion de projets et stage de direction.',
    diplomaType: 'DQP'
  }
];

export const DIPLOMAS = [
  {
    code: 'DQP',
    title: 'Diplôme de Qualification Professionnelle',
    desc: 'Titre officiel national sanctionnant une formation professionnelle complète et opérationnelle, délivré sous la tutelle du MINEFOP.'
  },
  {
    code: 'Certif. Tech.',
    title: 'Certificat Technique (Niveau Technicien)',
    desc: 'Certification technique attestant de la maîtrise opérationnelle d\'installations et d\'infrastructures techniques spécialisées.'
  },
  {
    code: 'Attestation',
    title: 'Attestation / Qualification Professionnelle',
    desc: 'Qualification validant l\'acquisition rigoureuse de compétences pratiques directement adaptées aux besoins immédiats du marché de l\'emploi.'
  }
];

export const ACCESS_LEVELS = [
  'CEP',
  'CAP',
  'BEPC',
  'Baccalauréat',
  'GCE O Level',
  'GCE A Level',
  'Autre / Reconversion Professionnelle'
];
