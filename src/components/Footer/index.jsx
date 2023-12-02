import style from './style.module.css'


import { useContext, useState } from 'preact/hooks'
import { BookContext } from '../app'


export const Footer = () => {
	const { setBook, excludedBookIds, loadBook } = useContext( BookContext )

	// for clipboard copying
	const [ copied, setCopied ] = useState( false )

	/**
	 * Copy current book URL to clipboard
	 *
	 * @return void
	 */
	const copyLinkToClipboard = () => {
		navigator.clipboard
			.writeText( window.location.href )
			.then( () => {
				setCopied( true )

				// automatically reset after a few seconds
				setTimeout( () => {
					setCopied( false )
				}, 2000 )
			})
	}


	return (
		<footer className={style.footer}>

			<button
				className={style.linkBtn}
				onClick={copyLinkToClipboard}
				type="button"
				title="Copy book link"
			>
				{copied ? (
					<>copied</>
				) : (
					<>copy</>
				)}
			</button>

			<button
				className={style.linkBtn}
				onClick={loadBook}
				type="button"
				title="Refresh book"
			>
				<svg width="32" height="32" version="1.1" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="m15.006 4.2338c-2.5975 0-4.985 0.94801-6.8188 2.5156a0.87509 0.87509 0 1 0 1.1365 1.3296c1.5297-1.3076 3.5094-2.0952 5.6824-2.0952 4.547 0 8.2696 3.4457 8.7073 7.875h-2.5823l3.5 5.25 3.5-5.25h-2.6694c-0.44738-5.3798-4.9625-9.625-10.456-9.625zm-9.625 6.125-3.5 5.25h2.6694c0.44738 5.3798 4.9625 9.625 10.456 9.625 2.5975 0 4.985-0.94801 6.8188-2.5156a0.87509 0.87509 0 1 0-1.1365-1.3296c-1.5297 1.3076-3.5094 2.0952-5.6824 2.0952-4.547 0-8.2696-3.4457-8.7073-7.875h2.5823z" fill="#fff" /></svg>
			</button>

			<a
				className={style.link}
				href="https://github.com/RobRotell/lit"
				title="Go to repo"
				target="_blank"
			>
				<svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m16.013 0c-8.8549 0-16.013 7.2111-16.013 16.132 0 7.1311 4.5866 13.167 10.949 15.304 0.79552 0.16061 1.0869-0.34712 1.0869-0.77421 0-0.374-0.02622-1.6559-0.02622-2.9916-4.4545 0.9617-5.3821-1.9231-5.3821-1.9231-0.71587-1.8696-1.7766-2.3502-1.7766-2.3502-1.458-0.98825 0.1062-0.98825 0.1062-0.98825 1.6173 0.10686 2.4659 1.6559 2.4659 1.6559 1.4314 2.457 3.738 1.7628 4.6659 1.3354 0.13242-1.0417 0.55689-1.7628 1.0076-2.1633-3.5528-0.37399-7.2908-1.7628-7.2908-7.9594 0-1.7628 0.63589-3.205 1.6435-4.3267-0.15897-0.40054-0.71587-2.0568 0.1593-4.2736 0 0 1.3521-0.42742 4.4007 1.6559a15.396 15.396 0 0 1 4.0035-0.53428c1.3521 0 2.7304 0.18716 4.0031 0.53428 3.049-2.0834 4.4011-1.6559 4.4011-1.6559 0.87517 2.2168 0.31794 3.873 0.15897 4.2736 1.0341 1.1217 1.6438 2.5639 1.6438 4.3267 0 6.1966-3.738 7.5585-7.3173 7.9594 0.58344 0.5074 1.0869 1.4688 1.0869 2.9913 0 2.1633-0.02622 3.8996-0.02622 4.4335 0 0.42742 0.29172 0.93515 1.0869 0.77487 6.3628-2.1371 10.949-8.1731 10.949-15.304 0.02622-8.9211-7.1583-16.132-15.987-16.132z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd" /></svg>
			</a>

		</footer>
	)
}
