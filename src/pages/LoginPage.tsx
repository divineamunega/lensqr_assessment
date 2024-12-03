import style from "./LoginPage.module.scss";
import Logo from "../ui/Logo";
import LoginForm from "../features/auth/LoginForm";

const LoginPage = () => {
	return (
		<div className={style.layout}>
			{/* 1st Half */}
			<div className={style.logoImageContainer}>
				<Logo />
				<div className={style.logoImageContainer_image}>
					<img src="./login_image.svg" alt="Login" />
				</div>
			</div>

			{/* 2nd Half FORM */}
			<div>
				<div className={style.formContainer}>
					<div className={style.formDetails}>
						<h2>Welcome!</h2>
						<p>Enter details to login</p>
					</div>

					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
