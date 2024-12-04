import Sidebar from "../ui/Sidebar";
import TopNav from "../ui/TopNav";
import style from "./DashboardLayout.module.scss";

const DahsboardLayout = () => {
	return (
		<div className={style.dashBoardLayout}>
			<header>
				<TopNav />
			</header>

			<aside>
				<Sidebar />
			</aside>

			<main>
				<div className="mainContent"></div>
			</main>
		</div>
	);
};

export default DahsboardLayout;
