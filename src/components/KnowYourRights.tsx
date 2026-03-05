import React, { useState } from 'react';

const tabsData = [
    {
        id: 'street',
        title: '🚔 Street Rights',
        content: (
            <div className="rights-content">
                <h3>Police Encounters & The "Reasonable Child" Standard</h3>
                <p>The Fourth Amendment protects you from "unreasonable searches and seizures," but Colorado provides extra protections for youth beyond the adult standard.</p>

                <div className="pro-tip-card">
                    <div className="pro-tip-header">💡 Pro-Tip for Providers & Youth</div>
                    <p>Always ask: <strong>"Am I free to go?"</strong> If the officer says yes, casually walk away. Do not run. If they say no, you are being detained — ask for an attorney immediately.</p>
                </div>

                <h4>Investigatory Stops & the "Free to Leave" Test</h4>
                <p>Police need Reasonable Articulable Suspicion (RAS) to stop you. The standard is: <strong>Would a reasonable child of your age and background have felt free to walk away?</strong> Courts apply a youth-specific lens — a child is less likely to feel free to leave than an adult in the same situation.</p>

                <h4>Mandatory Identification <span className="citation-badge">C.R.S. 16-3-103</span></h4>
                <p>If lawfully detained, you must provide your name and address. You are not required to carry ID unless driving. You cannot be charged with obstruction just for remaining silent — but giving a false name is a crime.</p>

                <h4>The Right to Record <span className="citation-badge">C.R.S. 13-21-128</span></h4>
                <p>You have a First Amendment right to record police in public performing their public duties, as long as you do not physically interfere. Officers may not order you to stop recording or seize your device without a warrant.</p>

                <h4>Searches of Your Person</h4>
                <p>Officers need either your consent, a warrant, or a recognized exception (e.g., search incident to lawful arrest, plain view, exigent circumstances) to search your body or belongings. You have the right to clearly (but calmly) say: <strong>"I do not consent to this search."</strong></p>
            </div>
        )
    },
    {
        id: 'interrogation',
        title: '🎙️ Interrogation Rules',
        content: (
            <div className="rights-content">
                <h3>Protections During Police Questioning <span className="citation-badge">C.R.S. 19-2.5-203</span></h3>
                <p>Colorado provides some of the strongest interrogation protections for youth in the country. These rules go beyond standard adult Miranda rights.</p>

                <h4>Miranda Rights Apply to Youth</h4>
                <p>When in custody and subject to questioning, youth have the right to: remain silent; refuse to answer; have an attorney present before and during questioning; have an attorney appointed if they can't afford one; and stop answering at any point.</p>

                <div className="pro-tip-card">
                    <div className="pro-tip-header">💡 The Most Important Thing a Youth Can Say</div>
                    <p><strong>"I want a lawyer."</strong> Once those words are spoken, all questioning must stop immediately. This right does not expire — even if police try to re-approach minutes later.</p>
                </div>

                <h4>Parental Presence & The Written Waiver Requirement <span className="citation-badge">C.R.S. 19-2.5-203</span></h4>
                <p>Statements or admissions by a juvenile during custodial interrogation are <strong>generally inadmissible</strong> unless ALL of the following are true:</p>
                <ul className="rights-list">
                    <li><strong>A parent, guardian, or legal custodian was present</strong> during the interrogation</li>
                    <li>Both the youth AND the parent/guardian were <strong>fully advised of all Miranda rights</strong></li>
                    <li>Both the youth AND the parent/guardian <strong>signed a written waiver</strong> of the right to remain silent</li>
                </ul>
                <p>A parent or guardian's failure to request a public defender <strong>does NOT</strong> count as a waiver of the youth's right to counsel.</p>

                <h4>Exceptions to Parental Presence Requirement</h4>
                <p>Statements may potentially be admissible without parental presence only if:</p>
                <ul className="rights-list">
                    <li>The youth is <strong>18 or older</strong> at the time of interrogation</li>
                    <li>The youth is <strong>legally emancipated</strong></li>
                    <li>The youth is a <strong>runaway from another state</strong> and is of sufficient age and understanding</li>
                    <li>A <strong>public defender or retained attorney</strong> representing the youth is present instead</li>
                </ul>

                <h4>The Deceptive Tactics Rule <span className="citation-badge">HB 1042 (2023)</span></h4>
                <p>As of 2023, law enforcement is explicitly <strong>prohibited from lying to minors</strong> during interrogations. Statements obtained through deceptive tactics (false claims about evidence, false promises) are presumptively inadmissible unless the prosecution proves, by a totality of the circumstances, that the statement was truly voluntary.</p>

                <h4>Communication Rights Upon Arrest</h4>
                <p>Upon arrest, a youth has a statutory right to a "reasonable number of telephone calls" to an attorney and family members at the earliest possible time. This right should be exercised immediately.</p>
            </div>
        )
    },
    {
        id: 'counsel',
        title: '⚖️ Right to Counsel',
        content: (
            <div className="rights-content">
                <h3>Right to an Attorney <span className="citation-badge">C.R.S. 19-2.5-605</span></h3>
                <p>Every youth in the Colorado juvenile justice system has a constitutional and statutory right to be represented by an attorney — regardless of their family's ability to pay.</p>

                <h4>When Counsel Must Be Appointed</h4>
                <p>At the youth's <strong>first appearance in court</strong>, the court must advise both the youth and their parents of the right to counsel. If the family cannot afford an attorney, the court will appoint one from either:</p>
                <ul className="rights-list">
                    <li><strong>Office of the State Public Defender</strong> — the primary appointed counsel option</li>
                    <li><strong>Office of Alternate Defense Counsel</strong> — appointed when there is a conflict of interest with the Public Defender</li>
                </ul>

                <h4>Right to Counsel at Detention Hearings <span className="citation-badge">C.R.S. 19-2.5-305</span></h4>
                <p>Any youth detained for an alleged delinquent act <strong>must be represented by counsel</strong> at their detention hearing — which must occur within 48 business hours of placement. This right was specifically strengthened by Colorado legislation in 2014.</p>

                <div className="pro-tip-card">
                    <div className="pro-tip-header">💡 Critical Advocacy Point</div>
                    <p>A parent or guardian's failure to apply for court-appointed counsel <strong>cannot be construed as a waiver</strong> of the juvenile's right to have an attorney. If a family does not request a public defender, the court must still ensure the youth has representation before proceeding.</p>
                </div>

                <h4>Waiving the Right to Counsel</h4>
                <p>A youth can waive their right to counsel, but the court must find <strong>on the record</strong> that:</p>
                <ul className="rights-list">
                    <li>The waiver is voluntary, knowing, and intelligent</li>
                    <li>The juvenile possesses sufficient maturity to make such a decision</li>
                </ul>
                <p>This is an extremely high bar. Providers should strongly discourage youth from waiving counsel.</p>

                <h4>Right to Counsel in Facilities <span className="citation-badge">C.R.S. 19-2.5-1502.5</span></h4>
                <p>Youth in DYS facilities retain the right to access their legal representative. Facilities must facilitate private communication between youth and their attorneys.</p>
            </div>
        )
    },
    {
        id: 'school',
        title: '🏫 School Searches',
        content: (
            <div className="rights-content">
                <h3>Fourth Amendment Rights on School Grounds</h3>
                <p>Youth in Colorado public schools have Fourth Amendment protections — but the standard is <strong>lower</strong> than for adults in public spaces. School officials do not need a warrant, but they do need something more than a hunch.</p>

                <h4>The Standard: "Reasonable Suspicion" (Not Probable Cause)</h4>
                <p>A school search is only permissible if it meets <strong>two requirements</strong>:</p>
                <ul className="rights-list">
                    <li><strong>"Justified at its inception":</strong> School officials must have <em>reasonable grounds for suspecting</em> the search will uncover evidence of a violation of law or school rules — not just a gut feeling.</li>
                    <li><strong>"Reasonably related in scope":</strong> The scope and intrusiveness of the search must match the circumstances that justified it. A suspicion about a small item doesn't justify a full strip search.</li>
                </ul>

                <div className="pro-tip-card">
                    <div className="pro-tip-header">⚠️ Important for Providers</div>
                    <p>A 2021 Colorado Court of Appeals decision applied the <strong>exclusionary rule</strong> to violations of a juvenile's constitutional rights by school officials. This means evidence obtained through an illegal school search may be inadmissible in a delinquency proceeding — always flag unlawful school searches to defense counsel immediately.</p>
                </div>

                <h4>Locker Searches</h4>
                <p>Colorado school districts are required to have written policies on locker searches as part of their conduct and discipline codes. Lockers are generally considered school property with a reduced expectation of privacy — but students have greater protection over personal belongings inside them.</p>

                <h4>Safety Plans</h4>
                <p>The Colorado Supreme Court has ruled that if a youth is subject to an existing "safety plan" (created after prior criminal conduct), school personnel may conduct warrantless searches of belongings based solely on that plan — even without new suspicion of wrongdoing. Providers should note when a youth is under an active safety plan, as this affects their search rights at school.</p>

                <h4>When Police Are Involved</h4>
                <p>If a School Resource Officer (SRO) or outside police officer conducts or directs a search — as opposed to a school administrator — the <strong>full probable cause standard</strong> likely applies. The involvement of law enforcement changes the constitutional calculus significantly, and any resulting statements are subject to the same Miranda/parental presence requirements as any other police interrogation.</p>
            </div>
        )
    },
    {
        id: 'facility',
        title: '🏛️ Facility Bill of Rights',
        content: (
            <div className="rights-content">
                <h3>Life in a Facility <span className="citation-badge">C.R.S. 19-2.5-1502.5</span></h3>
                <p>Youth in Division of Youth Services (DYS) facilities are protected by a statutory Bill of Rights. These rights are enforceable — violations should be documented and reported to the youth's attorney immediately.</p>

                <ul className="rights-list">
                    <li><strong>Dignity:</strong> Freedom from corporal punishment, verbal harassment, intimidation, ridicule, and humiliation in any form.</li>
                    <li><strong>Identity:</strong> Right to use their preferred name and gender pronouns, and to wear clothing that fits and ensures dignity — consistent with their gender identity.</li>
                    <li><strong>Communication:</strong> Reasonable access to media and written materials; phone calls to approved supports; private mail to attorneys and courts that cannot be read by facility staff.</li>
                    <li><strong>Health:</strong> Right to necessary medical care and prescribed medication; the right to refuse certain pharmaceuticals; prenatal and postnatal care for pregnant youth.</li>
                    <li><strong>Physical Safety:</strong> Freedom from leg and waist restraints while pregnant or immediately after delivery.</li>
                    <li><strong>Privacy:</strong> Shower and bathroom facilities consistent with gender identity; searches must be conducted in a manner that respects dignity and privacy.</li>
                    <li><strong>Legal Access:</strong> Right to access their legal representative; communication with attorneys is private and confidential.</li>
                    <li><strong>Education:</strong> Right to continue their education while in a facility, including credit transfer protections under HB24-1216.</li>
                </ul>

                <div className="pro-tip-card">
                    <div className="pro-tip-header">💡 Advocacy Action</div>
                    <p>If a youth reports a rights violation inside a DYS facility, document it with as much detail as possible (date, staff name if known, description of what happened) and forward it to their defense attorney or public defender immediately. These violations can affect sentencing and placement decisions.</p>
                </div>
            </div>
        )
    }
];

const KnowYourRights: React.FC = () => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    return (
        <div className="rights-container">
            <h2>Know Your Rights Portal</h2>
            <p className="rights-intro">Colorado-specific rights and protections for justice-involved youth — verified against the Colorado Revised Statutes. Intended for provider and staff use.</p>

            <div className="tabs-wrapper">
                <div className="tabs-header">
                    {tabsData.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="tabs-body">
                    {tabsData.find(tab => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
};

export default KnowYourRights;
