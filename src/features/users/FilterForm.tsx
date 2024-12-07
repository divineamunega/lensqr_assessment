import styles from "./FilterForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../ui/Input";

const FilterForm = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit: SubmitHandler<any> = (data) => console.log(data);

	const resetForm = () =>
		reset((formValues) => {
			return {
				...formValues,
				organization: "Select",
				username: "",
				email: "",
				date: "",
				phone_number: "",
				status: "Select",
			};
		});
	return (
		<div className={styles.filter_form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="select"
					label="Organization"
					placeholder="Select"
					padding="1rem"
					option={["Lendsqr", "Irorun"]}
					register={register}
				/>
				<Input
					type="text"
					label="Username"
					placeholder="User"
					padding="1rem"
					register={register}
				/>
				<Input
					type="email"
					label="Email"
					placeholder="Email"
					padding="1rem"
					register={register}
				/>
				<Input
					type="date"
					label="Date"
					placeholder="Date"
					padding="1rem"
					register={register}
				/>
				<Input
					type="text"
					label="Phone Number"
					placeholder="Phone Number"
					padding="1rem"
					register={register}
				/>
				<Input
					type="select"
					label="Status"
					placeholder="Select"
					padding="1rem"
					option={["Blacklisted", "Pending", "Active", "Inactive"]}
					register={register}
				/>

				<div className={styles.filter_form__buttons}>
					<button
						onClick={(e) => {
							e.preventDefault();
							resetForm();
						}}
					>
						Reset
					</button>
					<button type="submit">Filter</button>
				</div>
			</form>
		</div>
	);
};

export default FilterForm;
