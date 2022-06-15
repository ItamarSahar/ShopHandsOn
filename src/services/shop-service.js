const SHOP = require('../data/products.json')

function getStores() {
	return SHOP.Stores
}

function getStoreById(storeId) {
	return SHOP.Stores.find((store) => {
		if (store.StoreId === storeId) {
			return store
		}
	})
}

export const shopService = {
	getStores,
	getStoreById,
}
