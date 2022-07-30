import React, { Component } from 'react'
import styles from './About.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import bgImg from '../../Media/about-bg.png'
import image1 from '../../Media/Gallery/01.png'
import image2 from '../../Media/Gallery/02.png'
import image3 from '../../Media/Gallery/03.png'
import image4 from '../../Media/Gallery/04.png'

export default class About extends Component {
    render() {
        return (
            <>
                <Navbar currentPage='About' bgColor='dark' />
                <div className={`${styles.about}`}>
                    <div className='image-header'>
                        <img src={bgImg} alt="" />
                        <div>ABOUT</div>
                    </div>
                    <div className='content-section'>
                        <div className='paragraph'>
                            <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Proin eu laoreet sem. Nullam et nisi sem. Mauris congue ligula id dolor feugiat varius. Fusce et interdum magna. Etiam elementum mauris nec eros sagittis, et dignissim arcu posuere. Vivamus non congue magna. Nam sed tincidunt est. Nunc cursus augue at sem mattis commodo.
                        </div>
                        <div className='paragraph'>
                            Donec in dignissim nunc. Donec fermentum lobortis neque, in iaculis purus vestibulum at. Proin velit tortor, tincidunt id quam ut, sodales laoreet augue. In ac lobortis justo. Suspendisse vel tortor neque. Aliquam erat volutpat. Mauris eu nunc at velit tristique sollicitudin eleifend vitae nibh. Pellentesque at nisi et magna iaculis lobortis. In luctus laoreet elit nec scelerisque. Curabitur scelerisque hendrerit purus, id lacinia ante efficitur sed. Donec mattis elementum euismod. In volutpat accumsan libero. Curabitur a orci et dolor tincidunt tristique. Aenean mattis sem quis imperdiet sodales. Proin id lorem neque. Praesent blandit metus non semper hendrerit.
                        </div>
                    </div>
                    <div className={styles.imagesDiv}>
                        <div className={styles.imagesBackground}></div>
                        <div className={styles.images}>
                            <div className={styles.thumbnail}><img src={image1} alt="image1" /></div>
                            <div className={styles.thumbnail}><img src={image2} alt="image2" /></div>
                            <div className={styles.thumbnail}><img src={image3} alt="image3" /></div>
                            <div className={styles.thumbnail}><img src={image4} alt="image4" /></div>
                        </div>
                    </div>
                </div>
                <Footer currentPage='About' bgColor='dark' />
            </>
        )
    }
}
