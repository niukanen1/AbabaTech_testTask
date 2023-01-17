export type Response = { 
    message: string, 
    success: boolean, 
    data: any;
}

const baseURL = process.env.production ? "https://ababa-tech-test-task.onrender.com" : "http://localhost:4000"

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