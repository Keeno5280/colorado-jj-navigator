import React from 'react';

const felonies = [
    {
        level: 'Class 1 Felony',
        severity: 'critical',
        examples: 'First-degree murder',
        notes: 'Mandatory direct file to adult court if youth is 16+. If adjudicated in juvenile court: commitment as Aggravated Juvenile Offender — 3 to 7 years in DYS. Probation is NOT an option.',
        citations: ['C.R.S. 19-2.5-801', 'C.R.S. 19-2.5-1127']
    },
    {
        level: 'Class 2 Felony',
        severity: 'critical',
        examples: 'First-degree kidnapping, first-degree assault',
        notes: 'Mandatory direct file to adult court if youth is 16+. If adjudicated in juvenile court: Aggravated Juvenile Offender status — 3 to 5 years DYS commitment followed by mandatory 6-month parole.',
        citations: ['C.R.S. 19-2.5-801', 'C.R.S. 19-2.5-1127']
    },
    {
        level: 'Class 3 Felony',
        severity: 'high',
        examples: 'Robbery, aggravated assault with a deadly weapon',
        notes: 'Remains in juvenile court unless prior felony adjudication + crime of violence. Disposition: probation, out-of-home placement, or DYS commitment (up to 2 years standard). Transfer to adult court possible by motion.',
        citations: ['C.R.S. 19-2.5-901']
    },
    {
        level: 'Class 4 Felony',
        severity: 'medium',
        examples: 'Theft ($2,000–$5,000), motor vehicle theft, some drug offenses',
        notes: 'Juvenile court. Disposition ranges from probation to DYS commitment (up to 2 years) depending on prior history, risk assessment, and available community services.',
        citations: ['C.R.S. 19-2.5-901', 'C.R.S. 19-2.5-1108']
    },
    {
        level: 'Class 5 Felony',
        severity: 'medium',
        examples: 'Theft ($1,000–$2,000), identity theft, criminal mischief',
        notes: 'Juvenile court. First-time offenders typically receive diversion, informal adjustment, or probation. Probation conditions are individually tailored by the court.',
        citations: ['C.R.S. 19-2.5-901', 'C.R.S. 19-2.5-1108']
    },
    {
        level: 'Class 6 Felony',
        severity: 'low-felony',
        examples: 'Theft ($750–$2,000), "wobbler" offenses',
        notes: 'Lowest felony class. Strong diversion and informal adjustment candidates. Court has discretion to treat similarly to higher misdemeanor. DYS commitment unlikely for first offense.',
        citations: ['C.R.S. 19-2.5-901']
    },
];

const misdemeanors = [
    {
        level: 'Class 1 Misdemeanor',
        severity: 'medium',
        examples: 'Simple assault, harassment, menacing, petty theft (>$300)',
        notes: 'Highest misdemeanor class. Disposition: probation, community service, counseling. Probation may include up to 45 days of detention. Very rarely results in DYS commitment.',
        citations: ['C.R.S. 19-2.5-1108']
    },
    {
        level: 'Class 2 Misdemeanor',
        severity: 'low',
        examples: 'Disorderly conduct, trespassing, drug paraphernalia possession',
        notes: 'Youth are typically diverted or placed on informal adjustment for first offenses. Informal adjustment period cannot exceed 6 months (one extension possible up to 12 total).',
        citations: ['C.R.S. 19-2.5-901']
    },
    {
        level: 'Petty Offense',
        severity: 'low',
        examples: 'Minor in possession of alcohol, minor traffic violations',
        notes: 'Lowest criminal category. Often handled without formal court proceedings — typically citation, community service, or referral to diversion program.',
        citations: []
    },
];

const statusOffenses = [
    {
        level: 'Truancy',
        description: 'Unexcused school absences. Cannot result in secure detention. Must go through the school attendance system before court referral. Youth are designated CINC (Child in Need of Care), not delinquent.'
    },
    {
        level: 'Curfew Violation',
        description: 'Violation of local ordinances for minors. Handled by citation or referral to probation, not detention.'
    },
    {
        level: 'Runaway',
        description: 'Leaving home without parental consent. Youth is a CINC, not a delinquent. Must be referred to DHS/DYS for services, not to the DA for charges.'
    },
    {
        level: 'Underage Possession (Alcohol)',
        description: 'Often filed as a civil infraction or petty offense. Cannot result in secure detention solely on this basis. Typically handled via citation or diversion.'
    },
];

const severityColor: Record<string, string> = {
    critical: '#FEE2E2',
    high: '#FEF3C7',
    medium: '#EFF6FF',
    'low-felony': '#F0FDF4',
    low: '#F9FAFB',
};

const severityBorder: Record<string, string> = {
    critical: '#FCA5A5',
    high: '#FDE68A',
    medium: '#93C5FD',
    'low-felony': '#86EFAC',
    low: '#E5E7EB',
};

const ChargeTypes: React.FC = () => {
    return (
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem 3rem' }}>

            {/* Philosophy Banner */}
            <div style={{
                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                border: '1px solid #93C5FD',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '3rem',
            }}>
                <h2 style={{ margin: '0 0 0.5rem', color: '#1E3A8A', fontSize: '1.4rem' }}>
                    ⚖️ Colorado's Guiding Philosophy: Rehabilitation Over Punishment
                </h2>
                <p style={{ margin: '0 0 0.75rem', color: '#1D4ED8', lineHeight: 1.65 }}>
                    Per <span className="citation-badge">C.R.S. 19-2.5-701</span>, the Colorado juvenile justice system is <strong>civil in nature, not criminal.</strong>{' '}
                    The court's primary goals — in statutory priority order — are:
                </p>
                <ol style={{ color: '#1E3A8A', margin: '0.5rem 0', paddingLeft: '1.5rem', lineHeight: 2 }}>
                    <li><strong>Public Safety</strong> — reduce recidivism through appropriate treatment</li>
                    <li><strong>Accountability</strong> — restorative justice; repair harm to victims and community</li>
                    <li><strong>Rehabilitation</strong> — treat underlying causes, not just the offense</li>
                    <li><strong>Least Restrictive Setting</strong> — the statute explicitly cautions that detention can <em>increase</em> reoffending risk</li>
                </ol>
                <p style={{ margin: '0.75rem 0 0', color: '#1D4ED8', fontSize: '0.9rem', borderTop: '1px solid #93C5FD', paddingTop: '0.75rem' }}>
                    <strong>Key distinction:</strong> Direct file to adult court is only mandatory for youth <strong>16 or older</strong> charged with Class 1 or 2 felonies, or certain crimes of violence with a prior felony adjudication.{' '}
                    <span className="citation-badge">C.R.S. 19-2.5-801</span>
                </p>
            </div>

            {/* Felonies */}
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Felony Classes</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Felonies are the most serious charge category. Disposition ranges from probation to DYS commitment to direct file in adult court.
                Standard DYS commitment for non-aggravated felonies is <strong>up to 2 years</strong> <span className="citation-badge">C.R.S. 19-2.5-1103</span>,
                followed by mandatory 6-month parole.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
                {felonies.map((f, i) => (
                    <div key={i} style={{
                        background: severityColor[f.severity],
                        border: `1px solid ${severityBorder[f.severity]}`,
                        borderRadius: '10px',
                        padding: '1.25rem 1.5rem',
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '1rem', alignItems: 'start' }}>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>{f.level}</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                    {f.citations.map((c, ci) => <span key={ci} className="citation-badge">{c}</span>)}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Common Examples</div>
                                <div style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{f.examples}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Juvenile Disposition Context</div>
                                <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{f.notes}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Misdemeanors */}
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Misdemeanor Classes</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Misdemeanors stay in juvenile court. First-time offenders are strong diversion candidates.
                Informal adjustment periods cannot exceed 6 months, with one extension possible (12 months total). <span className="citation-badge">C.R.S. 19-2.5-901</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
                {misdemeanors.map((m, i) => (
                    <div key={i} style={{
                        background: severityColor[m.severity],
                        border: `1px solid ${severityBorder[m.severity]}`,
                        borderRadius: '10px',
                        padding: '1.25rem 1.5rem',
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '1rem', alignItems: 'start' }}>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>{m.level}</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                    {m.citations.map((c, ci) => <span key={ci} className="citation-badge">{c}</span>)}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Common Examples</div>
                                <div style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{m.examples}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Juvenile Disposition Context</div>
                                <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{m.notes}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Status Offenses */}
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Status Offenses</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Status offenses are behaviors illegal <em>only</em> because the person is a minor.{' '}
                <strong>They are NOT delinquent acts</strong> and <strong>cannot lead to secure detention.</strong>{' '}
                Youth with status offenses are classified as CINC (Child in Need of Care), not delinquent.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {statusOffenses.map((s, i) => (
                    <div key={i} style={{
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '10px',
                        padding: '1.25rem',
                        borderTop: '3px solid var(--color-primary)',
                    }}>
                        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--color-text-main)' }}>{s.level}</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{s.description}</p>
                    </div>
                ))}
            </div>

            {/* Aggravated Juvenile Offender callout */}
            <div style={{
                marginTop: '2.5rem',
                background: '#FEF3C7',
                border: '1px solid #FDE68A',
                borderLeft: '4px solid #F59E0B',
                borderRadius: '0 10px 10px 0',
                padding: '1.5rem',
            }}>
                <div style={{ fontWeight: 700, color: '#92400E', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                    ⚠️ Aggravated Juvenile Offender Classification
                </div>
                <p style={{ margin: 0, color: '#78350F', lineHeight: 1.65, fontSize: '0.95rem' }}>
                    Under <span className="citation-badge">C.R.S. 19-2.5-1127</span>, a youth adjudicated for a Class 1 or 2 felony, or who has had probation revoked for such crimes, is classified as an <strong>Aggravated Juvenile Offender</strong>.
                    This classification carries mandatory DYS commitment (3–7 years for Class 1; 3–5 years for Class 2) followed by mandatory 6-month parole. These youth are NOT eligible for standard probation-only dispositions.
                </p>
            </div>
        </div>
    );
};

export default ChargeTypes;
