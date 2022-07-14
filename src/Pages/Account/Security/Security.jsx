import React from 'react'
import styles from './Security.module.css'

export default function Security() {
    return (
        <div className={styles.securityDiv}>
            <div className={styles.unit}>
                <label>Current Password:</label>
                <input type="password" />
            </div>
            <div className={styles.unit}>
                <label>New Password:</label>
                <input type="password" />
            </div>
            <div className={styles.unit}>
                <label>Confirm Password:</label>
                <input type="password" />
            </div>
            <div className={styles.btn}>Submit</div>
        </div>
    )
}
