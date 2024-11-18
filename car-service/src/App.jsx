import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/globals.css';
import './styles/theme.css';
import HomePage from './views/HomePage';
import CarsPage from './views/CarsPage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import CarDetailsPage from './views/CarDetailsPage';
import TopBar from './components/TopBar/TopBar';
import { carList as initialCarList } from './constants/carList';
import { useState } from 'react';

function AppContent() {
  const location = useLocation();
  const [carList, setCarList] = useState(initialCarList);

  const updateCarReservation = (carId, newReservation) => {
    setCarList((prevCarList) => {
      const updatedList = prevCarList.map((car) =>
        car.id === carId
          ? { ...car, reservedDates: [...car.reservedDates, newReservation] }
          : car
      );
      console.log("Updated Car List:", updatedList);
      return updatedList;
    });
  };

  const hideTopBarOnPaths = ['/'];
  const showTopBar = !hideTopBarOnPaths.includes(location.pathname);

  return (
    <>
      {showTopBar && <TopBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/car/:id"
          element={<CarDetailsPage carList={carList} updateCarReservation={updateCarReservation} />}
        />
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
