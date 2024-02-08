import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataActions } from '../store'

export const useValidateForm = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state)

	const [isTouched, setIsTouched] = useState(false)
	const [isValid, setIsValid] = useState(false)

	const checkNameValid = e => {
		const reg = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm

		if (e.target.value.match(reg)) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}

		setIsTouched(true)
		dispatch(dataActions.changeName(e.target.value))
	}

	const checkCardNumberHandler = e => {
		const reg = /^(?:\d[ -]*?){16}$/

		const format = e.target.value
			.replaceAll(' ', '')
			.replace(/(\w{4})/g, '$1 ')
			.replace(/(^\s+|\s+$)/, '')

		if (e.target.value.match(reg)) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}

		if (e.target.value.replaceAll(' ', '').length <= 16) {
			dispatch(dataActions.changeCardNumber(format))
		}
	}

	const checkMonthHandler = e => {
		if (e.target.value <= 0 || e.target.value > 12) {
			setIsValid(false)
			return
		}

		if (e.target.value > 0) {
			setIsValid(true)

			if (e.target.value < 10) {
				dispatch(dataActions.changeMonth(`0${e.target.value}`))
			} else {
				dispatch(dataActions.changeMonth(e.target.value))
			}
		}
	}

	const checkYearHandler = e => {
		const year = new Date().getFullYear().toString().slice(2)

		if (e.target.value < year) {
			setIsValid(false)
		} else {
			setIsValid(true)
			dispatch(dataActions.changeYear(e.target.value))
		}
	}

	const checkCVCHandler = e => {
		if (e.target.value < 100 || e.target.value > 999) {
			setIsValid(false)
		} else {
			setIsValid(true)
			dispatch(dataActions.changeCVC(e.target.value))
		}
	}

	const isTouchedHandler = () => {
		setIsTouched(true)
	}

	return {
		checkNameValid,
		isTouchedHandler,
		isTouched,
		isValid,
		checkCardNumberHandler,
		checkMonthHandler,
		checkYearHandler,
		checkCVCHandler,
	}
}
