import styles from "./TopBar.module.css";

function TopBar() {
    return (
        <div className={styles.TopBarContainer}>
            <div className={styles.TopBar}>
                <div className={styles.Logo}>LOGO</div>
                <div className={styles.NavButtons}>
                    <div className={styles.NavButton}>Home</div>
                    <div className={styles.NavButton}>Cars</div>
                    <div className={styles.NavButton}>About Us</div>
                    <div className={styles.NavButton}>Contact</div>
                </div>
                <div className={styles.Tel}>+48 912 578 125</div>
            </div>
        </div>
    );
}

export default TopBar;