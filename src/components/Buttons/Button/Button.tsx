import {PropsWithChildren} from "react";
import styles from './button.module.css'


type ButtonProps = { 
    action: () => void;
    border?: boolean;
    filled? : boolean
    isSubmit?: boolean 


}

export default function Button({children, action, border=false, filled=false, isSubmit=false} : ButtonProps & PropsWithChildren) {
    let style = [styles.button]
    if(border){
        style.push(styles.border)
    }
    if(filled){
        style.push(styles.filled)
    }
    
    return ( 
        <button type={isSubmit ? "submit" : undefined} className={style.join(' ')} onClick={action}>
            {children}
        </button>
    )
}

