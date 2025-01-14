import { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { fieldRequirementKeysAndMessages } from './authFormRequirements'

import styles from './auth-form.module.css';
import { FaEye, FaKey, FaUser } from "react-icons/fa";

export const AuthForm = ({ formValues, onSubmit, onChange, onFocus, formErrors, serverError, focusedField, fieldRequirements, inputRefsMapper }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const location = useLocation();
    const [registerForm, setRegisterForm] = useState(() => {
        if (location.pathname.includes("/login")) {
            return false;
        } else return true;
    })

    return (
        <div className={styles.formContainer}>
            {<h1>{registerForm ? 'Register' : 'Log In'}</h1>}
            <form action=""
                onSubmit={(event) => onSubmit(event)}
            >
                <div className={styles.inputContainer}>
                    <div>
                        <FaUser className={styles.userIcon} />
                        <input
                            type='text'
                            placeholder='Email'
                            id='email'
                            name='email'
                            onChange={onChange}
                            onFocus={(event) => onFocus(event)}
                            value={formValues.email}
                            ref={inputRefsMapper['email']}
                            className={formErrors['email'].length && focusedField['email'] == false > 0 ? `${styles.inputError}` : ''}
                        />
                    </div>
                    <div>
                        {
                            formErrors['email'] &&
                            formErrors['email']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['email'] == true ? true : false} >{errorMsg}</p>)

                        }
                    </div>

                    {/* If field is focused -> instead of showing error messages if any, it shows field requirements list */}
                    {fieldRequirementKeysAndMessages['email'].map((requirementArray) => {
                        const fieldRequirementKey = requirementArray[0];
                        const fieldRequirementMessage = requirementArray[1]
                        return <p className={fieldRequirements['email'][fieldRequirementKey] ? `success` : `${styles.fieldRequirements}`} hidden={focusedField['email'] == true ? false : true} key={fieldRequirementMessage}>{fieldRequirementMessage}</p>
                    })}
                </div>
                <div className={styles.inputContainer}>
                    <div>
                        <FaKey className={styles.passwordKeyIcon} />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            id='password'
                            name='password'
                            onChange={onChange}
                            onFocus={(event) => onFocus(event)}
                            value={formValues.password}
                            ref={inputRefsMapper['password']}
                            className={formErrors['password'].length > 0 && focusedField['password'] == false ? `${styles.inputError}` : ''}
                        />

                        <FaEye className={styles.passwordReveal} onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <div>
                        {

                            formErrors['password'] &&
                            formErrors['password']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['password'] == true ? true : false}>{errorMsg}</p>)
                        }
                    </div>
                    {fieldRequirementKeysAndMessages['password'].map((requirementArray) => {
                        const fieldRequirementKey = requirementArray[0];
                        const fieldRequirementMessage = requirementArray[1]
                        return <p className={fieldRequirements['password'][fieldRequirementKey] ? `success` : `${styles.fieldRequirements}`} hidden={focusedField['password'] == true ? false : true} key={fieldRequirementMessage}>{fieldRequirementMessage}</p>
                    })}

                </div>
                {registerForm &&
                    <>
                        <div className={styles.inputContainer}>
                            <div>
                                <FaKey className={styles.passwordKeyIcon} />
                                <input
                                    type={showRepeatPassword ? 'text' : 'password'}
                                    placeholder='Repeat Password'
                                    id='repeatPassword'
                                    name='repeatPassword'
                                    onChange={onChange}
                                    onFocus={(event) => onFocus(event)}
                                    value={formValues.repeatPassword}
                                    ref={inputRefsMapper['repeatPassword']}
                                    className={formErrors['repeatPassword'].length > 0 && focusedField['repeatPassword'] == false ? `${styles.inputError}` : ''}
                                />
                                <FaEye className={styles.passwordReveal} onClick={() => setShowRepeatPassword(!showRepeatPassword)} />
                            </div>
                            {
                                formErrors['repeatPassword'] &&
                                formErrors['repeatPassword']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['repeatPassword'] == true ? true : false}>{errorMsg}</p>)
                            }
                        </div>

                    </>
                }
                <button className={styles.authBtn}>
                    {registerForm ? 'Register' : 'Log In'}
                </button>
            </form>
            {serverError && serverError.split('!').map(errorMsg => <p key={errorMsg} className={styles.error}>{errorMsg}</p>)}
            <div className={styles.footerContainer}>
                {!registerForm &&
                    <div className={styles.footerTop}>
                        <a href="">Forgot Password?</a>
                        <label htmlFor="checkbox">Remember me</label>
                        <input type="checkbox" name='checkbox' />
                    </div>
                }
                <p className={styles.divideFooter}>OR</p>
                <div className={styles.footerBottom}>
                    {registerForm ?
                        <>
                            <p>You already have an account?</p> <Link to='/login'>Log In</Link>
                        </> :
                        <>
                            <p>New to Calorie Diary?</p>
                            <Link to='/register'>Register now</Link>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}