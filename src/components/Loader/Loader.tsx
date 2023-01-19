import { observer } from "mobx-react-lite";
import AppStore from "../../Stores/AppStore";
import { RotatingLines } from "react-loader-spinner";
import styles from './Loader.module.css';
import { useEffect } from "react";


export enum LoaderSize { 
    small = 'small', 
    medium = 'medium',
    large = 'large',
}

type LoaderProps = {
    blockScroll?: boolean
    fullScreen?: boolean
    size: LoaderSize

}

function Loader({blockScroll=false, size, fullScreen=false}: LoaderProps) {

    const sizes = { 
        small: { 
            width: '20',
            strokeWidth: '3'
        }, 
        medium: { 
            width: '30',
            strokeWidth: '4'
        }, 
        large: { 
            width: '96',
            strokeWidth: '5'
        }, 
    }

    const style = [styles.container]

    if (fullScreen) { 
        style.push(styles.shadow)
    }

    useEffect(() => { 
        if (blockScroll) { 
            if (AppStore.isLoading) { 
                window.document.body.style.overflowY = "hidden"
            } else { 
                window.document.body.style.overflowY = "scroll"
            }
        }
        
    }, [AppStore.isLoading])

	if (!AppStore.isLoading) return <></>;
    
	return (
		<div className={style.join(' ')}>
			<RotatingLines
				strokeColor='rgba(0, 0, 0, 0.5)'
				strokeWidth={sizes[size].strokeWidth}
				animationDuration='0.75'
				width={sizes[size].width}
				visible={true}
			/>
		</div>
	);
}

export default observer(Loader);
