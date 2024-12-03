import { useRef, useState } from "react";
import style from "./Input.module.scss";

type Props = {
	type: string;
	required?: boolean;
	placeholder?: string;
};

const Input = ({ type, required, placeholder }: Props) => {
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
		<div className={style.inputCont}>
			<input
				className={style.input}
				type={type}
				required={required}
				placeholder={placeholder || ""}
				ref={inputRef}
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
		</div>
	);
};

export default Input;
