import { createContext } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Header } from './Header'
import { Footer } from './Footer'
import { Book } from './Book'
import { fetchBook } from '../utils'


export const BookContext = createContext()


export const App = () => {

	// might pursue store later, but for now, native state will do
	const [ book, setBook ] = useState({})
	const [ excludedBookIds, setExcludedBookIds ] = useState([])

	// initial book fetch
	useEffect( async () => {
		const book = await fetchBook()
		setBook( book )
	}, [] )

	// data to pass to consumers
	const providerData = {
		book,
		setBook,
		excludedBookIds,
		setExcludedBookIds
	}

	console.log( 'render' )

	return (
		<BookContext.Provider value={providerData}>
			<Header />
			<Book />
			<Footer />
		</BookContext.Provider>
	)
}
