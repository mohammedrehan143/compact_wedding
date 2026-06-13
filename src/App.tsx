import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ScrollHandler from './components/ScrollHandler';

function App() {
  return (
    <Router>
      <div className="bg-luxury-black min-h-screen text-white selection:bg-luxury-gold selection:text-black">
        <ScrollHandler />
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Home />
              <Testimonials />
              <CTA />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
