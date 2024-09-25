import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthForm } from '../Common/AuthForm/AuthForm';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../stores/authStore'
import { validateAuth } from '../../utils/validateAuth';

import styles from './login.module.css';

export const Login = () => {
    const { login, logout, serverError } = useAuthStore();
    const navigate = useNavigate()
    const { formValues, formErrors, onChange, onSubmit, success, validateInput } = useForm({
        email: '',
        password: '',
    }, login, validateAuth);

    useEffect(() => {
        if (success == true) {
            navigate('/')
        }
    }, [success])

    return (
        <section className={styles.login}>
            <div className={styles.backgroundImg}></div>
            <div className={styles.overlay}>
                <AuthForm
                    formValues={formValues}
                    onSubmit={onSubmit}
                    onChange={onChange}
                    formErrors={formErrors}
                    serverError={serverError}
                    validateInput={validateInput} />
                <button onClick={logout}>LOGOUT</button>

            </div>
        </section>
    )
}