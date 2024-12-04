import { MouseEventHandler } from "react";
import Input from "../../ui/Input";
import style from "./LoginForm.module.scss";
import { Link, useNavigate } from "react-router";

const LoginForm = () => {
	const navigate = useNavigate();

	const login: MouseEventHandler<HTMLButtonElement> = function (e) {
		e.preventDefault();

		//TODO: Some additonal logic here if there's time
		navigate("/dashboard");
	};

	return (
		<form className={style.form}>
			<Input type="email" placeholder="Email" required />

			<Input type="password" required placeholder="Password" />

			<div>
				<Link to="/forgot_password" className={style.form__forgotPassword}>
					Forgot Password
				</Link>
			</div>

			<div>
				<button className={style.form__submitBtn} onClick={login}>
					Log in
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
