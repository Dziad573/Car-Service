import { useState } from 'react'
import TopBar from '../components/TopBar/TopBar'
import Hero from '../components/Hero/Hero'
import styles from './HomePage.module.css'

function HomePage() {

    return (
        <>
        <div className={styles.mainContent}>
            <TopBar/>
            <Hero/>
        </div>
        </>
    )
}

export default HomePage