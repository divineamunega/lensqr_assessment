import TopNav from "../ui/TopNav";
import style from "./DashboardLayout.module.scss";

const DahsboardLayout = () => {
	return (
		<div className={style.dashBoardLayout}>
			<header>
				<TopNav />
			</header>

			<aside>
				<div className="sidebar"></div>
			</aside>

			<main>
				<div className="mainContent"></div>
			</main>
		</div>
	);
};

export default DahsboardLayout;
