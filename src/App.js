import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import Home from './pages/Home';
import Historia from './pages/Historia';
import PersonalAdministrativo from './pages/PersonalAdministrativo';
import Carreras from './pages/Carreras';
import Contacto from './pages/Contacto';
import Admisiones from './pages/Admisiones';
import Galeria from './pages/Galeria';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <FloatingSocials />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/personal-administrativo" element={<PersonalAdministrativo />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/admisiones" element={<Admisiones />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
