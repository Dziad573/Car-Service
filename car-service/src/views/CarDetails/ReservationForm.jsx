import { useEffect, useState } from 'react';
import styles from './ReservationForm.module.css';

const ReservationForm = ({ 
    selectedDates, handleSubmit, 
    onClose, horsePower, transmission, 
    acceleration, tank,
    image, name, price, discount
}) => {
        const [isVisible, setIsVisible] = useState(false);
        const [isReserved, setIsReserved] = useState(false);
        const [formName, setName] = useState('');
        const [formEmail, setEmail] = useState('');
        const [formPhone, setPhone] = useState('');
        const [formErrors, setErrors] = useState({
            formName: false,
            formEmail: false,
            formPhone: false,
        });


        useEffect(() => {
            const timer = setTimeout(() => setIsVisible(true), 0);
            return () => clearTimeout(timer);
        }, []);

        const handleReservationSuccess = () => {
            const newErrors = {
                formName: !formName,
                formEmail: !formEmail,
                formPhone: !formPhone,
            };
            setErrors(newErrors);
        
            if (!newErrors.formName && !newErrors.formEmail && !newErrors.formPhone) {
                setIsReserved(true);
                setTimeout(() => {
                    onClose();
                    setIsReserved(false);
                    setIsVisible(false);
                }, 2000);
            } else {
                animateError();
            }
            };


            const animateError = () => {
            // const inputs = document.querySelectorAll('input');
            // inputs.forEach((input) => {
            //   input.classList.add(styles.inputError);
            //   setTimeout(() => {
            //     input.classList.remove(styles.inputError);
            //   }, 1000);
            // });
            };


    return (
        <div className={styles.overlay}
            onClick={(e) => {
                if (e.target.classList.contains(styles.overlay)) {
                    onClose();
                }
            }}
        >


            <div
                className={`${styles.reservationContainer} 
                ${isVisible ? styles.animateSlideUp : ''} 
                ${isReserved ? styles.fadeOut : ''}`}
            >


            <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    X
                </button>
            <div className={styles.reservationForm}>
                <h2>Reserve Car</h2>
                <p>Selected Start Date: {selectedDates.startDate}</p>
                <p>Selected End Date: {selectedDates.endDate}</p>
                <form onSubmit={handleSubmit}> 
                    <label>
                        Name:
                        <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formName} 
                        onChange={(e) => setName(e.target.value)} 
                        className={formErrors.formName ? styles.inputError : ''}
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formEmail} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className={formErrors.formEmail ? styles.inputError : ''}
                        />
                    </label>
                    <label>
                        Phone:
                        <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formPhone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className={formErrors.formPhone ? styles.inputError : ''}
                        />
                    </label>
                    <button type="submit" onClick={handleReservationSuccess}>
                        Reserve Now
                    </button>
                </form>

            </div>

            <div className={styles.reservationCarDetails}>
                <div className={styles.pics}>
                    <p>{name}</p>
                    <div className={styles.details}>
                    
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9.47V11h3.76L13 14.53V13H9.24zM13 1L6 15h5v8l7-14h-5z"/></svg>
                            {horsePower}
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.6.6 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>
                            {transmission}
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10.45 15.5q.6.6 1.55.588t1.4-.688l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.675.45-.712 1.375t.562 1.525M12 4q.9 0 1.775.15t1.7.475q.4.15.85.563t.25.787t-.9.5t-1.125-.025q-.625-.225-1.262-.337T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.65-.113-1.275T19.55 11.4q-.15-.425-.05-.825t.45-.675q.325-.25.713-.15t.537.45q.375.875.575 1.788T22 13.85q.025 1.425-.325 2.725T20.65 19.05q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"/></svg>
                            {acceleration}
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M42 42V6h-3l-9 10H12l-6 6v20z"/><path strokeLinecap="round" d="M12 16L22 6h18M20.643 28.889c1.431-1.88 2.535-4.479 3.131-5.889c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M11 8l-7 7"/></g></svg>
                            {tank}
                        </span>
                    </div>
                    <div className={styles.brand}>
                        <img className={styles.carImage} src={image} loading='lazy' alt={name} />
                        <p>{discount > 0 && discount < 1 ?
                            <div><span className={styles.OldPrice}> {price} </span>
                            <span className={styles.NewPrice}>
                                {parseFloat(price)*discount}$ / day
                            </span></div> 
                            :
                            <span> 
                                {parseFloat(price)*discount}$ / day
                            </span>
                            }
                            
                        </p>
                    </div>
                </div>
            </div>
            
            
            </div>{
                isReserved ?
                <div className={styles.wrapper}> 
                    <svg className={styles.checkmark} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 52 52"> 
                        <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none"/> 
                        <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                    <span className={styles.checkmarkText}>Reservation successful</span>
                </div>
                : null
            }
        </div>
    );
};

export default ReservationForm;
