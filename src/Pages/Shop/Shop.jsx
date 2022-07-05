import React from 'react';
import styles from './Shop.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import bgImg from '../../Media/shop-bg.png'
import { FaStar, FaStarHalf } from 'react-icons/fa';
import image1 from '../../Media/Shop/01.png'
import image2 from '../../Media/Shop/02.png'
import image3 from '../../Media/Shop/03.png'

const Shop = () => {
    return (
        <>
            <Navbar currentPage='Shop' bgColor='dark' />
            <div className={`${styles.shop}`}>
                <div className='image-header'>
                    <img src={bgImg} alt="" />
                    <div>SHOP</div>
                </div>
                <div className='content-section'>
                    <div className={styles.productCard}>
                        <div className={styles.rating}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                        </div>
                        <div className={styles.productImage}>
                            <img src={image1} alt="image1" />
                        </div>
                        <div className={styles.productBody}>
                            <div className={styles.productLabel}>Discount : 10%</div>
                            <div className={styles.productName}>XXX Body Whey Protien</div>
                            <div className={styles.productDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div>
                            <div className={styles.productPrice}>₹ 3600 <span>₹ 4000</span></div>
                        </div>
                        <div className={styles.orderNowBtn}>Order Now</div>
                    </div>
                </div>
            </div>
            <Footer currentPage='Shop' bgColor='dark' />
        </>
    );
}

export default Shop;
