import React, { useState } from 'react'
import { Lightbox } from "react-modal-image";

import styles from './Gallery.module.css';

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import bgImg from '../../Media/gallery-bg.png'
import image1 from '../../Media/Gallery/01.png'
import image2 from '../../Media/Gallery/02.png'
import image3 from '../../Media/Gallery/03.png'
import image4 from '../../Media/Gallery/04.png'
import image5 from '../../Media/Gallery/05.png'
import image6 from '../../Media/Gallery/06.png'
import image7 from '../../Media/Gallery/07.png'
import image8 from '../../Media/Gallery/08.png'
import image9 from '../../Media/Gallery/09.png'
import image10 from '../../Media/Gallery/10.png'
import image11 from '../../Media/Gallery/11.png'
import image12 from '../../Media/Gallery/12.png'
import image13 from '../../Media/Gallery/13.png'

export default function Gallery() {

    const images = [
        {
            title: 'image-1',
            url: image1
        },
        {
            title: 'image-2',
            url: image2
        },
        {
            title: 'image-3',
            url: image3
        },
        {
            title: 'image-4',
            url: image4
        },
        {
            title: 'image-5',
            url: image5
        },
        {
            title: 'image-6',
            url: image6
        },
        {
            title: 'image-7',
            url: image7
        },
        {
            title: 'image-8',
            url: image8
        },
        {
            title: 'image-9',
            url: image9
        },
        {
            title: 'image-10',
            url: image10
        },
        {
            title: 'image-11',
            url: image11
        },
        {
            title: 'image-12',
            url: image12
        },
        {
            title: 'image-13',
            url: image13
        },
    ]

    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesArr, setImagesArr] = useState(images.slice(0, 12));
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    let imagesNumber = images.length;
    if (pages === 0) {
        if (imagesNumber > 12) {
            setPages(imagesNumber % 12 === 0 ? imagesNumber / 12 : parseInt(imagesNumber / 12) + 1);
        }
        else setPages(1);
    }

    return (
        <>
            <Navbar currentPage='Gallery' bgColor='dark' />
            <div className={`${styles.gallery}`}>
                <div className='image-header'>
                    <img src={bgImg} alt="" />
                    <div>GALLERY</div>
                </div>
                <div id='gallery' className={`content-section ${styles.modified}`}>
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
                        {imagesArr.map((image, index) => <div key={index} className={styles.thumbnail} onClick={() => { setCurrentImage(image); setIsOpen(true); }}> <img src={image.url} alt={image.title} /> </div>)}
                    </div>
                    <div className={styles.pagination}>
                        <div className={styles.paginationInnerDiv}>
                            {Array.from({ length: pages }, (_, k) => (
                                <div onClick={() => {
                                    setCurrentPage(k + 1);
                                    setImagesArr(images.slice((12 * (k)), (12 * (k + 1))));
                                    window.scrollTo({
                                        top: document.querySelector("#gallery").scrollTop,
                                        behavior: 'smooth',
                                    });
                                }} key={k} className={`${styles.pageNumber} ${currentPage === k + 1 ? styles.currentPage : ''}`}>{k + 1}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && currentImage !== null && <Lightbox
                medium={currentImage.url}
                hideZoom
                hideDownload
                showRotate
                alt={currentImage.title}
                onClose={() => setIsOpen(false)}
            />}
            <Footer currentPage='About' bgColor='dark' />
        </>
    )
}
