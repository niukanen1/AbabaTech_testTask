import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import Loader, { LoaderSize } from "../Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
import AppStore from "../../Stores/AppStore";
import { useEffect, useState } from "react";

function Layout() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(AppStore.isConfetti);
	}, [AppStore.isConfetti]);

	return (
		<>
			<ToastContainer
				position='top-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				theme='light'
			/>
			{animate ? (
				<Confetti
					run={animate}
					recycle={false}
					numberOfPieces={100}
					onConfettiComplete={() => AppStore.ShowConfetti(false)}
				/>
			) : (
				<></>
			)}

			<Loader size={LoaderSize.large} blockScroll fullScreen />
			<Header />
			<Outlet />
		</>
	);
}

export default observer(Layout);
