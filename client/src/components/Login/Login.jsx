import { useState } from 'react';
import { AuthForm } from '../Common/AuthForm/AuthForm'

import styles from './login.module.css';

export const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.backgroundImg}></div>
            <div className={styles.overlay}>
                <AuthForm />
            </div>
        </section>
    )
}