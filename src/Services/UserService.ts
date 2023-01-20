import AppStore from "../Stores/AppStore";
import { queries, QueryFetch, Response } from "./../Queries/GetPostQueries";
export type User = {
	_id?: string;
	email: string;
	password: string;
	favoriteMovies?: number[];
	watchLaterMovies?: number[];
};

export async function LogRegUser(isLogin: boolean, user: User) {
	let queryOption = isLogin ? queries.loginUser : queries.registerUser;
	try {
		await QueryFetch(queryOption, { body: user }, (response) => {
			if (!response.success) {
				alert(response.message);
			} else {
				AppStore.setIsLoggedIn(true);
				AppStore.setUserData(user);
			}
		});
	} catch (err) {
		alert((err as Error).message);
	}
}

export async function LogOut() {
	await QueryFetch(queries.logout, {getUserInfo: false}, (response) => {
		if (response.success) {
			AppStore.setIsLoggedIn(false);
            AppStore.setUserData({
                email: "",
                password: ""
            });
		}
	});
}

// export async function GetUserData() {
// }

export async function CheckIfLoggedIn() {
	await QueryFetch(queries.checkIfLoggedIn, {displayToasts: AppStore.userData.isLoggedIn}, (response) => {
		if (response.success) {
			AppStore.setIsLoggedIn(true);
		}
		if (response.jwtExpired) {
			AppStore.setIsLoggedIn(false);
		}
	});
	// try {
	// 	const response = await fetch(queries.checkIfLoggedIn.url, queries.checkIfLoggedIn.options);
	// 	const responseObj: Response = await response.json();
	// 	if (!responseObj.success) {
	// 		alert(responseObj.message);
	// 		return;
	// 	}
	// 	completion(responseObj.data);
	// } catch (err) {
	// 	alert((err as Error).message);
	// }
}
