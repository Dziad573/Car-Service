import styles from './CarsPage.module.css'
// import TopBar from '../components/TopBar/TopBar'
// import Hero from '../components/Hero/Hero'
// import AboutCompany from '../components/AboutCompany/AboutCompany'
import OurCars from '../../components/OurCars/OurCars'
// import ClientReviews from '../components/ClientsReviews/ClientReviews'
import Footer from '../../components/Footer/Footer'

function CarsPage() {
    return (
        <>
        <div className={styles.mainContent}>
            
        </div>
        <div className={styles.secondContent}>
            <OurCars/>
            <Footer/>
        </div>
        </>
    )
}

export default CarsPage;
