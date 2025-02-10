import { useState } from 'react';
import { DiaryModal } from './DiaryModal/DiaryModal';
import { Select } from 'antd';
import { FiEdit, FiDelete } from "react-icons/fi";
import { TypingTextAnimation } from '../Common/TypingTextAnimation/TypingTextAnimation';
import styles from './diary.module.css'

export const Diary = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [open, setOpen] = useState();
	const [currentModalMode, setCurrentModalMode] = useState('createMode')

	const onScrollHandler = (e) => {
		const currentScrollTopValue = e.target.scrollTop;
		const hasScrolled = currentScrollTopValue > 0;
		if (hasScrolled != isScrolled) {
			setIsScrolled(hasScrolled);
		}
	};

	const showCreateModal = () => {
		setCurrentModalMode('createMode')
		setOpen(true);
	};

	const showUpdateModal = () => {
		setCurrentModalMode('updateMode')
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	}

	return (
		<>
			<section className={styles.diary}>
				<div className={styles.headingContainer}>
					<h1>My Diary</h1>
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
					<button onClick={showCreateModal}>Create Report</button>
					<DiaryModal open={open} closeModal={closeModal} currentModalMode={currentModalMode} />
				</div>
				{/* TODO: If reports show table conditionally else show diaryHeader */}
				<div className={styles.tableScroll} onScroll={(e) => onScrollHandler(e)}>
					<table className={styles.container}>
						<thead className={isScrolled ? styles.sticky : undefined}>
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
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>

							</tr>
							<tr>
								<td>01.01.2025</td>
								<td>1700 kcal</td>
								<td>500 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 800 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>

							</tr>
							<tr>
								<td>07.07.2025</td>
								<td>1900 kcal</td>
								<td>200 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 300 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
							<tr>
								<td>01.12.2025</td>
								<td>2100 kcal</td>
								<td>400 kcal</td>
								<td>1700 kcal</td>
								<td>2000 kcal</td>
								<td>- 0 kcal</td>
								<td><button><FiDelete /></button><button onClick={showUpdateModal}><FiEdit /></button></td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* <div className={styles.diaryHeader}>
                    <TypingTextAnimation text={"You haven't created any reports yet."} typingSpeed={0.05} />
                </div> */}

			</section>
			{/* TODO: When fetch reports if no reports conditionally add .bottomCenter class to the section .motivation*/}
			<section className={styles.motivation}>
				<div className={styles.motivationHeading}>
					<TypingTextAnimation text={'To achieve your goals:'} typingSpeed={0.05} />
				</div>
				<div className={styles.motivationImagesWrapper}>
					<div className={styles.imageContainer}>
						<TypingTextAnimation text={'Track your daily achievements.'} typingSpeed={0.05} />
						<img src="https://cdn.prod.website-files.com/62e18da95149ec2ee0d87b5b/630f440640b99469cd7145b4_how-to-track-your-fitness-4.webp" alt="" />
						<p>
							STEP 1: Write the date and your bodyweight (if you wish) at the top of the page. I typically do this once I show up to the gym. It’s part of the pre-game routine that I go through before working out. I put on my lifting shoes and knee sleeves, get out my lifting belt, write the date at the top of the page, and weigh myself.
						</p>
						<p>
							STEP 2: Write your planned workout routine for the day in the following format: [Exercise] – [Weight] – [Sets] x [Reps]
						</p>
						<p>
							At this point, I write out what I expect to do for the day. In the beginning, you may need to think about this a bit or spend some time finding a program that you enjoy. After the first or second time, however, writing down your workout is a very quick task
						</p>
						<p>
							STEP 3: Record tally marks as you complete your work sets.
						</p>
						<p>
							STEP 4: Vary this basic structure as needed for the training session.
						</p>

					</div>
					<div className={styles.imageContainer}>
						<TypingTextAnimation text={'Stay motivated and be consistent.'} typingSpeed={0.05} />
						<img src="https://thumbs.dreamstime.com/b/business-inspirational-motivational-quote-consistency-key-keep-going-sunset-sunrise-color-background-beach-smooth-246444086.jpg" alt="" />
						<p>Motivation is the driving force that initiates the desired action. In a plane, it’s the propeller. Having a good propeller initiates the plane to move. Without it, the airplane is stuck on the tarmac. In humans, its the inspiration that sustains the behavior to reach their goal, whatever that may be. You may say the motivation is the initial umph.. For example, you are motivated to wake up early to go to the gym — to have a summer body, lose xx amount of fat, etc. But motivation alone cannot sustain enthusiasm for a long time.</p>
						<p>To climb the mountain, one must stay consistent. Usually consistency will become a habit over time no matter how small. Remember that it takes 60 days for an action to become a habit. Otherwise you will revert back to your old ways, and start at the bottom. Consistency is crucial because it builds momentum and embed simple things to your routine making you more successful in achieving your long term goal. Consistency comes in when your motivation is taking the day off.</p>
					</div>
				</div>
			</section>
		</>
	)
}
