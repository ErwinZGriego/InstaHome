import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookingWizard } from './pages/BookingWizard';
import { About } from './pages/About';
import { Help } from './pages/Help';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Guarantee } from './pages/Guarantee';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingWizard />} />
        <Route path="/help" element={<Help />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;