export type Response = { 
    message: string, 
    success: boolean, 
    data: any;
}

const baseURL = process.env.REACT_APP_PRODUCTION_CONFIG ? "https://ababa-tech-test-task.onrender.com" : "http://localhost:4000"
console.log(process.env.REACT_APP_PRODUCTION_CONFIG)
export const queries_URLs = { 
    loginUser: { 
        url: baseURL + "/login",
        method: "POST"
    }, 
    registerUser: {
        url: baseURL + "/register",
        method: "POST"
    },
    logout: { 
        url: baseURL + "/logout",
        method: "POST"
    },
    addFavoriteMovie: { 
        url: baseURL + "/protected/addFavoriteMovie",
        method: "POST"
    }, 
    deleteFavoriteMovie: { 
        url: baseURL + "/protected/deleteFavoriteMovie",
        method: "POST"
    },
    addWatchLaterMovie: { 
        url: baseURL + "/protected/addWatchLaterMovie",
        method: "POST"
    }, 
    deleteWatchLaterMovie: { 
        url: baseURL + "/protected/deleteWatchLater",
        method: "POST"
    }, 
    getUserInfo: { 
        url: baseURL + "/protected/getUserInfo",
        method: "GET"
    }
}