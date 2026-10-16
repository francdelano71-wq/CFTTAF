// =============================================================================
// CENTRE DE FORMATION PROFESSIONNELLE TAF — BACKEND REST API V1
// Self-contained, persistent JSON/SQLite REST API server
// Port: 5000
// =============================================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'database.json');

// Initialize database file if not exists
const initDb = () => {
  if (!fs.existsSync(DB_FILE)) {
    const defaultData = {
      applications: [
        {
          id: 'app-1',
          reference: 'TAF-2026-8421',
          fullName: 'Kenfack Jean-Pierre',
          phone: '695123456',
          email: 'kenfack.jp@example.cm',
          city: 'Dschang',
          formationId: '1',
          formationTitle: 'Photographie Professionnelle',
          educationLevel: 'Baccalauréat',
          preferredContactMethod: 'whatsapp',
          message: 'Passionné de prise de vue studio et reportage photo.',
          privacyConsent: true,
          status: 'new',
          createdAt: new Date().toISOString()
        }
      ],
      contactMessages: [
        {
          id: 'msg-1',
          fullName: 'M. Kamdem Lucas',
          phone: '699887766',
          email: 'kamdem@enterprise.cm',
          subject: 'Partenariat stage pour étudiants en Électricité & Froid',
          message: 'Bonjour, notre entreprise à Bafoussam souhaite accueillir 3 stagiaires du CFP TAF pour la rentrée.',
          status: 'new',
          createdAt: new Date().toISOString()
        }
      ],
      settings: {
        schoolName: 'Centre de Formation Professionnelle TAF – Bilingue',
        shortName: 'CFP TAF',
        city: 'Dschang',
        address: 'Immeuble Supermarché Synergie, 2e étage, Dschang, Cameroun',
        slogan: 'LE SAVOIR-FAIRE DEVIENT UN MÉTIER',
        diplomaPromise: 'OBTIENS TON DQP, CQP, AQP EN 1 AN AVEC UN STAGE EN ENTREPRISE',
        inscriptionsOpen: true,
        inscriptionSession: 'Session 2026/2027',
        primaryPhone: '695673710'
      },
      auditLogs: [
        {
          id: 'log-1',
          action: 'INIT',
          entityType: 'SERVER',
          entityId: '0',
          details: 'Démarrage du serveur REST API v1 pour CFP TAF.',
          author: 'System',
          timestamp: new Date().toISOString()
        }
      ]
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
  }
};

initDb();

const readDb = () => {
  try {
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    return { applications: [], contactMessages: [], settings: {}, auditLogs: [] };
  }
};

const writeDb = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

const logAudit = (action, entityType, entityId, details) => {
  const db = readDb();
  db.auditLogs.unshift({
    id: `log-${Date.now()}`,
    action,
    entityType,
    entityId,
    details,
    author: 'Admin TAF',
    timestamp: new Date().toISOString()
  });
  if (db.auditLogs.length > 200) db.auditLogs.pop();
  writeDb(db);
};

// Request Parser Helper
const parseJsonBody = (req) => {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
  });
};

const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
};

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  res.setHeader('Content-Type', 'application/json');

  // PUBLIC ROUTES
  if (req.method === 'GET' && pathname === '/api/v1/site-settings/public') {
    const db = readDb();
    res.writeHead(200);
    res.end(JSON.stringify(db.settings));
    return;
  }

  if (req.method === 'POST' && pathname === '/api/v1/applications') {
    const body = await parseJsonBody(req);
    const db = readDb();
    const reference = body.reference || `TAF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApp = {
      ...body,
      id: `app-${Date.now()}`,
      reference,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    db.applications.unshift(newApp);
    writeDb(db);
    logAudit('NOUVELLE_CANDIDATURE', 'APPLICATION', reference, `Candidature reçue pour ${body.formationTitle} (${body.fullName})`);

    res.writeHead(201);
    res.end(JSON.stringify({ success: true, reference, message: 'Candidature enregistrée avec succès.' }));
    return;
  }

  if (req.method === 'POST' && pathname === '/api/v1/contact-messages') {
    const body = await parseJsonBody(req);
    const db = readDb();
    const newMsg = {
      ...body,
      id: `msg-${Date.now()}`,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    db.contactMessages.unshift(newMsg);
    writeDb(db);

    res.writeHead(201);
    res.end(JSON.stringify({ success: true, message: 'Message enregistré.' }));
    return;
  }

  // ADMIN ROUTES
  if (req.method === 'POST' && pathname === '/api/v1/admin/login') {
    const body = await parseJsonBody(req);
    if (body.password === 'TAF2026!' || body.password === 'admin') {
      res.writeHead(200);
      res.end(JSON.stringify({ success: true, token: 'taf_admin_jwt_' + Date.now() }));
    } else {
      res.writeHead(401);
      res.end(JSON.stringify({ success: false, error: 'Identifiants invalides.' }));
    }
    return;
  }

  if (req.method === 'GET' && pathname === '/api/v1/admin/dashboard') {
    const db = readDb();
    const stats = {
      totalApplications: db.applications.length,
      newApplications: db.applications.filter(a => a.status === 'new').length,
      contacted: db.applications.filter(a => a.status === 'contacted').length,
      inReview: db.applications.filter(a => a.status === 'under_review').length,
      accepted: db.applications.filter(a => a.status === 'accepted').length,
      contactMessages: db.contactMessages.length
    };
    res.writeHead(200);
    res.end(JSON.stringify(stats));
    return;
  }

  if (req.method === 'GET' && pathname === '/api/v1/admin/applications') {
    const db = readDb();
    res.writeHead(200);
    res.end(JSON.stringify(db.applications));
    return;
  }

  if (req.method === 'PATCH' && pathname.startsWith('/api/v1/admin/applications/')) {
    const id = pathname.replace('/api/v1/admin/applications/', '');
    const body = await parseJsonBody(req);
    const db = readDb();
    const index = db.applications.findIndex(a => a.id === id || a.reference === id);
    if (index !== -1) {
      if (body.status) db.applications[index].status = body.status;
      if (body.adminNotes !== undefined) db.applications[index].adminNotes = body.adminNotes;
      db.applications[index].updatedAt = new Date().toISOString();
      writeDb(db);
      logAudit('MODIFICATION_STATUT', 'APPLICATION', id, `Statut mis à jour vers: ${body.status}`);
      res.writeHead(200);
      res.end(JSON.stringify(db.applications[index]));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Candidature introuvable' }));
    }
    return;
  }

  if (req.method === 'GET' && pathname === '/api/v1/admin/contact-messages') {
    const db = readDb();
    res.writeHead(200);
    res.end(JSON.stringify(db.contactMessages));
    return;
  }

  if (req.method === 'GET' && pathname === '/api/v1/admin/site-settings') {
    const db = readDb();
    res.writeHead(200);
    res.end(JSON.stringify(db.settings));
    return;
  }

  if (req.method === 'PATCH' && pathname === '/api/v1/admin/site-settings') {
    const body = await parseJsonBody(req);
    const db = readDb();
    db.settings = { ...db.settings, ...body };
    writeDb(db);
    logAudit('PARAMETRES_MODIFIES', 'SETTINGS', 'Global', 'Mise à jour des coordonnées et statut des inscriptions');
    res.writeHead(200);
    res.end(JSON.stringify(db.settings));
    return;
  }

  if (req.method === 'GET' && pathname === '/api/v1/admin/audit-logs') {
    const db = readDb();
    res.writeHead(200);
    res.end(JSON.stringify(db.auditLogs));
    return;
  }

  // 404 Route
  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Endpoint introuvable.' }));
});

server.listen(PORT, () => {
  console.log(`[CFP TAF API] REST Server running on http://localhost:${PORT}`);
});
