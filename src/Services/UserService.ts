import { queries_URLs } from "./../Queries/GetPostQueries";
export type User = {
	_id?: string;
	email: string;
	password: string;
	favoriteMovies?: number[];
	watchLaterMovies?: number[];
};

export async function LogRegUser(isLogin: boolean, user: User) {
	console.log("User to reg");
	console.log(JSON.stringify(user));
	try {
		if (isLogin) {
			const response = await fetch(queries_URLs.loginUser.url, {
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
				method: queries_URLs.loginUser.method,
				body: JSON.stringify(user),
				credentials: "include",
			});
			return response.json();
		} else {
			const response = await fetch(queries_URLs.registerUser.url, {
                headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
				method: queries_URLs.registerUser.method,
				body: JSON.stringify(user),
				credentials: "include",
			});
			return response.json();
		}
	} catch (err) {
		alert((err as Error).message);
	}
}

export async function LogOut() {
	try {
		const response = await fetch(queries_URLs.logout.url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
			method: queries_URLs.logout.method,
			credentials: "include",
		});
		return response.json();
	} catch (err) {
		alert((err as Error).message);
	}
}
