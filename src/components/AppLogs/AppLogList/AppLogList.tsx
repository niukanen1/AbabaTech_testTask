import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LogStore from "../../../Stores/LogStore";
import SingleAppLog, { AppLog } from "../SingleAppLog/SingleAppLog";
import styles from "./AppLogList.module.css";


function AppLogList() {
    useEffect(() => { 
        LogStore.addLog(new AppLog('success', 'Message', LogStore))
        LogStore.addLog(new AppLog('success', 'Message', LogStore))
        LogStore.addLog(new AppLog('success', 'Message', LogStore))
    }, [])
    return (
        <div className={styles.container}>
            {LogStore.logList.map(log => ( 
                <div key={log.id}>
                    <SingleAppLog appLog={log} />
                </div>
            ))}
        </div>
    );
}
export default observer(AppLogList);