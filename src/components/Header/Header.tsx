import { observer } from "mobx-react-lite";
import Button from "../Buttons/Button/Button";
import AppStore from "../../Stores/AppStore";
import { useState } from "react";
import Modal from "../Modal/Modal";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from "./Header.module.css";
import { LogOut } from "../../Services/UserService";
import { Response } from "../../Queries/GetPostQueries";

export enum ModalType {
	login = 0,
	signup,
}

function Header() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalType, setModalType] = useState<ModalType>(ModalType.signup);


    const handleLogOut = async () => {
        const response: Response | undefined = await LogOut(); 
        if (!response) { 
            alert("Something went wrong")
            return 
        } 
        if (response.success) { 
            AppStore.setIsLoggedIn(false);
        }
        alert(response.message);
    }

	return (
		<nav className={styles.container}>
			<ul>
				<li className={styles.logo}>Movies point</li>
				<li>
					<a href='/movies/1'>Movies</a>
				</li>
                <li>
                </li>
				<li>
					{AppStore.userData.isLoggedIn ? <Button action={() => {}}>Profile</Button> : <></>}
					{AppStore.userData.isLoggedIn ? (
						<Button action={()=>handleLogOut()}>Log Out</Button>
					) : (
						<Button
							action={() => {
								setShowModal(true);
							}}>
							{modalType === ModalType.login ? "Log in" : "Sign up"}
						</Button>
					)}
				</li>
			</ul>
			<Modal closeModal={() => setShowModal(false)} isShowing={showModal}>
				<RegistrationForm
					closeModal={() => setShowModal(false)}
					modalType={modalType}
					changeModalType={() => {
						setModalType(modalType === ModalType.login ? ModalType.signup : ModalType.login);
					}}
				/>
			</Modal>
		</nav>
	);
}

export default observer(Header);
