import { Link } from "react-router";
import { userData } from "../services/apiUser";
import styles from "./Table.module.scss";
import FilterForm from "../features/users/FilterForm";

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
						<button className={styles.filterBtn}>
							<img src="/users/stack.svg" />
							<FilterForm />
						</button>
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
				<button>
					&#8942;
					<DropDown id={user.id} />
				</button>
			</td>
		</tr>
	);
};

type DropDownProp = {
	id: string;
};
const DropDown = function ({ id }: DropDownProp) {
	return (
		<div className={styles.dropDown}>
			<Link to={`${id}`}>
				<span>
					<img src="/users/eye.svg" />
				</span>
				<span>View Details</span>
			</Link>
			<Link to={`${id}`}>
				<span>
					<img src="/users/delete_person.svg" />
				</span>
				<span>Blacklist User</span>
			</Link>
			<Link to={`${id}`}>
				<span>
					<img src="/users/activate_user.svg" />
				</span>
				<span>Activate User</span>
			</Link>
		</div>
	);
};

export { TableRow, TableRowHead };
