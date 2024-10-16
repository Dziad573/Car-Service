import styles from './HomePage.module.css'
import TopBar from '../components/TopBar/TopBar'
import Hero from '../components/Hero/Hero'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import OurCars from '../components/OurCars/OurCars'
import ClientReviews from '../components/ClientsReviews/ClientReviews'
import Footer from '../components/Footer/Footer'

function HomePage() {

    return (
        <>
        <div className={styles.mainContent}>
            <TopBar/>
            <Hero/>
        </div>
        <div className={styles.secondContent}>
            <AboutCompany/>
            <OurCars/>
            <ClientReviews/>
            <Footer/>
        </div>
        </>
    )
}

export default HomePage