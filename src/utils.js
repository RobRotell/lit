/**
 * Fetch book from API
 *
 * @param {array} idsToExclude Array of book IDs to exclude from fetch
 * @return {Promise<object>} Book
 */
export const fetchBookFromApi = idsToExclude => {
	return new Promise( ( resolve, reject ) => {
		fetch( import.meta.env.VITE_API_URL_GET_RANDOM_BOOK )
			.then( res => res.json() )
			.then( res => {
				const { success, data } = res

				if( success && data.book ) {

					// update URL (in case user wants to share link)
					const { id } = data.book
					const url = new URL( window.location.href )

					url.searchParams.set( 'book', id )

					history.pushState( null, '', url.toString() )

					resolve( data.book )
				}
			})
	})
}
