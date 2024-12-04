import style from "./TopNav.module.scss";
import Logo from "./Logo";
import Input from "./Input";
import { Link } from "react-router";

const TopNav = () => {
	return (
		<nav className={style.nav}>
			<Logo />

			<Input
				type="search"
				padding=".9rem 2rem"
				placeholder="Search for Anything"
				width="30%"
			/>

			<div className={style.navlinks}>
				<ul>
					<li>
						<Link to="/documentation" className={style.navlinks_documentation}>
							Docs
						</Link>
					</li>
					<li>
						<button className={style.navlinks_notifs}>
							<img src="./notif_icon.png" alt="Notification Button" />
						</button>
					</li>
					<li>
						<button className={style.avatar}>
							<span>
								<img src="./avatar.svg" alt="Avatar" />
							</span>
							<span>Adedeji</span>
							<span style={{ rotate: "180deg" }}>&#9652;</span>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default TopNav;
