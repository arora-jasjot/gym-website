import React from 'react'
import styles from './CartItem.module.css'
import img from '../../../Media/about-bg.png'
import { FaStar, FaStarHalf, FaTrashAlt } from 'react-icons/fa';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

export default function CartItem() {
    return (
        <div className={styles.CartItem}>
            <div className={styles.image}>
                <img src={img} alt="product-image" />
            </div>
            <div className={styles.ProductDescription}>
                <h1>Product Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                </div>
            </div>
            <div className={styles.leftInner}>
                <div className={styles.quantity}>
                    <div><AiFillMinusSquare /></div>
                    <div className={styles.number}>2</div>
                    <div><AiFillPlusSquare /></div>
                </div>
                <div className={styles.price}>₹ 3400/-</div>
                <div className={styles.deleteBtn}><FaTrashAlt /></div>
            </div>
        </div>
    )
}
