import { AuthForm } from '../Common/AuthForm/AuthForm';

import styles from './register.module.css';

export const Register = () => {
      return (
            <section className={styles.register}>
                  <div className={styles.backgroundImg}></div>
                  <div className={styles.overlay}>
                        <AuthForm />
                  </div>
            </section>
      )
}