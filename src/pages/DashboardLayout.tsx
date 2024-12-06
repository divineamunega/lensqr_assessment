import Sidebar from "../ui/Sidebar";
import TopNav from "../ui/TopNav";
import style from "./DashboardLayout.module.scss";
import { Outlet } from "react-router";

const DahsboardLayout = () => {
	return (
		<div className={style.dashBoardLayout}>
			<header>
				<TopNav />
			</header>

			<aside className={style.aside}>
				<Sidebar />
			</aside>

			<main>
				<div className={style.mainContent}>
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default DahsboardLayout;
