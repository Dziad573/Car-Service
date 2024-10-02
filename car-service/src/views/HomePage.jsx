import { useState } from 'react'
import styles from './HomePage.module.css'
import TopBar from '../components/TopBar/TopBar'
import Hero from '../components/Hero/Hero'
import AboutCompany from '../components/AboutCompany/AboutCompany'

function HomePage() {

    return (
        <>
        <div className={styles.mainContent}>
            <TopBar/>
            <Hero/>
        </div>
            <AboutCompany/>
        </>
    )
}

export default HomePage