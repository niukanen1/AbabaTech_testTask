import { queries_URLs } from "./../Queries/GetPostQueries";
export type User = {
	_id?: string;
	email: string;
	password: string;
	favoriteMovies?: number[];
	watchLaterMovies?: number[];
};

export async function LogRegUser(isLogin: boolean, user: User) {
	try {
        if (isLogin) { 
            const response = await fetch(queries_URLs.loginUser.url, {
                method: queries_URLs.loginUser.method,
                body: JSON.stringify(user),
            });
            return response.json();
        } else { 
            const response = await fetch(queries_URLs.registerUser.url, {
                method: queries_URLs.registerUser.method,
                body: JSON.stringify(user),
            });
            return response.json();
        }
	} catch (err) {
		alert((err as Error).message);
	}
}
