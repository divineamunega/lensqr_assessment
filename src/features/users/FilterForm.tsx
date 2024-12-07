import styles from "./FilterForm.module.scss";

import Input from "../../ui/Input";

const FilterForm = () => {
	return (
		<div className={styles.filter_form}>
			<Input
				type="select"
				label="Organization"
				placeholder="Select"
				padding="1rem"
				option={["Lendsqr", "Irorun"]}
			/>
			<Input type="text" label="Username" placeholder="User" padding="1rem" />
			<Input type="email" label="Email" placeholder="Email" padding="1rem" />
			<Input type="date" label="Date" placeholder="Date" padding="1rem" />
			<Input
				type="text"
				label="Phone Number"
				placeholder="Phone Number"
				padding="1rem"
			/>
			<Input
				type="select"
				label="Status"
				placeholder="Select"
				padding="1rem"
				option={["Blacklisted", "Pending", "Active", "Inactive"]}
			/>

			<div className={styles.filter_form__buttons}>
				<button>Reset</button>
				<button>Filter</button>
			</div>
		</div>
	);
};

export default FilterForm;
