import { useContext, useEffect, useState } from 'preact/hooks'
import style from './style.module.css'
import { BookContext } from '../app'
import { createRef } from 'preact'


//


// const imageHasLoaded = () => {
// 	console.log( imgClasses )
// 	const updatedClasses = imgClasses.filter( className => {
// 		console.log( className )
// 		return '.picture-is-loading' !== className
// 	})
// 	setImgClasses( [ ...imgClasses, style.picture ] )
// }


export const BookCover = () => {
	const { book } = useContext( BookContext )


	if( undefined === book.imageUrls ) {
		return (
			<div
				className={style.placeholder}
			></div>
		)
	} else {
		return (
			// switch to plain img with srcset/sizes?
			<picture className={style.picture}>
				<source
					srcset={book.imageUrls[480]}
					width="480"
					height="480"
					media="(width < 800px)"
				/>

				<source
					srcset={book.imageUrls[768]}
					width="768"
					height="768"
					media="(width >= 800px) and ( width < 1080px )"
				/>

				<source
					srcset={book.imageUrls[1024]}
					width="1024"
					height="1024"
					media="(width >= 1080px)"
				/>

				<img
					className={style.img}
					src={book.imageUrls[1024]}
					title={`Poster for "${book.title}"`}
					width="1024"
					height="1024"
				/>
			</picture>
		)
	}
}
