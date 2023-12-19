/* eslint-disable no-undef */
export class BookAPI {


	static #excludedIds = []


	/**
	 * Update URL with book ID
	 *
	 * @param {number} id Book ID
	 * @return {void}
	 */
	static updateBookQueryParam( id ) {
		const url = new URL( window.location.href )

		url.searchParams.set( 'book', id )

		history.pushState( null, '', url.toString() )
	}


	/**
	 * Get random book from API
	 *
	 * @return {<Promise>object}
	 */
	static getRandomBook() {
		return new Promise( resolve => {
			const excludedIds = BookAPI.#getExcludedIds()
			const apiUrl = new URL( import.meta.env.VITE_API_URL_GET_RANDOM_BOOK )

			if( excludedIds.length ) {
				apiUrl.searchParams.set( 'exclude', excludedIds )
			}

			console.log( 'get random book' )

			BookAPI.fetchReq( apiUrl )
				.then( book => {
					const { id } = book

					// update URL (in case user wants to share link)
					BookAPI.updateBookQueryParam( id )

					// avoid querying book if user refetches random book
					BookAPI.#excludedIds.push( id )

					resolve( book )

				}).catch( err => {
					resolve( false )
				})
		})
	}


	/**
	 * Get specific book from API
	 *
	 * @throws {Error} no book matches ID
	 *
	 * @param {number} id Book ID
	 * @return {<Promise>(object|false)}
	 */
	static getBookById( id ) {
		return new Promise( resolve => {
			id = parseInt( id, 10 )

			if( Number.isNaN( id ) ) {
				return resolve( false )
			}

			const apiUrl = new URL( import.meta.env.VITE_API_URL_GET_BOOK_BY_ID )

			apiUrl.pathname = `${apiUrl.pathname}/${id}`

			BookAPI.fetchReq( apiUrl )
				.then( book => {
					const { id } = book

					// update URL (in case user wants to share link)
					BookAPI.updateBookQueryParam( id )

					// avoid querying book if user refetches random book
					BookAPI.#excludedIds.push( id )

					resolve( book )

				}).catch( err => {
					resolve( false )
				})
		})
	}


	/**
	 * Refresh excluded IDs with ID from URL (if present)
	 *
	 * @param {boolean} refreshIds If true, add ID (if present) from URL
	 * @return {array}
	 */
	static #getExcludedIds( refreshIds = false ) {
		if( refreshIds ) {
			const params = new URLSearchParams( window.location.search )

			if( params.has( 'book' ) ) {
				const bookId = parseInt( params.get( 'book' ) )

				if( Number.isNaN( bookId ) ) {
					BookAPI.#excludedIds.push( bookId )
				}
			}
		}

		if( 5 < BookAPI.#excludedIds.length ) {
			BookAPI.#excludedIds = BookAPI.#excludedIds.slice( 1 )
		}

		return BookAPI.#excludedIds
	}


	/**
	 * Make request
	 *
	 * @param {obj} url URL object
	 * @return {<Promise>(object|false)}
	 */
	static fetchReq( url ) {
		return new Promise( ( resolve, reject ) => {
			fetch( url.toString() )
				.then( res => res.json() )
				.then( res => {
					const { success, data } = res

					if( !success || 'object' !== typeof data ) {
						reject( 'Request failed. Please try again.' )
					}

					resolve( data.book )
				})
		})
	}

}
