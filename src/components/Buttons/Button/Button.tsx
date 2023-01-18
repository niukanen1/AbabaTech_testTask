import {PropsWithChildren} from "react";
import styles from './button.module.css'

type ButtonProps = { 
    action: () => void;
    border?: boolean;
    filled? : boolean
    isSubmit?: boolean 
    isDisabled?: boolean


}




export default function Button({children, action, border=false, filled=false, isSubmit=false, isDisabled=false} : ButtonProps & PropsWithChildren) {
    let style = [styles.button]
    if(border){
        style.push(styles.border)
    }
    if(filled){
        style.push(styles.filled)
    }
    if (isDisabled) { 
        style.push(styles.disabled)
    }
    
    return ( 
        <button disabled={isDisabled} type={isSubmit ? "submit" : undefined} className={style.join(' ')} onClick={action}>
            {children}
        </button>
    )
}

