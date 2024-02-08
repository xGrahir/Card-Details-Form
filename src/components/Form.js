import styles from './Form.module.css'
import { Button } from '../utilities/Button'
import { useValidateForm } from '../hooks/useValidateForm'

export const Inputs = () => {
	const {
		checkNameValid,
		isTouched: nameIsTouched,
		isValid: nameIsValid,
		isTouchedHandler: isNameTouched,
	} = useValidateForm()

	const {
		checkCardNumberHandler,
		isTouched: numberIsTouched,
		isValid: numberIsValid,
		isTouchedHandler: isNumberTouched,
	} = useValidateForm()

	const {
		checkMonthHandler,
		isValid: monthIsValid,
		isTouchedHandler: isMonthTouched,
		isTouched: monthIsTouched,
	} = useValidateForm()

	const {
		checkYearHandler,
		isValid: yearIsValid,
		isTouchedHandler: isYearTouched,
		isTouched: yearIsTouched,
	} = useValidateForm()

	const {
		checkCVCHandler, 
		isValid: cvcIsValid,
		isTouchedHandler: isCVCTouched,
		isTouched: cvcIsTouched
	} = useValidateForm()

	return (
		<form className={styles['form-inputs']}>
			<div className={styles['form-input']}>
				<label className={styles.label} htmlFor='name'>
					Cardholder name
				</label>
				<input
					className={nameIsTouched && !nameIsValid ? `${styles.input}  ${styles.error}` : `${styles.input}`}
					type='text'
					required
					id='name'
					name='name'
					placeholder='e.g. Jane Applessed'
					onChange={checkNameValid}
					onBlur={isNameTouched}
				/>
				{nameIsTouched && !nameIsValid ? <p className={styles.errormsg}>Wrong name</p> : ''}
			</div>
			<div className={styles['form-input']}>
				<label className={styles.label} htmlFor='cardnumber'>
					Card number
				</label>
				<input
					className={numberIsTouched && !numberIsValid ? `${styles.input}  ${styles.error}` : `${styles.input}`}
					type='text'
					required
					id='cardumber'
					name='cardnumber'
					placeholder='e.g. 1234 5678 9123 0000'
					maxLength={20}
					onChange={checkCardNumberHandler}
					onBlur={isNumberTouched}
				/>
				{numberIsTouched && !numberIsValid ? <p className={styles.errormsg}>Wrong number</p> : ''}
			</div>

			<div className={styles['about-card']}>
				<div className={styles['form-input']}>
					<label className={styles.label} htmlFor='month'>
						EXP. DATE (MM/YY)
					</label>
					<div className={styles.exp}>
						<div className={styles.exp2}>
							<input
								className={
									monthIsTouched && !monthIsValid
										? `${styles.input} ${styles['exp-input']}  ${styles.error}`
										: `${styles.input} ${styles['exp-input']}`
								}
								type='text'
								required
								id='month'
								name='month'
								placeholder='MM'
								onChange={checkMonthHandler}
								onBlur={isMonthTouched}
							/>
							{monthIsTouched && !monthIsValid ? <p className={styles.errormsg}>Wrong month</p> : ''}
						</div>
						<div className={styles.exp2}>
							<input
								className={
									yearIsTouched && !yearIsValid
										? `${styles.input} ${styles['exp-input']}  ${styles.error}`
										: `${styles.input} ${styles['exp-input']}`
								}
								type='text'
								required
								id='month'
								name='month'
								placeholder='YY'
								onChange={checkYearHandler}
								onBlur={isYearTouched}
							/>
							{yearIsTouched && !yearIsValid ? <p className={styles.errormsg}>Wrong year</p> : ''}
						</div>
					</div>
				</div>
				<div className={`${styles['form-input']} ${styles.cvc}`}>
					<label className={styles.label} htmlFor='cvc'>
						CVC
					</label>
					<div className={styles.exp2}>
						<input
							className={
								cvcIsTouched && !cvcIsValid
									? `${styles.input} ${styles['cvc-input']}  ${styles.error}`
									: `${styles.input} ${styles['cvc-input']}`
							}
							type='text'
							required
							id='cvc'
							name='cvc'
							placeholder='e.g. 123'
							onChange={checkCVCHandler}
							onBlur={isCVCTouched}
						/>
						{cvcIsTouched && !cvcIsValid ? <p className={styles.errormsg}>Wrong CVC</p> : ''}
					</div>
				</div>
			</div>
			<div className={styles.button}>
				<Button>Confirm</Button>
			</div>
		</form>
	)
}
