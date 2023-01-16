
import styles from './horizontallist.module.css'
import {Cast, Crew} from "../Movies/MovieService";
import {MovieType} from "../Movies/MovieCompact/MovieCompact";
import {type} from "os";
import PersonCard from "../Movies/MovieCards/PersonCard/PersonCard";
import MovieCard from "../Movies/MovieCards/MovieCard/MovieCard";

type HorizontalListProps = {

    Actors?: Cast[];
    Crew?: Crew[],
    Movies?: MovieType[]

}

export default function HorizontalList({Actors, Crew, Movies} : HorizontalListProps ) {

    if (!Actors && !Crew && !Movies){
        return (
            <></>
        )
    }
    return ( 
        <div className={styles.list}>
            {
                Movies ?
                    Movies?.map((el) => (<div key={el.id} className={styles.item}><MovieCard Movie={el}/></div>))
                    :
                    (Actors ?
                            Actors.map((el) => (<div key={el.id} className={styles.item}><PersonCard Actor={el}/></div>))
                        :
                            Crew?.map((el) => (<div key={el.id} className={styles.item}><PersonCard CrewMan={el}/></div>))
                    )
            }
        </div>
    )
}

