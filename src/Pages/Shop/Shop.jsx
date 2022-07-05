import React from 'react';
import styles from './Shop.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import bgImg from '../../Media/shop-bg.png'

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
                        <div className={styles.productImage}></div>
                        <div className={styles.productBody}>
                            <div className={styles.productLabel}>Discount : 10%</div>
                            <div className={styles.productName}>XXX Body Whey Protien</div>
                            <div className={styles.productDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div>
                            <div className={styles.productPrice}>₹ 3500</div>
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
