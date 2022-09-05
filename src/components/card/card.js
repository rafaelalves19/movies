import React from 'react'

import Grid from '../grid/grid'
import Container from '../container/container'

export default function Card() {
	return (
		<div className='card__moviesSlider'>
			<div className='card__background'>
				<img src='/images/exemplo1.JPG' alt='foto' />
			</div>
			<div className='card__infowrapper'>
				<Container>
					<Grid>
						<div className='card__moviePicture'>
							<img className='card__movieImage' src='/images/exemplo4.JPG' alt='img' />
						</div>
						<div className='card__info'>
							<h1>O burro sou eu!</h1>
							<ul className='card__genres'>
								<li>Terror</li>
								<li>Científico</li>
								<li>Romance</li>
								<li>Comédia</li>
							</ul>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar mi sed quam ullamcorper rutrum. Vivamus tempus erat ut ipsum dictum, in aliquam turpis cursus. Duis justo lectus, elementum at sollicitudin eget, maximus sit amet enim. Donec sed libero justo. In enim sapien, blandit eu vulputate sed, viverra vitae orci. Nulla tellus lacus, posuere nec neque vel, interdum consequat sem.Duis justo lectus, elementum at sollicitudin eget, maximus sit amet enim. Donec sed libero justo. In enim sapien, blandit eu vulputate sed, viverra vitae orci. Nulla tellus lacus, posuere nec neque vel, interdum consequat sem.</p>
						</div>
					</Grid>
				</Container>
			</div>
		</div>
	)
}
