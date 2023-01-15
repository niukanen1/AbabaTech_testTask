
import styles from './horizontallist.module.css'
import {PersonType} from "../Movies/MovieService";
import {MovieType} from "../Movies/MovieCompact/MovieCompact";
import {type} from "os";
import PersonCard from "../Movies/MovieCards/PersonCard/PersonCard";
import MovieCard from "../Movies/MovieCards/MovieCard/MovieCard";

type HorizontalListProps = {

    Persons?: PersonType[];
    Movies?: MovieType[]

}

export default function HorizontalList({Persons, Movies} : HorizontalListProps ) {

    if (!Persons && !Movies){
        return (
            <></>
        )
    }
    return ( 
        <div className={styles.list}>
            {
                Persons ?
                   Persons.map((el) => (<div key={el.id} className={styles.item}><PersonCard Person={el}/></div>))
                    :
                    Movies?.map((el) => (<div key={el.id} className={styles.item}><MovieCard Movie={el}/></div>))
            }
        </div>
    )
}

