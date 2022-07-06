import React from 'react';
import styles from './Shop.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import bgImg from '../../Media/shop-bg.png'
import image1 from '../../Media/Shop/01.png'
import image2 from '../../Media/Shop/02.png'
import image3 from '../../Media/Shop/03.png'
import ProductCard from './ProductCard/ProductCard';

const Shop = () => {

    const products = [
        {
            title: 'XXX Whey Protien',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit tempus sem eu vestibulum. Curabitur finibus urna id cursus consequat. Quisque convallis cursus sagittis. Pellentesque iaculis risus quis dui suscipit consequat. Vivamus vel massa non tellus posuere dapibus eu ac nulla. Vivamus vitae velit vestibulum, sodales dolor auctor, laoreet ipsum. Fusce porttitor ex eu neque lobortis, sed tempus diam sodales. Donec pharetra condimentum consectetur. Nam tincidunt purus ex, sed consequat augue molestie a. Duis consectetur velit a erat convallis tempus. Proin mattis, ligula ut condimentum suscipit, dui augue pretium sapien, at mollis est ex mollis ipsum. Etiam a posuere libero. Suspendisse commodo vestibulum ante ut venenatis. Nunc vel orci finibus, faucibus dui non, egestas ligula. Vivamus auctor nisi id tellus aliquet, id molestie urna placerat.',
            category: 'Lorem Ipsum',
            age: '18+',
            features: [
                'Feature-1',
                'Feature-2',
                'Feature-3',
                'Feature-4',
                'Feature-5',
                'Feature-6'
            ],
            img: image1,
            price: 4000,
            discount: {
                type: 'percent',
                amt: 10
            },
            available: 15,
            reviews: [
                {
                    name: "Jasjot Singh",
                    rating: 4,
                    review: 'Awesome Product @ Best Price ...'
                },
                {
                    name: "Sharry Mann",
                    rating: 5,
                    review: ''
                },
            ]
        },
        {
            title: 'XXX Smart Watch',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit tempus sem eu vestibulum. Curabitur finibus urna id cursus consequat. Quisque convallis cursus sagittis. Pellentesque iaculis risus quis dui suscipit consequat. Vivamus vel massa non tellus posuere dapibus eu ac nulla. Vivamus vitae velit vestibulum, sodales dolor auctor, laoreet ipsum. Fusce porttitor ex eu neque lobortis, sed tempus diam sodales. Donec pharetra condimentum consectetur. Nam tincidunt purus ex, sed consequat augue molestie a. Duis consectetur velit a erat convallis tempus. Proin mattis, ligula ut condimentum suscipit, dui augue pretium sapien, at mollis est ex mollis ipsum. Etiam a posuere libero. Suspendisse commodo vestibulum ante ut venenatis. Nunc vel orci finibus, faucibus dui non, egestas ligula. Vivamus auctor nisi id tellus aliquet, id molestie urna placerat.',
            category: 'Lorem Ipsum',
            age: '0+',
            features: [
                'Feature-1',
                'Feature-2',
                'Feature-3',
                'Feature-4'
            ],
            img: image2,
            price: 2400,
            discount: {
                type: 'flat',
                amt: 400
            },
            available: 0,
            reviews: []
        },
        {
            title: 'XXX Nutrients',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit tempus sem eu vestibulum. Curabitur finibus urna id cursus consequat. Quisque convallis cursus sagittis. Pellentesque iaculis risus quis dui suscipit consequat. Vivamus vel massa non tellus posuere dapibus eu ac nulla. Vivamus vitae velit vestibulum, sodales dolor auctor, laoreet ipsum. Fusce porttitor ex eu neque lobortis, sed tempus diam sodales. Donec pharetra condimentum consectetur. Nam tincidunt purus ex, sed consequat augue molestie a. Duis consectetur velit a erat convallis tempus. Proin mattis, ligula ut condimentum suscipit, dui augue pretium sapien, at mollis est ex mollis ipsum. Etiam a posuere libero. Suspendisse commodo vestibulum ante ut venenatis. Nunc vel orci finibus, faucibus dui non, egestas ligula. Vivamus auctor nisi id tellus aliquet, id molestie urna placerat.',
            category: 'Lorem Ipsum',
            age: '18+ M',
            features: [
                'Feature-1',
                'Feature-2',
                'Feature-3'
            ],
            img: image3,
            price: 8000,
            discount: {
                type: 'percent',
                amt: 40
            },
            available: 10,
            reviews: [
                {
                    name: "Jasjot Singh",
                    rating: 4,
                    review: 'Awesome Product @ Best Price ...'
                }
            ]
        },
    ]

    return (
        <>
            <Navbar currentPage='Shop' bgColor='dark' />
            <div className={`${styles.shop}`}>
                <div className='image-header'>
                    <img src={bgImg} alt="" />
                    <div>SHOP</div>
                </div>
                <div className='content-section'>
                    <div className={styles.products}>
                        {products.map((product, index) =>
                            <ProductCard product={product} key={index} />
                        )}
                    </div>
                </div>
            </div>
            <Footer currentPage='Shop' bgColor='dark' />
        </>
    );
}

export default Shop;
