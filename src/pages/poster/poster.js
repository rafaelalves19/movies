import { useState, useEffect } from 'react'
import Grid from '../../components/grid/grid'
function Poster() {
	const [poster, setPoster] = useState([])

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${}?api_key=4f35f23d89519dfc54aa247e4881df87&language=en-US`)
			.then(response => response.json())
			.then(data => {
				setPoster(data.results)
			})
	}, [])

	return (
		<div className='poster'>
			<div className='poster__imgContainer'>
				<img src='/images/2.jpg' alt='movie' />
			</div>
			<Grid>
				<div className='poster__details'>
					<a href='#' className='poster__trailer'>
						Trailer
					</a>
					<p className='poster__classification'>IMDB 8.4/10</p>
				</div>
			</Grid>
		</div>
	)
}

export default Poster
