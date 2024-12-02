import style from "./Logo.module.scss";

const Logo = () => {
	return (
		<div className={style.logo}>
			<span>
				<img src="./logo.svg" alt="logo image" />
			</span>
			<span>lendsqr</span>
		</div>
	);
};

export default Logo;
