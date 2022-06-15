import { useDispatch, useSelector } from 'react-redux'

export function ProductDetails() {
	const { currProduct } = useSelector((state) => state.storeModule)
	if (!Object.keys(currProduct || {}).length) return <h1>Loading...</h1>
	return <section>{currProduct.ProductId}</section>
}
