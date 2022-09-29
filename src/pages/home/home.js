import Container from '../../components/container/container'
import Hero from '../../components/hero/hero'
import Slide from '../../components/slide/slide'

export default function Home() {
	const dummy_movies = [
		{
			title: 'title 1',
			cover: '/images/1.jpg',
			genres: ['animação', 'comédia'],
		},
		{
			title: 'title 2',
			cover: '/images/2.jpg',
			genres: ['comédia'],
		},
		{
			title: 'title 3',
			cover: '/images/3.jpg',
			genres: ['animação'],
		},
		{
			title: 'title 4',
			cover: '/images/4.jpg',
			genres: ['comédia'],
		},
		{
			title: 'title 5',
			cover: '/images/5.jpg',
			genres: ['animação'],
		},
		{
			title: 'title 6',
			cover: '/images/6.jpg',
			genres: ['comédia'],
		},
		{
			title: 'title 7',
			cover: '/images/7.jpg',
			genres: ['animação'],
		},
	]

	const dummy_series = [
		{
			title: 'title 1',
			cover: '/images/7.jpg',
			genres: ['animação', 'comédia'],
		},
		{
			title: 'title 2',
			cover: '/images/6.jpg',
			genres: ['comédia'],
		},
		{
			title: 'title 3',
			cover: '/images/5.jpg',
			genres: ['animação'],
		},
		{
			title: 'title 4',
			cover: '/images/4.jpg',
			genres: ['animação', 'comédia'],
		},
		{
			title: 'title 5',
			cover: '/images/3.jpg',
			genres: ['comédia'],
		},
		{
			title: 'title 6',
			cover: '/images/2.jpg',
			genres: ['animação'],
		},
		{
			title: 'title 7',
			cover: '/images/1.jpg',
			genres: ['animação'],
		},
	]

	return (
		<>
			<Hero />
			<Container>
				<h1 className='slide__title'>Movies</h1>
				<Slide data={dummy_movies} />
				<h1 className='slide__title'>Series</h1>
				<Slide data={dummy_series} />
			</Container>
		</>
	)
}
