import React, { useState } from 'react';

const roles = [
    {
        title: 'Defense Attorney / Public Defender',
        emoji: '⚖️',
        color: '#3B82F6',
        who: 'Appointed by the court (if family cannot afford one) or retained privately.',
        role: "Represents the youth's legal interests — and ONLY the youth's interests. Advises on plea options, challenges evidence, argues for the least restrictive disposition, and protects constitutional rights throughout the process.",
        keyPoint: "The youth's attorney is not a neutral party — they are an advocate. Everything said to them is confidential.",
    },
    {
        title: 'Guardian ad Litem (GAL)',
        emoji: '🧑‍⚖️',
        color: '#8B5CF6',
        who: 'A court-appointed attorney or trained volunteer assigned by the judge — most common in dependency/neglect (D&N) cases, but can appear in delinquency cases too.',
        role: "Represents the \"best interests\" of the child — which is NOT always the same as what the youth wants. Must independently investigate and make recommendations to the court about placement, services, and long-term welfare.",
        keyPoint: "A GAL is NOT the youth's attorney and does not take legal direction from the youth. Their obligation is to the court's view of the child's best interests.",
    },
    {
        title: 'District Attorney (DA) / Prosecutor',
        emoji: '🏛️',
        color: '#EF4444',
        who: 'An elected county attorney who decides whether to file charges, what charges to file, and what plea deals to offer.',
        role: 'Represents the state — not the victim, not the community directly. Has broad discretion to divert cases, offer plea agreements, or push for detention. In Colorado, the DA also controls eligibility for many diversion programs.',
        keyPoint: 'The DA is the opposing party. Youth and families should never speak to the DA without their defense attorney present.',
    },
    {
        title: 'Juvenile Probation Officer (JPO)',
        emoji: '📋',
        color: '#F59E0B',
        who: 'A case manager employed by the judicial district, assigned to a youth after charges are filed or as a condition of disposition.',
        role: "Conducts the pre-sentence investigation and risk/needs assessment that heavily influences the judge's disposition. Supervises youth on probation — monitors school attendance, drug testing, curfew, and program participation. Can file a motion for violation if conditions aren't met.",
        keyPoint: "The JPO writes the report the judge reads before disposition. Strong communication about a youth's progress and needs can meaningfully affect outcomes.",
    },
    {
        title: 'DHS Caseworker',
        emoji: '🏠',
        color: '#10B981',
        who: 'An employee of the county Department of Human Services, involved when there are concurrent dependency/neglect concerns, foster care, or family-finding needs.',
        role: 'Manages child welfare cases — assesses safety, arranges placements, coordinates family services, and appears in D&N court proceedings. In delinquency cases, a DHS worker may be involved if the youth is in foster care or if a concurrent dependency case is open.',
        keyPoint: 'DHS and the juvenile justice system are separate systems with separate case numbers and courts. A youth can be involved in both simultaneously — providers should track both tracks carefully.',
    },
    {
        title: 'Juvenile Court Judge',
        emoji: '👩‍⚖️',
        color: '#6366F1',
        who: 'A district court judge assigned to the juvenile division.',
        role: "Presides over all hearings and makes all final decisions on detention, adjudication, and disposition. Under Colorado law, must consider the best interests of the youth alongside public safety. Is not bound by the DA or probation's recommendations — though those carry significant weight.",
        keyPoint: "Personalized, specific information about a youth's progress, strengths, and treatment engagement — presented through the attorney or JPO — can stand out and matter.",
    },
    {
        title: 'School Resource Officer (SRO)',
        emoji: '🏫',
        color: '#EC4899',
        who: 'A sworn law enforcement officer placed in a school building, employed by the local police/sheriff department — not by the school district.',
        role: 'Has full law enforcement authority, including the ability to arrest, cite, and refer students to juvenile court. When an SRO investigates or questions a student, the same Miranda/parental presence rules apply as any other police encounter.',
        keyPoint: 'SROs are police officers, not school counselors. Any questioning by an SRO is a police interrogation — youth have the right to remain silent and request a parent/attorney.',
    },
    {
        title: 'CASA Volunteer',
        emoji: '🤝',
        color: '#14B8A6',
        who: 'A trained community volunteer appointed by the court through the Court Appointed Special Advocates (CASA) program — most common in D&N cases.',
        role: "Investigates the child's situation independently, advocates for the child's best interests in court, and provides the judge with a community-based perspective. CASAs often have more time to spend with a youth than any other professional on the team.",
        keyPoint: 'CASAs are valuable allies. They are volunteers who chose to be there and often develop strong relationships with youth over time.',
    },
];

const terms = [
    { term: 'Adjudication', definition: 'The juvenile equivalent of a conviction. When a youth is found to have committed a delinquent act after an adjudicatory trial, they are "adjudicated delinquent" — NOT "convicted." This is a civil, not criminal, finding.', citation: 'C.R.S. 19-2.5-101' },
    { term: 'Adjudicatory Trial', definition: 'The juvenile version of a trial. Heard by a judge (not a jury, unless the court grants one). Standard is "beyond a reasonable doubt." Must begin within 60 days of a "not guilty" plea if the youth is in detention.', citation: 'C.R.S. 19-2.5-801' },
    { term: 'Advisement Hearing', definition: 'The first formal court appearance. The youth is informed of the charges, their constitutional rights (including the right to counsel), and given an opportunity to enter a plea. Must occur within 30 days of summons if not detained.' },
    { term: 'Delinquent Act', definition: 'An act committed by a person under 18 that would constitute a crime if committed by an adult. This is the core definition that brings a youth under juvenile court jurisdiction.', citation: 'C.R.S. 19-1-103' },
    { term: 'Delinquency Petition', definition: 'The formal charging document filed by a prosecutor or probation officer that initiates a juvenile case. States the facts and laws allegedly violated. The juvenile equivalent of a criminal complaint.' },
    { term: 'Detention', definition: 'The secure holding of a youth before, during, or (rarely) after court proceedings. Under Colorado law, detention is a last resort — youth may only be detained if they pose a substantial risk of serious harm or are a high flight risk.', citation: 'C.R.S. 19-2.5-301' },
    { term: 'Disposition', definition: 'The juvenile equivalent of sentencing. Happens after adjudication, usually within 45 days. Options range from informal adjustment and community service to probation, out-of-home placement, or DYS commitment.', citation: 'C.R.S. 19-2.5-901' },
    { term: 'Diversion', definition: 'A formal program that allows eligible youth to avoid a delinquency adjudication entirely by completing requirements (counseling, community service, restitution). Successful completion typically results in dismissal and an expungeable record.' },
    { term: 'DYS (Division of Youth Services)', definition: 'The state agency within the Colorado Department of Human Services responsible for operating juvenile commitment facilities, including training schools and group homes.' },
    { term: 'Expungement', definition: 'The legal erasure of a juvenile record, making it as if the case never happened. The youth can legally say they have no record. Eligibility depends on offense type and time elapsed.', citation: 'C.R.S. 19-1-306' },
    { term: 'Informal Adjustment', definition: 'A voluntary, informal agreement between the youth, family, and probation officer to resolve a case outside of court. No formal petition is filed. The youth agrees to complete conditions (e.g., counseling) within a set timeframe.' },
    { term: 'Mandatory Direct Filing (Transfer)', definition: 'When a youth 16 or older is charged with a Class 1 or 2 felony, or certain crimes of violence with a prior felony adjudication, the case must be filed DIRECTLY in adult district court, bypassing juvenile court entirely.', citation: 'C.R.S. 19-2.5-801' },
    { term: 'Motion to Suppress', definition: "A legal motion asking the court to exclude evidence or a statement because it was obtained in violation of the youth's constitutional rights (e.g., an interrogation without a parent present). If granted, that evidence cannot be used." },
    { term: 'Petition for Transfer / Waiver', definition: 'A request by the prosecutor to move a case from juvenile court to adult district court. The judge holds a transfer hearing to weigh factors including age, offense severity, and rehabilitation prospects.' },
    { term: 'Preliminary Hearing', definition: 'A "mini-trial" held to determine if there is probable cause to proceed to a full adjudicatory trial. Motions must be filed within 14 days of advisement.', citation: 'C.R.S. 19-2.5-609' },
    { term: 'Probable Cause', definition: 'The legal standard required for police to make an arrest or for a court to proceed: a reasonable belief, based on specific facts, that a crime was committed and the youth committed it.' },
    { term: 'Probation', definition: 'A supervised, community-based disposition that allows a youth to remain home while meeting court-ordered conditions (check-ins, drug testing, school attendance, curfew). Violation can result in more restrictive placement.' },
    { term: 'Reasonable Articulable Suspicion (RAS)', definition: 'The legal standard required for police to temporarily detain (stop) a person. Officers must be able to articulate specific, objective facts — not just a "hunch."' },
    { term: 'Record Sealing', definition: 'Hides a juvenile record from public view (background checks, employers, landlords) while it still remains accessible to law enforcement and courts. Less complete than expungement.' },
    { term: 'Restorative Justice', definition: 'A rehabilitative approach focused on repairing the harm caused by the offense — mediated meetings between youth and victim, community service benefiting those harmed, and restitution payments.' },
    { term: 'Restitution', definition: 'Money the youth is ordered to pay back to the victim to cover losses directly caused by the offense (e.g., property damage, medical bills).' },
    { term: 'Status Offense', definition: 'An act that is illegal solely because the person is a minor (truancy, curfew violations, runaway behavior, underage possession of alcohol). NOT a delinquent act — cannot lead to secure detention.' },
];

const Glossary: React.FC = () => {
    const [search, setSearch] = useState('');

    const filteredRoles = roles.filter(r =>
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.role.toLowerCase().includes(search.toLowerCase()) ||
        r.who.toLowerCase().includes(search.toLowerCase())
    );

    const filteredTerms = terms.filter(t =>
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem 3rem' }}>

            <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Glossary & Key Roles</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                    Definitions of key legal terms and plain-language descriptions of the professionals involved in a youth's case. Intended for providers and staff.
                </p>
                <input
                    type="text"
                    placeholder="Search terms, roles, or people..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{
                        width: '100%', padding: '0.875rem 1.25rem',
                        border: '1px solid var(--color-border)', borderRadius: '10px',
                        fontSize: '1rem', fontFamily: 'inherit', outline: 'none',
                        background: 'var(--color-bg)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                        transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                />
            </div>

            {/* Key Players */}
            {filteredRoles.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' }}>👥 Key People on a Youth's Team</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        Every youth's team looks different — but these are the most common professionals they'll encounter and what each one actually does.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {filteredRoles.map((role, i) => (
                            <div key={i} style={{
                                background: 'var(--color-bg)',
                                border: '1px solid var(--color-border)',
                                borderLeft: `4px solid ${role.color}`,
                                borderRadius: '0 10px 10px 0',
                                padding: '1.25rem 1.5rem',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '1.3rem' }}>{role.emoji}</span>
                                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-main)' }}>{role.title}</h4>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.75rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Who They Are</div>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{role.who}</p>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Their Role</div>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{role.role}</p>
                                    </div>
                                </div>
                                <div style={{
                                    background: `${role.color}12`,
                                    border: `1px solid ${role.color}30`,
                                    borderRadius: '6px',
                                    padding: '0.6rem 0.9rem',
                                    fontSize: '0.88rem',
                                    color: 'var(--color-text-main)',
                                }}>
                                    <strong>⚡ Key Point:</strong> {role.keyPoint}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Legal Terms */}
            {filteredTerms.length > 0 && (
                <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' }}>📖 Legal Terms</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        Key terms used in Colorado juvenile court proceedings.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {filteredTerms.map((item, i) => (
                            <div key={i} style={{
                                background: 'var(--color-bg)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '10px',
                                padding: '1.5rem',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-main)' }}>{item.term}</h3>
                                    {item.citation && <span className="citation-badge">{item.citation}</span>}
                                </div>
                                <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.65, fontSize: '0.95rem' }}>{item.definition}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {filteredRoles.length === 0 && filteredTerms.length === 0 && (
                <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', paddingTop: '2rem' }}>
                    No results found matching "{search}".
                </p>
            )}
        </div>
    );
};

export default Glossary;
