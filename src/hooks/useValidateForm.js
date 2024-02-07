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

		const format = e.target.value.replaceAll(' ', '').replace(/(\w{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '')

		if (e.target.value.match(reg)) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}

		if (e.target.value.replaceAll(' ', '').length <= 16) {
			dispatch(dataActions.changeCardNumber(format))
		}
	}

	const isTouchedHandler = () => {
		setIsTouched(true)
	}

	return { checkNameValid, isTouchedHandler, isTouched, isValid, checkCardNumberHandler }
}
