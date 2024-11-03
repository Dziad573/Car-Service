import { useState } from 'react';
import ReactSlider from 'react-slider';
import styles from './Filter.module.css';

function Filter({ onFilterChange }) {
    const [priceRange, setPriceRange] = useState([250, 740]);
    const [horsePower, setHorsePower] = useState([100, 1000]);
    const [brand, setBrand] = useState('');
    const [transmission, setTransmission] = useState('');
    const [onlyAvailable, setOnlyAvailable] = useState(false);
    const [carType, setCarType] = useState('');

    const handleApplyFilters = () => {
        onFilterChange({
            priceRange,
            brand,
            horsePower,
            transmission,
            onlyAvailable,
            carType,
        });
    };

    return (
        <div className={styles.filterContainer}>
            <h2 className={styles.header}>Filter</h2>

            {/* Price Range Slider */}
            <div className={styles.filterItem}>
                <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <ReactSlider
                    className={styles.rangeSlider}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    min={0}
                    max={1000}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value)}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    renderTrack={(props, state) => (
                        <div
                            {...props}
                            className={state.index === 1 ? styles.rangeTrack : styles.track}
                        />
                    )}
                />

            </div>

            {/* Horse Power Slider */}
            <div className={styles.filterItem}>
                <label>Horse Power: {horsePower[0]} - {horsePower[1]}</label>
                <ReactSlider
                    className={styles.rangeSlider}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    min={100}
                    max={1000}
                    value={horsePower}
                    onChange={(value) => setHorsePower(value)}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    renderTrack={(props, state) => (
                        <div
                            {...props}
                            className={state.index === 1 ? styles.rangeTrack : styles.track}
                        />
                    )}
                />
            </div>

            {/* Only Available */}
            <div className={styles.filterItem}>
                <label>
                    Only Available
                    <input
                        type="checkbox"
                        checked={onlyAvailable}
                        onChange={(e) => setOnlyAvailable(e.target.checked)}
                    />
                </label>
            </div>

            {/* Brand */}
            <div className={styles.filterItem}>
                <label>Brand</label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value=''>All</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Lamborghini">Lamborghini</option>
                    <option value="BMW">BMW</option>
                    <option value="Toyota">Toyota</option>
                </select>
            </div>

            {/* Transmission */}
            <div className={styles.filterItem}>
                <label>Transmission</label>
                <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                    <option value=''>All</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                </select>
            </div>

            {/* Car Type */}
            <div className={styles.filterItem}>
                <label>Type</label>
                <select value={carType} onChange={(e) => setCarType(e.target.value)}>
                    <option value=''>All</option>
                    <option value="Supercar">Supercar</option>
                    <option value="SUV">SUV</option>
                    <option value="Convertible">Convertible</option>
                </select>
            </div>

            <button className={styles.applyButton} onClick={handleApplyFilters}>
                Apply Filters
            </button>
        </div>
    );
}

export default Filter;
