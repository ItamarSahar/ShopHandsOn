const initialState = {
	currStore: {},
	currProduct: {},
}

export function storeReducer(state = initialState, action) {
	let newState = state
	switch (action.type) {
		case 'SET_STORE':
			return (newState = { ...state, currStore: action.currStore })
		case 'SET_PRODUCT':
			return (newState = { ...state, currProduct: action.product })
		default:
			return state
	}
}
