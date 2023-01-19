import {PropsWithChildren, useEffect, useRef, useState} from "react";
import styles from './likebutton.module.css'


export type ButtonProps = {
    action: () => void;
    filled? : boolean
    changeFilled: (value: boolean)=>void


}

export default function LikeButton({action, filled=false, changeFilled} : ButtonProps) {
    const [style, setStyle] = useState([styles.heartLikeButton])

    function LikeAction(){
        action()

        changeFilled(!filled)
    }

    useEffect(() => {
        if (filled){
            if(!(styles.empty in style)){
                setStyle([...style, styles. liked])
            }
        }else{
            setStyle(style.filter((element) => {
                return element != styles.liked
            }))
        }
    }, [filled])

    return (
        <button className={styles.likeButton} onClick={() => LikeAction()}>
            <div className={style.join(' ')}></div>
        </button>
    )
}