import { observer } from "mobx-react-lite";
import { FormEvent, useState } from "react";
import { Response } from "../../Queries/GetPostQueries";
import { LogRegUser } from "../../Services/UserService";
import AppStore from "../../Stores/AppStore";
import Button from "../Buttons/Button/Button";
import TextInput from "../FormElements/TextInput/TextInput";
import { ModalType } from "../Header/Header";
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
        let loginUser: boolean = false 
        if (modalType == ModalType.login) { 
            loginUser = true
        }
		const response: Response | undefined = await LogRegUser(loginUser, userData);
		if (response == undefined) {
			alert("Something went wrong");
            closeModal();
            return 
		}
        
        if (response.success) { 
            AppStore.setIsLoggedIn(true);
            console.log(response.message);
            console.log(AppStore.userData)
        }
        alert(response.message); 
        closeModal();
	};


	return (
		<div className={styles.container}>
			<h1>{modalType == ModalType.login ? "Welcome back" : "Welcome"}</h1>
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
				<Button isSubmit filled action={() => {}}>
                    {loading ? <p>Loading</p> : modalType == ModalType.login ? "Log In" : "Sign Up"}
				</Button>
			</form>
			{modalType == ModalType.login ? (
				<p className={styles.bottom_text}>
					Don't have an account?{" "}
					<span
						onClick={() => {
							changeModalType();
						}}>
						Signup
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
