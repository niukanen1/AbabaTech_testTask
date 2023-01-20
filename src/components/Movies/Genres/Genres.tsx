import styles from './genres.module.css'
import React, {useEffect, useState} from "react";
import { v4 } from 'uuid';

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
                    return (<span key={v4()} className={styles.genre}>{el.name}</span>)
                })
            }
        </div>
    )
}