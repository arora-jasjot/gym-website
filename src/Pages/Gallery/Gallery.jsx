import React, { Component } from 'react'
import styles from './Gallery.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import bgImg from '../../Media/gallery-bg.png'

import image1 from '../../Media/Gallery/01.png'
import image2 from '../../Media/Gallery/02.png'
import image3 from '../../Media/Gallery/03.png'
import image4 from '../../Media/Gallery/04.png'

export default class Gallery extends Component {
    render() {
        return (
            <>
                <Navbar currentPage='Gallery' bgColor='dark' />
                <div className={`${styles.gallery}`}>
                    <div className='image-header'>
                        <img src={bgImg} alt="" />
                        <div>GALLERY</div>
                    </div>
                    <div className='content-section'>
                        <div className={styles.background}>
                            <div className={styles.bgBox}>
                                <div className={styles.bgColor1}></div>
                                <div className={styles.bgColor2}></div>
                            </div>
                            <div className={styles.bgBox}>
                                <div className={styles.bgColor2}></div>
                                <div className={styles.bgColor1}></div>
                            </div>
                        </div>
                        <div className={styles.images}>
                            <div className={styles.thumbnail}> <img src={image1} alt="image1" /> </div>
                            <div className={styles.thumbnail}> <img src={image2} alt="image2" /> </div>
                            <div className={styles.thumbnail}> <img src={image3} alt="image3" /> </div>
                            <div className={styles.thumbnail}> <img src={image4} alt="image4" /> </div>
                            <div className={styles.thumbnail}> <img src={image1} alt="image1" /> </div>
                            <div className={styles.thumbnail}> <img src={image2} alt="image2" /> </div>
                            <div className={styles.thumbnail}> <img src={image3} alt="image3" /> </div>
                            <div className={styles.thumbnail}> <img src={image4} alt="image4" /> </div>
                            <div className={styles.thumbnail}> <img src={image1} alt="image1" /> </div>
                            <div className={styles.thumbnail}> <img src={image2} alt="image2" /> </div>
                            <div className={styles.thumbnail}> <img src={image3} alt="image3" /> </div>
                            <div className={styles.thumbnail}> <img src={image4} alt="image4" /> </div>
                        </div>
                    </div>
                    <div className={styles.pagination}> </div>
                </div>
                <Footer currentPage='About' bgColor='dark' />
            </>
        )
    }
}
