import { useNavigate } from 'react-router-dom';
import styles from './CarCard.module.css';

function CarCard({ name, price, image, available, carData }) {
    const navigate = useNavigate();
    // const location = useLocation();
    // const { car } = location.state || {};
    // if (!car) {
    //     return <div>Car details not available. Please try again.</div>;
    // }
    const discounted = carData.discount > 0 && carData.discount < 1; 
    const handleMoreDetails = () => {
        window.scrollTo(0, 0);
        navigate(`/car/${name.replace(/\s+/g, '-').toLowerCase()}`, { state: { car: carData } });
    };

    return (
        <div className={`${styles.carCard} ${available ? styles.available : styles.unavailable}`}>
            <div className={styles.image}>
                <img src={image} alt={name} className={styles.carImage} loading='lazy' />
            </div>
            <h3>{name}</h3>
            <div className={styles.priceContainer}>
                <p className={styles.normalPrice}>
                    <span className={discounted ? styles.newPrice : ''}>
                        {price * carData.discount}$
                    </span> 
                    <span>
                        / 1 day
                    </span>
                </p>
                <span onClick={handleMoreDetails} 
                    className={`${styles.moreDetails} 
                    ${available ? '' : styles.unavailableMoreDetails}`}>
                    More Details &gt;
                </span>
            </div>
            {available && (
                <div className={styles.overlay}>
                    <p className={styles.availableNow}>Available Now</p>
                    <span onClick={handleMoreDetails} className={styles.makeOrder}>Make an Order</span>
                </div>
            )}
        </div>
    );
}

export default CarCard;


