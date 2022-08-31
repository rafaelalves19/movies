import { Routes, Route } from 'react-router-dom'

import Container from './components/container/container'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import Home from './pages/home/home'
import About from './pages/about/about'
import Movies from './pages/movies/movies'
import Series from './pages/series/series'

function App() {
	return (
		<>
			<Container>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='movies' element={<Movies />} />
					<Route path='series' element={<Series />} />
					<Route path='about' element={<About />} />
				</Routes>
				<Footer />
			</Container>
		</>
	)
}

export default App
