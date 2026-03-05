import React, { useState } from 'react';

interface DispositionOption {
    id: string;
    level: 'diversion' | 'community' | 'intensive' | 'residential' | 'commitment';
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    whoTypically: string;
    whatItMeans: string[];
    citation?: string;
    duration?: string;
    labelColor: string;
    bgColor: string;
    borderColor: string;
}

const dispositionOptions: DispositionOption[] = [
    {
        id: 'diversion',
        level: 'diversion',
        icon: '🔄',
        title: 'Diversion / Informal Adjustment',
        subtitle: 'Before court — case resolved outside formal process',
        description:
            'The DA or probation department agrees to resolve the case without filing a formal petition. Youth completes requirements (classes, community service, apology letters) and charges are not formally filed or are dismissed.',
        whoTypically: 'First-time or low-level offenders with no prior history, charged with non-violent misdemeanors or lower felonies.',
        whatItMeans: [
            'No formal adjudication — youth does NOT get a record for this offense',
            'Typically 3–6 months of requirements',
            'Failure to complete can result in the case being filed formally',
            'DA controls eligibility — not every youth qualifies',
        ],
        citation: 'C.R.S. 19-2.5-302',
        duration: '3–6 months typically',
        labelColor: '#065F46',
        bgColor: '#ECFDF5',
        borderColor: '#6EE7B7',
    },
    {
        id: 'deferred',
        level: 'diversion',
        icon: '⏸️',
        title: 'Deferred Adjudication',
        subtitle: 'Plea entered — but adjudication is delayed',
        description:
            'Youth pleads guilty but the judge defers (postpones) the formal adjudication. If the youth completes probation conditions successfully, the case is dismissed. If they violate, the judge proceeds with adjudication.',
        whoTypically: 'Youth with some history who do not qualify for diversion, but whom the court believes can succeed on supervision.',
        whatItMeans: [
            'Youth pleads guilty initially — important to understand this',
            'Successful completion = case dismissed, no formal adjudication on record',
            'Violation = case proceeds to adjudication (conviction equivalent)',
            'Attorney must advise on the risks before agreeing',
        ],
        citation: 'C.R.S. 19-2.5-901(1)(a)',
        duration: 'Varies — typically 6–18 months',
        labelColor: '#1E40AF',
        bgColor: '#EFF6FF',
        borderColor: '#93C5FD',
    },
    {
        id: 'probation',
        level: 'community',
        icon: '🏠',
        title: 'Probation',
        subtitle: 'Supervised in the community — lives at home',
        description:
            'The most common juvenile disposition. Youth is formally adjudicated and placed under supervision of a Juvenile Probation Officer (JPO) while living at home. Conditions are tailored to the individual case.',
        whoTypically: 'Youth adjudicated of most offenses — from misdemeanors through mid-range felonies — with sufficient home support.',
        whatItMeans: [
            'Regular check-ins with JPO (weekly to monthly)',
            'Conditions may include: school attendance, curfews, drug testing, counseling, community service, restitution',
            'Violations can result in more restrictive placement',
            'Can be terminated early for compliance',
        ],
        citation: 'C.R.S. 19-2.5-901(1)(b)',
        duration: 'Defined by court — often 1–2 years',
        labelColor: '#92400E',
        bgColor: '#FEF3C7',
        borderColor: '#FCD34D',
    },
    {
        id: 'isp',
        level: 'intensive',
        icon: '🔍',
        title: 'Intensive Supervision Probation (ISP)',
        subtitle: 'Higher level of probation — more monitoring',
        description:
            'A stricter form of probation with more frequent contact with the JPO, electronic monitoring, and more structured programming. Youth still lives in the community.',
        whoTypically:
            'Youth who need more structure than standard probation but not full residential placement — often those who have struggled on regular probation.',
        whatItMeans: [
            'JPO contact multiple times per week',
            'Electronic monitoring (ankle monitor) is common',
            'Structured daily schedule required',
            'May include day treatment or evening reporting centers',
        ],
        citation: 'C.R.S. 19-2.5-901(1)(c)',
        duration: 'Varies',
        labelColor: '#7C2D12',
        bgColor: '#FFF7ED',
        borderColor: '#FDB88A',
    },
    {
        id: 'day-treatment',
        level: 'intensive',
        icon: '📋',
        title: 'Day Treatment Programs',
        subtitle: 'Structured programming — goes home at night',
        description:
            'Youth attends a structured treatment or educational program during the day and returns home in the evening. Often an alternative school setting combined with therapy and case management.',
        whoTypically: 'Youth who have been expelled or are falling behind, or who need intensive mental health or substance abuse support while still living at home.',
        whatItMeans: [
            'Attends alternative educational setting during school hours',
            'Therapeutic components built in (individual/group therapy)',
            'Earns school credits that must transfer',
            'Parents/guardians expected to be actively involved',
        ],
        citation: 'C.R.S. 19-2.5-901(1)(d)',
        duration: 'Typically 3–12 months',
        labelColor: '#6B21A8',
        bgColor: '#FAF5FF',
        borderColor: '#C4B5FD',
    },
    {
        id: 'group-home',
        level: 'residential',
        icon: '🏘️',
        title: 'Out-of-Home Placement',
        subtitle: 'Lives away from home — community-based facility',
        description:
            'Youth is placed outside the home in a group home, residential treatment center, or therapeutic foster care. Supervised living with treatment services built in. Less restrictive than DYS.',
        whoTypically:
            'Youth where the home environment is not safe or supportive, or where intensive residential treatment is needed that cannot be provided at home.',
        whatItMeans: [
            'Youth lives in a licensed residential facility or therapeutic foster home',
            'Ongoing treatment and schooling provided at or near the facility',
            'Family visits and reunification planning are typically part of the plan',
            'May overlap with DHS involvement',
        ],
        citation: 'C.R.S. 19-2.5-901(1)(e)',
        duration: 'Varies — typically 6–24 months',
        labelColor: '#9D174D',
        bgColor: '#FFF1F2',
        borderColor: '#FCA5A5',
    },
    {
        id: 'dys',
        level: 'commitment',
        icon: '🏛️',
        title: 'Commitment to DYS',
        subtitle: 'Most restrictive — secure facility',
        description:
            'Youth is committed to the Division of Youth Services (DYS), Colorado\'s state-run secure juvenile facilities. Reserved for the most serious cases. The court sets the commitment length, but DYS determines internal placement and level of security.',
        whoTypically:
            'Youth adjudicated of serious felonies, repeat offenders who have failed community options, or Aggravated Juvenile Offenders where commitment is mandatory.',
        whatItMeans: [
            'Youth lives in a secure DYS facility — not a prison, but restricted',
            'Schooling, treatment, and vocational training provided within DYS',
            'Length set by court: up to 2 years for most felonies; 3–7 years for Aggravated Juvenile Offender (Class 1–2 felony)',
            'DYS can discharge earlier based on progress — or extend to age 21',
            'Youth retains all facility Bill of Rights (C.R.S. 19-2.5-1502.5)',
        ],
        citation: 'C.R.S. 19-2.5-1103 / C.R.S. 19-2.5-1127',
        duration: 'Up to 2 years (standard) | 3–7 years (Aggravated Juvenile Offender)',
        labelColor: '#7F1D1D',
        bgColor: '#FEF2F2',
        borderColor: '#F87171',
    },
];

const levelLabels: Record<string, string> = {
    diversion: 'Least Restrictive',
    community: 'Community',
    intensive: 'Intensive Community',
    residential: 'Residential',
    commitment: 'Most Restrictive',
};

const DispositionOptions: React.FC = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Page title */}
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--color-text-main)' }}>
                ⚖️ Disposition Options Explainer
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                What can happen at a disposition (sentencing) hearing in Colorado juvenile court.
            </p>

            {/* BIG per-case disclaimer */}
            <div style={{
                background: '#FEF3C7',
                border: '2px solid #F59E0B',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
            }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚠️</span>
                <div>
                    <p style={{ fontSize: '1rem', fontWeight: 700, color: '#92400E', margin: '0 0 0.5rem' }}>
                        Every case is different — this is a general guide only.
                    </p>
                    <p style={{ fontSize: '0.9rem', color: '#78350F', margin: 0, lineHeight: 1.6 }}>
                        The judge has broad discretion under <strong>C.R.S. 19-2.5-901</strong> and must impose the <em>least restrictive</em> option
                        consistent with public safety and the youth's needs. The actual disposition depends on many factors —
                        offense severity, prior history, risk assessment scores, mental health evaluations, family support,
                        school status, and attorney advocacy. <strong>Two youth charged with the same offense can receive
                            very different dispositions.</strong> This page explains what each option is — not what any specific
                        youth will receive. Always consult the youth's attorney for case-specific information.
                    </p>
                </div>
            </div>

            {/* Spectrum label */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                fontWeight: 600,
            }}>
                <span style={{ color: '#065F46' }}>🟢 Least Restrictive</span>
                <span style={{ flex: 1, height: '2px', background: 'linear-gradient(to right, #6EE7B7, #F87171)', borderRadius: '2px' }} />
                <span style={{ color: '#7F1D1D' }}>🔴 Most Restrictive</span>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {dispositionOptions.map((opt, i) => {
                    const isOpen = expanded === opt.id;
                    return (
                        <div
                            key={opt.id}
                            style={{
                                border: `1.5px solid ${opt.borderColor}`,
                                borderRadius: '12px',
                                background: isOpen ? opt.bgColor : 'var(--color-bg)',
                                overflow: 'hidden',
                                transition: 'background 0.2s',
                            }}
                        >
                            {/* Header row */}
                            <button
                                onClick={() => setExpanded(isOpen ? null : opt.id)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 1.25rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                }}
                            >
                                <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{opt.icon}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)' }}>
                                            {i + 1}. {opt.title}
                                        </span>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            fontWeight: 700,
                                            background: opt.bgColor,
                                            color: opt.labelColor,
                                            border: `1px solid ${opt.borderColor}`,
                                            borderRadius: '99px',
                                            padding: '1px 8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.04em',
                                        }}>
                                            {levelLabels[opt.level]}
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                                        {opt.subtitle}
                                    </div>
                                </div>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '1rem', flexShrink: 0 }}>
                                    {isOpen ? '▲' : '▼'}
                                </span>
                            </button>

                            {/* Expanded body */}
                            {isOpen && (
                                <div style={{ padding: '0 1.25rem 1.25rem' }}>
                                    <hr style={{ border: 'none', borderTop: `1px solid ${opt.borderColor}`, margin: '0 0 1rem' }} />

                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                                        {opt.description}
                                    </p>

                                    {/* Who typically */}
                                    <div style={{
                                        background: 'rgba(0,0,0,0.03)',
                                        borderRadius: '8px',
                                        padding: '0.75rem 1rem',
                                        marginBottom: '1rem',
                                    }}>
                                        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: opt.labelColor, margin: '0 0 0.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                            👤 Who typically receives this
                                        </p>
                                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', margin: 0, lineHeight: 1.5 }}>
                                            {opt.whoTypically}
                                        </p>
                                    </div>

                                    {/* What it means */}
                                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: opt.labelColor, margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                        📌 What it means day-to-day
                                    </p>
                                    <ul style={{ margin: '0 0 1rem', paddingLeft: '1.25rem' }}>
                                        {opt.whatItMeans.map((pt, j) => (
                                            <li key={j} style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', marginBottom: '0.35rem', lineHeight: 1.5 }}>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Footer meta */}
                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        {opt.duration && (
                                            <span style={{ fontSize: '0.78rem', background: opt.bgColor, color: opt.labelColor, border: `1px solid ${opt.borderColor}`, borderRadius: '6px', padding: '3px 10px', fontWeight: 600 }}>
                                                ⏱ {opt.duration}
                                            </span>
                                        )}
                                        {opt.citation && (
                                            <span style={{ fontSize: '0.78rem', background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', borderRadius: '6px', padding: '3px 10px', fontWeight: 600 }}>
                                                📜 {opt.citation}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bottom note */}
            <div style={{
                marginTop: '2rem',
                padding: '1rem 1.25rem',
                background: 'var(--color-primary-light)',
                borderRadius: '10px',
                borderLeft: '4px solid var(--color-primary)',
            }}>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-primary-dark)', lineHeight: 1.6 }}>
                    <strong>Key principle:</strong> Colorado juvenile courts are required to impose the <em>least restrictive</em> disposition
                    consistent with public safety and the youth's individual needs — <strong>C.R.S. 19-2.5-901</strong>.
                    A strong disposition hearing involves the attorney arguing for the least restrictive option with supporting documentation:
                    school performance, mental health evaluations, family support letters, and program participation.
                </p>
            </div>
        </div>
    );
};

export default DispositionOptions;
