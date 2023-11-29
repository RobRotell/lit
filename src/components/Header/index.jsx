import style from './style.module.css'


export const Header = () => (
	<header className={style.header}>
		<a
			className={style.link}
			href={import.meta.env.VITE_SITE_URL}
		>
			LOGO SVG FPO
		</a>
	</header>
)
