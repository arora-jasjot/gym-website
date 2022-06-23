import React, { Component } from 'react'
import styles from './Navbar.module.css'
import logo from '../../Media/logo.png'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default class Navbar extends Component {
    render() {
        const currentPage = this.props.currentPage;
        return (
            <div className={`flex align-center ${styles.navbar} ${currentPage === 'Home' ? styles.noBorder : ''}`}>
                <div>
                    <img src={logo} height='40px' alt="Logo" />
                </div>
                <div className={`flex align-center ${styles.navsList}`}>
                    <div className={currentPage === 'Home' ? 'text-primary-color' : ""}>Home</div>
                    <div className={currentPage === 'About' ? 'text-primary-color' : ""}>About</div>
                    <div className={currentPage === 'Gallery' ? 'text-primary-color' : ""}>Gallery</div>
                    <div className={currentPage === 'Shop' ? 'text-primary-color' : ""}>Shop</div>
                    <div className={currentPage === 'Join' ? 'text-primary-color' : ""}>Join</div>
                    <div className={currentPage === 'Cart' ? 'text-primary-color' : ""}><FaShoppingCart /></div>
                    <div className={currentPage === 'Account' ? 'text-primary-color' : ""}><FaUserAlt /></div>
                </div>
                <div className={`${styles.menuButton}`}><GiHamburgerMenu /></div>
            </div>
        )
    }
}
