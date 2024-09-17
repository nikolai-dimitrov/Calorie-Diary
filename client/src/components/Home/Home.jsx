import styles from './home.module.css';
export const Home = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <div className={styles.headingContainer}>
                        <h1>The three pillars of health</h1>
                        <h2>Nutrition, Physical Exercise, and Sleep.</h2>
                        <h2>All three of these are connected.</h2>
                    </div>
                </div>
            </section>
            <section className={styles.home}>
                <article className={styles.card}>
                    <div className={styles.informationContainer}>
                        <h2 className={styles.heading}>Healthy Food</h2>
                        <h4 className={styles.subHeading}>Following a healthy diet has many benefits, including building strong bones, protecting the heart, preventing disease, and boosting mood.</h4>
                        <p>A healthy diet typically includes nutrient-dense foods from all of the major food groups, including lean proteins, whole grains, healthy fats, and fruits and vegetables of many colors. Healthy eating habits also include replacing foods that contain trans fats, added salt, and sugar with more nutritious options.</p>
                        <ul className={styles.itemsList}>
                            <div>
                                <li className={styles.item}>
                                    Plan your meals
                                </li>
                                <li className={styles.item}>
                                    Eat more veggies
                                </li>
                                <li className={styles.item}>
                                    Choose lean proteins
                                </li>
                            </div>
                            <div>
                                <li className={styles.item}>
                                    Eat oily fish
                                </li>
                                <li className={styles.item}>
                                    Drink water
                                </li>
                                <li className={styles.item}>
                                    Choose healthier fats
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src="https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2023/07/06111310/Healthy-tips.jpg" alt="" />
                        {/* <img src='https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2020/02/1109-meal-plan-shutterstock_626262416.jpg?quality=86&strip=all' alt="" /> */}
                    </div>
                </article>
                <article className={styles.card}>
                    <div className={`${styles.informationContainer} ${styles.changeFlexOrder}`}>
                        <h2 className={styles.heading}>Benefits Of Doing Workout</h2>
                        <h4 className={styles.subHeading}>Regular exercise has been shown to help boost energy levels and enhance your mood. It may also be associated with many other health benefits, including a reduced risk of chronic disease.</h4>
                        <p>Exercise is defined as any movement that makes your muscles work and requires your body to burn calories.
                            There are many types of physical activity, including swimming, running, and walking, to name a few.
                            Being active has been shown to have many health benefits, both physically and mentally. It may even help you live longer.</p>
                        <ul className={styles.itemsList}>
                            <div>
                                <li className={styles.item}>
                                    Enhances mood
                                </li>
                                <li className={styles.item}>
                                    Strong bones and muscles
                                </li>
                                <li className={styles.item}>
                                    Brain health
                                </li>
                            </div>
                            <div>
                                <li className={styles.item}>
                                    More energy
                                </li>
                                <li className={styles.item}>
                                    Improve sleep
                                </li>
                                <li className={styles.item}>
                                    Burn fats
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src='https://plus.unsplash.com/premium_photo-1664474667047-a20f4e60339a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D' alt="" />
                    </div>
                </article>
                <article className={styles.card}>
                    <div className={styles.informationContainer}>
                        <h2 className={styles.heading}>Benefits of Sleeping</h2>
                        <h4 className={styles.subHeading}>Getting a good night’s sleep is incredibly important for your health. In fact, it’s just as important as eating a balanced, nutritious diet and exercising.</h4>
                        <p>Getting adequate sleep—seven to nine hours a night—keeps your heart healthy, reduces stress, and helps keep blood sugar consistent. It also reduces stress, prevents inflammation, helps control weight, and is important for memory formation and clear thinking. Quality sleep allows you to be energetic and alert.</p>
                        <ul className={styles.itemsList}>
                            <div>
                                <li className={styles.item}>
                                    Promotes growth
                                </li>
                                <li className={styles.item}>
                                    Helps hearth health
                                </li>
                                <li className={styles.item}>
                                    Support weight management
                                </li>
                            </div>
                            <div>
                                <li className={styles.item}>
                                    Reduces risk of injury
                                </li>
                                <li className={styles.item}>
                                    Boosts memory and learning
                                </li>
                                <li className={styles.item}>
                                    Keep your immune system strong
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src='https://images.unsplash.com/photo-1531353826977-0941b4779a1c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNsZWVwfGVufDB8fDB8fHww' alt="" />
                    </div>
                </article>
            </section>
            <section className={styles.photos}>
                <div className={styles.scrollContainer}>
                    <ul aria-hidden="true">
                        <li>
                            <img src="https://images.unsplash.com/photo-1541697030313-c55aac74fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FrZSUyMHVwfGVufDB8fDB8fHww" alt="" />
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0eSUyMG1lYWx8ZW58MHx8MHx8fDA%3D" alt="" />
                        </li>
                        <li>
                            <img src="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmslMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFtaWx5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </li>
                        <li>
                            <img src="https://plus.unsplash.com/premium_photo-1661397087554-2774b7e7332f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xlZXB8ZW58MHx8MHx8fDA%3D" alt="" />
                        </li>
                    </ul>
                    <ul aria-hidden="true">
                        <li>
                            <img src="https://images.unsplash.com/photo-1541697030313-c55aac74fbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FrZSUyMHVwfGVufDB8fDB8fHww" alt="" />
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0eSUyMG1lYWx8ZW58MHx8MHx8fDA%3D" alt="" />
                        </li>
                        <li>
                            <img src="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmslMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
                        </li>

                        <li>
                            <img src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFtaWx5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </li>
                        <li>
                            <img src="https://plus.unsplash.com/premium_photo-1661397087554-2774b7e7332f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xlZXB8ZW58MHx8MHx8fDA%3D" alt="" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
