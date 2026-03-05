import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';
import RightsPage from './pages/RightsPage';
import EducationPage from './pages/EducationPage';
import RecordCleaningPage from './pages/RecordCleaningPage';
import GlossaryPage from './pages/GlossaryPage';
import ChargeTypesPage from './pages/ChargeTypesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/rights" element={<RightsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/cleaning" element={<RecordCleaningPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/charges" element={<ChargeTypesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
