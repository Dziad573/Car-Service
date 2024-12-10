import React from "react";
import styles from "./BrandName.module.css";

function BrandName({ brand, imgSrc, onClick }) {
    return (
        <div className={styles.brand} onClick={onClick}>
            {imgSrc ? (
                <img src={imgSrc} loading='lazy' alt={brand} />
            ) : (
                <p>{brand}</p>
            )}
        </div>
    );
}

export default BrandName;
