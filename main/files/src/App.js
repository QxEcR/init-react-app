import { Routes, Route } from "react-router-dom"
function App() {
	return (
		<div className='bg-gray-100 min-w-screen min-h-screen w-screen h-auto'>
			<Routes>
				<Route path='/' element={<p>Home</p>} />
				<Route path='/about' element={<p>About</p>} />
			</Routes>
		</div>
	)
}

export default App
