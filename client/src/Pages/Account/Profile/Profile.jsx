import React from 'react'
import { useState } from 'react'
import styles from './Profile.module.css'

export default function Profile() {
    const [inputAccess, setAccess] = useState(true);
    return (
        <div className={styles.profileDiv}>
            <div className={styles.head}>
                <div className={styles.heading}>Profile</div>
                <div className={`${styles.edit} ${inputAccess ? '' : styles.saveBtn}`} onClick={() => setAccess(e => !e)}>{inputAccess ? 'Edit Profile' : 'Save Changes'}</div>
            </div>
            <div className={styles.profile}>
                <div className={styles.unit}>
                    <label>Name :</label>
                    <input type="text" value={"Jasjot"} readOnly={inputAccess} />
                </div>
                <div className={styles.unit}>
                    <label>email :</label>
                    <input type="email" value={"jasjotsinghxxx@gmail.com"} readOnly={inputAccess} />
                </div>
                <div className={styles.unit}>
                    <label>Contact :</label>
                    <input type="number" value={97360100000} readOnly={inputAccess} />
                </div>
                <div className={styles.unit}>
                    <label>Plan :</label>
                    <input type="text" value={"None"} readOnly />
                </div>
                <div className={styles.unit}>
                    <label>Address :</label>
                    <textarea type="email" value={"House No. 0001, Mohalla Unknwown, Ward Number 69, Una"} readOnly={inputAccess} />
                </div>
            </div>
        </div >
    )
}
