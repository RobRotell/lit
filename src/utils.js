/**
 * Fetch book from API
 *
 * @param {array} idsToExclude Array of book IDs to exclude from fetch
 * @return {Promise<object>} Book
 */
export const fetchBook = idsToExclude => {
	return new Promise( ( resolve, reject ) => {
		fetch( import.meta.env.VITE_API_URL_GET_RANDOM_BOOK )
			.then( res => res.json() )
			.then( res => {
				const { success, data } = res

				if( success && data.book ) {
					resolve( data.book )
				}
			})
	})
}
