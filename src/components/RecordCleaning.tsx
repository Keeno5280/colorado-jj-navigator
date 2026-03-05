import React, { useState } from 'react';

type QuizState = 'start' | 'q2' | 'q3' | 'result_expungement' | 'result_sealing' | 'result_ineligible';

const RecordCleaning: React.FC = () => {
    const [quizState, setQuizState] = useState<QuizState>('start');

    const renderQuiz = () => {
        switch (quizState) {
            case 'start':
                return (
                    <div className="quiz-container">
                        <div className="quiz-question">Q1: Were you found "Not Guilty", did your case get dismissed, or did you finish Diversion?</div>
                        <div className="quiz-options">
                            <button className="quiz-btn" onClick={() => setQuizState('result_expungement')}>Yes</button>
                            <button className="quiz-btn" onClick={() => setQuizState('q2')}>No</button>
                        </div>
                    </div>
                );
            case 'q2':
                return (
                    <div className="quiz-container">
                        <div className="quiz-question">Q2: Was the offense an "Aggravated" or "Violent" juvenile offense?</div>
                        <div className="quiz-options">
                            <button className="quiz-btn" onClick={() => setQuizState('result_ineligible')}>Yes</button>
                            <button className="quiz-btn" onClick={() => setQuizState('q3')}>No</button>
                        </div>
                    </div>
                );
            case 'q3':
                return (
                    <div className="quiz-container">
                        <div className="quiz-question">Q3: Has it been at least 1 year since your probation ended (or 3 years since parole ended)?</div>
                        <div className="quiz-options">
                            <button className="quiz-btn" onClick={() => setQuizState('result_expungement')}>Yes</button>
                            <button className="quiz-btn" onClick={() => setQuizState('result_sealing')}>No, not yet</button>
                        </div>
                    </div>
                );
            case 'result_expungement':
                return (
                    <div className="quiz-container quiz-result expungement">
                        <h3>✨ Likely Eligible for Expungement!</h3>
                        <p>Expungement erases the record entirely, as if it never existed. You can legally say you have no record for this incident.</p>
                        <p><strong>Action:</strong> Contact a public defender or legal aid to begin the petition process.</p>
                        <button className="reset-btn" onClick={() => setQuizState('start')}>Start Over</button>
                    </div>
                );
            case 'result_sealing':
                return (
                    <div className="quiz-container quiz-result sealing">
                        <h3>🔒 Likely Eligible for Sealing (Wait for Expungement)</h3>
                        <p>You may not be ready for full expungement yet, but you might be able to <strong>seal</strong> your record right now.</p>
                        <p>Sealing hides the record from the public (like employers and landlords) but it still exists for law enforcement.</p>
                        <button className="reset-btn" onClick={() => setQuizState('start')}>Start Over</button>
                    </div>
                );
            case 'result_ineligible':
                return (
                    <div className="quiz-container quiz-result ineligible">
                        <h3>⚠️ Likely Ineligible for Expungement</h3>
                        <p>Under Colorado law, youth adjudicated for "Violent" or "Aggravated" offenses generally cannot expunge those specific records.</p>
                        <p><strong>Note:</strong> Always consult with a lawyer to review the specifics of your case, as laws are complex.</p>
                        <button className="reset-btn" onClick={() => setQuizState('start')}>Start Over</button>
                    </div>
                );
        }
    };

    return (
        <div className="cleaning-container">
            <div className="cleaning-header">
                <h2>Record Sealing vs. Expungement Quiz</h2>
                <p>Your records do not automatically "disappear" when you turn 18 in Colorado. Take this quick quiz to see what options you might have to clean your record.</p>
            </div>

            {renderQuiz()}

            <div className="ineligible-warning" style={{ marginTop: '4rem' }}>
                <strong>Disclaimer:</strong> This quiz provides general information and is <em>not legal advice</em>. Eligibility is complex and depends heavily on specific court dockets.
            </div>
        </div>
    );
};

export default RecordCleaning;
