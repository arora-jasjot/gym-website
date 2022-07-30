import React from 'react'
import styles from './Join.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { AiFillFire } from 'react-icons/ai';

export default function Join() {
    return (
        <>
            <Navbar currentPage='Join' bgColor='dark' />
            <div className={`${styles.join}`}>
                <div className='content-section'>
                    <p className={styles.content}>Build you as the BEST in the city... Join the BEST in the city...</p>
                    <div className={styles.plansDiv}>
                        <div className={styles.plan}>
                            <div className={styles.header}>
                                <h1>BASIC</h1>
                                <p>Different Plans of Gym & Cardio.</p>
                                <h1>₹ 600/-</h1>
                                <h5>per month for each plan.</h5>
                            </div>
                            <div className={styles.includeText}>
                                Basic Pack includes the following features :
                            </div>
                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                            </div>
                        </div>
                        <div className={styles.plan}>
                            <div className={styles.header}>
                                <h1>TRAINED</h1>
                                <p>3 months plan which includes GYM as well as CARDIO</p>
                                <h1>₹ 3500/-</h1>
                                <h5>one time payment</h5>
                                <div>MOST SELLING <AiFillFire /></div>
                            </div>
                            <div className={styles.includeText}>
                                Trained Pack includes everything from Basic Pack and following :
                            </div>
                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum dolor sit amet consectetur
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum dolor sit
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum dolor sit
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum d
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum dolor sit amet consectetur
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum dolor
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum dolor sit amet consectetur
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum dolor sit
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem ipsum
                                </div>
                            </div>
                        </div>
                        <div className={styles.plan}>
                            <div className={styles.header}>
                                <h1>ADVANCED</h1>
                                <p>The out of Box plan for <b>Trainers</b> and <b>Body-Builders</b></p>
                                <h3>Contact For Price</h3>
                            </div>
                            <div className={styles.includeText}>
                                Advanced Pack includes the following features :
                            </div>
                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                                <div className={styles.feature}>
                                    <img src="https://img.icons8.com/color/48/000000/double-tick.png" /> Lorem Ipsum
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.border}>
                        <div className={styles.borderBox}></div>
                        <div className={styles.borderLine}></div>
                        <div className={styles.borderBox}></div>
                    </div>
                </div>
                <div className={styles.joinForm}>
                    <div className={styles.background}>
                        <div className={styles.formHeading}>JOIN US NOW</div>
                        <div className={styles.formDescription}>Fill the below given form to join us. We will contact you back soon.</div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputDiv}>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className={styles.inputDiv}>
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className={styles.inputDiv}>
                                <input type="number" placeholder='Phone Number' />
                            </div>
                            <div className={styles.inputDiv}>
                                <select name="" id="" defaultValue="none">
                                    <option value="none">Select Preferred Plan</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Trained">Trained</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                            <div className={`${styles.inputDiv} ${styles.textArea}`}>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message Goes Here...'></textarea>
                            </div>
                            <div className={styles.submit}>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <Footer currentPage='About' bgColor='dark' />
        </>
    )
}
