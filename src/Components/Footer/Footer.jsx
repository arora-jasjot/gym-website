import React, { Component } from 'react'
import styles from './Footer.module.css'
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';


export default class Footer extends Component {
    render() {
        const currentPage = this.props.currentPage;
        return (
            <div className={`flex flex-wrap align-center ${styles.footer} ${currentPage === 'Home' ? styles.noBorder : ''}`}>
                <div className={`${styles.socialHandle}`}>
                    <a className='flex jsutify-center align-center' href="/"><FaFacebookF className={styles.icon} /> <span>Facebook</span></a>
                </div>
                <div className={`${styles.socialHandle}`}>
                    <a className='flex jsutify-center align-center' href="/"><FaInstagram className={styles.icon} /> <span>Instagram</span></a>
                </div>
                <div className={`${styles.socialHandle}`}>
                    <a className='flex jsutify-center align-center' href="/"><MdMail className={styles.icon} /> <span>xxx@xxx.com</span></a>
                </div>
                <div className={`${styles.socialHandle}`}>
                    <a className='flex jsutify-center align-center' href="/"><FaPhoneAlt className={styles.icon} /> <span>9999999999</span></a>
                </div>
            </div>
        )
    }
}
