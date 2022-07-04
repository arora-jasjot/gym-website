import React, { Component } from 'react'
import styles from './Navbar.module.css'
import logo from '../../Media/logo.png'
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default class Navbar extends Component {
    render() {
        const currentPage = this.props.currentPage;
        const bgColor = this.props.bgColor;
        const scrollTop = () => {
            window.scrollTo(0, 0);
        }
        return (
            <div className={`flex align-center ${styles.navbar} ${currentPage === 'Home' ? styles.noBorder : ''} ${bgColor === 'dark' ? 'navbar-bg-color' : ''}`}>
                <div className='flex justify-center align-center'>
                    <img src={logo} height='25px' alt="Logo" />
                </div>
                <div className={`flex align-center ${styles.navsList}`}>
                    <Link to='/' onClick={() => scrollTop()}><div className={currentPage === 'Home' ? 'text-primary-color' : ""}>Home</div></Link>
                    <Link to='/about' onClick={() => scrollTop()}><div className={currentPage === 'About' ? 'text-primary-color' : ""}>About</div></Link>
                    <Link to='/gallery' onClick={() => scrollTop()}><div className={currentPage === 'Gallery' ? 'text-primary-color' : ""}>Gallery</div></Link>
                    <Link to='/' onClick={() => scrollTop()}><div className={currentPage === 'Shop' ? 'text-primary-color' : ""}>Shop</div></Link>
                    <Link to='/' onClick={() => scrollTop()}><div className={currentPage === 'Join' ? 'text-primary-color' : ""}>Join</div></Link>
                    <Link to='/' onClick={() => scrollTop()}><div className={currentPage === 'Cart' ? 'text-primary-color' : ""}><FaShoppingCart /></div></Link>
                    <Link to='/' onClick={() => scrollTop()}><div className={currentPage === 'Account' ? 'text-primary-color' : ""}><FaUserAlt /></div></Link>
                </div>
                <div className={`${styles.menuButton}`}><GiHamburgerMenu /></div>
            </div>
        )
    }
}
