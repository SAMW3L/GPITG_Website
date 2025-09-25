import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Careers from './pages/Careers'
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Admin from './pages/Admin';
import News from './pages/News';
import Gallery from './pages/Gallery';
import ChatProvider from './components/Chat/ChatProvider';
import ChatWidget from './components/Chat/ChatWidget';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ChatProvider>
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="careers" element={<Careers />} />
            <Route path="admin" element={<Admin />} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ChatWidget />
      </Router>
    </ChatProvider>
  );
}

export default App;
