import { useDispatch, useSelector } from 'react-redux'
import { setCurrProduct } from '../store/actions/storeActions.js'
import { useNavigate } from 'react-router-dom'

export function ProductPreview({ product }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSetCurrProduct = async (product) => {
		await dispatch(setCurrProduct(product))
		navigate(`/product/${product.ProductId}`)
	}
	return (
		<article
			className="product-display"
			onClick={() => {
				onSetCurrProduct(product)
			}}
		>
			<h1 className="pro-title">{product.ProductTitle}</h1>
			<img className="pro-img" src={`${product.ProductImage}`} alt="" />
			<p>{product.PriceLabel}</p>
			<p className="pro-desc">{product.Description}</p>
		</article>
	)
}
