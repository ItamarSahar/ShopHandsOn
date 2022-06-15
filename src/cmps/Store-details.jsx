import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopService } from '../services/shop-service.js'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrStore } from '../store/actions/storeActions.js'
import { ProductPreview } from './Product-preview.jsx'

export function StoreDetails() {
	const { storeId } = useParams()
	const { currStore } = useSelector((state) => state.storeModule)
	const [storePro, setStorePro] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		setStorePro(currStore.Products)
		if (!Object.keys(currStore).length) {
			getCurrStore()
		}
	}, [])

	const getCurrStore = async () => {
		await dispatch(setCurrStore(storeId))
	}

	//! MOVE TO SERVICE !!!
	const onFilterPro = (price) => {
		setStorePro(
			currStore.Products.reduce((acc, product) => {
				if (product.Price < price) {
					acc.push(product)
					return acc
				} else {
					return acc
				}
			}, [])
		)
	}

	if (!Object.keys(currStore || {}).length) return <h1>Loading...</h1>

	return (
		<section>
			<h1>{currStore.StoreName}</h1>
			<h2>Products</h2>
			<h3>filter</h3>
			<button onClick={() => onFilterPro(50)}>under 50$</button>
			<button onClick={() => onFilterPro(Infinity)}>All</button>
			//! CREATE PRODUCTS LIST THAT RENDER THE PRODUCT_PREVIEW !
			<div className="produtcs-list">
				{storePro.map((product, idx) => {
					return <ProductPreview product={product} key={idx} />
				})}
			</div>
		</section>
	)
}
