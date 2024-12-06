import { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import formatNumber from "../../utils/formatNumber";
import { getUsers, userData } from "../../services/apiUser";
import { data } from "react-router";
import { TableRow, TableRowHead } from "../../ui/Table";
import Stats from "../../ui/Stats";

const Users = () => {
	const [users, setUsers] = useState<userData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const loadUsers = async function (page = 1, limit = 10) {
		setIsLoading(true);
		setErrorMessage("");
		const res = await getUsers(page, limit);
		if ("data" in res) {
			setUsers(res.data);
			console.log(res.data);
		} else {
			setErrorMessage(res.error);
		}

		setIsLoading(false);
	};

	useEffect(function () {
		loadUsers();
	}, []);

	return (
		<div className={styles.users}>
			<h2>Users</h2>

			<div className={styles.stats}>
				<Stats />
			</div>

			<div className={styles.tableCont}>
				<div className={styles.scroll_table}>
					<table className={styles.table}>
						<thead className={styles.table_head}>
							<TableRowHead />
						</thead>
						<tbody className={styles.tbody}>
							{users.map((user) => (
								<TableRow user={user} key={user.id} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Users;
