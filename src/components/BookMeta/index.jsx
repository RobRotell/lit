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
				<div className={style.label}>title</div>
				<h1 className={book.title ? style.heading : style.headingPlaceholder}>{book.title ?? '\u00A0'}</h1>
			</div>

			{[...supportingDetails].map( ( [ key, value ] ) => (
				<div key={key} className={style.detail}>
					<div className={style.label}>{key}</div>
					<h2 className={value ? style.subheading : style.subheadingPlaceholder}>{value ?? '\u00A0'}</h2>
				</div>
			))}
		</div>
	)
}
