import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setProduct } from '../../../Actions';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [fullRate, setFullRate] = useState(null);
    const [halfRate, setHalfRate] = useState(0);
    const [amt, setAmt] = useState(0);
    const [discount, setDiscount] = useState(0);

    if (fullRate === null) {
        let rating = 0, rr = 0;
        product.reviews.forEach((review) => rating += review.rating);
        if (rating !== 0) rating = rating / product.reviews.length;
        rr = rating - parseInt(rating);
        rating = parseInt(rating);
        setFullRate(rating);
        setHalfRate(rr);
        setAmt(product.price);
        if (product.discount.type === 'percent') setDiscount(((product.discount.amt / 100) * product.price).toFixed(2));
        else setDiscount(product.discount.amt);
    }

    const order = () => {
        dispatch(setProduct(product));
        navigate('/product');
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
                <div className={styles.productLabel}>Discount : {product.discount.type === 'percent' ? product.discount.amt + '%' : product.discount.amt + "/-"}</div>
                <div className={styles.productName}>{product.title}</div>
                <div className={styles.productDescription}>{product.desc} </div>
                <div className={styles.productPrice}>₹ {Number(amt - discount)} <span>₹ {amt}</span></div>
            </div>
            <div className={styles.orderNowBtn} onClick={order}>Order Now</div>
        </div>
    )
}
