import { createContext } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Header } from './Header'
import { Footer } from './Footer'
import { Book } from './Book'
import { fetchBookFromApi } from '../utils'
import { LoadingScreen } from './LoadingScreen'


export const BookContext = createContext()


export const App = () => {

	// might pursue store later, but for now, native state will do
	const [ book, setBook ] = useState({})
	const [ excludedBookIds, setExcludedBookIds ] = useState([])

	// initial book fetch
	useEffect( () => {
		loadBook()
	}, [] )


	const loadBook = async () => {
		const fetchedBook = await fetchBookFromApi()
		setBook( fetchedBook )
	}


	// data to pass to consumers
	const providerData = {
		book,
		setBook,
		excludedBookIds,
		setExcludedBookIds,
		loadBook,
	}


	return (
		<BookContext.Provider value={providerData}>
			<Header />
			{!book.id ? (
				<LoadingScreen />
			) : (
				<Book />
			)}
			<Footer />
		</BookContext.Provider>
	)
}
