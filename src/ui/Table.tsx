import { userData } from "../services/apiUser";
import styles from "./Table.module.scss";

const tableHead = [
	"Organization",
	"Username",
	"Email",
	"Phone Number",
	"Date Joined",
	"Status",
];

const TableRowHead = () => {
	return (
		<tr className={styles.table_row_head}>
			{tableHead.map((text, key) => (
				<th key={key} className={styles.table_head__element}>
					<div>
						<span>{text}</span>
						<img src="/users/stack.svg" />
					</div>
				</th>
			))}
			<th>
				<div>
					<span>&nbsp;</span>
				</div>
			</th>
		</tr>
	);
};

type TableRowProps = {
	user: userData;
};
const TableRow = ({ user }: TableRowProps) => {
	return (
		<tr className={styles.table_row}>
			<td className={styles.table_data}>{user.organization}</td>
			<td className={styles.table_data}>{user.firstName}</td>
			<td className={styles.table_data}>{user.email}</td>
			<td className={styles.table_data}>{user.phone}</td>
			<td className={styles.table_data}>{user.dateJoined}</td>
			<td className={`${styles.table_data} ${styles[`${user.status}`]}`}>
				<div>{user.status}</div>
			</td>
			<td className={`${styles.table_data} ${styles.table_actionBtn}`}>
				<button>&#8942;</button>
			</td>
		</tr>
	);
};

export { TableRow, TableRowHead };
