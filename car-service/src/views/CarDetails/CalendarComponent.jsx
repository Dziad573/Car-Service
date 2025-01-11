import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./CarDetailsPage.module.css";

const CalendarComponent = ({ value, tileClassName, handleDateClick }) => {
    return (
        <div className={styles.calendar}>
            <p>Check Available Date</p>
            <Calendar
                minDate={new Date()}
                // maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                // lastActive={new Date()}
                value={value}
                tileClassName={tileClassName}
                onChange={(date) => handleDateClick(date)}
            />
        </div>
    );
};

export default CalendarComponent;
