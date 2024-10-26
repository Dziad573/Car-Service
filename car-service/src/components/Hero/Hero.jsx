import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Hero.module.css';
import car1 from './Challenger.png';
import car2 from './Charger.png';
import car3 from './Ram.png';

const cars = [
    {
        name: 'Lamborghini Aventador J',
        priceOld: '$1300',
        priceNew: '$800',
        time: '1 day',
        img: car1,
        expireDate: new Date('2024-10-27T19:31:40'),
    },
    {
        name: 'Lamborghini Aventador J',
        priceOld: '$1300',
        priceNew: '$800',
        time: '1 day',
        img: car2,
        expireDate: new Date('2024-10-30T23:59:59'),
    },
    {
        name: 'Lamborghini Aventador J',
        priceOld: '$1300',
        priceNew: '$800',
        time: '1 day',
        img: car3,
        expireDate: new Date('2024-10-25T23:59:59'),
    },
];

function Countdown({ expireDate }) {
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




function Hero() {
    return (
        <div className={styles.Hero}>
        <div className={styles.Container}>
            <div className={styles.HeroInner}>
                <h1>Your Premium Rent Car</h1>
            </div>
            <div className={styles.SliderComponent}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 100 }}
            >
                {cars.map((car, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.Slide}>
                        <div className={styles.HeroInner}>
                            <h1>
                                The offer is active for:
                            </h1>
                                <Countdown expireDate={car.expireDate} className={styles.countdown} />
                            
                            
                        </div>
                    <img src={car.img} alt={car.name} className={styles.CarImage} />
                    <div className={styles.CarDetails}>

                        <div>
                            <h2>{car.name}</h2>
                            
                            <div className={styles.Buttons}>
                                <NavLink 
                                    to={`/${car.name.replace(/\s+/g, '-')}`}
                                    end
                                >
                                <div className={styles.DetailsButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="28" 
                                        height="28" 
                                        viewBox="0 0 24 24">
                                        <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/>
                                            <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"/>
                                        </g>
                                    </svg>

                                    
                                        <div className={styles.details}>View Details</div>
                                    
                                </div>
                                </NavLink>
                            </div>
                        </div>

                        <div>
                            <div className={styles.Price}>
                                <span className={styles.OldPrice}>{car.priceOld}</span>
                                <span className={styles.NewPrice}>{car.priceNew}</span> / {car.time}
                            </div>
                            <div className={styles.Buttons}>
                                <button className={styles.OrderButton}>Make an Order</button>
                            </div>
                        </div>

                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </div>
    );
}


export default Hero;
