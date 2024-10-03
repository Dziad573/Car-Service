import React from "react";
import styles from "./BrandName.module.css";

function BrandName({ brand, imgSrc }) {
    return (
        <div className={styles.brand}>
            <img src={imgSrc} alt={brand} />
            {/* <h1>{brand}</h1> */}
        </div>
    );
}

export default BrandName;