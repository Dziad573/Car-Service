import styles from './ReviewCard.module.css';


function RewiewCard({ img }) {
const review = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi voluptate quae animi vel culpa qui architecto',
            author: 'John Doe'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi voluptate quae animi vel culpa qui architecto',
            author: 'John Doe'
        },
    ]    
    return (
        <div className={styles.review}>
        <div className={styles.image}>
            <img className={styles.reviewImage} src={img} alt="" />
        </div>
        <h3>{review[0].author}</h3>
        <p>{review[0].text}</p>
        </div>
    );
}

export default RewiewCard;