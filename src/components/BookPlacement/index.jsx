import style from './style.module.css'


import { BookCover } from '../BookCover'
import { BookMeta } from '../BookMeta'


export const BookPlacement = () => {
	return (
		<article className={style.book}>
			<BookCover />
			<BookMeta />
		</article>
	)
}
