import styles from "./ClientReviews.module.css";
import ReviewCard from "./ReviewCard";
//import imgSrc from './irene.jpg';
import user1 from './user.jpg';
import user2 from './user2.jpg';
import user3 from './user3.jpg';

const reviews = [
    {
        text: 'Such a great experience renting a car here! Everything was super quick and easy, and the staff were so nice. The car drove like a dream—can’t wait to rent again!',
        author: 'John Doe',
        imgSrc: user2,
    },
    {
        text: 'Highly recommend this rental company! The prices were fair, and the car exceeded my expectations in both cleanliness and performance. It made my vacation stress-free and enjoyable.',
        author: 'Jane Smith',
        imgSrc: user1,
    },
    {
        text: 'These guys are awesome! Booking was simple, the car was spotless, and they really cared about making sure everything went smoothly. I’ll definitely use them again!',
        author: 'Michael Brown',
        imgSrc: user3,
    },
];

function ClientReviews() {
    return (
        <div className={styles.curvedContainer}>
            <div className={styles.content}>
                <h2 className={styles.title}>Client Reviews</h2>
                <div className={styles.container}>
                    {reviews.map((review, index) => (
                        <ReviewCard 
                            key={index} 
                            img={review.imgSrc} 
                            text={review.text} 
                            author={review.author} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClientReviews;
