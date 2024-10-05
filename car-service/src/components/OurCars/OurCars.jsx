import { useState } from 'react';
import styles from './OurCars.module.css';
import BrandSlider from './BrandSlider';
import CarList from './CarList';
import { carList } from '../../constants/carList';

function OurCars() {
    const [selectedBrand, setSelectedBrand] = useState('All'); // Domyślnie wybrana marka to All

    // Funkcja, która ustawia wybraną markę
    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand);
    };

    // Filtrowanie samochodów na podstawie wybranej marki
    const filteredCars = selectedBrand === 'All' ? carList : carList.filter(car => car.brand === selectedBrand);

    return (
        <div className={styles.OurCars}>
            <div className={styles.header}>
                <h1>Our Cars</h1>
            </div>
            <BrandSlider onBrandSelect={handleBrandSelect} />
            <CarList cars={filteredCars} />
        </div>
    );
}

export default OurCars;
