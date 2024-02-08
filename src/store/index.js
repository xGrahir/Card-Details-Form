import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { name: 'Jane Applessed', cardnumber: '0000 0000 0000 0000', month: '00', year: '00', cvc: '000' }

const dataSlice = createSlice({
	name: 'data',
	initialState: initialState,
	reducers: {
		changeName(state, action) {
			state.name = action.payload
		},
		changeCardNumber(state, action) {
			state.cardnumber = action.payload
		},
		changeMonth(state, action) {
			state.month = action.payload
		},
		changeYear(state, action) {
			state.year = action.payload
		},
        changeCVC(state, action) {
            state.cvc = action.payload
        }
	},
})

const store = configureStore({ reducer: dataSlice.reducer })

export default store
export const dataActions = dataSlice.actions
