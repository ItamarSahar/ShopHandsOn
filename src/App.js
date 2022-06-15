import { AppHeader } from './cmps/App-header'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { StoreList } from './pages/Store-list.jsx'
import { StoreDetails } from './cmps/Store-details.jsx'

import './assets/style.scss'
import { ProductDetails } from './cmps/Product-details'

//! FAVICOE AND TITLE !
function App() {
	return (
		<div className="App">
			<AppHeader />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="shop" element={<StoreList />} />
					<Route path="shop/:storeId" element={<StoreDetails />} />
					<Route path="product/:productId" element={<ProductDetails />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
