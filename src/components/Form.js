import styles from './Form.module.css'
import { Button } from '../utilities/Button'
import { useValidateForm } from '../hooks/useValidateForm'

export const Inputs = () => {
	const {
		checkNameValid,
		isTouched: nameIsTouched,
		isValid: nameValid,
		isTouchedHandler: isNameTouched,
	} = useValidateForm()

	const {
		checkCardNumberHandler,
		isTouched: numberIsTouched,
		isValid: numberValid,
		isTouchedHandler: isNumberTouched,
	} = useValidateForm()

	return (
		<form className={styles['form-inputs']}>
			<div className={styles['form-input']}>
				<label className={styles.label} htmlFor='name'>
					Cardholder name
				</label>
				<input
					className={nameIsTouched && !nameValid ? `${styles.input}  ${styles.error}` : `${styles.input}`}
					type='text'
					required
					id='name'
					name='name'
					placeholder='e.g. Jane Applessed'
					onChange={checkNameValid}
					onBlur={isNameTouched}
				/>
				{nameIsTouched && !nameValid ? <p className={styles.errormsg}>Wrong name</p> : ''}
			</div>
			<div className={styles['form-input']}>
				<label className={styles.label} htmlFor='cardnumber'>
					Card number
				</label>
				<input
					className={numberIsTouched && !numberValid ? `${styles.input}  ${styles.error}` : `${styles.input}`}
					type='text'
					required
					id='cardumber'
					name='cardnumber'
					placeholder='e.g. 1234 5678 9123 0000'
					maxLength={20}
					onChange={checkCardNumberHandler}
					onBlur={isNumberTouched}
				/>
				{numberIsTouched && !numberValid ? <p className={styles.errormsg}>Wrong number</p> : ''}
			</div>

			<div className={styles['about-card']}>
				<div className={styles['form-input']}>
					<label className={styles.label} htmlFor='month'>
						EXP. DATE (MM/YY)
					</label>
					<div className={styles.exp}>
						<input
							className={`${styles.input} ${styles['exp-input']}`}
							type='text'
							required
							id='month'
							name='month'
							placeholder='MM'
						/>
						<input
							className={`${styles.input} ${styles['exp-input']}`}
							type='text'
							required
							id='month'
							name='month'
							placeholder='DD'
						/>
					</div>
				</div>
				<div className={`${styles['form-input']} ${styles.cvc}`}>
					<label className={styles.label} htmlFor='cvc'>
						CVC
					</label>
					<input
						className={`${styles.input} ${styles['cvc-input']}`}
						type='text'
						required
						id='cvc'
						name='cvc'
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
