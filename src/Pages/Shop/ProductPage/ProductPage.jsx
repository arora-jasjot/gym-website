import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import styles from './ProductPage.module.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

export default function ProductPage() {
    const state = useSelector(state => state);
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

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
                        <div className={styles.leftSection}>
                            <div className={styles.image}>
                                <img src={product.img} alt={product.title} />
                            </div>
                            <div className={styles.category}>{product.category}</div>
                            <div className={styles.age}>{product.age}</div>
                            <div className={styles.rating}>4.5</div>
                            <div className={styles.button}>Add to Cart</div>
                        </div>
                        <div className={styles.rightSection}>
                            <div className={styles.name}>{product.title}</div>
                            <div className={styles.description}>{product.description}</div>
                            <div className={styles.features}></div>
                        </div>
                    </div>
                </div>
            }
            <Footer currentPage='Shop' bgColor='dark' />
        </>
    )
}
