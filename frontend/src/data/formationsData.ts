export interface Formation {
  id: string;
  slug: string;
  title: string;
  categoryId: 'audiovisuel' | 'cyber-digital' | 'administration' | 'technique' | 'esthetique';
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  skills: string[];
  careerOutcomes: string[];
  accessConditions: string[];
  durationText: string;
  stageInfo: string;
  tools: string[];
  featured: boolean;
  sortOrder: number;
  seoTitle: string;
  seoDescription: string;
  diplomaType: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  iconName: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'audiovisuel',
    name: 'Audiovisuel & Création Numérique',
    slug: 'audiovisuel-creation',
    description: 'Devenez un professionnel de l\'image, du son et de la réalisation dans un secteur en pleine expansion.',
    coverImage: '/images/categories/audiovisuel.jpg',
    iconName: 'Camera'
  },
  {
    id: 'cyber-digital',
    name: 'Cybersécurité & Communication Numérique',
    slug: 'cyber-communication',
    description: 'Protégez les infrastructures numériques et pilotez l\'acquisition et la visibilité des organisations.',
    coverImage: '/images/categories/cyber_digital.jpg',
    iconName: 'ShieldCheck'
  },
  {
    id: 'administration',
    name: 'Administration & Secrétariat',
    slug: 'administration-secretariat',
    description: 'Maîtrisez la gestion administrative bilingue, l\'assistance de direction et la rigueur comptable.',
    coverImage: '/images/categories/administration.jpg',
    iconName: 'Briefcase'
  },
  {
    id: 'technique',
    name: 'Métiers Techniques & Énergie',
    slug: 'metiers-techniques',
    description: 'Des savoir-faire techniques indispensables : climatisation, électricité, plomberie et transition solaire.',
    coverImage: '/images/categories/technique.jpg',
    iconName: 'Wrench'
  },
  {
    id: 'esthetique',
    name: 'Beauté & Esthétique',
    slug: 'beaute-esthetique',
    description: 'L\'expertise des soins, du bien-être et de la cosmétologie professionnelle.',
    coverImage: '/images/categories/esthetique.jpg',
    iconName: 'Sparkles'
  }
];

export const FORMATIONS: Formation[] = [
  // A. Audiovisuel & Création Numérique
  {
    id: '1',
    slug: 'photographie-professionnelle',
    title: 'Photographie Professionnelle',
    categoryId: 'audiovisuel',
    categoryName: 'Audiovisuel & Création Numérique',
    shortDescription: 'Maîtrise de la prise de vue studio, du reportage institutionnel, de l\'éclairage et du post-traitement d\'images.',
    fullDescription: 'La formation en Photographie Professionnelle du CFP TAF forme des photographes capables d\'intervenir en studio, sur le terrain ou pour des marques. Vous apprendrez la gestion manuelle de la lumière, la composition photographique, la direction de modèles, le reportage événementiel et le flux de retouche numérique professionnel.',
    coverImage: '/images/categories/audiovisuel.jpg',
    skills: [
      'Gestion optique, exposition manuelle et balance des blancs',
      'Éclairage studio (flashs, modeleurs, lumière continue)',
      'Photographie de portrait, produit et reportage d\'action',
      'Développement RAW et retouche éditoriale sur Lightroom & Photoshop',
      'Gestion d\'archives et constitution d\'un book professionnel'
    ],
    careerOutcomes: [
      'Photographe de studio indépendant',
      'Photographe de presse et photojournaliste',
      'Photographe événementiel et de mode',
      'Opérateur de prise de vue pour agences de communication'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level (à confirmer lors de l\'entretien)'],
    durationText: '1 an (selon référentiel DQP/CQP préparé)',
    stageInfo: 'Stage pratique en entreprise ou agence partenaire inclus dans le cursus.',
    tools: ['Boîtiers DSLR & Mirrorless professionnels', 'Flashs studio & softboxes', 'Adobe Photoshop', 'Adobe Lightroom'],
    featured: true,
    sortOrder: 1,
    seoTitle: 'Formation Photographie Professionnelle à Dschang | CFP TAF',
    seoDescription: 'Devenez photographe professionnel certifié à Dschang au Centre de Formation Professionnelle TAF. Studio, reportage, retouche et stage en entreprise.',
    diplomaType: 'DQP / CQP / AQP'
  },
  {
    id: '2',
    slug: 'design-graphique',
    title: 'Design Graphique',
    categoryId: 'audiovisuel',
    categoryName: 'Audiovisuel & Création Numérique',
    shortDescription: 'Conception d\'identités visuelles percutantes, chartes graphiques, supports d\'édition et communication de marque.',
    fullDescription: 'Cette filière prépare des designers graphiques capables de concevoir des identités visuelles fortes, des affiches, des maquettes éditoriales et des visuels pour supports imprimés et numériques. Vous développerez votre œil typographique, votre sens des couleurs et la maîtrise complète des logiciels standards de l\'industrie créative.',
    coverImage: '/images/hero_cinematic.jpg',
    skills: [
      'Création de logos et systèmes d\'identité visuelle',
      'Typographie éditoriale, mise en page et théorie des couleurs',
      'Conception de supports print (affiches, dépliants, catalogues, packaging)',
      'Design d\'éléments pour réseaux sociaux et plateformes web',
      'Préparation des fichiers pour l\'imprimerie industrielle (pré-presse)'
    ],
    careerOutcomes: [
      'Graphiste / Designer visuel en agence',
      'Directeur artistique junior',
      'Designer graphique freelance',
      'Infographiste d\'édition et d\'imprimerie'
    ],
    accessConditions: ['BEPC', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an avec stage professionnel',
    stageInfo: 'Immersion en agence de communication, imprimerie ou studio graphique.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma'],
    featured: true,
    sortOrder: 2,
    seoTitle: 'Formation Design Graphique à Dschang | CFP TAF',
    seoDescription: 'Apprenez le graphisme, l\'identité visuelle et l\'infographie à Dschang. Formation pratique au CFP TAF avec stage en entreprise.',
    diplomaType: 'DQP / CQP'
  },
  {
    id: '3',
    slug: 'montage-audiovisuel',
    title: 'Montage Audiovisuel',
    categoryId: 'audiovisuel',
    categoryName: 'Audiovisuel & Création Numérique',
    shortDescription: 'Rythme narratif, assemblage vidéo professionnel, étalonnage colorimétrique et post-production vidéo.',
    fullDescription: 'Le monteur vidéo est le conteur final du projet audiovisuel. Cette formation vous enseigne l\'art du raccord, le sens du rythme, le découpage narratif, l\'étalonnage des couleurs, le mixage audio pour la vidéo et l\'intégration de titrages et d\'animations d\'habillage.',
    coverImage: '/images/hero_cinematic.jpg',
    skills: [
      'Dérushage, organisation et montage narratif multi-caméras',
      'Techniques de transition et synchronisation image/son',
      'Étalonnage colorimétrique (color grading et correspondances caméra)',
      'Animation de titrages et habillage visuel (Motion design basique)',
      'Exportations et normes de diffusion TV, cinéma et réseaux sociaux'
    ],
    careerOutcomes: [
      'Monteur vidéo cinéma et télévision',
      'Monteur de clips musicaux et documentaires',
      'Créateur de contenus vidéo pour marques et créateurs',
      'Technicien de post-production audiovisuelle'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an de formation pratique',
    stageInfo: 'Stage d\'application sur des projets de production réels ou chaînes partenaires.',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Adobe After Effects'],
    featured: true,
    sortOrder: 3,
    seoTitle: 'Formation Montage Audiovisuel à Dschang | CFP TAF',
    seoDescription: 'Formez-vous au montage vidéo professionnel et à l\'étalonnage à Dschang. Logiciels pro, projets réels et stage garanti.',
    diplomaType: 'DQP / CQP'
  },
  {
    id: '4',
    slug: 'maintenance-audiovisuelle',
    title: 'Maintenance Audiovisuelle',
    categoryId: 'audiovisuel',
    categoryName: 'Audiovisuel & Création Numérique',
    shortDescription: 'Diagnostic, câblage, entretien préventif et dépannage des équipements de prise de son, lumière et vidéo.',
    fullDescription: 'Un pôle audiovisuel performant repose sur des équipements fiables. La formation en Maintenance Audiovisuelle forme des techniciens spécialisés dans le diagnostic, la réparation, le calibrage et l\'installation des régies vidéo, bancs de montage, projecteurs, caméras et chaînes audio.',
    coverImage: '/images/categories/audiovisuel.jpg',
    skills: [
      'Diagnostic électrique et électronique des appareils audiovisuels',
      'Soudure et confection de câbles audio/vidéo (XLR, BNC, HDMI, DMX)',
      'Maintenance préventive des capteurs, optiques et consoles',
      'Installation et configuration de régies de diffusion et de streaming',
      'Sécurité électrique appliquée aux plateaux de tournage'
    ],
    careerOutcomes: [
      'Technicien de maintenance régie et plateau',
      'Responsable de parc matériel audiovisuel',
      'Technicien d\'assistance dans les chaînes de télévision et radios',
      'Prestataire de maintenance technique d\'équipements de spectacle'
    ],
    accessConditions: ['CAP', 'BEPC', 'Baccalauréat technique', 'GCE O/A Level'],
    durationText: '1 an pratique',
    stageInfo: 'Stage en studio de production, chaîne TV, radio ou entreprise événementielle.',
    tools: ['Multimètres & oscilloscopes', 'Stations de soudage pro', 'Générateurs de mires', 'Testeurs de câbles'],
    featured: false,
    sortOrder: 4,
    seoTitle: 'Formation Maintenance Audiovisuelle à Dschang | CFP TAF',
    seoDescription: 'Spécialisez-vous dans la maintenance, l\'installation et le dépannage des systèmes audiovisuels au CFP TAF à Dschang.',
    diplomaType: 'DQP / CQP / AQP'
  },
  {
    id: '5',
    slug: 'technicien-de-son',
    title: 'Technicien de Son (Record, Mix, Mastering)',
    categoryId: 'audiovisuel',
    categoryName: 'Audiovisuel & Création Numérique',
    shortDescription: 'Prise de son studio et plateau, mixage multipiste, acoustique et mastering audio aux standards internationaux.',
    fullDescription: 'La formation Technicien de Son met l\'accent sur les trois piliers essentiels du métier : le Recording (prise de son vocale et instrumentale, captation plateau), le Mixing (équilibre spectral, compression, spatialisation, effets) et le Mastering (optimisation dynamique pour streaming et radiodiffusion).',
    coverImage: '/images/categories/audiovisuel.jpg',
    skills: [
      'Prise de son studio et perche sur plateau de tournage',
      'Acoustique appliquée et choix/placement des micros (statiques, dynamiques, cravates)',
      'Mixage multipiste avancé sur station audionumérique (DAW)',
      'Traitement du signal : égalisation, compression multibande, réverbe',
      'Mastering audio et respect des normes LUFS pour le broadcast et le streaming'
    ],
    careerOutcomes: [
      'Ingénieur du son studio d\'enregistrement',
      'Perchiste / Opérateur son de tournage',
      'Technicien son live et régisseur sonorisation',
      'Monteur son et designer sonore pour le cinéma'
    ],
    accessConditions: ['BEPC', 'CAP', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an de spécialisation audio',
    stageInfo: 'Stage pratique en studio d\'enregistrement professionnel ou radio.',
    tools: ['Consoles de mixage analogiques et numériques', 'Pro Tools / Logic Pro / Cubase', 'Parc microphonique professionnel', 'Plugins de mastering de référence'],
    featured: true,
    sortOrder: 5,
    seoTitle: 'Formation Technicien de Son (Record, Mix, Mastering) à Dschang | CFP TAF',
    seoDescription: 'Apprenez la prise de son, le mixage et le mastering à Dschang. Formation audio d\'excellence avec studio équipé et stage.',
    diplomaType: 'DQP / CQP'
  },
  {
    id: '6',
    slug: 'webmaster',
    title: 'Webmaster',
    categoryId: 'audiovisuel',
    categoryName: 'Audiovisuel & Création Numérique',
    shortDescription: 'Création, intégration, administration et maintenance technique de sites internet et plateformes web.',
    fullDescription: 'Le Webmaster assure la création, la refonte, la sécurisation et la gestion quotidienne des sites web des entreprises et institutions. Vous apprendrez l\'intégration web moderne, la gestion des serveurs, l\'administration de CMS, la maintenance technique et l\'optimisation pour les moteurs de recherche.',
    coverImage: '/images/categories/cyber_digital.jpg',
    skills: [
      'Intégration HTML5 sémantique, CSS moderne et JavaScript',
      'Déploiement et personnalisation de CMS (WordPress, solutions e-commerce)',
      'Gestion des hébergements web, noms de domaine, DNS et certificats SSL',
      'Maintenance technique préventive, sauvegardes et dépannage',
      'Optimisation de la vitesse de chargement et bases du SEO technique'
    ],
    careerOutcomes: [
      'Webmaster pour entreprises et PME',
      'Intégrateur web junior',
      'Gestionnaire de site e-commerce',
      'Prestataire webmastering indépendant'
    ],
    accessConditions: ['BEPC', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an avec immersion professionnelle',
    stageInfo: 'Stage au sein d\'une agence web, d\'une entreprise digitale ou d\'un service informatique.',
    tools: ['HTML5 / CSS3 / JavaScript', 'WordPress & WooCommerce', 'Outils FTP & Panneaux cPanel/Plesk', 'Git'],
    featured: false,
    sortOrder: 6,
    seoTitle: 'Formation Webmaster à Dschang | CFP TAF',
    seoDescription: 'Devenez Webmaster à Dschang : création de sites internet, administration, hébergement et référencement web au CFP TAF.',
    diplomaType: 'DQP / CQP'
  },

  // B. Cybersécurité & Communication Numérique
  {
    id: '7',
    slug: 'cyber-securite',
    title: 'Cyber Sécurité',
    categoryId: 'cyber-digital',
    categoryName: 'Cybersécurité & Communication Numérique',
    shortDescription: 'Protection des systèmes informatiques, défense des réseaux, sensibilisation aux menaces et sécurisation des données.',
    fullDescription: 'Face à la montée des cybermenaces au Cameroun et en Afrique, cette formation prépare des techniciens capables de configurer des réseaux sécurisés, de détecter les vulnérabilités, d\'appliquer les politiques de protection des données et de réagir en cas d\'incident informatique.',
    coverImage: '/images/categories/cyber_digital.jpg',
    skills: [
      'Architecture des réseaux informatiques et protocoles de communication',
      'Configuration des pare-feu (Firewall), VPN et systèmes de détection d\'intrusion',
      'Identification des vulnérabilités et principes de test d\'intrusion éthique',
      'Sécurisation des postes de travail, serveurs et terminaux mobiles',
      'Procédures de sauvegarde chiffrée et plan de continuité d\'activité'
    ],
    careerOutcomes: [
      'Technicien support cybersécurité',
      'Administrateur junior sécurité des réseaux',
      'Consultant en hygiène informatique pour PME',
      'Opérateur SOC (Security Operations Center) junior'
    ],
    accessConditions: ['Baccalauréat scientifique ou technique', 'GCE A Level (ou équivalent avec test d\'aptitude)'],
    durationText: '1 an intensif',
    stageInfo: 'Stage pratique en DSI d\'entreprise, opérateur télécoms ou cabinet de services informatiques.',
    tools: ['Linux (Kali, Ubuntu Server)', 'Wireshark & Nmap', 'Firewalls pfsense / Fortinet', 'Outils de chiffrement'],
    featured: true,
    sortOrder: 7,
    seoTitle: 'Formation Cyber Sécurité à Dschang | CFP TAF',
    seoDescription: 'Protégez les données et réseaux informatiques. Formation pratique en Cyber Sécurité à Dschang avec certification DQP/CQP.',
    diplomaType: 'DQP / CQP'
  },
  {
    id: '8',
    slug: 'marketing-digital-community-management',
    title: 'Marketing Digital et Community Management',
    categoryId: 'cyber-digital',
    categoryName: 'Cybersécurité & Communication Numérique',
    shortDescription: 'Stratégie de contenu, animation de communautés, publicité en ligne (Ads), acquisition et analyse de performance.',
    fullDescription: 'Ce programme forme les stratèges de la visibilité numérique. Vous apprendrez à concevoir des campagnes sur les réseaux sociaux, à fédérer des communautés engagées, à piloter la réputation d\'une organisation et à gérer des budgets publicitaires rentables sur Meta, Google et TikTok.',
    coverImage: '/images/categories/cyber_digital.jpg',
    skills: [
      'Élaboration d\'une stratégie éditoriale et calendrier de publication',
      'Création de contenus percutants (visuels, textes, vidéos courtes)',
      'Gestion et modération des communautés (Facebook, Instagram, LinkedIn, TikTok)',
      'Paramétrage de campagnes publicitaires ciblées (Meta Ads, Google Ads)',
      'Analyse des indicateurs clés (ROI, engagement, portée) et reporting client'
    ],
    careerOutcomes: [
      'Community Manager en entreprise ou agence',
      'Responsable acquisition digitale',
      'Social Media Strategist indépendant',
      'Gestionnaire de marque et e-réputation'
    ],
    accessConditions: ['BEPC', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an de formation orientée résultats',
    stageInfo: 'Stage au sein d\'agences de marketing, d\'ONG, de startups ou de PME de la région.',
    tools: ['Meta Business Suite', 'Google Analytics', 'Canva Pro & CapCut', 'Outils de programmation social media'],
    featured: false,
    sortOrder: 8,
    seoTitle: 'Formation Marketing Digital et Community Management | CFP TAF',
    seoDescription: 'Développez votre expertise en réseaux sociaux, publicité en ligne et communication digitale au CFP TAF Dschang.',
    diplomaType: 'DQP / CQP'
  },

  // C. Administration & Secrétariat
  {
    id: '9',
    slug: 'secretariat-bureautique-bilingue',
    title: 'Secrétariat Bureautique Bilingue',
    categoryId: 'administration',
    categoryName: 'Administration & Secrétariat',
    shortDescription: 'Maîtrise bilingue français-anglais des outils bureautiques, accueil d\'élite et rédaction professionnelle.',
    fullDescription: 'Atout stratégique au Cameroun et à l\'international, le secrétariat bureautique bilingue forme des collaborateurs capables d\'assurer l\'accueil physique et téléphonique bilingue, la rédaction de correspondances administratives irréprochables en français et en anglais, ainsi que la gestion experte des logiciels bureautiques.',
    coverImage: '/images/categories/administration.jpg',
    skills: [
      'Communication professionnelle bilingue français/anglais écrite et orale',
      'Maîtrise avancée du traitement de texte, tableur et présentations',
      'Gestion des courriers entrants et sortants, archivage physique et électronique',
      'Tenue d\'agendas partagés et accueil des usagers et partenaires',
      'Organisation logistique des réunions et comptes rendus'
    ],
    careerOutcomes: [
      'Secrétaire bureautique bilingue',
      'Agent d\'accueil et d\'information institutionnel',
      'Assistant(e) administratif(ve) en entreprise binationale ou ONG',
      'Chargé(e) de suivi des dossiers administratifs'
    ],
    accessConditions: ['CAP', 'BEPC', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an avec stage pratique',
    stageInfo: 'Stage en entreprise privée, collectivité locale, établissement scolaire ou ONG.',
    tools: ['Microsoft Word, Excel, PowerPoint', 'Outils de messagerie professionnelle', 'Scanners & périphériques réseau'],
    featured: true,
    sortOrder: 9,
    seoTitle: 'Formation Secrétariat Bureautique Bilingue à Dschang | CFP TAF',
    seoDescription: 'Formation bilingue d\'excellence en secrétariat et bureautique à Dschang. Double compétence français/anglais et stage.',
    diplomaType: 'DQP / CQP / AQP'
  },
  {
    id: '10',
    slug: 'secretariat-de-direction',
    title: 'Secrétariat de Direction',
    categoryId: 'administration',
    categoryName: 'Administration & Secrétariat',
    shortDescription: 'Assistance stratégique aux hauts dirigeants, gestion des priorités, confidentialité et coordination d\'équipe.',
    fullDescription: 'Véritable bras droit de la direction générale, l\'assistant(e) de direction gère les flux d\'informations confidentielles, optimise l\'agenda de ses supérieurs, prépare les conseils d\'administration et assure la coordination fluide entre les différents départements de l\'organisation.',
    coverImage: '/images/categories/administration.jpg',
    skills: [
      'Filtrage rigoureux des communications et respect strict de la confidentialité',
      'Coordination des voyages, missions et plannings des directeurs',
      'Rédaction de procès-verbaux, rapports de synthèse et notes de cadrage',
      'Veille informationnelle et préparation des dossiers de décision',
      'Gestion des relations protocolaires et événements d\'entreprise'
    ],
    careerOutcomes: [
      'Secrétaire / Assistant(e) de direction générale',
      'Office Manager de PME/Grande entreprise',
      'Assistant(e) exécutif(ve) de projets internationaux',
      'Coordonnateur(rice) administratif(ve)'
    ],
    accessConditions: ['Baccalauréat', 'GCE A Level', 'BEPC avec expérience'],
    durationText: '1 an pratique',
    stageInfo: 'Immersion directe auprès de directions d\'entreprises ou administrations partenaires.',
    tools: ['Suites bureautiques collaboratives', 'Outils de planification d\'équipe', 'ERP administratifs'],
    featured: false,
    sortOrder: 10,
    seoTitle: 'Formation Secrétariat de Direction à Dschang | CFP TAF',
    seoDescription: 'Devenez Assistant(e) de Direction qualifié(e) à Dschang. Formation de haut niveau en gestion de direction et coordination.',
    diplomaType: 'DQP / CQP'
  },
  {
    id: '11',
    slug: 'secretariat-comptable',
    title: 'Secrétariat Comptable',
    categoryId: 'administration',
    categoryName: 'Administration & Secrétariat',
    shortDescription: 'Tenue des écritures comptables de base, facturation, suivi de trésorerie et déclarations fiscales OHADA.',
    fullDescription: 'À la croisée de l\'administration et des finances, le secrétaire comptable enregistre les pièces justificatives, gère la facturation clients/fournisseurs, effectue le rapprochement bancaire et prépare les déclarations courantes conformément au système comptable OHADA.',
    coverImage: '/images/categories/administration.jpg',
    skills: [
      'Saisie et vérification des écritures comptables d\'achats, ventes et trésorerie',
      'Établissement des factures, relances impayés et gestion de la caisse',
      'Rapprochements bancaires et états de rapprochement périodiques',
      'Préparation des fiches de paie simples et déclarations sociales (CNPS)',
      'Maîtrise des logiciels de comptabilité de référence'
    ],
    careerOutcomes: [
      'Secrétaire comptable en entreprise',
      'Aide-comptable en cabinet d\'expertise comptable',
      'Gestionnaire de caisse et de facturation',
      'Gestionnaire administratif et financier de PME'
    ],
    accessConditions: ['BEPC', 'CAP Commercial', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an avec stage comptable',
    stageInfo: 'Stage d\'application en cabinet comptable ou service financier d\'entreprise.',
    tools: ['Logiciels de comptabilité (Sage Saari, etc.)', 'Excel avancé (tableaux croisés, formules)', 'Plateformes fiscales'],
    featured: false,
    sortOrder: 11,
    seoTitle: 'Formation Secrétariat Comptable à Dschang | CFP TAF',
    seoDescription: 'Apprenez la gestion comptable, la facturation et la paie OHADA à Dschang au Centre TAF. Stage en entreprise inclus.',
    diplomaType: 'DQP / CQP'
  },

  // D. Métiers Techniques & Énergie
  {
    id: '12',
    slug: 'froid-et-climatisation',
    title: 'Froid et Climatisation',
    categoryId: 'technique',
    categoryName: 'Métiers Techniques & Énergie',
    shortDescription: 'Installation, maintenance préventive et dépannage frigorifique (chambres froides, climatiseurs splits, réfrigération).',
    fullDescription: 'Indispensable pour la conservation agroalimentaire, les hôpitaux et le confort moderne en Afrique, cette formation prépare des techniciens frigoristes hautement qualifiés. Vous apprendrez le cycle thermodynamique, le maniement des fluides frigorigènes, le câblage électrique des groupes et le dépannage rapide.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Thermodynamique appliquée et étude des cycles frigorifiques',
      'Brasage, dudgeonnage et façonnage des tuyauteries en cuivre',
      'Tirage au vide, charge en fluide frigorigène et détection de fuites',
      'Raccordement électrique et régulation thermique des installations',
      'Diagnostic de pannes sur split-systems et chambres froides'
    ],
    careerOutcomes: [
      'Technicien frigoriste d\'installation et de dépannage',
      'Responsable maintenance froid en complexe hôtelier ou agroalimentaire',
      'Installateur de systèmes de climatisation pour particuliers et bureaux',
      'Artisan frigoriste indépendant'
    ],
    accessConditions: ['CEP', 'CAP', 'BEPC', 'Baccalauréat technique', 'GCE O/A Level'],
    durationText: '1 an de formation technique intensive',
    stageInfo: 'Stage sur chantiers réels, entreprises frigorifiques ou de maintenance industrielle.',
    tools: ['Manifolds et manomètres', 'Pompes à vide et stations de récupération', 'Chalumeaux de brasage', 'Détecteurs électroniques'],
    featured: true,
    sortOrder: 12,
    seoTitle: 'Formation Froid et Climatisation à Dschang | CFP TAF',
    seoDescription: 'Apprenez le métier de frigoriste à Dschang. Climatiseurs, chambres froides, installation et dépannage avec stage.',
    diplomaType: 'DQP / CQP / AQP'
  },
  {
    id: '13',
    slug: 'plomberie-et-tuyauterie',
    title: 'Plomberie et Tuyauterie',
    categoryId: 'technique',
    categoryName: 'Métiers Techniques & Énergie',
    shortDescription: 'Réseaux de distribution d\'eau, évacuations, installations sanitaires, soudure et canalisations industrielles.',
    fullDescription: 'Le plombier-tuyautier assure l\'acheminement de l\'eau potable, l\'évacuation des eaux usées et la pose des appareils sanitaires dans les bâtiments résidentiels, commerciaux et industriels. La formation allie plans techniques, façonnage des tubes et normes de sécurité sanitaire.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Lecture de plans d\'installations hydrauliques et sanitaires',
      'Coupe, cintrage et assemblage de tuyaux (PVC, cuivre, multicouche, acier)',
      'Pose et raccordement des appareils sanitaires (éviers, douches, WC, chauffe-eaux)',
      'Mise sous pression, essais d\'étanchéité et maintenance des réseaux',
      'Réparation de fuites et réfection de colonnes d\'évacuation'
    ],
    careerOutcomes: [
      'Plombier installateur sanitaire bâtiment',
      'Tuyautier en milieu industriel et tertiaire',
      'Technicien de maintenance des réseaux hydrauliques',
      'Entrepreneur plombier en bâtiment'
    ],
    accessConditions: ['CEP', 'CAP', 'BEPC', 'GCE O Level'],
    durationText: '1 an pratique',
    stageInfo: 'Stage d\'immersion sur des chantiers de construction et rénovation de la région.',
    tools: ['Cintreuses de tubes', 'Pince à sertir multicouche', 'Filières à fileter', 'Chalumeaux oxyacétyléniques'],
    featured: false,
    sortOrder: 13,
    seoTitle: 'Formation Plomberie et Tuyauterie à Dschang | CFP TAF',
    seoDescription: 'Formation pratique en plomberie sanitaire et tuyauterie à Dschang. Métier très demandé, ateliers équipés et stage.',
    diplomaType: 'DQP / CQP / AQP'
  },
  {
    id: '14',
    slug: 'electricite',
    title: 'Électricité (Bâtiment & Industrielle)',
    categoryId: 'technique',
    categoryName: 'Métiers Techniques & Énergie',
    shortDescription: 'Câblage domestique et tertiaire, armoires de distribution, sécurité des installations et dépannage électrique.',
    fullDescription: 'Cette formation prépare des électriciens capables de réaliser et sécuriser des installations électriques complètes conformes aux normes NFC 15-100 : pose de coffrets de distribution, disjoncteurs, éclairages, prises, commutateurs et maintenance des circuits de puissance.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Schémas électriques unifilaires et multifilaires',
      'Pose de conduits, tirage de conducteurs et raccordements au tableau',
      'Dimensionnement des protections (disjoncteurs, différentiels, mise à la terre)',
      'Installation d\'éclairages modernes (LED, va-et-vient, télérupteurs, minuteries)',
      'Contrôle de conformité et dépannage des coupures de courant'
    ],
    careerOutcomes: [
      'Électricien d\'installation bâtiment',
      'Technicien de maintenance électrique industrielle',
      'Électricien de chantier sur projets immobiliers',
      'Installateur électrique autonome'
    ],
    accessConditions: ['CEP', 'CAP', 'BEPC', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an avec stage sur chantier',
    stageInfo: 'Immersion sur des chantiers de construction ou entreprises d\'électricité générale.',
    tools: ['Pinces à dénuder et à sertir isolées', 'Multimètres & testeurs de terre', 'Rainureuses et perceuses'],
    featured: false,
    sortOrder: 14,
    seoTitle: 'Formation Électricité Bâtiment & Tertiaire à Dschang | CFP TAF',
    seoDescription: 'Devenez électricien qualifié à Dschang. Installation, câblage, sécurité et dépannage au CFP TAF.',
    diplomaType: 'DQP / CQP / AQP'
  },
  {
    id: '15',
    slug: 'energie-renouvelable',
    title: 'Énergie Renouvelable (Solaire Photovoltaïque)',
    categoryId: 'technique',
    categoryName: 'Métiers Techniques & Énergie',
    shortDescription: 'Dimensionnement, montage et maintenance de systèmes solaires photovoltaïques autonomes et hybrides.',
    fullDescription: 'L\'accès à une énergie fiable est un enjeu majeur au Cameroun. Cette filière d\'avenir forme des techniciens spécialisés dans le dimensionnement, l\'installation de panneaux solaires, la gestion de bancs de batteries, le raccordement d\'onduleurs hybrides et la maintenance de parcs photovoltaïques.',
    coverImage: '/images/categories/technique.jpg',
    skills: [
      'Calcul du bilan de puissance et dimensionnement de kits solaires',
      'Fixation mécanique sécurisée des panneaux en toiture ou au sol',
      'Câblage des régulateurs solaires MPPT et onduleurs/chargeurs',
      'Configuration et entretien des parcs de batteries (Plomb, Lithium-ion)',
      'Maintenance préventive et sécurisation contre la foudre'
    ],
    careerOutcomes: [
      'Installateur de systèmes solaires photovoltaïques',
      'Technicien de maintenance solaire pour sites isolés',
      'Conseiller technique en énergies propres',
      'Entrepreneur dans le secteur de l\'énergie solaire'
    ],
    accessConditions: ['BEPC', 'CAP Électricité', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an de formation spécialisée',
    stageInfo: 'Stage auprès d\'entreprises d\'énergie solaire, ONG d\'électrification rurale ou bureaux d\'études.',
    tools: ['Pince ampèremétrique DC', 'Solarimètres / Luxmètres', 'Outils de sertissage connecteurs MC4', 'Logiciels de dimensionnement'],
    featured: true,
    sortOrder: 15,
    seoTitle: 'Formation Énergie Renouvelable & Solaire à Dschang | CFP TAF',
    seoDescription: 'Apprenez l\'installation solaire photovoltaïque à Dschang. Dimensionnement, onduleurs, batteries et stage professionnel.',
    diplomaType: 'DQP / CQP'
  },

  // E. Beauté & Esthétique
  {
    id: '16',
    slug: 'cosmetique-et-esthetique',
    title: 'Cosmétique et Esthétique',
    categoryId: 'esthetique',
    categoryName: 'Beauté & Esthétique',
    shortDescription: 'Soins du visage et du corps, maquillage professionnel, manucure-pédicure et formulation cosmétique.',
    fullDescription: 'Le secteur de la beauté et du bien-être est en plein essor. Cette formation rigoureuse vous enseigne l\'anatomie de la peau, les protocoles de soins du visage et du corps, le maquillage professionnel (mariée, événement, studio photo), la prothésie ongulaire et les bases de la cosmétologie naturelle.',
    coverImage: '/images/categories/esthetique.jpg',
    skills: [
      'Diagnostic cutané et protocoles de soins du visage adaptés',
      'Techniques de maquillage professionnel (jour, soir, mariée, shooting)',
      'Manucure, pédicure, modelage des ongles et pose de vernis gel',
      'Soins corporels, gommages, enveloppements et massages relaxants',
      'Hygiène stricte, stérilisation des instruments et gestion d\'un institut'
    ],
    careerOutcomes: [
      'Esthéticienne professionnelle en institut ou spa',
      'Maquilleuse professionnelle (Make-up artist événementiel & cinéma)',
      'Conseillère experte en produits cosmétiques',
      'Créatrice d\'un salon d\'esthétique ou d\'une marque de soins'
    ],
    accessConditions: ['CEP', 'CAP', 'BEPC', 'Baccalauréat', 'GCE O/A Level'],
    durationText: '1 an de formation pratique en atelier',
    stageInfo: 'Stage d\'application en institut de beauté de renom, spa ou salon esthétique partenaire.',
    tools: ['Appareils de soins du visage (vapeur d\'ozone, haute fréquence)', 'Kits maquillage pro haute définition', 'Tables de soins et lampes loupes'],
    featured: true,
    sortOrder: 16,
    seoTitle: 'Formation Cosmétique et Esthétique à Dschang | CFP TAF',
    seoDescription: 'Devenez esthéticienne et maquilleuse professionnelle à Dschang au CFP TAF. Soins, make-up, bien-être et stage certifié.',
    diplomaType: 'DQP / CQP / AQP'
  }
];

export const DIPLOMAS = [
  {
    code: 'DQP',
    title: 'Diplôme de Qualification Professionnelle',
    desc: 'Titre officiel sanctionnant une formation professionnelle complète et opérationnelle, délivré conformément aux normes nationales de la formation professionnelle.'
  },
  {
    code: 'CQP',
    title: 'Certificat de Qualification Professionnelle',
    desc: 'Certificat validant la maîtrise de compétences techniques ciblées directement requises par le marché de l\'emploi.'
  },
  {
    code: 'AQP',
    title: 'Attestation de Qualification Professionnelle',
    desc: 'Attestation confirmant les acquis pratiques et la participation active au cycle de qualification professionnelle.'
  }
];

export const ACCESS_LEVELS = [
  'CEP',
  'CAP',
  'BEPC',
  'Baccalauréat',
  'GCE O Level',
  'GCE A Level',
  'Autre / Reconversion'
];
