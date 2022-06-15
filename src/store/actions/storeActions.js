import { shopService } from '../../services/shop-service.js'

export function setCurrStore(storeId) {
	return async (dispatch) => {
		try {
			const currStore = shopService.getStoreById(storeId)
			dispatch({ type: 'SET_STORE', currStore })
		} catch (err) {
			console.error('Cannot set Store', err)
		}
	}
}
export function setCurrProduct(product) {
	return async (dispatch) => {
		try {
			dispatch({ type: 'SET_PRODUCT', product })
		} catch (err) {
			console.error('Cannot set Product', err)
		}
	}
}
