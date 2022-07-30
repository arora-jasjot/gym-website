import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from './ProductPage.module.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FaStar, FaStarHalf } from 'react-icons/fa';

export default function ProductPage() {
    const state = useSelector(state => state);
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [fullRate, setFullRate] = useState(null);
    const [halfRate, setHalfRate] = useState(0);
    const [amt, setAmt] = useState(0);
    const [discount, setDiscount] = useState(0);

    if (fullRate === null && product !== null) {
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

    useEffect(() => {
        if (state.product === null) navigate('/shop');
        setProduct(state.product);
    }, [state.product, navigate]);

    return (
        <>
            <Navbar currentPage='Shop' bgColor='dark' />
            {product !== null &&
                <div className={styles.ProductPage}>
                    <div className='content-section'>
                        <div className={styles.productDiv}>
                            <div className={styles.leftSection}>
                                <div className={styles.productLabel}>Discount : {product.discount.type === 'percent' ? product.discount.amt + '%' : product.discount.amt + "/-"}</div>
                                <div className={styles.image}>
                                    <img src={product.img} alt={product.title} />
                                </div>
                                <div className={styles.leftInner}>
                                    <div className={styles.leftName}>{product.title}</div>
                                    <div className={styles.category}>{product.category}</div>
                                    <div className={styles.age}>{product.age}</div>
                                    {fullRate > 0 && <div className={styles.rating}>
                                        {fullRate !== null && Array.from({ length: fullRate }).map((e, i) => <FaStar key={i} />)}
                                        {halfRate !== 0 && <FaStarHalf />}
                                    </div>}
                                    <div className={styles.productPrice}>
                                        ₹ {Number(amt - discount)} <span>₹ {amt}</span>
                                    </div>
                                    <div className={styles.buttonDiv}><button>Add to cart</button></div>
                                </div>
                            </div>
                            <div className={styles.rightSection}>
                                <div className={styles.name}>{product.title}</div>
                                <div className={styles.description}>{product.description}</div>
                                <div className={styles.features}>
                                    <div className={styles.subheading}>Features :</div>
                                    <ul>
                                        {product.features.map((feature, index) => <li key={index}>{feature}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer currentPage='Shop' bgColor='dark' />
        </>
    )
}
