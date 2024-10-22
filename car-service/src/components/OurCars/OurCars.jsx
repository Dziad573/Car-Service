import { useState } from 'react';
import styles from './OurCars.module.css';
import BrandSlider from './BrandSlider';
import CarList from './CarList';
import { carList } from '../../constants/carList';

function OurCars() {
    const [selectedBrand, setSelectedBrand] = useState('All');

    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand);
    };

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
