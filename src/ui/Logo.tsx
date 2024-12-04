import { Link } from "react-router";
import style from "./Logo.module.scss";

const Logo = () => {
	return (
		<Link to="/" className={style.logo} tabIndex={0}>
			<span>
				<img src="./logo.svg" alt="logo image" />
			</span>
			<span>lendsqr</span>
		</Link>
	);
};

export default Logo;
