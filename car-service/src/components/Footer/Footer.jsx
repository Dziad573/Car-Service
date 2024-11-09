import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socials}>
                    <a href="https://www.twitter.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.66 48.66 0 0 0-41.47-24a46.9 46.9 0 0 0-33.75 13.7A47.9 47.9 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a111 111 0 0 0 21.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 0 0-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 0 0 1.73-8.72m-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.51-6.25 27.56-17 37.88-32.48A8 8 0 0 0 92 169.08c-.47-.27-43.91-26.34-44-96c16 13 45.25 33.17 78.67 38.79A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.94 30.94 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z"/>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0"/></svg>
                    </a>
                    <a href="https://www.instagram.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
                    </a>
                </div>
                <div className={styles.faq}>
                <h3>F.A.Q</h3>
                    <ul>
                        <li>How to book a car?</li>
                        <li>What are the requirements?</li>
                        <li>How to cancel a booking?</li>
                        <li>How to contact us?</li>
                    </ul>
                </div>
                <div className={styles.logo}>
                    {/* All Rights Reserved 2021 @Car Service */}
                </div>
                <div className={styles.contact}>
                    
                    <div className={styles.email}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"/></svg>
                            <span>+48 834 781 142</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"/></svg>
                            <span>contact@gmail.com</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"/><circle cx="12" cy="9" r="2.5" fill="currentColor"/></svg>
                            <span>Warszawa 0a</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"/><path fill="currentColor" d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                            <span>Mon-Fri 8:00-21:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;