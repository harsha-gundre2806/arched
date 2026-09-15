import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 76px)', backgroundColor: '#0A111E' }}>
        <AppRoutes />
      </div>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;