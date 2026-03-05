import React, { useState } from 'react';

const StickyDisclaimer: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="sticky-disclaimer">
      <div className="container" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <p style={{ flex: 1, margin: 0 }}>
          <strong>⚠️ LEGAL DISCLAIMER:</strong> This tool provides informational resources only and is <strong>not legal advice</strong>.
          All statutory citations reference the Colorado Revised Statutes (C.R.S.) as of 2024–2026 and may not reflect recent legislative amendments —
          always verify current law before relying on any citation.
          For specific legal guidance, consult a qualified Colorado juvenile defense attorney or public defender.
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss disclaimer"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#92400E',
            fontSize: '1.25rem',
            lineHeight: 1,
            padding: '0 0.25rem',
            flexShrink: 0,
            opacity: 0.7,
            transition: 'opacity 0.15s',
          }}
          onMouseOver={e => (e.currentTarget.style.opacity = '1')}
          onMouseOut={e => (e.currentTarget.style.opacity = '0.7')}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default StickyDisclaimer;
