import React, { useState } from 'react'
import styles from './ProductCard.module.css'
import { FaStar, FaStarHalf } from 'react-icons/fa';

export default function ProductCard({ product }) {

    const [fullRate, setFullRate] = useState(null);
    const [halfRate, setHalfRate] = useState(0);

    if (fullRate === null || halfRate === null) {
        let rating = 0, rr = 0;
        product.reviews.forEach((review) => rating += review.rating);
        if (rating !== 0) rating = rating / product.reviews.length;
        rr = rating - parseInt(rating);
        rating = parseInt(rating);
        setFullRate(rating);
        setHalfRate(rr);
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.rating}>
                {fullRate !== null && Array.from({ length: fullRate }).map((e, i) => <FaStar key={i} />)}
                {halfRate !== 0 && <FaStarHalf />}
            </div>
            <div className={styles.productImage}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.productBody}>
                <div className={styles.productLabel}>Discount : 10%</div>
                <div className={styles.productName}>XXX Body Whey Protien</div>
                <div className={styles.productDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div>
                <div className={styles.productPrice}>₹ 3600 <span>₹ 4000</span></div>
            </div>
            <div className={styles.orderNowBtn}>Order Now</div>
        </div>
    )
}
