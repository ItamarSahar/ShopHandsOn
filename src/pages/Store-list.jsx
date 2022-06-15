import { useState } from 'react'
import { setCurrStore } from '../store/actions/storeActions.js'
import { shopService } from '../services/shop-service.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function StoreList() {
	const [stores, setStores] = useState(shopService.getStores)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSetCurrStore = async (storeId) => {
		console.log(storeId)
		await dispatch(setCurrStore(storeId))
		navigate(`/shop/${storeId}`)
	}

	return (
		<section className="shop">
			<h1>Select your desire store </h1>
			<section className="stores-list">
				{stores.map((store) => {
					return (
						<div
							key={store.StoreId}
							onClick={() => {
								onSetCurrStore(store.StoreId)
							}}
						>
							<img
								className="store-img"
								src={`${store.StoreLogo}`}
								alt={`${store.StoreName}`}
							/>
						</div>
					)
				})}
			</section>
		</section>
	)
}
