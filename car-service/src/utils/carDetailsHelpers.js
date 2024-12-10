//import styles from '../views/CarDetails/CarDetailsPage.module.css';


// export const isDateReserved = (date, car) => {
//     const normalizeDate = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
//     const normalizedDate = normalizeDate(date);

//     return car.reservedDates.some((reservedRange) => {
//         const startDate = normalizeDate(new Date(reservedRange.startDate));
//         const endDate = normalizeDate(new Date(reservedRange.endDate));
//         return normalizedDate >= startDate && normalizedDate <= endDate;
//     });
// };

// export const isAvailable = (car) => {
//     const today = new Date().toISOString().split('T')[0];
//     const reservedDates = car.reservedDates;

//     for (let i = 0; i < reservedDates.length; i++) {
//         const { startDate, endDate } = reservedDates[i];

//         if (today >= startDate && today <= endDate) {
//             return false;
//         }
//     }
//     return true;
// };

// export const tileClassName = (date, view, car) => {
//     if (view === 'month') {
//         if (isDateReserved(date)) {
//             return styles['reserved-date'];
//         } else if (!isAvailable(car)) {
//             return styles['inactive-car'];
//         }
//     }
//     return null;
// };

export const handleReservationSubmit = (
    event,
    selectedDate,
    car,
    updateCarReservation,
    setReservationUpdateKey,
    setFormVisible,
    setSelectedDate,
    navigate
) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    if (selectedDate) {
        const normalizedDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate() + 1
        );

        const newReservation = {
            startDate: normalizedDate.toISOString().split('T')[0],
            endDate: normalizedDate.toISOString().split('T')[0],
            name,
            email,
            phone,
        };

        navigate(`/car/${car.name.replace(/\s+/g, '-')}`, { state: { car } });

        updateCarReservation(car.id, newReservation);

        // Trigger UI re-render by updating reservation key
        setReservationUpdateKey((prevKey) => prevKey + 1);

        // Reset the form and selected date
        alert(`Car reserved successfully for ${newReservation.startDate}`);
        setFormVisible(false);
        setSelectedDate(null);
    } else {
        alert('Please select a date before submitting the reservation.');
    }
};
