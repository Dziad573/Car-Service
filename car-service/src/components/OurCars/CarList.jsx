import CarCard from './CarCard';
import styles from './CarList.module.css';

function CarList({ cars }) {
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
                        available={car.available}
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
