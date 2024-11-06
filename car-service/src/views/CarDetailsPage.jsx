import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ClientReviews from '../components/ClientsReviews/ClientReviews';
import Footer from '../components/Footer/Footer';
import styles from './CarDetailsPage.module.css';
import CarCard from '../components/OurCars/CarCard';

function CarDetailsPage({ carList }) {
    const location = useLocation();
    const { car } = location.state;

    const [value, setValue] = useState(new Date());

    const isDateReserved = (date) => {
        return car.reservedDates.some(reservedDate => new Date(reservedDate).toDateString() === date.toDateString());
    };

    
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            if (isDateReserved(date)) {
                return styles['reserved-date'];
            }
        }
        return null;
    };
    const relatedCars = carList.filter(c => c.type === car.type && c.id !== car.id).slice(0, 4);
    return (
        <>
            <div className={styles.carDetailsPage}>
                <h1>Details for {car.name}</h1>
                <div className={styles.infoContainer}>
                    <div className={styles.pics}>
                        <div className={styles.details}>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9.47V11h3.76L13 14.53V13H9.24zM13 1L6 15h5v8l7-14h-5z"/></svg>
                                {car.horsePower}
                            </span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.6.6 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>
                                {car.transmission}
                            </span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10.45 15.5q.6.6 1.55.588t1.4-.688l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.675.45-.712 1.375t.562 1.525M12 4q.9 0 1.775.15t1.7.475q.4.15.85.563t.25.787t-.9.5t-1.125-.025q-.625-.225-1.262-.337T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.65-.113-1.275T19.55 11.4q-.15-.425-.05-.825t.45-.675q.325-.25.713-.15t.537.45q.375.875.575 1.788T22 13.85q.025 1.425-.325 2.725T20.65 19.05q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"/></svg>
                                {car.acceleration}
                            </span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M42 42V6h-3l-9 10H12l-6 6v20z"/><path stroke-linecap="round" d="M12 16L22 6h18M20.643 28.889c1.431-1.88 2.535-4.479 3.131-5.889c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M11 8l-7 7"/></g></svg>
                                {car.tank}
                            </span>
                        </div>
                        <div className={styles.brand}>
                            <img src={car.image} alt={car.name} />
                            <p>{car.price}/1 day</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <p>
                            {car.available ? 
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="green" d="M17.15 9.6L10 16.75l-3.2-3.2l.7-.71l2.5 2.5l6.44-6.45zM11.5 3c5.25 0 9.5 4.25 9.5 9.5S16.75 22 11.5 22S2 17.75 2 12.5S6.25 3 11.5 3m0 1C6.81 4 3 7.81 3 12.5S6.81 21 11.5 21s8.5-3.81 8.5-8.5S16.19 4 11.5 4"/></svg> 
                                {'Availible now'}
                            </> : <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 22C6.26 22 2 17.75 2 12.5A9.5 9.5 0 0 1 11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5m0-1a8.5 8.5 0 0 0 8.5-8.5c0-2.17-.81-4.15-2.14-5.65l-12.01 12A8.47 8.47 0 0 0 11.5 21m0-17A8.5 8.5 0 0 0 3 12.5c0 2.17.81 4.14 2.15 5.64l12-12A8.5 8.5 0 0 0 11.5 4"/></svg>
                                {'Not Availible Now'}
                            </>
                            }</p>
                        <p className={styles.carDescription}>{car.description}</p>
                        <div className={styles.calendar}>
                            <p>Check Available Date</p>  
                            <Calendar
                                onChange={setValue}
                                value={value}
                                tileClassName={tileClassName}
                            />
                        </div>
                    </div>
                    
                    
                </div>

                <div className={styles.relatedCars}>
                    <h2>Related Cars</h2>
                    <div className={styles.relatedCarsContainer}>
                        {relatedCars.length > 0 ? (
                            relatedCars.map(relatedCar => (
                                <CarCard
                                    key={relatedCar.id}
                                    name={relatedCar.name}
                                    price={relatedCar.price}
                                    image={relatedCar.image}
                                    available={relatedCar.available}
                                    carData={relatedCar}
                                />
                            ))
                        ) : (
                            <p>No related cars available.</p>
                        )}
                    </div>

                </div>

                <ClientReviews />
                <Footer />
            </div>
        </>
    );
}

export default CarDetailsPage;

