import { useReservation } from '../../contexts/ReservationContext';
import Footer from '../../components/Footer/Footer';
import styles from './ReservationPage.module.css';

const ReservationPage = () => {
    const { reservationData, setReservationData } = useReservation();

    const handleReservationDelete = (id) => {
        setReservationData((prevData) => prevData.filter((reservation) => reservation.car.id !== id));
    };
    // const [adjustedDate, setAdjustedDate] = useState(null);

    // useEffect(() => {
    //     if (reservationData && reservationData.length > 0) {
    //         const date = new Date(reservationData[0].selectedDate);
    //         date.setDate(date.getDate() + 1);
    //         setAdjustedDate(date);
    //     }
    // }, [reservationData]);
    
    if (reservationData.length === 0) {
        return (
            <div className={styles.reservationPageContainerNull}>
            <h2 className={styles.pageTitle}>No reservation made yet.</h2>
            </div>
        );
    }

    return (
        <div className={styles.reservationPageContainer}>
            <div className={styles.reservationPage}>
                <h2 className={styles.pageTitle}>Reservation Summary</h2>
                {reservationData.map((reservation, index) => (
                    <div key={index} className={styles.reservationItem}>
                        <h3 className={styles.reservationTitle}>Reservation {index + 1}

                        <button className={styles.deleteButton} onClick={() => handleReservationDelete(reservation.car.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"/></g>
                            </svg>
                        </button>

                        </h3>
                        <p className={styles.carName}>Car: {reservation.car.name}</p>
                        <div className={styles.carImageContainer}>
                            <div className={styles.details}>
                                <span>
                                    {reservation.car.horsePower}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9.47V11h3.76L13 14.53V13H9.24zM13 1L6 15h5v8l7-14h-5z"/></svg>
                                </span>
                                <span>
                                    {reservation.car.transmission}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.6.6 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>
                                </span>
                            </div>
                            <img src={reservation.car.image} alt={reservation.car.name} className={styles.carImage} />
                            <div className={styles.details}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10.45 15.5q.6.6 1.55.588t1.4-.688l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.675.45-.712 1.375t.562 1.525M12 4q.9 0 1.775.15t1.7.475q.4.15.85.563t.25.787t-.9.5t-1.125-.025q-.625-.225-1.262-.337T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.65-.113-1.275T19.55 11.4q-.15-.425-.05-.825t.45-.675q.325-.25.713-.15t.537.45q.375.875.575 1.788T22 13.85q.025 1.425-.325 2.725T20.65 19.05q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"/></svg>
                                    {reservation.car.acceleration}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M42 42V6h-3l-9 10H12l-6 6v20z"/><path strokeLinecap="round" d="M12 16L22 6h18M20.643 28.889c1.431-1.88 2.535-4.479 3.131-5.889c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M11 8l-7 7"/></g></svg>
                                    {reservation.car.tank}
                                </span>
                            </div>
                        </div>
                        
                        <div>
                            <p className={styles.customerInfo}>Name: {reservation.name}</p>
                            <p className={styles.customerInfo}>Email: {reservation.email}</p>
                            <p className={styles.customerInfo}>Phone: {reservation.phone}</p>
                        </div>
                        <div>
                            <p className={styles.reservationDate}>
                                Start Date: {reservation.startDate.replace(/-/g, '.')}
                            </p>
                            <p className={styles.reservationDate}>
                                End Date: {reservation.endDate.replace(/-/g, '.')}
                            </p>
                            <p className={styles.reservationDate}>
                                Days: {Math.ceil((new Date(reservation.endDate) - new Date(reservation.startDate)) / (1000 * 60 * 60 * 24))}, 
                                Cost: {Math.ceil((new Date(reservation.endDate) - new Date(reservation.startDate)) / (1000 * 60 * 60 * 24)) * reservation.car.price}$
                            </p>
                        </div>
                        <hr />
                    </div>
                    
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ReservationPage;
