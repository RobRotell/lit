import style from './style.module.css'


import { useContext } from 'preact/hooks'
import { BookContext } from '../app'


export const BookMeta = () => {
	const { book } = useContext( BookContext )

	const supportingDetails = new Map([
		[ 'tagline', book.tagline ],
		[ 'author', book.author ],
		[ 'year', book.releaseYear ],
		[ 'genre', book.genre ],
	])

	return (
		<div className={style.details}>
			<div className={style.detail}>
				<div className={style.label}>Title</div>
				<h1 className={style.heading}>{book.title}</h1>
			</div>

			{[...supportingDetails].map( ( [ key, value ] ) => (
				<div key={key} className={style.detail}>
					<div className={style.label}>{key}</div>
					<h2 className={style.subheading}>{value}</h2>
				</div>
			))}
		</div>
	)
}
