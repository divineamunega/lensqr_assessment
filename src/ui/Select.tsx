/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch, SetStateAction } from "react";
import style from "./Select.module.scss";

type SelectPropTypes = {
	val: number;
	setVal: Dispatch<SetStateAction<number>>;
};

const SelectComponent = ({ val, setVal }: SelectPropTypes) => {
	const handleChange = (event: any) => {
		if (event?.target?.value) {
			setVal(Number(event.target.value));
		}
	};

	return (
		<div>
			<select className={style.select} value={val} onChange={handleChange}>
				{[5, 10, 20, 50, 100].map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectComponent;
