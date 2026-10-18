import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { CheckCircle2, ShieldAlert, ArrowRight, Info, Award, Phone } from 'lucide-react';
import { FORMATIONS, ACCESS_LEVELS } from '../data/formationsData';
import { ADMISSION_STEPS } from '../data/siteConfig';
import { useSite } from '../context/SiteContext';

interface AdmissionsPageProps {
  initialFormationSlug?: string;
  onNavigate: (path: string) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ initialFormationSlug, onNavigate }) => {
  const { settings, submitApplication } = useSite();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Dschang',
    formationSlug: initialFormationSlug || '',
    educationLevel: 'Baccalauréat',
    preferredContactMethod: 'whatsapp' as 'phone' | 'whatsapp' | 'email',
    message: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialFormationSlug) {
      setFormData(prev => ({ ...prev, formationSlug: initialFormationSlug }));
    }
  }, [initialFormationSlug]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Veuillez saisir votre nom et prénom complets.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = 'Veuillez renseigner un numéro de téléphone valide (ex: 695673710).';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Veuillez préciser votre ville de résidence.';
    }
    if (!formData.formationSlug) {
      newErrors.formationSlug = 'Veuillez sélectionner la formation souhaitée.';
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Vous devez consentir au traitement de vos données pour valider la demande.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const selectedFormation = FORMATIONS.find(f => f.slug === formData.formationSlug);

    try {
      const res = await submitApplication({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        city: formData.city.trim(),
        formationId: selectedFormation?.id || '1',
        formationTitle: selectedFormation?.title || formData.formationSlug,
        educationLevel: formData.educationLevel,
        preferredContactMethod: formData.preferredContactMethod,
        message: formData.message.trim() || undefined,
        privacyConsent: true
      });

      if (res.success) {
        onNavigate(`/confirmation/${res.reference}`);
      }
    } catch (err) {
      alert('Une erreur est survenue lors de la transmission. Veuillez réessayer ou contacter le centre au 695 673 710.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh' }}>
      <Breadcrumbs
        items={[{ label: 'Admissions & Inscriptions' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section style={{ padding: '60px 0 40px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'var(--taf-dark-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ color: 'var(--taf-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>
              Parcours d'Orientation & Inscription
            </span>
            <h1 style={{ marginBottom: '16px' }}>
              Admissions au CFP TAF – Dschang
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--taf-slate-200)', lineHeight: 1.65 }}>
              Rejoignez la prochaine promotion. Les demandes d'inscription sont ouvertes pour la session {settings.inscriptionSession}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
            {/* Form Column */}
            <div
              className="card-craft"
              style={{
                backgroundColor: 'var(--taf-dark-card)',
                border: '1px solid var(--taf-gold-border)',
                padding: 'clamp(24px, 4vw, 36px)'
              }}
            >
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '16px', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--taf-white)', marginBottom: '8px' }}>
                  Formulaire de Candidature Officiel
                </h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--taf-slate-300)' }}>
                  Remplissez ce formulaire pour réserver votre place. Notre administration vous contactera sous 24 à 48 heures.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Nom et Prénom */}
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Nom et Prénom complets <span className="req">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="form-input"
                    placeholder="ex: Kenfack Jean-Pierre"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                </div>

                {/* Téléphone & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Téléphone (Appel / WhatsApp) <span className="req">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input"
                      placeholder="ex: 695673710"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <div className="form-error">{errors.phone}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Adresse e-mail <span style={{ color: 'var(--taf-slate-400)', fontWeight: 400 }}>(facultative)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="ex: candidat@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Ville & Niveau d'études */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="city">
                      Ville de résidence <span className="req">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="form-input"
                      placeholder="Dschang, Bafoussam, Douala..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                    {errors.city && <div className="form-error">{errors.city}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="educationLevel">
                      Niveau d'études actuel <span className="req">*</span>
                    </label>
                    <select
                      id="educationLevel"
                      className="form-select"
                      value={formData.educationLevel}
                      onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    >
                      {ACCESS_LEVELS.map(lvl => (
                        <option key={lvl} value={lvl}>{lvl}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Formation souhaitée */}
                <div className="form-group">
                  <label className="form-label" htmlFor="formationSlug">
                    Filière de formation souhaitée (18 filières officielles MINEFOP) <span className="req">*</span>
                  </label>
                  <select
                    id="formationSlug"
                    className="form-select"
                    value={formData.formationSlug}
                    onChange={(e) => setFormData({ ...formData, formationSlug: e.target.value })}
                  >
                    <option value="">-- Sélectionnez une filière officielle --</option>
                    {FORMATIONS.map(f => (
                      <option key={f.slug} value={f.slug}>
                        N°{f.number} • {f.title} ({f.diplomaType} — {f.dureeTotale})
                      </option>
                    ))}
                  </select>
                  {errors.formationSlug && <div className="form-error">{errors.formationSlug}</div>}
                </div>

                {/* Moyen de contact préféré */}
                <div className="form-group">
                  <label className="form-label">
                    Moyen de contact préféré <span className="req">*</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {(['whatsapp', 'phone', 'email'] as const).map(method => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                        style={{
                          padding: '10px',
                          borderRadius: '6px',
                          backgroundColor: formData.preferredContactMethod === method ? 'var(--taf-plum)' : 'rgba(255,255,255,0.04)',
                          border: '1px solid',
                          borderColor: formData.preferredContactMethod === method ? 'var(--taf-gold)' : 'rgba(255,255,255,0.1)',
                          color: formData.preferredContactMethod === method ? 'var(--taf-gold)' : 'var(--taf-slate-300)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          textTransform: 'uppercase'
                        }}
                      >
                        {method === 'whatsapp' ? 'WhatsApp' : method === 'phone' ? 'Téléphone' : 'E-mail'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message facultatif */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message ou projet professionnel <span style={{ color: 'var(--taf-slate-400)', fontWeight: 400 }}>(facultatif)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="form-textarea"
                    placeholder="Précisez vos motivations, vos disponibilités ou vos questions éventuelles..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Consentement RGPD / Protection des données */}
                <div className="form-group" style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--taf-slate-300)', lineHeight: 1.5 }}>
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      style={{ marginTop: '3px', accentColor: 'var(--taf-gold)', width: '16px', height: '16px' }}
                    />
                    <span>
                      J'accepte que mes coordonnées soient traitées par le Centre de Formation Professionnelle TAF dans le cadre exclusif de ma demande d'admission et d'orientation. <span className="req">*</span>
                    </span>
                  </label>
                  {errors.privacyConsent && <div className="form-error">{errors.privacyConsent}</div>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <span>{isSubmitting ? 'Transmission en cours...' : 'Soumettre ma demande d\'inscription'}</span>
                  <ArrowRight size={18} />
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--taf-slate-400)', marginTop: '14px' }}>
                  Aucun paiement n'est exigé en ligne. Les modalités financières sont discutées lors de l'entretien.
                </p>
              </form>
            </div>

            {/* Right Column: Procedure Steps & Important Disclaimer */}
            <div>
              {/* Disclaimer */}
              <div
                style={{
                  padding: '20px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(245, 197, 27, 0.08)',
                  border: '1px solid var(--taf-gold-border)',
                  marginBottom: '28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--taf-gold)', marginBottom: '8px' }}>
                  <Info size={18} />
                  <strong style={{ fontSize: '0.95rem' }}>Précision importante :</strong>
                </div>
                <p style={{ color: 'var(--taf-slate-200)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  La soumission de ce formulaire constitue une <strong>pré-candidature officielle</strong> permettant d'initier votre dossier. Elle ne vaut pas admission définitive automatique, laquelle est prononcée après examen de votre dossier et entretien avec notre direction pédagogique.
                </p>
              </div>

              {/* 5-Step Summary Card */}
              <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)', marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '18px' }}>
                  Le Parcours en 5 Étapes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {ADMISSION_STEPS.map((s) => (
                    <div key={s.step} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', color: 'var(--taf-gold)', fontWeight: 700, fontSize: '1.1rem' }}>
                        {s.step}.
                      </span>
                      <div>
                        <strong style={{ color: 'var(--taf-white)', fontSize: '0.92rem', display: 'block' }}>
                          {s.title}
                        </strong>
                        <span style={{ color: 'var(--taf-slate-400)', fontSize: '0.84rem' }}>
                          {s.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assistance Phone Card */}
              <div className="card-craft" style={{ backgroundColor: 'var(--taf-plum-dark)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ color: 'var(--taf-white)', marginBottom: '8px' }}>
                  Besoin d'aide pour candidater ?
                </h4>
                <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.88rem', marginBottom: '16px' }}>
                  Nos conseillers vous répondent directement par téléphone ou vous accueillent à nos bureaux à Dschang.
                </p>
                <a
                  href={`tel:+237${settings.primaryPhone}`}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Phone size={15} />
                  <span>Appeler le +237 {settings.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
