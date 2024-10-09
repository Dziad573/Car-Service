import styles from "./ClientReviews.module.css";
import ReviewCard from "./ReviewCard";
import imgSrc from './irene.jpg';

function ClientReviews() {
    return (
        <>
            {/* <div className="client-reviews">
            <h2 className="client-reviews__title">Client Reviews</h2>
            <div className="client-reviews__container">
                <ClientReview />
                <ClientReview />
                <ClientReview /> 
            </div>
            </div>*/}
            
            <div className={styles.curvedContainer}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Client Reviews</h2>
                    <div className={styles.container}>
                        <ReviewCard img={imgSrc} />
                        <ReviewCard img={imgSrc}/>
                        <ReviewCard img={imgSrc}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientReviews;