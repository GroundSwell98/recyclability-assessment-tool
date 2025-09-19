import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RecyclabilityAssessments from './pages/RecyclabilityAssessments';
import RecyclingIntelligence from './pages/RecyclingIntelligence';
import RecyclingAcademy from './pages/RecyclingAcademy';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recyclability-assessments" element={<RecyclabilityAssessments />} />
          <Route path="/recycling-intelligence" element={<RecyclingIntelligence />} />
          <Route path="/recycling-academy" element={<RecyclingAcademy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;