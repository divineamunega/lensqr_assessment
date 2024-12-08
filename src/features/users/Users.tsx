import { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import { getUsers, userData } from "../../services/apiUser";
import { TableRow, TableRowHead } from "../../ui/Table";
import Stats from "../../ui/Stats";
import SelectComponent from "../../ui/Select";
import Pagination from "../../ui/Pagination";

const Users = () => {
	const [users, setUsers] = useState<userData[]>([]);
	const [noOfUsers, setNoOfUsers] = useState<number>(0);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [filter, setFilter] = useState({});
	console.log(filter);

	useEffect(
		function () {
			const loadUsers = async function () {
				setIsLoading(true);
				setErrorMessage("");
				const res = await getUsers(page, limit, filter);
				if ("data" in res) {
					setUsers(res.data);
					setNoOfUsers(res.total);
				} else {
					setErrorMessage(res.error);
				}

				setIsLoading(false);
			};

			loadUsers();
		},
		[page, limit, filter]
	);

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
							<TableRowHead setFilter={setFilter} />
						</thead>
						<tbody className={styles.tbody}>
							{users.map((user) => (
								<TableRow user={user} key={user.id} />
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className={styles.table_control}>
				<div className={styles.table_stats}>
					Showing <SelectComponent val={limit} setVal={setLimit} /> out of{" "}
					{noOfUsers}
				</div>
				<div>
					<Pagination
						total={noOfUsers}
						limit={limit}
						currPage={page}
						setCurrPage={setPage}
					/>
				</div>
			</div>
		</div>
	);
};

export default Users;
