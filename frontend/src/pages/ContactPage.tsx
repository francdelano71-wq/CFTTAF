import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { settings, submitContact, showToast } = useSite();

  const [contactForm, setContactForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.fullName || !contactForm.phone || !contactForm.message) {
      alert('Veuillez renseigner votre nom, téléphone et message.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContact({
        fullName: contactForm.fullName,
        phone: contactForm.phone,
        email: contactForm.email || undefined,
        subject: contactForm.subject || 'Demande de renseignements générale',
        message: contactForm.message
      });
      setSubmitted(true);
      showToast('Votre message a bien été transmis.');
    } catch {
      alert('Une erreur est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--taf-dark-base)', minHeight: '100vh' }}>
      <Breadcrumbs
        items={[{ label: 'Contact' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section style={{ padding: '60px 0 40px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'var(--taf-dark-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ color: 'var(--taf-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>
              Orientation & Renseignements
            </span>
            <h1 style={{ marginBottom: '16px' }}>
              Contacter le Centre CFP TAF
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--taf-slate-200)', lineHeight: 1.65 }}>
              Nos équipes pédagogiques et administratives sont à votre disposition à Dschang pour vous guider dans le choix de votre futur métier.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'flex-start' }}>
            {/* Left Column: Coordinates & 6 Phones */}
            <div>
              {/* Address card */}
              <div className="card-craft" style={{ backgroundColor: 'var(--taf-dark-card)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--taf-gold-subtle)', color: 'var(--taf-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)', marginBottom: '6px' }}>
                      Siège & Campus de Dschang
                    </h3>
                    <p style={{ color: 'var(--taf-slate-200)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      {settings.address}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--taf-slate-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--taf-white)', marginBottom: '4px' }}>
                      Horaires d'Ouverture du Secrétariat
                    </h4>
                    <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.86rem' }}>
                      {settings.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* 6 Direct Phone Numbers */}
              <div className="card-craft" style={{ backgroundColor: 'var(--taf-plum)', border: '1px solid var(--taf-gold-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Phone size={22} style={{ color: 'var(--taf-gold)' }} />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--taf-white)' }}>
                    Lignes Téléphoniques Officielles
                  </h3>
                </div>
                <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.86rem', marginBottom: '18px' }}>
                  Appelez directement nos conseillers d'orientation sur l'un des 6 numéros vérifiés :
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {(settings.contacts || []).map((c) => (
                    <a
                      key={c.raw}
                      href={`tel:+237${c.raw}`}
                      className="btn btn-secondary btn-sm"
                      style={{
                        padding: '10px 12px',
                        fontSize: '0.85rem',
                        justifyContent: 'flex-start',
                        backgroundColor: 'rgba(0,0,0,0.3)'
                      }}
                      title={`Appeler le ${c.display}`}
                    >
                      <Phone size={13} style={{ color: 'var(--taf-gold)' }} />
                      <span>{c.display}</span>
                    </a>
                  ))}
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <a
                    href={`https://wa.me/${settings.primaryWhatsapp}?text=Bonjour%20CFP%20TAF,%20je%20souhaite%20des%20informations.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={16} />
                    <span>Ligne WhatsApp Directe (+237 {settings.primaryPhone})</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div
              className="card-craft"
              style={{
                backgroundColor: 'var(--taf-dark-card)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: 'clamp(24px, 4vw, 36px)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--taf-white)', marginBottom: '8px' }}>
                  Envoyer un Message au Centre
                </h2>
                <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.9rem' }}>
                  Remplissez ce formulaire pour poser une question sur les formations, les rentrées ou les partenariats.
                </p>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: '30px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid #10B981',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={42} style={{ color: '#10B981', margin: '0 auto 14px auto' }} />
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--taf-white)', marginBottom: '8px' }}>
                    Message transmis avec succès !
                  </h3>
                  <p style={{ color: 'var(--taf-slate-300)', fontSize: '0.92rem', marginBottom: '20px' }}>
                    Nous avons bien reçu votre demande. Notre secrétariat vous répondra sous 24 heures.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setContactForm({ fullName: '', phone: '', email: '', subject: '', message: '' }); }}
                    className="btn btn-secondary btn-sm"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-name">
                      Nom et prénom <span className="req">*</span>
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      className="form-input"
                      placeholder="Votre nom complet"
                      value={contactForm.fullName}
                      onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-phone">
                        Téléphone <span className="req">*</span>
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        className="form-input"
                        placeholder="ex: 695673710"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="c-email">
                        E-mail (facultatif)
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        className="form-input"
                        placeholder="adresse@mail.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-subject">
                      Objet du message
                    </label>
                    <input
                      id="c-subject"
                      type="text"
                      className="form-input"
                      placeholder="ex: Renseignements sur la formation Son"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-msg">
                      Votre message <span className="req">*</span>
                    </label>
                    <textarea
                      id="c-msg"
                      rows={4}
                      className="form-textarea"
                      placeholder="Écrivez votre message ici..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
