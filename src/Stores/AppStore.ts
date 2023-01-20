import { makeAutoObservable } from "mobx";
import { User } from "../Services/UserService";

class AppStore { 
    constructor() { 
        makeAutoObservable(this); 
    }

    userData: {isLoggedIn: boolean, user: User | null} = { 
        isLoggedIn: false, 
        user: null,
    }
    isLoading = false; 
    isConfetti = false;

    setLoader(value: boolean) { 
        this.isLoading = value;
    }
    ShowConfetti(value: boolean) { 
        this.isConfetti = value;  
    }

    setIsLoggedIn(newValue: boolean) { 
        this.userData.isLoggedIn = newValue; 
    } 
    setUserData(newValue: User) { 
        this.userData.user = newValue; 
    }
}


export default new AppStore();