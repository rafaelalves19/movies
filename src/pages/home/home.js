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
			cover: '/images/1.jpg',
			genres: ['comédia'],
		},
		{
			title: 'title 3',
			cover: '/images/1.jpg',
			genres: ['animação'],
		},
	]
	return (
		<>
			<Hero />
			<Slide data={dummy_movies} />
		</>
	)
}
