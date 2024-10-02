import styles from './AboutCompany.module.css'
import img from './irene.jpg'

function AboutCompany() {
    return (
        <div className={styles.aboutCompany}> 
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                <h1>About Company</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nullam 
                    in dui mauris. Vivamus hendrerit arcu 
                    sed erat molestie vehicula. Sed auctor 
                    neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles.customers}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/>
                </svg>
                    Happy Customers
                </div>
                <div className={styles.carCount}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24">
                        <path fill="currentColor" d="m16 6l-1 .75L17.5 10h-4V8.5H12V10H3c-1.11 0-2 .89-2 2v3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2zM6 13.5A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"/>
                    </svg>
                        Total Car Count
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;