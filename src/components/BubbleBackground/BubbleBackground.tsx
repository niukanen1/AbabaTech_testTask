import {PropsWithChildren, useEffect} from "react";
import styles from './bubblebackground.module.css'
import {FastAverageColor} from "fast-average-color";


type BubblesProps = {


}

export default function BubbleBackground({} : BubblesProps) {
    useEffect(() => {
        setTimeout(() => {
            console.log(document.getElementsByTagName('img')[0])
            let fac = new FastAverageColor()
            let color = fac.getColor(document.getElementsByTagName('img')[0])
            console.log(color)
        }, 5000)

    }, [])

    return (
         <></>
    )
}