import { useEffect } from 'react';
import { ProfileForm } from '../Common/ProfileForm/ProfileForm';
import { useForm } from '../../hooks/useForm';
import { useProfileStore } from '../../stores/profileStore';
import { validateProfile } from '../Common/ProfileForm/validateProfile';


import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";

import styles from './create-profile.module.css';
export const CreateProfile = () => {
    const { createProfile, serverError, clearServerErrors } = useProfileStore()
    const { formValues, formErrors, onChange, onSubmit, onFocus, focusedField, fieldRequirements, inputRefsMapper } = useForm({
        age: '',
        height: '',
        currentWeight: '',
        targetWeight: '',
        caloriesGoal: '',
        bodyGoal: 'Lose Weight',
        gender: 'male',
    }, createProfile, validateProfile);

    // It removes server error from profile state if any.
    useEffect(() => {
        clearServerErrors();
    }, [])
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.createProfile}>
                    <div className={styles.imgContainer}>
                        {/* <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="form image" /> */}
                        <img src="https://media.istockphoto.com/id/1325942266/photo/flat-lay-paper-shopping-bag-with-assortment-of-fresh-vegetables-and-fruits-and-calculator.jpg?s=2048x2048&w=is&k=20&c=M5olblJnyHWr4V5a13sEhNBQSNKl1x8L65JuVx-XIvM=" alt="form image" />
                    </div>
                    <ProfileForm
                        formValues={formValues}
                        onSubmit={onSubmit}
                        onChange={onChange}
                        onFocus={onFocus}
                        formErrors={formErrors}
                        serverError={serverError}
                        focusedField={focusedField}
                        fieldRequirements={fieldRequirements}
                        inputRefsMapper={inputRefsMapper}
                    />
                </div>
                <ul className={styles.steps}>
                    <li className={styles.step}>
                        <h4>Register</h4>
                        <div>
                            <FaCircleCheck className={styles.tickIcon} />
                        </div>
                    </li>
                    <li className={styles.step}>
                        <h4>Create Profile</h4>
                        <div>
                            <AiOutlineLoading3Quarters className={styles.loadingIcon} />
                        </div>
                    </li>
                    <li className={styles.step}>
                        <h4>Visit Profile</h4>
                        <div>
                            <CgProfile className={styles.profileIcon} />

                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}
