export type Response = { 
    message: string, 
    success: boolean, 
    data: any;
}

export const queries_URLs = { 
    loginUser: { 
        url: "https://ababa-tech-test-task.onrender.com/login",
        method: "POST"
    }, 
    registerUser: {
        url: "https://ababa-tech-test-task.onrender.com/register",
        method: "POST"
    },
    logout: { 
        url: "https://ababa-tech-test-task.onrender.com/protected/logout", 
        method: "POST"
    },
    addFavoriteMovie: { 
        url: "https://ababa-tech-test-task.onrender.com/protected/addFavoriteMovie",
        method: "POST"
    }, 
    deleteFavoriteMovie: { 
        url: "https://ababa-tech-test-task.onrender.com/protected/deleteFavoriteMovie",
        method: "POST"
    },
    addWatchLaterMovie: { 
        url: "https://ababa-tech-test-task.onrender.com/protected/addWatchLaterMovie",
        method: "POST"
    }, 
    deleteWatchLaterMovie: { 
        url: "https://ababa-tech-test-task.onrender.com/protected/deleteWatchLater",
        method: "POST"
    }, 
    getUserInfo: { 
        url: "https://ababa-tech-test-task.onrender.com/protected/getUserInfo",
        method: "GET"
    }
}