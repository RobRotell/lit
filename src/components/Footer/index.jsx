import { useContext } from 'preact/hooks'
import { BookContext } from '../app'
import style from './style.module.css'
import { fetchBook } from '../../utils'


export const Footer = () => {
	const { setBook, excludedBookIds } = useContext( BookContext )

	const handleBtnRefreshBook = async () => {

		// triggers loading animation
		setBook({})

		const fetchedBook = await fetchBook( excludedBookIds )

		// renders new book
		setBook( fetchedBook )
	}


	return (
		<footer className={style.footer}>
			button - link to book

			<button type="button" onClick={handleBtnRefreshBook}>refresh book</button>

			link - Github repo
		</footer>
	)
}
