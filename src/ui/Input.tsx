import { useRef, useState } from "react";
import style from "./Input.module.scss";

type Props = {
	type: string;
	required?: boolean;
	placeholder?: string;
	padding?: string;
	width?: string;
};

const Input = ({ type, required, placeholder, padding, width }: Props) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
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

	return (
		<div
			className={style.inputCont}
			style={(function () {
				if (width) return { width };
			})()}
		>
			<input
				className={style.input}
				type={type}
				required={required}
				placeholder={placeholder || ""}
				ref={inputRef}
				style={(function () {
					if (padding) return { padding };
				})()}
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
