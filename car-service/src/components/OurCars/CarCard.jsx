import { useNavigate } from 'react-router-dom';
import styles from './CarCard.module.css';

function CarCard({ name, price, image, available, carData }) {
    const navigate = useNavigate();

    const handleMoreDetails = () => {

        navigate(`/car/${name.replace(/\s+/g, '-').toLowerCase()}`, { state: { car: carData } });
    };

    return (
        <div className={`${styles.carCard} ${available ? styles.available : styles.unavailable}`}>
            <div className={styles.image}><img src={image} alt={name} className={styles.carImage} /></div>
            <h3>{name}</h3>
            <div className={styles.priceContainer}>
                <p className={styles.price}>{price} <span>/ 1 day</span></p>
                <span onClick={handleMoreDetails} className={styles.moreDetails}>More Details &gt;</span>
            </div>
            {available && (
                <div className={styles.overlay}>
                    <p className={styles.availableNow}>Available Now</p>
                    <a href="#" className={styles.makeOrder}>Make an Order</a>
                </div>
            )}
        </div>
    );
}

export default CarCard;


