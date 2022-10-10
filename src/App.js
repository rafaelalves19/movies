import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from './components/header/header'
import Footer from './components/footer/footer'

import Home from './pages/home/home'
import About from './pages/about/about'
import Movies from './pages/movies/movies'
import Series from './pages/series/series'
import Poster from './pages/poster/poster'

function App() {
	const API_KEY = '4f35f23d89519dfc54aa247e4881df87'
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4f35f23d89519dfc54aa247e4881df87`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setMovies(data.results)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home movies={movies} isLoading={isLoading} />} />
					<Route path='movies' element={<Movies />} />
					<Route path='series' element={<Series />} />
					<Route path='about' element={<About />} />
					<Route path='poster' element={<Poster />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
