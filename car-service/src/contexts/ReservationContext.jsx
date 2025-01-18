import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
    const [reservationData, setReservationData] = useState([]);

    const updateReservation = (car, startDate, endDate, name, email, phone) => {
        const newReservation = {
            car,
            startDate,
            endDate,
            name,
            email,
            phone
        };

        setReservationData((prevData) => {
            const updatedData = [...prevData, newReservation];
            return updatedData;
        });
    };

    return (
        <ReservationContext.Provider value={{ reservationData, setReservationData, updateReservation }}>
            {children}
        </ReservationContext.Provider>
    );
};

export const useReservation = () => {
    return useContext(ReservationContext);
};
