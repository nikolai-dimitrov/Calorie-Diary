import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../Common/AuthForm/AuthForm';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../stores/authStore'
import { validateAuth } from '../../utils/validateAuth';

import styles from './register.module.css';

export const Register = () => {
    const { register, serverError, clearServerErrors } = useAuthStore()
    const navigate = useNavigate()
    const { formValues, formErrors, onChange, onSubmit, success, validateInput } = useForm({
        email: '',
        password: '',
        repeatPassword: '',
    }, register, validateAuth);

    useEffect(() => {
        clearServerErrors();
        console.log(success)
        if (success == true) {
            navigate('/')
        }
    }, [success])

    return (
        <section className={styles.register}>
            <div className={styles.backgroundImg}></div>
            <div className={styles.overlay}>
                <AuthForm
                    formValues={formValues}
                    onSubmit={onSubmit}
                    onChange={onChange}
                    formErrors={formErrors}
                    serverError={serverError}
                    validateInput={validateInput}
                />
            </div>
        </section>
    )
}