import styles from './genres.module.css'
import React, {useEffect, useState} from "react";

type MainInfoProps ={
    MovieGenres : {
        id: number,
        name: string
    }[] | undefined
}

export default function Genres({MovieGenres} : MainInfoProps) {
    return (
        <div className={styles.genres}>
            {
                MovieGenres?.map((el) => {
                    return (<span className={styles.genre}>{el.name}</span>)
                })
            }
        </div>
    )
}