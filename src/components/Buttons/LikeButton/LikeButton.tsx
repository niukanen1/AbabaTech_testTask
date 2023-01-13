import {PropsWithChildren, useEffect, useRef, useState} from "react";
import styles from './likebutton.module.css'


type ButtonProps = {
    action: () => void;
    filled? : boolean



}

export default function LikeButton({action, filled=false} : ButtonProps) {
    const [style, setStyle] = useState([styles.heartLikeButton])
    const [Filled, setFilled] = useState(filled)

    function LikeAction(){
        action()

        setFilled(!Filled)
    }

    useEffect(() => {
        if (Filled){
            if(!(styles.empty in style)){
                setStyle([...style, styles. liked])
            }
        }else{
            setStyle(style.filter((element) => {
                return element != styles.liked
            }))
        }
    }, [Filled])

    return (
        <button className={styles.likeButton} onClick={() => LikeAction()}>
            <div className={style.join(' ')}></div>
        </button>
    )
}