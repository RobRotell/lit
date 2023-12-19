import { createContext } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Header } from './Header'
import { Footer } from './Footer'
import { BookPlacement } from './BookPlacement'
import { BookAPI } from '../controllers/BookAPI'


export const BookContext = createContext()


export const App = () => {

	// might pursue store later, but for now, native state will do
	const [ book, setBook ] = useState({})

	// initial book fetch
	useEffect( () => {
		loadBook( true )
	}, [] )


	/**
	 * Fetch book from API
	 *
	 * @param {boolean} useQueryParam If true, check for (and use) book ID in query param
	 * @return void
	 */
	const loadBook = async ( useQueryParam = false ) => {
		let fetchedBook

		// clear preexisting book
		setBook({})

		if( useQueryParam ) {
			const params = new URLSearchParams( window.location.search )

			if( params.has( 'book' ) ) {
				fetchedBook = await BookAPI.getBookById( params.get( 'book' ) )
			}
		}

		// at this point, just get a random book (including if ID wasn't for a valid book above)
		if( !fetchedBook ) {
			fetchedBook = await BookAPI.getRandomBook()
		}

		// timeout for illusion of loading (API is heckin' fast)
		setTimeout( async () => {
			setBook( fetchedBook )
		}, 250 )
	}


	// data to pass to consumers
	const providerData = {
		book,
		setBook,
		loadBook, // should really be only thing we need to pass
	}


	return (
		<BookContext.Provider value={providerData}>
			<Header />
			<BookPlacement />
			<Footer />
		</BookContext.Provider>
	)
}
