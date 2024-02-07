import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataActions } from '../store'

export const useValidateForm = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state)

	const [isTouched, setIsTouched] = useState(false)
	const [nameValid, setNameValid] = useState(false)

	const checkNameValid = e => {
		const reg = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm

		if (e.target.value.match(reg)) {
			setNameValid(true)

			dispatch(dataActions.changeName(e.target.value))
			console.log(data)
		}
	}

	return [checkNameValid]
}
