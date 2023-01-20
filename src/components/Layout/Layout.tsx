import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { toast, ToastContainer, TypeOptions } from "react-toastify";
import AppLogList from "../AppLogs/AppLogList/AppLogList";
import SingleAppLog, { AppLog } from "../AppLogs/SingleAppLog/SingleAppLog";
import Header from "../Header/Header";
import Loader, { LoaderSize } from "../Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function Layout() {
	return (
		<>
			<ToastContainer
				position='top-left'
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				theme='light'
			/>
			<Loader size={LoaderSize.large} blockScroll fullScreen />
			<Header />
			<Outlet />
		</>
	);
}

export default observer(Layout);
