import styles from './CarCard.module.css';

function CarCard({ name, price, image, available }) {
    return (
        <div className={`${styles.carCard} ${available ? styles.available : styles.unavailable}`}>
            <img src={image} alt={name} className={styles.carImage} />
            <h3>{name}</h3>
            <div className={styles.priceContainer}>
                <p className={styles.price}>{price} <span>/ 1 day</span></p>
                <a href="#" className={styles.moreDetails}>{'More Details >'}</a>
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
