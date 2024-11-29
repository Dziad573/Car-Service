import { useState } from 'react';
import styles from './OurCars.module.css';
import BrandSlider from './BrandSlider';
import CarList from './CarList';
import Filter from './Filter';
import { carList } from '../../constants/carList';
import { useLocation } from 'react-router-dom';

function OurCars() {
    const [selectedFilters, setSelectedFilters] = useState({
        brand: '',
        priceRange: [0, 1000],
        horsePower: [100, 1000],
        transmission: '',
        onlyAvailable: true,
        carType: '',
    });

    const handleFilterChange = (filters) => {
        setSelectedFilters(prevFilters => ({ ...prevFilters, ...filters }));
    };

    const filteredCars = carList.filter(car => {
        const matchesBrand = selectedFilters.brand === '' || car.brand === selectedFilters.brand;
        const matchesPrice = car.price >= selectedFilters.priceRange[0] &&
                             car.price<= selectedFilters.priceRange[1];
        const matchesHorsePower = parseInt(car.horsePower) >= selectedFilters.horsePower[0] &&
                                  parseInt(car.horsePower) <= selectedFilters.horsePower[1];
        const matchesTransmission = selectedFilters.transmission === '' || car.transmission === selectedFilters.transmission;
        const matchesAvailability = selectedFilters.onlyAvailable || car.available === true;
        const matchesType = selectedFilters.carType === '' || car.type === selectedFilters.carType;

        return matchesBrand && matchesPrice && matchesHorsePower && matchesTransmission && matchesAvailability && matchesType;
    });

    return (
        <div className={styles.OurCars}>
            <div className={styles.header}>
                <h1>Our Cars</h1>
            </div>

            {/* Render BrandSlider only on / */}
            {location.pathname === '/' && (
                <BrandSlider onBrandSelect={(brand) => handleFilterChange({ brand })} />
            )}

            {/* Render Filter Component only on /cars */}
            {location.pathname === '/cars' && (
                <Filter onFilterChange={handleFilterChange} />
            )}

            <CarList cars={filteredCars} />
        </div>
    );
}

export default OurCars;
