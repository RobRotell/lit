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
	static async getRandomBook() {
		const excludedIds = BookAPI.#getExcludedIds( true )
		console.log( excludedIds )

	}


	/**
	 * Get specific book from API
	 *
	 * @throws {Error} no book matches ID
	 *
	 * @param {number} id Book ID
	 * @return {<Promise>(object|null)}
	 */
	static async getBookById( id ) {

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

}
