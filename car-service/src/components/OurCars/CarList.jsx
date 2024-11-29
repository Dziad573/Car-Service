import { useLocation } from 'react-router-dom';
import CarCard from './CarCard';
import styles from './CarList.module.css';

function CarList({ cars }) {
    // const isAvailable = (car) => {
    //     const today = new Date().toISOString().split('T')[0];
    //     const reservedDates = car.reservedDates;

    //     return !reservedDates.includes(today);
    // };

    const location = useLocation();
    const { car } = location.state || {};

    if (car) {
        return <div>Car details not available. Please try again.</div>;
    }

    const isAvailable = (car) => {
        const today = new Date().toISOString().split('T')[0];
        for (let i = 0; i < car.reservedDates.length; i++) {
            const { startDate, endDate } = car.reservedDates[i];
            if (today >= startDate && today <= endDate) {
                return false;
            }
        }
        return true;
    };
    
    return (
        <div className={styles.carList}>
            {
                
                cars.slice(0, 12).map((car, index) => (
                    <CarCard 
                        key={index} 
                        brand={car.brand}
                        name={car.name} 
                        price={car.price} 
                        image={car.image} 
                        available={isAvailable(car)}
                        horsePower={car.horsePower}
                        transmission={car.transmission}
                        acceleration={car.acceleration}
                        tank={car.tank}
                        description={car.description}
                        reservedDates={car.reservedDates}
                        type={car.type}
                        carData={car}
                    />
                ))
            }
        </div>
    );
}

export default CarList;
