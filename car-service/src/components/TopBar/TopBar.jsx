import styles from "./TopBar.module.css";
import { NavLink } from 'react-router-dom';

function TopBar() {
    return (
        <div className={styles.TopBarContainer}>
            <div className={styles.TopBar}>
                <div className={styles.Logo}>LOGO</div>
                <div className={styles.NavButtons}>
                    <NavLink 
                        to="/" 
                        className={styles.NavButton}
                        activeClassName={styles.active}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/cars" 
                        className={styles.NavButton}
                        activeClassName={styles.active}
                    >
                        Cars
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={styles.NavButton}
                        activeClassName={styles.active}
                    >
                        About Us
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={styles.NavButton}
                        activeClassName={styles.active}
                    >
                        Contact
                    </NavLink>
                </div>
                <div className={styles.Tel}>+48 912 578 125</div>
            </div>
        </div>
    );
}

export default TopBar;
