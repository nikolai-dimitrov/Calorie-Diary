import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import styles from './auth-form.module.css';
import { FaEye, FaKey, FaUser } from "react-icons/fa";

export const AuthForm = () => {
      const [showPassword, setShowPassword] = useState(false)
      const [showRepeatPassword, setShowRepeatPassword] = useState(false)
      const location = useLocation()
      const [registerForm, setRegisterForm] = useState(() => {
            if (location.pathname.includes("/login")) {
                  return false
            } else return true
      })

      useEffect(() => {
            setRegisterForm(!!registerForm)
      }, [])
      return (
            <div className={styles.formContainer}>
                  {<h1>{registerForm ? 'Register' : 'Log In'}</h1>}
                  <form action="">
                        <div>
                              <FaUser className={styles.userIcon} />
                              <input
                                    type="text"
                                    placeholder='Username'
                              />
                        </div>
                        <div>
                              <FaKey className={styles.passwordKeyIcon} />
                              <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
                              />
                              <FaEye className={styles.passwordReveal} onClick={() => setShowPassword(!showPassword)} />
                        </div>
                        {registerForm &&
                              <div>
                                    <FaKey className={styles.passwordKeyIcon} />
                                    <input
                                          type={showRepeatPassword ? 'text' : 'password'}
                                          placeholder='Repeat Password'
                                    />
                                    <FaEye className={styles.passwordReveal} onClick={() => setShowRepeatPassword(!showRepeatPassword)} />
                              </div>}
                        <button>
                              {registerForm ? 'Register' : 'Log In'}
                        </button>
                  </form>
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