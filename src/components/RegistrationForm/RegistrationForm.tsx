import { observer } from "mobx-react-lite";
import { FormEvent, useState } from "react";
import { Response } from "../../Queries/GetPostQueries";
import { CheckIfLoggedIn, LogRegUser } from "../../Services/UserService";
import AppStore from "../../Stores/AppStore";
import Button, { Size } from "../Buttons/Button/Button";
import TextInput from "../FormElements/TextInput/TextInput";
import { ModalType } from "../Header/Header";
import Loader, { LoaderSize } from "../Loader/Loader";
import styles from "./RegistrationForm.module.css";

export type RegistrationFormProps = {
	modalType: ModalType;
	changeModalType: () => void;
	closeModal: () => void;
};
function RegistrationForm({ modalType, changeModalType, closeModal }: RegistrationFormProps) {
	const [userData, setUserData] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        setLoading(true)
		let loginUser: boolean = false;
		if (modalType === ModalType.login) {
			loginUser = true;
		}
		await LogRegUser(loginUser, userData);
		if (AppStore.userData.isLoggedIn) {
            AppStore.ShowConfetti(true);
			await CheckIfLoggedIn();
			closeModal();
		}
        setLoading(false);
	};

	return (
		<div className={styles.container}>
			<h1>{modalType === ModalType.login ? "Welcome back" : "Welcome"}</h1>
			<form onSubmit={handleSubmit}>
				<TextInput
					placeholder='Email'
					onChange={(value) => {
						setUserData((prevState) => {
							const copy = { ...prevState };
							copy.email = value;
							return copy;
						});
					}}
				/>
				<TextInput
					isSecure
					placeholder='Password'
					onChange={(value) => {
						setUserData((prevState) => {
							const copy = { ...prevState };
							copy.password = value;
							return copy;
						});
					}}
				/>
				{loading ? (
					<Loader size={LoaderSize.small} />
				) : (
					<Button isSubmit size={Size.Large} filled action={() => {}}>
						{modalType === ModalType.login ? "Log In" : "Sign Up"}
					</Button>
				)}
			</form>
			{modalType === ModalType.login ? (
				<p className={styles.bottom_text}>
					Don't have an account?{" "}
					<span
						onClick={() => {
							changeModalType();
						}}>
						Sign up
					</span>
				</p>
			) : (
				<p className={styles.bottom_text}>
					Already have an account?{" "}
					<span
						onClick={() => {
							changeModalType();
						}}>
						Login
					</span>
				</p>
			)}
		</div>
	);
}

export default observer(RegistrationForm);
