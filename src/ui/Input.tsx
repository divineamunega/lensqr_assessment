import { useId, useRef, useState } from "react";
import style from "./Input.module.scss";

type Props = {
	type: string;
	required?: boolean;
	placeholder?: string;
	padding?: string;
	width?: string;
	label?: string;
	option?: string[];
};

const Input = ({
	type,
	required = false,
	placeholder,
	padding,
	width,
	label,
	option,
}: Props) => {
	const id = useId();
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [showSelect, setShowSelect] = useState(true);
	const [btnText, setBtnText] = useState(type === "password" ? "SHOW" : "");

	const toggleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (inputRef.current) {
			if (inputRef.current.type === "password") {
				inputRef.current.type = "text";
				setBtnText("HIDE");
			} else {
				inputRef.current.type = "password";
				setBtnText("SHOW");
			}
		}
	};

	if (type === "select") {
		return (
			<div
				className={style.inputCont}
				style={(function () {
					if (width) return { width };
				})()}
			>
				{label ? <label htmlFor={id}>{label}</label> : null}
				<select
					className={style.input}
					required={required}
					style={(function () {
						if (padding) return { padding };
					})()}
					id={id}
				>
					<option value="Select">Select</option>
					{option?.map((string) => (
						<option value={string}>{string}</option>
					))}
				</select>
			</div>
		);
	}

	return (
		<div
			className={style.inputCont}
			style={(function () {
				if (width) return { width };
			})()}
		>
			{label ? <label htmlFor={id}>{label}</label> : null}
			<input
				className={style.input}
				type={type}
				required={required}
				placeholder={placeholder || ""}
				ref={inputRef}
				style={(function () {
					if (padding) return { padding };
				})()}
				id={id}
			/>
			{type === "password" && (
				<button
					className={style.input_showBtn}
					onClick={toggleShow}
					aria-label="Toggle password visibility"
				>
					{btnText}
				</button>
			)}

			{type === "search" && (
				<button className={style.input_searchIcon} tabIndex={-1}>
					<img src="./searchIcon.svg" alt="Search" />
				</button>
			)}
		</div>
	);
};

export default Input;
