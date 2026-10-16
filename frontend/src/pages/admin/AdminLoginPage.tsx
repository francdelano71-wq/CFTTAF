import React, { useState } from 'react';
import { Shield, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

interface AdminLoginPageProps {
  onSuccess: () => void;
  onNavigateHome: () => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onSuccess, onNavigateHome }) => {
  const { loginAdmin } = useSite();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Veuillez saisir votre mot de passe administrateur.');
      return;
    }

    const success = loginAdmin(password);
    if (success) {
      onSuccess();
    } else {
      setError('Mot de passe incorrect. (Indice par défaut : TAF2026! ou admin)');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--taf-dark-base)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px'
      }}
    >
      <div
        className="card-craft"
        style={{
          width: '100%',
          maxWidth: '460px',
          backgroundColor: 'var(--taf-dark-card)',
          border: '1px solid var(--taf-gold-border)',
          padding: '36px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: 'var(--taf-plum)',
              color: 'var(--taf-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              border: '1px solid var(--taf-gold-border)'
            }}
          >
            <Shield size={28} />
          </div>

          <h1 style={{ fontSize: '1.6rem', color: 'var(--taf-white)', marginBottom: '6px' }}>
            Portail Direction CFP TAF
          </h1>
          <p style={{ fontSize: '0.86rem', color: 'var(--taf-slate-400)' }}>
            Espace d'administration réservé à la gestion des inscriptions et du centre.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '22px' }}>
            <label className="form-label" htmlFor="admin-pwd">
              Mot de passe d'administration
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="admin-pwd"
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                style={{ paddingRight: '42px' }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--taf-slate-400)'
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {error && <div className="form-error">{error}</div>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '14px' }}
          >
            <Lock size={16} />
            <span>Accéder au tableau de bord</span>
          </button>

          <button
            type="button"
            onClick={onNavigateHome}
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--taf-slate-400)',
              padding: '8px'
            }}
            className="hover:underline"
          >
            Retour au site public
          </button>
        </form>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            fontSize: '0.78rem',
            color: 'var(--taf-slate-400)',
            textAlign: 'center'
          }}
        >
          <span>Accès de démonstration / Direction : </span>
          <code style={{ color: 'var(--taf-gold)', backgroundColor: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: '4px' }}>
            TAF2026!
          </code>
        </div>
      </div>
    </div>
  );
};
