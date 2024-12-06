import styles from "./Stats.module.scss";
import formatNumber from "../utils/formatNumber";
const stats = [
	{ name: "Users", number: 2453, imgPath: "/users/users.svg" },
	{ name: "Active Users", number: 2453, imgPath: "/users/active.svg" },
	{ name: "Users with Loans", number: 12453, imgPath: "/users/lones.svg" },
	{
		name: "Users with Savings",
		number: 102453,
		imgPath: "/users/savings.svg",
	},
];

const Stats = () => {
	return stats.map(({ name, number, imgPath }, key) => (
		<div key={key}>
			<img src={imgPath} />
			<p className={styles.stats_name}>{name}</p>
			<p className={styles.stats_number}>{formatNumber(number)}</p>
		</div>
	));
};

export default Stats;
