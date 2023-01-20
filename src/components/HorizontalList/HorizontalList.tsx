
import styles from './horizontallist.module.css'
import {Cast, Crew, MovieDetails} from "../Movies/MovieService";
import {MovieType} from "../Movies/MovieCompact/MovieCompact";
import PersonCard from "../Movies/MovieCards/PersonCard/PersonCard";
import MovieCard from "../Movies/MovieCards/MovieCard/MovieCard";
import { v4 } from 'uuid';

type HorizontalListProps = {
    wrap? : boolean
    Actors?: Cast[];
    Crew?: Crew[],
    Movies?: MovieType[] | MovieDetails[]

}

export default function HorizontalList({Actors, Crew, Movies, wrap=false} : HorizontalListProps ) {
    let styleList = [styles.list]
    if(wrap){
        styleList.push(styles.wrap)
    }

    if (!Actors && !Crew && !Movies){
        return (
            <></>
        )
    }
    return ( 
        <div className={styleList.join(" ")}>
            {
                Movies ?
                    Movies?.map((el) => (<div key={v4()} className={styles.item}><MovieCard Movie={el}/></div>))
                    :
                    (Actors ?
                            Actors.map((el) => (<div key={v4()} className={styles.item}><PersonCard Actor={el}/></div>))
                        :
                            Crew?.map((el) => (<div key={v4()} className={styles.item}><PersonCard CrewMan={el}/></div>))
                    )
            }
        </div>
    )
}

