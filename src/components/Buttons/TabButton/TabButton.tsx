import {PropsWithChildren, useEffect, useRef, useState} from "react";
import styles from './tabbutton.module.css'


type ButtonProps = {
    action: () => void;
    filled? : boolean



}

export default function TabButton({action, filled=false} : ButtonProps) {
    const [style, setStyle] = useState([styles.TabImgButton])
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
        <button className={styles.TabButton} onClick={() => LikeAction()}>
                <svg className={style.join(' ')} width="30" height="30" viewBox="0 0 340 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.8114 29.686H308.811V447.686L169.311 308.686L28.8114 453.686V29.686Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.0225 0.807984C8.47245 2.12998 2.14345 8.73898 0.858452 13.513C0.123452 16.241 -0.122542 90.885 0.0554584 257.316L0.311455 497.186L2.40045 501.186C3.54945 503.386 6.40046 506.536 8.73646 508.186C12.4355 510.799 13.8445 511.185 19.6475 511.175C24.3875 511.167 27.2165 510.619 29.4465 509.278C31.1705 508.24 63.2905 473.483 100.825 432.039C138.36 390.595 169.404 356.686 169.811 356.686C170.218 356.686 201.262 390.595 238.797 432.039C276.332 473.483 308.452 508.24 310.176 509.278C312.406 510.619 315.235 511.167 319.975 511.175C325.778 511.185 327.187 510.799 330.886 508.186C333.222 506.536 336.073 503.386 337.222 501.186L339.311 497.186V255.113V13.04L336.628 8.98598C335.153 6.75698 332.228 3.86398 330.128 2.55898L326.311 0.185984L171.311 0.019984C75.3135 -0.083016 15.0595 0.216984 13.0225 0.807984ZM299.811 239.612V439.538L294.486 433.862C291.558 430.74 267.418 404.111 240.843 374.686C179.8 307.098 181.649 308.998 175.061 307.076C170.346 305.7 169.276 305.7 164.561 307.076C157.973 308.998 159.822 307.098 98.7795 374.686C72.2045 404.111 48.0645 430.74 45.1365 433.862L39.8115 439.538V239.612V39.686H169.811H299.811V239.612Z" fill="black"/>
                </svg>
        </button>
    )
}