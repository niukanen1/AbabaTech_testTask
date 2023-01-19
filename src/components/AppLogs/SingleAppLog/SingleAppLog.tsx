import { useEffect } from "react";
import Loader, { LoaderSize } from "../../Loader/Loader";
import styles from "./SingleAppLog.module.css";

type AppLogProps = {
	type: "success" | "error" | "loading";
	message: string;
	expirationTime?: number;
};
export default function SingleAppLog({ type, message, expirationTime = 15000 }: AppLogProps) {
	const Icon = () => {
		if (type != "loading") return <img src={`/Icons/${type}`} alt='' />;
		return <Loader size={LoaderSize.small} />;
	};
    useEffect(() => { 
        
    })

	return (
		<div>
			<Icon />
		</div>
	);
}
