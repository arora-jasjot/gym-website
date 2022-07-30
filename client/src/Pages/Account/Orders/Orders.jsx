import React from 'react'
import Order from './Order/Order'
import styles from './Orders.module.css'

export default function Orders() {
    return (
        <div className={styles.ordersDiv}>
            <Order />
            <Order />
            <Order />
        </div>
    )
}
