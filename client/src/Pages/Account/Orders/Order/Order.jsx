import React from 'react'
import styles from './Order.module.css'
import image from '../../../../Media/about-bg.png'

export default function Order() {
    return (
        <div className={styles.order}>
            <div className={styles.inner}>
                <div className={styles.image}>
                    <img src={image} alt="product" />
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>hberwe</div>
                    <div className={styles.quantity}>Quantity : 3</div>
                    <div className={styles.amount}>Amount Paid : ₹ 3200/-</div>
                    <div className={styles.method}>Payment Method : Cash</div>
                    <div className={styles.orderId}>Order Id : OID20220715001</div>
                </div>
                <div className={styles.date}>15-07-2022</div>
            </div>
        </div>
    )
}
