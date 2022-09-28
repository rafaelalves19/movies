import React from 'react'

import Grid from '../grid/grid'
import Container from '../container/container'

export default function Card() {
	return (
		<div className='card__moviesSlider'>
			<div className='card__background'>
				<img className='card__backgroundImage' src='/images/exemplo2.JPG' alt='foto' />
			</div>
			<Container>
				<div className='card__infoWrapper'>
					<div className='card__moviePicture'>
						<Grid>
							<img className='card__movieImage' src='/images/exemplo4.JPG' alt='img' />
							<div className='card__info'>
								<Container>
									<h1>O burro sou eu!</h1>
									<ul className='card__genres'>
										<li>Terror</li>
										<li>Científico</li>
										<li>Romance</li>
										<li>Comédia</li>
										<li>Comédia</li>
										<li>Comédia</li>
										<li>Comédia</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar mi sed quam ullamcorper rutrum. Vivamus tempus erat ut ipsum dictum, in aliquam turpis cursus. Duis justo lectus, elementum at sollicitudin eget, maximus sit amet enim. Donec sed libero justo. In enim sapien, blandit eu vulputate sed, viverra vitae orci.</p>
								</Container>
							</div>
						</Grid>
					</div>
				</div>
			</Container>
		</div>
	)
}
