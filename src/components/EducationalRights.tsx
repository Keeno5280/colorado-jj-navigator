import React from 'react';

const EducationalRights: React.FC = () => {
    return (
        <div className="edu-rights-container">
            <div className="edu-rights-header">
                <h2>Educational Rights Hub <span className="citation-badge" style={{ fontSize: '1rem', verticalAlign: 'text-bottom' }}>HB24-1216</span></h2>
                <p>Being "justice-engaged" gives you special educational protections under Colorado law.</p>
            </div>

            <div className="edu-rights-grid">
                <div className="edu-card highlight">
                    <h3>10-Day Re-Enrollment Mandate</h3>
                    <p>
                        Schools must re-enroll you within <strong>10 business days</strong> of your request.
                    </p>
                </div>

                <div className="edu-card">
                    <h3>Graduation Plans & Credits</h3>
                    <p>
                        Schools must create a customized plan that counts all credits earned while in a facility, and clarifies how you can graduate at the earliest possible date.
                    </p>
                </div>

                <div className="edu-card">
                    <h3>Privacy & Extracurriculars</h3>
                    <p>
                        Discussions about your case or probation must happen in private. Schools are guided to allow you to participate in sports, after-school activities, and graduation ceremonies.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default EducationalRights;
