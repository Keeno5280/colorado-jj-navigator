import React from 'react';

const cases = [
    {
        title: '48-Hour Hearing',
        timeframe: 'Within 48 hours of arrest',
        citation: 'Title 19 / 48-Hour Rule',
        description: 'If a youth is not released after arrest, a detention hearing must be held within 48 business hours to determine if there is a legal basis for custody (risk of serious harm or high flight risk).'
    },
    {
        title: 'Charging Deadline',
        timeframe: 'Within 72 hours of hearing',
        description: 'If the youth remains in detention, the District Attorney must file a formal petition within 72 hours of the detention hearing.'
    },
    {
        title: 'Advisement',
        timeframe: 'Within 30 days',
        description: 'First appearance occurs within 30 days of a summons if the youth was not arrested.'
    },
    {
        title: 'Preliminary Hearing',
        timeframe: 'Within 35 days (if detained)',
        citation: 'C.R.S. 19-2.5-609',
        description: 'A "mini-trial" to check for probable cause. Motions must be filed within 14 days of advisement. If detained, the hearing must happen within 35 days.'
    },
    {
        title: 'The Adjudicatory Trial',
        timeframe: 'Within 60 days of plea',
        description: 'Non-jury trials must begin within 60 days of a "not guilty" plea. If a jury trial is granted, the adult six-month speedy trial rule applies.'
    },
    {
        title: 'Disposition (Sentencing)',
        timeframe: 'Within 45 days of verdict',
        description: 'Sentencing usually happens within 45 days of the verdict. Committed youth receive full evaluation within the first 30 days.'
    }
];

const Timeline: React.FC = () => {
    return (
        <div className="timeline-container">
            <h2>Interactive Case Timeline</h2>
            <p className="timeline-intro">
                The path of a case governed by strict statutory checkpoints to ensure no youth is lost in the system.
            </p>

            <div className="timeline">
                {cases.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>
                                {item.title}
                                {item.citation && <span className="citation-badge" title="State Law">{item.citation}</span>}
                            </h3>
                            <span className="timeline-timeframe">{item.timeframe}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
