import Grid from '../grid/grid'
import Container from '../container/container'

export default function Card({ movie }) {
	return (
		<div className='card__moviesSlider'>
			<div className='card__background'>
				<img className='card__backgroundImage' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='foto' />
			</div>
			<Container>
				<div className='card__infoWrapper'>
					<div className='card__moviePicture'>
						<Grid>
							<img className='card__movieImage' src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt='img' />
							<div className='card__info'>
								<Container>
									<h1>{movie.title}</h1>
									<ul className='card__genres'>
										<li>Terror</li>
										<li>Científico</li>
										<li>Romance</li>
										<li>Comédia</li>
									</ul>
									<p>{movie.overview}</p>
								</Container>
							</div>
						</Grid>
					</div>
				</div>
			</Container>
		</div>
	)
}
