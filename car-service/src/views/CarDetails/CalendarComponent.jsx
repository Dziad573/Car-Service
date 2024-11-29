import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CarDetailsPage.module.css';

const CalendarComponent = ({value, onChange, tileClassName, handleDateClick,reservationUpdateKey}) => {
    return (
        
    <div className={styles.calendar}>
        <p>Check Available Date</p>  
        <Calendar
            key={reservationUpdateKey}
            value={value}
            tileClassName={tileClassName}
            onChange={(value) => {
                onChange(value);
                handleDateClick(value);
            }}
        />
    </div>
)}
export default CalendarComponent;