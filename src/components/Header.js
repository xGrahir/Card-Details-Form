import styles from './Header.module.css'
import { useSelector } from 'react-redux'


export const Header = () => {

	const data = useSelector(state => state)

	return (
		<>
			<div className={styles.background}>
				<div className={`${styles['rear-card']} ${styles['card-img']} `}>
					<div className={styles['card-bg']}>
						<div className={styles['cvc']}>
							<p>000</p>
						</div>
					</div>
				</div>
				<div className={`${styles['front-card']} ${styles['card-img']}`}>
					<div className={styles['card-bg']}>
						<div className={styles['card-logo']}></div>
						<div className={styles.number}>{data.cardnumber}</div>
						<div className={styles.name}>{data.name}</div>
						<div className={styles.year}>00/00</div>
					</div>
				</div>
			</div>
		</>
	)
}
