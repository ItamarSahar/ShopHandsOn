import { Link } from 'react-router-dom'

export function AppHeader() {
	return (
		<header className="app-header">
			<h1> Buy & Leave</h1>
			<Link to="/home">Home</Link>
			<Link to="/shop">Stores</Link>
		</header>
	)
}
