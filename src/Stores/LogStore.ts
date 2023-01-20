import { makeAutoObservable } from "mobx";
import { AppLog } from "../components/AppLogs/SingleAppLog/SingleAppLog";


class LogStore { 
    constructor() { 
        makeAutoObservable(this)
    }

    logList: AppLog[] = []; 

    addLog(newLog: AppLog) { 
        this.logList.push(newLog)
    }
    removeLog(id: string) {
        this.logList = this.logList.filter((log) => log.id !== id);
    }

}


export default new LogStore(); 