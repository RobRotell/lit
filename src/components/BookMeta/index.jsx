import { useContext } from 'preact/hooks'
import style from './style.module.css'
import { BookContext } from '../app'


export const BookMeta = () => {
	const { book } = useContext( BookContext )

	return (
		<div className={style.details}>

			<div className={style.detail}>
				<div className={style.label}>Title</div>
				<h1 className={style.heading}>{book.title}</h1>
			</div>

			<div className={style.detail}>
				<div className={style.label}>Tagline</div>
				<h2 className={style.subheading}>{book.tagline}</h2>
			</div>

			<div className={style.detail}>
				<div className={style.label}>Author</div>
				<h2 className={style.subheading}>{book.author}</h2>
			</div>

			<div className={style.detail}>
				<div className={style.label}>Year</div>
				<h2 className={style.subheading}>{book.releaseYear}</h2>
			</div>

			<div className={style.detail}>
				<div className={style.label}>Genre</div>
				<h2 className={style.subheading}>{book.genre}</h2>
			</div>

		</div>
	)
}
