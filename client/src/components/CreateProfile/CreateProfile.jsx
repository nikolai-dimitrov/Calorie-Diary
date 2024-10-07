import { ProfileForm } from '../Common/ProfileForm/ProfileForm'
import styles from './create-profile.module.css';

export const CreateProfile = () => {
    return (
        <>
            <section className={styles.createProfile}>
                {/* <div className={styles.createProfile}> */}
                    <div className={styles.imgContainer}>
                        {/* <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="form image" /> */}
                        <img src="https://media.istockphoto.com/id/1325942266/photo/flat-lay-paper-shopping-bag-with-assortment-of-fresh-vegetables-and-fruits-and-calculator.jpg?s=2048x2048&w=is&k=20&c=M5olblJnyHWr4V5a13sEhNBQSNKl1x8L65JuVx-XIvM=" alt="form image" />
                    </div>
                    <ProfileForm
                    />
                {/* </div> */}
            </section>
        </>
    )
}
