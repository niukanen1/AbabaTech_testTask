import {PropsWithChildren, useEffect} from "react";
import styles from './bubblebackground.module.css'
import {FastAverageColor} from "fast-average-color";


type BubblesProps = {


}

export default function BubbleBackground({} : BubblesProps) {
    const fac = new FastAverageColor();
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/original//1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg`;
    img.crossOrigin = 'Anonymous';

    fac.getColorAsync(img)
        .then(col => col.hex)
        .catch(() => {
            console.warn(`Can not calculate background color for } (}). Reason: CORS Policy`);
            return '';
        });


    return (
         <></>
    )
}