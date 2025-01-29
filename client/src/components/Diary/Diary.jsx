import { useState, useCallback } from 'react';
import { Select } from 'antd';
import { FiEdit, FiDelete } from "react-icons/fi";

import styles from './diary.module.css'
export const Diary = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const onScrollHandler = (e) => {
        const currentScrollTopValue = e.target.scrollTop;
        const hasScrolled = currentScrollTopValue > 0;
        if (hasScrolled != isScrolled) {
            setIsScrolled(hasScrolled);
        }
    };

    return (
        <section className={styles.diary}>
            <div className={styles.headingContainer}>
                <h1>My Reports:</h1>
                <Select
                    defaultValue="7"
                    className={styles.selectTimePeriod}
                    // onChange={handleChange}
                    options={[
                        {
                            value: '7',
                            label: '7 Days',
                        },
                        {
                            value: '14',
                            label: '14 Days',
                        },
                        {
                            value: '28',
                            label: '28 Days',
                        },
                    ]}
                />
                <button>Create Report</button>
            </div>
            <div className={styles.tableScroll} onScroll={(e) => onScrollHandler(e)}>
                <table className={styles.container}>
                    <thead className={isScrolled && styles.sticky}>
                        <tr>
                            <th><h2>Date </h2></th>
                            <th><h2>Food</h2></th>
                            <th><h2>Exercise</h2></th>
                            <th><h2>Daily Goal</h2></th>
                            <th><h2>BMR</h2></th>
                            <th><h2>Daily Result</h2></th>
                            <th><h2>Actions</h2></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12.05.2025</td>
                            <td>1500 kcal</td>
                            <td>700 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 1300 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>

                        </tr>
                        <tr>
                            <td>01.01.2025</td>
                            <td>1700 kcal</td>
                            <td>500 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 800 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>

                        </tr>
                        <tr>
                            <td>07.07.2025</td>
                            <td>1900 kcal</td>
                            <td>200 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 300 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>01.12.2025</td>
                            <td>2100 kcal</td>
                            <td>400 kcal</td>
                            <td>1700 kcal</td>
                            <td>2000 kcal</td>
                            <td>- 0 kcal</td>
                            <td><button><FiDelete /></button><button><FiEdit /></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}