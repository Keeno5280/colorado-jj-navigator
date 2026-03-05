import React from 'react';

const StickyDisclaimer: React.FC = () => {
  return (
    <div className="sticky-disclaimer">
      <div className="container">
        <p>
          <strong>⚠️ LEGAL DISCLAIMER:</strong> This tool provides informational resources only and is <strong>not legal advice</strong>.
          All statutory citations reference the Colorado Revised Statutes (C.R.S.) as of 2024–2026 and may not reflect recent legislative amendments —
          always verify current law before relying on any citation.
          For specific legal guidance, consult a qualified Colorado juvenile defense attorney or public defender.
        </p>
      </div>
    </div>
  );
};

export default StickyDisclaimer;

