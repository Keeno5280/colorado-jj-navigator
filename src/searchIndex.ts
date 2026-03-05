export interface SearchResult {
    title: string;
    excerpt: string;
    section: string;
    sectionIcon: string;
    path: string;
}

const searchIndex: SearchResult[] = [
    // ── GLOSSARY TERMS ──────────────────────────────────────────────
    { title: 'Adjudication', excerpt: 'The juvenile equivalent of a conviction — civil finding, not criminal.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Adjudicatory Trial', excerpt: 'The juvenile version of a trial, heard by a judge. Beyond a reasonable doubt standard.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Advisement Hearing', excerpt: 'First formal court appearance. Youth is informed of charges and rights.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Delinquent Act', excerpt: 'An act committed by a person under 18 that would be a crime if committed by an adult.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Delinquency Petition', excerpt: 'The formal charging document that initiates a juvenile case.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Detention', excerpt: 'Secure holding of a youth. Last resort under Colorado law — requires substantial risk of harm or flight risk.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Disposition', excerpt: 'The juvenile equivalent of sentencing. Ranges from probation to DYS commitment.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Diversion', excerpt: 'Program allowing eligible youth to avoid adjudication by completing requirements.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'DYS (Division of Youth Services)', excerpt: 'State agency operating juvenile commitment facilities in Colorado.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Expungement', excerpt: 'Legal erasure of a juvenile record. Youth can legally say they have no record.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Informal Adjustment', excerpt: 'Voluntary agreement to resolve a case outside of court without a formal petition.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Mandatory Direct Filing', excerpt: 'Youth 16+ charged with Class 1 or 2 felony must be filed in adult court (C.R.S. 19-2.5-801).', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Motion to Suppress', excerpt: 'Request to exclude evidence obtained in violation of constitutional rights.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Petition for Transfer / Waiver', excerpt: 'Prosecutor request to move case from juvenile to adult court.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Preliminary Hearing', excerpt: 'Mini-trial to determine if probable cause exists to proceed to full trial.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Probable Cause', excerpt: 'Reasonable belief, based on specific facts, that a crime was committed.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Probation', excerpt: 'Supervised community-based disposition — youth remains home while meeting court conditions.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Reasonable Articulable Suspicion (RAS)', excerpt: 'Standard for police to temporarily detain someone. More than a hunch.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Record Sealing', excerpt: 'Hides juvenile record from public view. Less complete than expungement.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Restorative Justice', excerpt: 'Rehabilitative approach focused on repairing harm to victim and community.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Restitution', excerpt: 'Money youth is ordered to pay victim to cover losses from the offense.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Status Offense', excerpt: 'Act illegal only because the person is a minor. Cannot lead to secure detention.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },

    // ── KEY ROLES ────────────────────────────────────────────────────
    { title: 'Defense Attorney / Public Defender', excerpt: 'Represents ONLY the youth\'s legal interests. Everything shared is confidential.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Guardian ad Litem (GAL)', excerpt: 'Represents child\'s best interests — not the same as what the youth wants. Court-appointed.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'District Attorney (DA)', excerpt: 'Represents the state. Controls diversion eligibility and plea offers.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Juvenile Probation Officer (JPO)', excerpt: 'Writes the pre-disposition report the judge reads. Supervises youth on probation.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'DHS Caseworker', excerpt: 'Handles child welfare cases. Separate system from juvenile justice — youth can be in both.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'Juvenile Court Judge', excerpt: 'Makes all final decisions on detention, adjudication, and disposition.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'School Resource Officer (SRO)', excerpt: 'A sworn police officer in school. Same Miranda rules apply as any police encounter.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },
    { title: 'CASA Volunteer', excerpt: 'Court Appointed Special Advocate — community volunteer representing child\'s best interests.', section: 'Legal Glossary', sectionIcon: '📖', path: '/glossary' },

    // ── KNOW YOUR RIGHTS ─────────────────────────────────────────────
    { title: 'Free to Leave / Investigatory Stops', excerpt: 'Police need Reasonable Articulable Suspicion to stop you. Always ask "Am I free to go?"', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Right to Record Police', excerpt: 'First Amendment right to record police in public performing their duties (C.R.S. 13-21-128).', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Miranda Rights for Youth', excerpt: 'Right to remain silent, refuse to answer, have attorney present during questioning.', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Written Miranda Waiver Requirement', excerpt: 'Both youth AND parent must sign a written waiver — verbal waiver is not sufficient (C.R.S. 19-2.5-203).', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Parental Presence During Interrogation', excerpt: 'Statements made without parent or attorney present are generally inadmissible (C.R.S. 19-2.5-203).', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Deceptive Tactics Rule', excerpt: 'Police cannot lie to minors during interrogation. Statements obtained through deception are presumptively inadmissible (HB 1042, 2023).', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Right to Counsel / Public Defender', excerpt: 'Court must appoint attorney if family cannot afford one. Parent\'s failure to request PD does not waive youth\'s right (C.R.S. 19-2.5-605).', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Right to Counsel at Detention Hearing', excerpt: 'Youth must be represented by counsel at detention hearing within 48 business hours of placement (C.R.S. 19-2.5-305).', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'School Searches — Reasonable Suspicion', excerpt: 'School officials need reasonable suspicion (not probable cause) to search a student. SROs need probable cause.', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },
    { title: 'Facility Bill of Rights', excerpt: 'Youth in DYS have rights to dignity, identity, private attorney mail, healthcare, and education (C.R.S. 19-2.5-1502.5).', section: 'Know Your Rights', sectionIcon: '🛡️', path: '/rights' },

    // ── CHARGE TYPES ─────────────────────────────────────────────────
    { title: 'Rehabilitative Philosophy', excerpt: 'Colorado juvenile justice is civil, not criminal. Priority order: public safety, accountability, rehabilitation (C.R.S. 19-2.5-701).', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 1 Felony', excerpt: 'Mandatory direct file to adult court if youth is 16+. Aggravated Juvenile Offender: 3-7 years DYS if stayed in juvenile court.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 2 Felony', excerpt: 'Mandatory direct file if youth is 16+. Aggravated Juvenile Offender: 3-5 years DYS commitment.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 3 Felony', excerpt: 'Stays in juvenile court unless prior felony + crime of violence. Up to 2 years DYS or probation.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 4 Felony', excerpt: 'Juvenile court. Probation to DYS commitment (up to 2 years) depending on history and risk assessment.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 5 Felony', excerpt: 'Juvenile court. First-time offenders typically receive diversion, informal adjustment, or probation.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 6 Felony', excerpt: 'Lowest felony. Strong diversion candidates. DYS commitment unlikely for first offense.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 1 Misdemeanor', excerpt: 'Highest misdemeanor class. Probation, community service, counseling. Rarely results in DYS.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Class 2 Misdemeanor', excerpt: 'Typically diverted or informal adjustment for first offenses. Max 6 months informal adjustment.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Aggravated Juvenile Offender', excerpt: 'Classification for Class 1 or 2 felony adjudications. Mandatory DYS commitment: 3-7 years (Class 1), 3-5 years (Class 2) — no probation-only option (C.R.S. 19-2.5-1127).', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },
    { title: 'Status Offenses (Truancy, Runaway, Curfew)', excerpt: 'Cannot lead to secure detention. Youth is classified as CINC (Child in Need of Care), not delinquent.', section: 'Charge Types', sectionIcon: '⚠️', path: '/charges' },

    // ── EDUCATIONAL RIGHTS ───────────────────────────────────────────
    { title: 'Right to Re-Enroll in School', excerpt: 'Youth must be allowed to re-enroll within 5 business days of release from detention (HB24-1216).', section: 'Educational Rights', sectionIcon: '🎓', path: '/education' },
    { title: 'Credit Transfer Protections', excerpt: 'Credits earned in detention or DYS must transfer to the new school. Schools cannot deny credit.', section: 'Educational Rights', sectionIcon: '🎓', path: '/education' },
    { title: 'Confidentiality at School', excerpt: 'Case and probation discussions must happen privately. Youth can participate in sports, activities, and graduation.', section: 'Educational Rights', sectionIcon: '🎓', path: '/education' },
    { title: 'Education in DYS Facilities', excerpt: 'Youth in DYS retain the right to continue their education, including accredited coursework.', section: 'Educational Rights', sectionIcon: '🎓', path: '/education' },

    // ── RECORD CLEANING ──────────────────────────────────────────────
    { title: 'Juvenile Record Expungement Eligibility', excerpt: 'Non-violent, non-sex offense adjudications are eligible after waiting period. Dismissed cases immediately eligible (C.R.S. 19-1-306).', section: 'Record Cleaning', sectionIcon: '🧹', path: '/cleaning' },
    { title: 'Record Sealing vs Expungement', excerpt: 'Sealing hides from public but law enforcement can still see it. Expungement is a full legal erasure.', section: 'Record Cleaning', sectionIcon: '🧹', path: '/cleaning' },
    { title: 'Automatic Sealing', excerpt: 'Some juvenile records are automatically sealed when the youth turns 18 or 21, depending on offense type.', section: 'Record Cleaning', sectionIcon: '🧹', path: '/cleaning' },

    // ── TIMELINE ────────────────────────────────────────────────────
    { title: 'Arrest / Detention Decision', excerpt: 'First stage of the process. Youth is either released or held — must have detention hearing within 48 hours.', section: 'Case Timeline', sectionIcon: '⏱️', path: '/timeline' },
    { title: 'Advisement Hearing (Timeline)', excerpt: 'First court appearance. Charges read, attorney assigned, plea entered. Within 30 days if not detained.', section: 'Case Timeline', sectionIcon: '⏱️', path: '/timeline' },
    { title: 'Preliminary Hearing (Timeline)', excerpt: 'Probable cause determination. Motions due within 14 days of advisement.', section: 'Case Timeline', sectionIcon: '⏱️', path: '/timeline' },
    { title: 'Adjudicatory Trial (Timeline)', excerpt: 'Judge decides guilty or not guilty. Must start within 60 days if youth is detained.', section: 'Case Timeline', sectionIcon: '⏱️', path: '/timeline' },
    { title: 'Disposition Hearing (Timeline)', excerpt: 'Sentencing equivalent. JPO submits report, attorney argues for least restrictive option. Usually within 45 days of adjudication.', section: 'Case Timeline', sectionIcon: '⏱️', path: '/timeline' },
];

export default searchIndex;
