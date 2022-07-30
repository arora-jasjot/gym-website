import React, { useState } from 'react'
import styles from './Account.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Profile from './Profile/Profile';
import Security from './Security/Security';
import Orders from './Orders/Orders';
export default function Account() {
    const [tab, selectTab] = useState('profile');
    return (
        <>
            <Navbar currentPage='Account' bgColor='dark' />
            <div className={styles.account}>
                <div className='content-section'>
                    <div className={styles.accountDiv}>
                        <div className={styles.leftSection}>
                            <div className={`${styles.tab} ${tab === 'profile' ? styles.selected : ''}`} onClick={() => selectTab('profile')}>Profile</div>
                            <div className={`${styles.tab} ${tab === 'security' ? styles.selected : ''}`} onClick={() => selectTab('security')}>Security</div>
                            <div className={`${styles.tab} ${tab === 'orders' ? styles.selected : ''}`} onClick={() => selectTab('orders')}>Orders</div>
                        </div>
                        <div className={styles.rightSection}>
                            {
                                tab === 'profile' ? <Profile /> : (tab === 'security' ? <Security /> : <Orders />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer currentPage='Account' bgColor='dark' />
        </>
    )
}
