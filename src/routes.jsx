import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './components/Register';
import UnderMaintenance from './components/UnderMaintainance';
import About from './components/About';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refunds" element={<RefundPolicy />} />
      <Route path="/maintenance" element={<UnderMaintenance />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;