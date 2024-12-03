// import { useState } from "react";
import Input from "../../ui/Input";
import style from "./LoginForm.module.scss";
import { Link } from "react-router";

const LoginForm = () => {
	// const [showPassword, setShowPassword] = useState(false);

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
				<button className={style.form__submitBtn}>Log in</button>
			</div>
		</form>
	);
};

export default LoginForm;
