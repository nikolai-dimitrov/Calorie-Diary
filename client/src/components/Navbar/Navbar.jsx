import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore';
import styles from './navbar.module.css';
export const Navbar = () => {
    const { user } = useAuthStore()
    const [showNav, setShowNav] = useState(false)
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>Calorie Diary</div>
                    <div className={styles.menuToggle} onClick={() => setShowNav(!showNav)}>
                        <div className={showNav ? `${styles.buttonBox} ${styles.buttonBoxOpen}` : `${styles.buttonBox}`}>
                            <span className={showNav ? `${styles.top} ${styles.spin}` : `${styles.top}`}></span>
                            <span className={showNav ? `${styles.bottom} ${styles.spin}` : `${styles.bottom}`}></span>
                        </div>
                    </div>
                </div>
                <div className={showNav ? `${styles.overlay} ${styles.show}` : `${styles.overlay}`}>
                    <ul className={styles.navItems}>
                        <li className={styles.navItem}>
                            <Link to='/' onClick={() => setShowNav(!showNav)} style={{
                                top: showNav ? '0' : '120px',
                                transitionDelay: showNav ? '0.7s' : '0s',
                            }}>Home</Link>
                            <div className={styles.itemWrapper}></div>
                        </li>

                        <li className={styles.navItem}>
                            <Link to='/profile' onClick={() => setShowNav(!showNav)} style={{
                                top: showNav ? '0' : '120px',
                                transitionDelay: showNav ? '0.8s' : '0s',
                            }}>Profile</Link>
                            <div className={styles.itemWrapper}></div>
                        </li>

                        <li className={styles.navItem}>
                            <Link to='/diary' onClick={() => setShowNav(!showNav)} style={{
                                top: showNav ? '0' : '120px',
                                transitionDelay: showNav ? '0.9s' : '0s',
                            }}>My Diary</Link>
                            <div className={styles.itemWrapper}></div>
                        </li>
                        {user ?
                            <li className={styles.navItem}>
                                <Link to='/logout' onClick={() => setShowNav(!showNav)} style={{
                                    top: showNav ? '0' : '120px',
                                    transitionDelay: showNav ? '1s' : '0s',
                                }}>Logout</Link>
                                <div className={styles.itemWrapper}></div>
                            </li>
                            :
                            <>
                                <li className={styles.navItem}>
                                    <Link to='/login' onClick={() => setShowNav(!showNav)} style={{
                                        top: showNav ? '0' : '120px',
                                        transitionDelay: showNav ? '1.1s' : '0s',
                                    }}>Login</Link>
                                    <div className={styles.itemWrapper}></div>
                                </li>

                                <li className={styles.navItem}>
                                    <Link to='/register' onClick={() => setShowNav(!showNav)} style={{
                                        top: showNav ? '0' : '120px',
                                        transitionDelay: showNav ? '1.2s' : '0s',
                                    }}>Register</Link>
                                    <div className={styles.itemWrapper}></div>
                                </li></>
                        }


                    </ul>
                    <div className={styles.footer}>
                        <div className={styles.message}>
                            <p>Thank you for using our website</p>
                        </div>
                        <div className={styles.github}>
                            <a href="#">GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};