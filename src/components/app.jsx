import { createContext } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Header } from './Header'
import { Footer } from './Footer'
import { BookPlacement } from './BookPlacement'
import { fetchBookFromApi } from '../utils'


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

		// clear preexisting book
		setBook({})

		// timeout for illusion of loading (API is heckin' fast)
		setTimeout( async () => {
			const fetchedBook = await fetchBookFromApi()
			setBook( fetchedBook )
		}, 250 )
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
			<BookPlacement />
			<Footer />
		</BookContext.Provider>
	)
}
