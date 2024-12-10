import React from "react";
import BrandName from "./BrandName";
import styles from "./BrandSlider.module.css";
// import all from "../../assets/all.png";
import ferrariLogo from "../../assets/ferrari.png";
import lamborghiniLogo from "../../assets/lamborghini.png";
import dodgeLogo from "../../assets/dodge.png";
import jaguarLogo from "../../assets/jaguar.png";
import hyundaiLogo from "../../assets/hyundai.png";
import bmwLogo from "../../assets/bmw.png";
import toyotaLogo from "../../assets/toyota.png";
import mazdaLogo from "../../assets/mazda.png";
import audiLogo from "../../assets/audi.png";
import fordLogo from "../../assets/ford.png";

function BrandSlider({ onBrandSelect }) {
    const brands = [
        { brand: "Ferrari", imgSrc: ferrariLogo },
        { brand: "Lamborghini", imgSrc: lamborghiniLogo },
        { brand: "Dodge", imgSrc: dodgeLogo },
        { brand: "Jaguar", imgSrc: jaguarLogo },
        { brand: "Hyundai", imgSrc: hyundaiLogo },
        { brand: "BMW", imgSrc: bmwLogo },
        { brand: "Toyota", imgSrc: toyotaLogo },
        { brand: "Mazda", imgSrc: mazdaLogo },
        { brand: "Audi", imgSrc: audiLogo },
        { brand: "Ford", imgSrc: fordLogo },
    ];

    return (
        <div className={styles.sliderContainer}>
            
            <div className={styles.slider}>
                <button 
                    className={styles.clearButton} 
                    onClick={() => onBrandSelect("")}
                >
                Clear
                </button>
                {brands.map((item, index) => (
                    <BrandName 
                        key={index} 
                        brand={item.brand} 
                        imgSrc={item.imgSrc} 
                        onClick={() => onBrandSelect(item.brand)}
                    />
                ))}
            </div>
        </div> 
    );
}

export default BrandSlider;
