import { ToastInit } from "../components/Toasts/ToastService";
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
    resetPassword: new QueryOptions(baseURL + "/protected/user/resetPassword", "POST"),
	getUserInfo: new QueryOptions(baseURL+"/protected/user/getUserInfo", "GET"),
};

type QueryFetchOptions = { 
    body?: any
    getUserInfo?: boolean
    displayToasts?: boolean
}

export async function QueryFetch(queryOptions: QueryOptions, { body, getUserInfo=true, displayToasts=true}: QueryFetchOptions, completion: (response: Response) => void) { 
    const fetchOptions: RequestInit = { 
        ...queryOptions.options
    }
    if (queryOptions.options.method === "POST") { 
        fetchOptions.body = JSON.stringify(body)
    }
    const fetchToast = new ToastInit("Loading", 'default', queryOptions.url, 5000, true);
    if (displayToasts) { 
        fetchToast.activateToast()
    }
    try {
		const response = await fetch(queryOptions.url, fetchOptions)
        const formatedResponse: Response = await response.json();


        if (formatedResponse.jwtExpired) { 
            fetchToast.updateToast(new ToastInit("Token expired", 'error'));
            AppStore.setIsLoggedIn(false)
            AppStore.setUserData({
                email: "",
                password: ""
            });
            return 
        }
        if (formatedResponse.success && getUserInfo) { 
            const fetchToast = new ToastInit("Updating user data", 'info', queryOptions.url, 5000, true);
            fetchToast.activateToast();
            await QueryFetch(queries.getUserInfo, {getUserInfo: false, displayToasts: false}, (response) => {
                if (response.success) { 
                    AppStore.setUserData(response.data as User);
                    fetchToast.updateToast(new ToastInit(response.message, 'success'));
                } else { 
                    fetchToast.updateToast(new ToastInit(response.message, 'warning'));
                }
            })
            
        }
        if (formatedResponse.success) { 
            fetchToast.updateToast(new ToastInit(formatedResponse.message, 'success'));
        } else { 
            fetchToast.updateToast(new ToastInit(formatedResponse.message, 'warning'));
        }
        completion(formatedResponse);
	} catch (err) {
        fetchToast.updateToast(new ToastInit((err as Error).message, 'error'));
	}
}
