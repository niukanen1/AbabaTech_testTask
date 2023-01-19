import { User } from "../Services/UserService";
import AppStore from "../Stores/AppStore";

export type Response = {
	message: string;
	success: boolean;
	data: any;
    jwtExpired: boolean
};

const baseURL =
	process.env.REACT_APP_PRODUCTION_CONFIG === "true"
		? "https://ababa-tech-test-task.onrender.com"
		: "http://localhost:4000";
console.log(baseURL);

class QueryOptions {
	url: string;
	options: RequestInit = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "",
        credentials: "include",
	};
	constructor(url: string, method: string) {
		this.url = url;
		this.options.method = method;
	}
}

export const queries = {
	loginUser: new QueryOptions(baseURL+"/login", "POST"),
	registerUser: new QueryOptions(baseURL+"/register", "POST"),
	logout: new QueryOptions(baseURL+"/logout", "POST"),
	addFavoriteMovie: new QueryOptions(baseURL+"/protected/movies/addFavoriteMovie", "POST"),
	deleteFavoriteMovie: new QueryOptions(baseURL+"/protected/movies/deleteFavoriteMovie", "POST"),
	addWatchLaterMovie: new QueryOptions(baseURL+"/protected/movies/addWatchLaterMovie", "POST"),
	deleteWatchLaterMovie: new QueryOptions(baseURL+"/protected/movies/deleteWatchLaterMovie", "POST"),
    checkIfLoggedIn: new QueryOptions(baseURL+"/protected/user/checkIfLoggedIn", "POST"),
	getUserInfo: new QueryOptions(baseURL+"/protected/user/getUserInfo", "GET"),
};

type QueryFetchOptions = { 
    body?: any
    activateFullScreenLoader?: boolean
    getUserInfo?: boolean
}
export async function QueryFetch(queryOptions: QueryOptions, { body, activateFullScreenLoader=true, getUserInfo=true}: QueryFetchOptions, completion: (response: Response) => void) { 
    const fetchOptions: RequestInit = { 
        ...queryOptions.options
    }
    if (queryOptions.options.method === "POST") { 
        fetchOptions.body = JSON.stringify(body)
    }

    AppStore.setLoader(activateFullScreenLoader); 
    try {
		const response = await fetch(queryOptions.url, fetchOptions);
        const formatedResponse: Response = await response.json();

        if (formatedResponse.jwtExpired) { 
            console.log("TOKEN EXPIRED")
            AppStore.setIsLoggedIn(false)
            AppStore.setUserData({
                email: "",
                password: ""
            });
            return 
        }
        if (formatedResponse.success && getUserInfo) { 
            await QueryFetch(queries.getUserInfo, {getUserInfo: false}, (response) => {
                if (response.success) { 
                    AppStore.setUserData(response.data as User);
                }
            })
        }
        completion(formatedResponse);
	} catch (err) {
		alert((err as Error).message);
	}
    finally { 
        AppStore.setLoader(false); 
    }
}
