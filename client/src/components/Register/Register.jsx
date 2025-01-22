import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../Common/AuthForm/AuthForm';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../stores/authStore';
import { validateAuth } from '../Common/AuthForm/validateAuth';

import styles from './register.module.css';

export const Register = () => {
    const { register, serverError, clearServerErrors } = useAuthStore()
    const navigate = useNavigate()
    const { formValues, formErrors, onChange, onSubmit, onFocus, isResponseStatusSuccessful, focusedField, fieldRequirements, inputRefsMapper } = useForm({
        email: '',
        password: '',
        repeatPassword: '',
    }, register, validateAuth);

    useEffect(() => {
        clearServerErrors();
        if (isResponseStatusSuccessful) {
            navigate('/profile/create');
        }
    }, [isResponseStatusSuccessful]);

    return (
        <section className={styles.register}>
            <div className={styles.backgroundImg}></div>
            <div className={styles.overlay}>
                <AuthForm
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
        </section>
    )
}