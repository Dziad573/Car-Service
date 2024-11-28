import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Hero.module.css';
//import car1 from './Challenger.png';
//import car2 from './Charger.png';
//import car3 from './Ram.png';
import videoFile from '../../assets/heroo.mp4';
import { carList } from '../../constants/carList';


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

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 568);
    const [videoVisible, setVideoVisible] = useState(true);
    const videoRef = useRef(null);

    const activePromotions = carList.filter(car => new Date(car.expireDate) > new Date());

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 568);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleVideoEnded = () => {
        setVideoVisible(false);
    };

    const handleCloseVideo = () => {
        setVideoVisible(false);
    };

    return (
        <div className={styles.Hero}>
            {videoVisible && isMobile ? (
                <div className={styles.VideoContainer}>
                    <video
                        className={styles.Video}
                        autoPlay
                        muted
                        ref={videoRef}
                        onEnded={handleVideoEnded}
                    >
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className={styles.CloseButton} onClick={handleCloseVideo}>X</button>
                    <h1>Your Premium Rent Car</h1>
                </div>
            ) : (
                <div className={styles.Container}>
                    {isMobile ? (
                        <div className={styles.HeroInner}>
                            <h1>Your Premium Rent Car</h1>
                        </div>
                    ) : (
                        <div className={styles.HeroInner}>
                            <h1>Your Premium Rent Car</h1>
                        </div>
                    )}
                    
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
                            {activePromotions.map((car, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.Slide}>
                                        <div className={styles.HeroInner}>
                                            <h1>The offer is active for:</h1>
                                            <Countdown expireDate={car.expireDate} className={styles.countdown} />
                                        </div>
                                        <img src={car.image} alt={car.name} className={styles.CarImage} />
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
                                                    <span className={styles.OldPrice}>{car.price}</span>
                                                    <span className={styles.NewPrice}>{parseFloat(car.price) - 150}$</span> / day

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
            )}
        </div>
    );
};

export default Hero;

