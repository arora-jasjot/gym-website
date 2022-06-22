import React, { Component } from 'react'
import styles from './Home.module.css';
import bgImg from '../Media/home-bg.png'

export default class Home extends Component {
    render() {
        return (
            <div className={`flex justify-center align-center ${styles.home}`}>
                <div className={`overflow-hidden ${styles.imgBackground}`}>
                    <img src={bgImg} className={styles.bgImg} alt="backgound_image" />
                </div>
                <div className={`flex justify-center align-center flex-col ${styles.homeContent}`}>
                    <div className={styles.heading}>BIG BOYS</div>
                    <div className={styles.subHeading}>Commit to be <span className='text-primary-color'>fit</span>...</div>
                    <div className={styles.button}>
                        <div className={`flex justify-center align-center ${styles.buttonDiv}`}>Join Now</div>
                    <div className={styles.maskButton}></div></div>
                </div>
            </div>
        )
    }
}
