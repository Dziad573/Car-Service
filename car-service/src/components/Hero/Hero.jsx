import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';  // Zmiana importu modułów
import styles from './Hero.module.css';
import car from './64-648005_dodge-challenger-png-image-transparent-dodge-challenger.png';

const cars = [
    {
        name: 'Lamborghini Aventador J',
        priceOld: '$1300',
        priceNew: '$800',
        time: '1 day',
        img: car,
    },
    {
        name: 'Lamborghini Aventador J',
        priceOld: '$1300',
        priceNew: '$800',
        time: '1 day',
        img: car,
    },
    {
        name: 'Lamborghini Aventador J',
        priceOld: '$1300',
        priceNew: '$800',
        time: '1 day',
        img: car,
    },
  // Dodaj kolejne samochody
];

function Hero() {
    return (
        <div className={styles.Hero}>
        <div className={styles.Container}>
            <div className={styles.HeroInner}>
                <h1>Your Premium Rent Car</h1>
            </div>
            <div className={styles.SliderComponent}>
            <Swiper
                modules={[Navigation, Pagination]}  // Moduły zaktualizowane
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                
                autoplay={{ delay: 10000 }}
            >
                {cars.map((car, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.Slide}>
                        <div className={styles.HeroInner}>
                            <h1>The offer is active for: </h1>
                        </div>
                    <img src={car.img} alt={car.name} className={styles.CarImage} />
                    <div className={styles.CarDetails}>

                        <div>
                            <h2>{car.name}</h2>
                            <div className={styles.Buttons}>
                                <div className={styles.DetailsButton}>View Details</div>
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
