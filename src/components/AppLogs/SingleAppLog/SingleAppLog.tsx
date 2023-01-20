import { v4 as uuidv4, } from 'uuid';
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import LogStore from "../../../Stores/LogStore";
import Loader, { LoaderSize } from "../../Loader/Loader";
import styles from "./SingleAppLog.module.css";


type LogType = "success" | "error" | "loading";
export class AppLog  {
    id = uuidv4();
	type: LogType;
	message: string;
	expirationTime?: number = 1000;
    constructor(type: LogType, message: string, store: typeof LogStore) { 
        this.type = type;
        this.message = message;
        // this.remove(store);
    }
    remove(store: typeof LogStore) { 
        setTimeout(() => { 
            store.removeLog(this.id); 
        }, 1000)
    }
};

export type AppLogProps = { 
    appLog: AppLog
}
function SingleAppLog({ appLog }: AppLogProps) {

    const [removing, setRemoving] = useState(false); 
	const Icon = () => {
		if (appLog.type != "loading") return <img src={`/Icons/${appLog.type}.svg`} alt='' />;
		return <Loader size={LoaderSize.small} />;
	};
	const Close = () => {
		return <img onClick={() => LogStore.removeLog(appLog.id)} src={"/Icons/cross.svg"} alt=''></img>;
	};

    useEffect(() => { 
        const ele = document?.querySelector(`.${styles.container}`) as HTMLDivElement;
        if (ele.parentElement?.parentElement) { 
            let height = ele.parentElement.parentElement.style.height
            console.log(height);
            // ele.parentElement.parentElement.style.height = `${200}px`
        }
       
        setTimeout(() => { 
            setRemoving(true);
            appLog.remove(LogStore);
        }, 150000)
        
        
    }, []); 

	return (
		<div className={[styles.container, removing ? styles.remove : ""].join(' ')}>
			<div className={styles.mainBody}>
				<Icon />
				<p className={styles[appLog.type] ?? ""}>{appLog.message}</p>
			</div>

			<Close />
		</div>
	);
}

export default observer(SingleAppLog);