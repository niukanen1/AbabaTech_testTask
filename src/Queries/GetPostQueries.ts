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
	addFavoriteMovie: new QueryOptions(baseURL+"/protected/addFavoriteMovie", "POST"),
	deleteFavoriteMovie: new QueryOptions(baseURL+"/protected/deleteFavoriteMovie", "POST"),
	addWatchLaterMovie: new QueryOptions(baseURL+"/protected/addWatchLaterMovie", "POST"),
	deleteWatchLaterMovie: new QueryOptions(baseURL+"/protected/deleteWatchLater", "POST"),
    checkIfLoggedIn: new QueryOptions(baseURL+"/protected/user/checkIfLoggedIn", "POST"),
	getUserInfo: new QueryOptions(baseURL+"/protected/user/getUserInfo", "GET"),
};

type QueryFetchOptions = { 
    store?: typeof AppStore
    body?: any
}
export async function QueryFetch(queryOptions: QueryOptions, {store, body}: QueryFetchOptions, completion: (response: Response) => void) { 
    const fetchOptions: RequestInit = { 
        ...queryOptions.options
    }
    if (queryOptions.options.method === "POST") { 
        fetchOptions.body = JSON.stringify(body)
    }
    try {
		const response = await fetch(queryOptions.url, fetchOptions);
        const formatedResponse: Response = await response.json();

        if (formatedResponse.jwtExpired) { 
            console.log("TOKEN EXPIRED")
            store?.setIsLoggedIn(false)
            store?.setUserData({
                email: "",
                password: ""
            });
            return 
        }
        completion(formatedResponse);
	} catch (err) {
		alert((err as Error).message);
	}
}
