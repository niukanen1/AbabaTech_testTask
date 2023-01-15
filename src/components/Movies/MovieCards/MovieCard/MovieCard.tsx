import styles from './moviecard.module.css'
import React, {useEffect, useState} from "react";
import {MovieType} from "../../MovieCompact/MovieCompact";
import {Star} from "../../../../icons/Star";


type ButtonProps = {
    Movie : MovieType

}


export default function MovieCard({Movie} : ButtonProps) {
    return (
        <a href={""} className={styles.link}>
            <div className={styles.card} >
                <img src={"https://image.tmdb.org/t/p/original/" + Movie.poster_path} alt={""} className={styles.movieImage}/>
                <span className={styles.name}>{Movie.title}</span>
                <span className={styles.rate}><Star width={14} height={14}/>{Movie.vote_average}</span>
            </div>
        </a>
    )
}