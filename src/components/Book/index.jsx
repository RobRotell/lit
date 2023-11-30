import style from './style.module.css'


import { BookCover } from '../BookCover'
import { BookMeta } from '../BookMeta'


export const Book = () => {
	return (
		<article className={style.book}>
			<BookCover />
			<BookMeta />
		</article>
	)
}
