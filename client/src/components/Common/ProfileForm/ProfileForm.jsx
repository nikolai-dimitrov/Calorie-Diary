import { useState } from 'react';

import { GiBodyHeight, GiAges, GiWeightScale, GiMeal } from "react-icons/gi";
import { ImTarget } from "react-icons/im";
import { IoWoman, IoManSharp } from "react-icons/io5";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaArrowsAltH } from "react-icons/fa";
import styles from './profile-form.module.css';

export const ProfileForm = ({ formValues, onSubmit, onChange, onFocus, formErrors, focusedField, fieldRequirements, inputRefsMapper }) => {
    const [editProfileForm, setEditProfileForm] = useState(() => {
        if (location.pathname.includes("/edit")) {
            return true;
        } else return false;
    });

    return (
        <>
            <form action=""
                onSubmit={(event) => onSubmit(event)}
            >
                <div className={editProfileForm ? `${styles.formContent} ${styles.editFormContent}` : `${styles.formContent}`}>
                    <div className={styles.leftSide}>
                        <div>
                            {editProfileForm && <label htmlFor="age">Age</label>}
                            <input
                                type="number"
                                name='age'
                                id='age'
                                onChange={onChange}
                                value={formValues.age}
                                onFocus={(event) => onFocus(event)}
                                ref={inputRefsMapper['age']}
                                className={editProfileForm ? styles.editInput : ''}
                                placeholder={editProfileForm ? '' : 'Age'} />
                            <GiAges className={styles.formIcons}
                            />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="height">Height</label>}
                            <input
                                type="number"
                                name='height'
                                id='height'
                                onChange={onChange}
                                value={formValues.height}
                                onFocus={(event) => onFocus(event)}
                                ref={inputRefsMapper['height']}
                                className={editProfileForm ? styles.editInput : ''}
                                placeholder={editProfileForm ? '' : 'Height'} />
                            <GiBodyHeight className={styles.formIcons}
                            />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="currentWeight">Current Weight</label>}
                            <input
                                type="number"
                                name='currentWeight'
                                id='currentWeight'
                                onChange={onChange}
                                value={formValues.currentWeight}
                                onFocus={(event) => onFocus(event)}
                                ref={inputRefsMapper['currentWeight']}
                                className={editProfileForm ? styles.editInput : ''}
                                placeholder={editProfileForm ? '' : 'Current Weight'} />
                            <GiWeightScale className={styles.formIcons} />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="targetWeight">Target Weight</label>}
                            <input
                                type="number"
                                name='targetWeight'
                                id='targetWeight'
                                onChange={onChange}
                                value={formValues.targetWeight}
                                onFocus={(event) => onFocus(event)}
                                ref={inputRefsMapper['targetWeight']}
                                className={editProfileForm ? styles.editInput : ''}
                                placeholder={editProfileForm ? '' : 'Target Weight'} />
                            <ImTarget className={styles.formIcons} />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="caloriesGoal">Calories Goal</label>}
                            <input
                                type="number"
                                name='caloriesGoal'
                                id='caloriesGoal'
                                onChange={onChange}
                                value={formValues.caloriesGoal}
                                onFocus={(event) => onFocus(event)}
                                ref={inputRefsMapper['caloriesGoal']}
                                className={editProfileForm ? styles.editInput : ''}
                                placeholder={editProfileForm ? '' : 'Calories Goal'} />
                            <GiMeal className={styles.formIcons} />
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.bodyGoalsContainer}>
                            <h3>Select Body Goal</h3>
                            <div>
                                <FaLongArrowAltDown />
                                <label htmlFor="loseWeight">
                                    Lose Weight
                                    <input type="radio"
                                        name='bodyGoal'
                                        id='loseWeight'
                                        value='Lose Weight'
                                        onChange={onChange}
                                        defaultChecked={editProfileForm ? false : true}
                                    />
                                </label>
                            </div>
                            <div>
                                <FaLongArrowAltUp />
                                <label htmlFor="gainWeight">
                                    Gain Weight
                                    <input type="radio"
                                        name='bodyGoal'
                                        id='gainWeight'
                                        value='Gain Weight'
                                        onChange={onChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <FaArrowsAltH />
                                <label htmlFor="maintainWeight">
                                    Maintain Weight
                                    <input type="radio"
                                        name='bodyGoal'
                                        id='maintainWeight'
                                        value='Maintain Weight'
                                        onChange={onChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={styles.genderContainer}>
                            <h3>Select Gender</h3>
                            <div>
                                <IoManSharp />
                                <label htmlFor="male">
                                    Male
                                    <input
                                        type="radio"
                                        name='gender'
                                        id='male'
                                        value='male'
                                        onChange={onChange}
                                        defaultChecked={editProfileForm ? false : true}
                                    />
                                </label>
                            </div>
                            <div>
                                <IoWoman />
                                <label htmlFor="female">
                                    Female
                                    <input type="radio"
                                        name='gender'
                                        id='female'
                                        value='female'
                                        onChange={onChange}
                                    />
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
                <button>{editProfileForm ? 'Edit' : 'Create'}</button>
            </form>
        </>
    )
}