import { useState } from 'react';
import { GiBodyHeight, GiAges, GiWeightScale, GiMeal } from "react-icons/gi";
import { ImTarget } from "react-icons/im";
import { IoWoman, IoManSharp } from "react-icons/io5";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaArrowsAltH } from "react-icons/fa";
import styles from './profile-form.module.css';
export const ProfileForm = () => {
    const [editProfileForm, setEditProfileForm] = useState(() => {
        if (location.pathname.includes("/create")) {
            return true;
        } else return false;
    })

    return (
        <>
            <form action="">
                <div className={styles.formContent}>
                    <div className={styles.leftSide}>
                        <div>
                            {editProfileForm && <label htmlFor="age">Age</label>}
                            <input type="number" name='age' id='age' placeholder='Age' />
                            <GiAges className={styles.formIcons} />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="height">Height</label>}
                            <input type="number" name='height' id='height' placeholder='Height' />
                            <GiBodyHeight className={styles.formIcons} />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="currentWeight">Current Weight</label>}
                            <input type="number" name='currentWeight' id='currentWeight' placeholder='Current Weight' />
                            <GiWeightScale className={styles.formIcons} />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="targetWeight">Target Weight</label>}
                            <input type="number" name='targetWeight' id='targetWeight' placeholder='Target Weight' />
                            <ImTarget className={styles.formIcons} />
                        </div>
                        <div>
                            {editProfileForm && <label htmlFor="caloriesGoal">Calories Goal</label>}
                            <input type="number" name='caloriesGoal' id='caloriesGoal' placeholder='Calories Goal' />
                            <GiMeal className={styles.formIcons} />
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.bodyGoalsContainer}>
                            <h3>Select Body Goal</h3>
                            <div>
                                <FaLongArrowAltDown />
                                <label htmlFor=""> Lose Weight
                                    <input type="radio" name='bodyGoal' id='loseWeight' value='Lose Weight' />
                                </label>
                            </div>
                            <div>
                                <FaLongArrowAltUp />
                                <label htmlFor=""> Gain Weight
                                    <input type="radio" name='bodyGoal' id='gainWeight' value='Gain Weight' />
                                </label>
                            </div>
                            <div>
                                <FaArrowsAltH />
                                <label htmlFor="">Maintain Weight
                                    <input type="radio" name='bodyGoal' id='maintainWeight' value='Maintain Weight' />
                                </label>
                            </div>
                        </div>
                        <div className={styles.genderContainer}>
                            <h3>Select Gender</h3>
                            <div>
                                <IoManSharp />
                                <label htmlFor="">Male
                                    <input type="radio" name='gender' id='male' value='male' />
                                </label>
                            </div>
                            <div>
                                <IoWoman />
                                <label htmlFor="">Female
                                    <input type="radio" name='gender' id='female' value='female' />
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </>
    )
}