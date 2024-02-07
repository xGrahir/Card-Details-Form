import styles from './Form.module.css'
import { Button } from '../utilities/Button'
import { useValidateForm } from '../hooks/useValidateForm'


export const Inputs = () => {

	const [checkNameValid] = useValidateForm()



	return (
		<form className={styles['form-inputs']}>
			<div className={styles['form-input']}>
				<label className={styles.label} htmlFor='name'>
					Cardholder name
				</label>
				<input className={styles.input} type='text' required id='name' name='name' placeholder='e.g. Jane Applessed' onChange={checkNameValid}/>
			</div>
			<div className={styles['form-input']}>
				<label className={styles.label} htmlFor='cardnumber'>
					Card number
				</label>
				<input
					className={styles.input}
					type='number'
					required
					id='cardumber'
					name='cardnumber'
					placeholder='e.g. 1234 5678 9123 0000'
				/>
			</div>

			<div className={styles['about-card']}>
				<div className={styles['form-input']}>
					<label className={styles.label} htmlFor='name'>
						EXP. DATE (MM/YY)
					</label>
					<div className={styles.exp}>
						<input
							className={`${styles.input} ${styles['exp-input']}`}
							type='text'
							required
							id='name'
							name='name'
							placeholder='MM'
						/>
						<input
							className={`${styles.input} ${styles['exp-input']}`}
							type='text'
							required
							id='name'
							name='name'
							placeholder='DD'
						/>
					</div>
				</div>
				<div className={`${styles['form-input']} ${styles.cvc}`}>
					<label className={styles.label} htmlFor='name'>
						CVC
					</label>
					<input
						className={`${styles.input} ${styles['cvc-input']}`}
						type='text'
						required
						id='name'
						name='name'
						placeholder='e.g. 123'
					/>
				</div>
			</div>
			<div className={styles.button}>
				<Button>Confirm</Button>
			</div>
		</form>
	)
}
