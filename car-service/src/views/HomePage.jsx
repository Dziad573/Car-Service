import { useState } from 'react'
import styles from './HomePage.module.css'
import TopBar from '../components/TopBar/TopBar'
import Hero from '../components/Hero/Hero'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import OurCars from '../components/OurCars/OurCars'

function HomePage() {

    return (
        <>
        <div className={styles.mainContent}>
            <TopBar/>
            <Hero/>
        </div>
            <AboutCompany/>
            <OurCars/>
        </>
    )
}

export default HomePage