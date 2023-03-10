import styles from './moviecard.module.css'
import React, {useEffect, useState} from "react";
import {MovieType} from "../../MovieCompact/MovieCompact";
import {Star} from "../../../../icons/Star";
import { MovieDetails } from '../../MovieService';


type MovieCardProps = {
    Movie : MovieType | MovieDetails,


}


export default function MovieCard({Movie} : MovieCardProps) {
    return (
        <a href={`/movies/1/${Movie.id}`} className={styles.link}>
            <div className={styles.card} >
                <img src={"https://image.tmdb.org/t/p/original/" + Movie.poster_path} alt={""} className={styles.movieImage}/>
                <span className={styles.name}>{Movie.title}</span>
                <span className={styles.rate}><Star width={14} height={14}/>{Movie?.vote_average?.toString().slice(0,3)}</span>
            </div>
        </a>
    )
}