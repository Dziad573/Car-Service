import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Counter = ({ expireDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(expireDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.countdownContainer}>
            {timeLeft.days !== undefined ? (
                <div className={styles.countdown}>
                    <span>{String(timeLeft.days).padStart(2, '0')}:</span>
                    <span>{String(timeLeft.hours).padStart(2, '0')}:</span>
                    <span>{String(timeLeft.minutes).padStart(2, '0')}:</span>
                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
            ) : (
                <span>Offer expired</span>
            )}
        </div>
    );
}

export default Counter;