import React from 'react'
import styles from './Cart.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import bgImg from '../../Media/cart-bg.png'
import CartItem from './CartItem/CartItem';
export default function Cart() {
    return (
        <>
            <Navbar currentPage='Cart' bgColor='dark' />
            <div className={styles.cart}>
                <div className='image-header'>
                    <img src={bgImg} alt="" />
                    <div>CART</div>
                </div>
                <div className='content-section'>
                    <div className={styles.cartDiv}>
                        <div className={styles.leftSection}>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className={styles.rightSection}></div>
                    </div>
                </div>
            </div>
            <Footer currentPage='Cart' bgColor='dark' />
        </>
    )
}
