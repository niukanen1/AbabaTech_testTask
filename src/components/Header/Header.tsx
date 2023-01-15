import { observer } from "mobx-react-lite";
import Button from "../Buttons/Button/Button";
import AppStore from "../../Stores/AppStore";
import { useState } from "react";
import Modal from "../Modal/Modal";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from './Header.module.css'

export enum ModalType {
	login = 0,
	signup,
}

function Header() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalType, setModalType] = useState<ModalType>(ModalType.signup);

	return (
		<nav className={styles.container}>
			<ul>
				<li className={styles.logo}>Movies point</li>
                <li>
                    <a href="/movies/1">Movies</a>
                </li>
				<li>
                    {AppStore.userData.isLoggedIn ? <Button action={()=>{}}></Button> : <></>}
					<Button action={() => {setShowModal(true)}}>{modalType === ModalType.login ? "Log in" : "Sign up"}</Button>
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
