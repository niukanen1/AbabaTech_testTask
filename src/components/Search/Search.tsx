import styles from './search.module.css'
import MultiRangeSlider from "multi-range-slider-react";

type SearchProps = {
    action: (value:string) => void;
}

export default function Search({action} : SearchProps) {
    return ( 
        <div className={styles.searchContainer}>
            <input type={'search'} onChange={(event) => action(event.currentTarget.value)} className={styles.searchLine} placeholder={"Type what you would like to watch..."}/>
            <MultiRangeSlider
                min={1900}
                max={new Date().getFullYear()}
                step={1}
                minValue={1900}
                maxValue={new Date().getFullYear()}
                className={styles.rangeSlider}
                onChange={(e) => {
                    console.log(e);
                }}
            />
        </div>
    )
}

