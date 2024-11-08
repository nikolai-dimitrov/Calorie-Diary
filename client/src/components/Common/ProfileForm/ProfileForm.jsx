import { useState } from 'react';

import { fieldRequirementKeysAndMessages } from "./profileFormRequirements"
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
                className={styles.profileForm}
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
                            {
                                formErrors['age'] &&
                                formErrors['age']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['age'] == true ? true : false} >{errorMsg}</p>)

                            }
                        </div>
                        {fieldRequirementKeysAndMessages['age'].map((requirementArray) => {
                            const fieldRequirementKey = requirementArray[0];
                            const fieldRequirementMessage = requirementArray[1]
                            return <p className={fieldRequirements['age'][fieldRequirementKey] ? `success` : ``} hidden={focusedField['age'] == true ? false : true} key={fieldRequirementMessage}>{fieldRequirementMessage}</p>
                        })}


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
                            {
                                formErrors['height'] &&
                                formErrors['height']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['height'] == true ? true : false} >{errorMsg}</p>)

                            }
                        </div>
                        {fieldRequirementKeysAndMessages['height'].map((requirementArray) => {
                            const fieldRequirementKey = requirementArray[0];
                            const fieldRequirementMessage = requirementArray[1]
                            return <p className={fieldRequirements['height'][fieldRequirementKey] ? `success` : ``} hidden={focusedField['height'] == true ? false : true} key={fieldRequirementMessage}>{fieldRequirementMessage}</p>
                        })}
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
                            {
                                formErrors['currentWeight'] &&
                                formErrors['currentWeight']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['currentWeight'] == true ? true : false} >{errorMsg}</p>)

                            }
                        </div>
                        {fieldRequirementKeysAndMessages['currentWeight'].map((requirementArray) => {
                            const fieldRequirementKey = requirementArray[0];
                            const fieldRequirementMessage = requirementArray[1]
                            return <p className={fieldRequirements['currentWeight'][fieldRequirementKey] ? `success` : ``} hidden={focusedField['currentWeight'] == true ? false : true} key={fieldRequirementMessage}>{fieldRequirementMessage}</p>
                        })}
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
                            {
                                formErrors['targetWeight'] &&
                                formErrors['targetWeight']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['targetWeight'] == true ? true : false} >{errorMsg}</p>)

                            }
                        </div>
                        {fieldRequirementKeysAndMessages['targetWeight'].map((requirementArray) => {
                            const fieldRequirementKey = requirementArray[0];
                            const fieldRequirementMessage = requirementArray[1]
                            return <p className={fieldRequirements['targetWeight'][fieldRequirementKey] ? `success` : ``} hidden={focusedField['targetWeight'] == true ? false : true} key={fieldRequirementMessage}>{fieldRequirementMessage}</p>
                        })}
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
                        <div>
                            {
                                formErrors['caloriesGoal'] &&
                                formErrors['caloriesGoal']?.map(errorMsg => <p className={`formErrorMessage`} key={errorMsg} hidden={focusedField['caloriesGoal'] == true ? true : false} >{errorMsg}</p>)

                            }
                        </div>
                        {fieldRequirementKeysAndMessages['caloriesGoal'].map((requirementArray) => {
                            const fieldRequirementKey = requirementArray[0];
                            const fieldRequirementMessage = requirementArray[1]
                            return <p className={fieldRequirements['caloriesGoal'][fieldRequirementKey] ? `success` : ``} hidden={focusedField['caloriesGoal'] == true ? false : true} key={fieldRequirementMessage}>{fieldRequirementMessage}</p>
                        })}
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
                <button className={styles.profileBtn}>{editProfileForm ? 'Edit' : 'Create'}</button>
            </form>
        </>
    )
}