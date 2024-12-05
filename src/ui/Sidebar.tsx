import style from "./Sidebar.module.scss";
import { Link } from "react-router";

const customers = [
	{
		label: "Users",
		path: "/",
		imgPath: "./sidebar/user_icon.svg",
	},
	{
		label: "Guarantors",
		path: "/",
		imgPath: "./sidebar/guarantor_icon.svg",
	},
	{
		label: "Loans",
		path: "/",
		imgPath: "./sidebar/loans_icon.svg",
	},
	{
		label: "Decision Models",
		path: "/",
		imgPath: "./sidebar/decision_icon.svg",
	},
	{ label: "Savings", path: "/", imgPath: "./sidebar/savings_icon.svg" },
	{
		label: "Loan Requests",
		path: "/",
		imgPath: "./sidebar/loanrequest_icon.svg",
	},
	{ label: "White List", path: "/", imgPath: "./sidebar/whitelist_icon.svg" },
	{ label: "Karma", path: "/", imgPath: "./sidebar/karma_icon.svg" },
];

const bussinesses = [
	{
		label: "Organization",
		path: "/",
		imgPath: "./sidebar/organization_icon.svg",
	},
	{
		label: "Loan Products",
		path: "/",
		imgPath: "./sidebar/loanrequest_icon.svg",
	},
	{
		label: "Savings Product",
		path: "/",
		imgPath: "./sidebar/savingsproduct_icon.svg",
	},
	{ label: "Fees and Charges", path: "/", imgPath: "./sidebar/fees_icon.svg" },
	{
		label: "Transactions",
		path: "/",
		imgPath: "./sidebar/transaction_icon.svg",
	},
	{ label: "Services", path: "/", imgPath: "./sidebar/services_icon.svg" },
	{
		label: "Service Account",
		path: "/",
		imgPath: "./sidebar/services_acount_icon.svg",
	},
	{
		label: "Settlements",
		path: "/",
		imgPath: "./sidebar/settlements_icon.svg",
	},
	{ label: "Reports", path: "/", imgPath: "./sidebar/reports_icon.svg" },
];

const settings = [
	{ label: "Preferences", path: "/", imgPath: "./sidebar/prefrences_icon.svg" },
	{
		label: "Fees and Printing",
		path: "/",
		imgPath: "./sidebar/fees_pricing_icon.svg",
	},
	{ label: "Audit Logs", path: "/", imgPath: "./sidebar/audit_icon.svg" },
];

const Sidebar = () => {
	return (
		<nav className={style.cont}>
			<ul className={style.sidebar_organization}>
				<li>
					<button>
						<span>
							<img src="./switch_organization.svg" alt="Switch Organization" />
						</span>
						<span>Switch Organzation</span>
						<span>
							<img src="./sidebar/triangle.svg" />
						</span>
					</button>
				</li>
				<li>
					<div>
						<span>
							<img src="./dashboard_icon.svg" alt="Dashboard Icon" />
						</span>
						<span>Dashboard</span>
					</div>
				</li>
			</ul>

			{/* Customers */}
			<div className={style.sidebar_navigation}>
				<p>Customers</p>
				<ul>
					{customers.map((item, index) => (
						<li key={index}>
							<Link to={item.path} className={style.navlink}>
								<span>
									<img src={item.imgPath} />
								</span>
								<span>{item.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Bussiness */}
			<div className={style.sidebar_navigation}>
				<p>Businesses</p>

				<ul>
					{bussinesses.map((item, index) => (
						<li key={index}>
							<Link to={item.path} className={style.navlink}>
								<span>
									<img src={item.imgPath} />
								</span>
								<span>{item.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Settings */}
			<div className={style.sidebar_navigation}>
				<p>Settings</p>

				<ul>
					{settings.map((item, index) => (
						<li key={index}>
							<Link to={item.path} className={style.navlink}>
								<span>
									<img src={item.imgPath} />
								</span>
								<span>{item.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Sidebar;
