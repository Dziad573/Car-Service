import styles from "./TopBar.module.css";
import { NavLink } from 'react-router-dom';
import logo from './logo2.png';
import { useEffect, useState } from "react";

function TopBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 856);
        
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 856);
            };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <div className={styles.TopBarContainer}>
            <div className={styles.TopBar}>
                <div className={styles.Logo}><img src={logo} alt={logo} className={styles.logo} /></div>
                {!isMobile ? 
                    <div className={styles.NavButtons}>
                        <NavLink 
                            to="/" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                            end
                        >
                            RentCar
                        </NavLink>
                        <NavLink 
                            to="/cars" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                        >
                            Cars
                        </NavLink>
                        <NavLink 
                            to="/reservations" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                        >
                            My Reservations
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                        >
                            Contact
                        </NavLink>
                    </div> : 
                    <div className={styles.NavButtons}>
                        <NavLink 
                            to="/" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                            end
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M5 20v-9.144l-1.934 1.49l-.604-.792L12 4.25l9.539 7.304l-.605.787L19 10.856V20zm3-5.23q-.31 0-.54-.23T7.23 14t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23"/></svg>
                        </NavLink>
                        <NavLink 
                            to="/cars" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M5.23 18v1.5q0 .213-.143.356T4.731 20H4.5q-.213 0-.356-.144T4 19.5v-7.346L5.985 6.5q.073-.238.281-.37q.209-.13.465-.13h10.615q.227 0 .413.138t.257.362L20 12.154V19.5q0 .213-.144.356T19.5 20h-.23q-.213 0-.357-.144t-.144-.356V18zm.186-6.846h13.169L17.112 7H6.889zm2.012 4.538q.466 0 .788-.326q.323-.327.323-.794q0-.466-.327-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.793.321m9.155 0q.466 0 .788-.326q.322-.327.322-.794q0-.466-.326-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.794.321"/></svg>
                        </NavLink>
                        <NavLink 
                            to="/reservations" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M8.5 11.5h7v-1h-7zm0-4h7v-1h-7zm10.412 12.437l-3.416-4.43q-.367-.478-.877-.742q-.51-.265-1.119-.265H5V4.616q0-.691.463-1.153T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .144-.022.285q-.022.142-.066.267M6.616 21q-.691 0-1.153-.462T5 19.385V15.5h8.5q.366 0 .674.16q.309.161.536.457l3.527 4.616q-.183.127-.397.197t-.456.07z"/></svg>
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={styles.NavButton}
                            activeClassName={styles.active}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M18.93 20q-2.528 0-5.184-1.266t-4.944-3.555q-2.27-2.288-3.536-4.935T4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.31.75t-.76.3"/></svg>
                        </NavLink>
                    </div>
                }
                <div className={styles.Tel}>+48 912 578 125</div>
            </div>
        </div>
    );
}

export default TopBar;
