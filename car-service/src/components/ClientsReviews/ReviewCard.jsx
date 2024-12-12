import styles from './ReviewCard.module.css';

function ReviewCard({ img, text, author }) {
    return (
        <div className={styles.review}>
            <div className={styles.image}>
                <img className={styles.reviewImage} src={img} alt="Client portrait" />
            </div>
            <h3 className={styles.author}>{author}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default ReviewCard;
