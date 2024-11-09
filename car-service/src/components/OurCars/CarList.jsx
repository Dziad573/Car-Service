import CarCard from './CarCard';
import styles from './CarList.module.css';

function CarList({ cars }) {
    // const isAvailable = (car) => {
    //     const today = new Date().toISOString().split('T')[0];
    //     const reservedDates = car.reservedDates;

    //     return !reservedDates.includes(today);
    // };

    const isAvailable = (car) => {
        const today = new Date().toISOString().split('T')[0];
        const reservedDates = car.reservedDates;
    
        for (let i = 0; i < reservedDates.length; i++) {
            const { startDate, endDate } = reservedDates[i];
    
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
