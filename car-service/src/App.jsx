import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/globals.css';
import './styles/theme.css';
import HomePage from './views/HomePage';
import CarsPage from './views/CarsPage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import CarDetailsPage from './views/CarDetailsPage';
import TopBar from './components/TopBar/TopBar';

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <TopBar />}
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/car/:name" element={<CarDetailsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
