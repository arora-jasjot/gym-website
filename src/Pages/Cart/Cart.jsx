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
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className={styles.rightSection}>
                            <div className={styles.couponDiv}>
                                <div className={styles.label}>Apply Coupon</div>
                                <input type="text" />
                                <div className={styles.submit}>Submit</div>
                            </div>
                            <div className={styles.pricingDiv}>
                                <div className={styles.label}>Price Details</div>
                                <div className={styles.field}>
                                    <div>Amount</div>
                                    <div>₹ 1200/-</div>
                                </div>
                                <div className={styles.field}>
                                    <div>Discount</div>
                                    <div>₹ 1200/-</div>
                                </div>
                                <div className={styles.field}>
                                    <div>Shipping Charges</div>
                                    <div>₹ 1200/-</div>
                                </div>
                                <div className={styles.field}>
                                    <div>Taxable Amount</div>
                                    <div>₹ 1200/-</div>
                                </div>
                                <div className={styles.field}>
                                    <div>SGST</div>
                                    <div>₹ 1200/-</div>
                                </div>
                                <div className={styles.field}>
                                    <div>CGST</div>
                                    <div>₹ 1200/-</div>
                                </div>
                                <div className={`${styles.total} ${styles.field}`}>
                                    <div>Total</div>
                                    <div>₹ 1200/-</div>
                                </div>
                                <div className={styles.checkout}>Checkout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer currentPage='Cart' bgColor='dark' />
        </>
    )
}
