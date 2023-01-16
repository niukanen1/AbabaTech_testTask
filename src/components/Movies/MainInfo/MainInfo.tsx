import styles from './maininfo.module.css'
import React, {useEffect, useState} from "react";
import {Movie} from "../../../pages/Movie/Movie";
import {MovieDetails} from "../MovieService";

type MainInfoProps ={
    MovieDetails : MovieDetails
}

export default function MainInfo({MovieDetails} : MainInfoProps) {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.item}>
                <img src={"/calendar.svg"} alt={""} className={styles.icon}/>
                <span className={styles.value}>{MovieDetails.release_date}</span>
            </div>
            <div className={styles.item}>
                <img src={"/star.svg"} alt={""} className={styles.icon}/>
                <span className={styles.value}>{MovieDetails.vote_average?.toString().slice(0,3)}</span>
            </div>

            <div className={styles.item}>
                <img src={"/budget.svg"} alt={""} className={styles.icon}/>
                <span className={styles.value}>{MovieDetails.budget} $</span>
            </div>
            <div className={styles.item}>
                <img src={"/country.svg"} alt={""} className={styles.icon}/>
                <span className={styles.value}>{MovieDetails.production_countries?.map((el) => `${el.iso_3166_1} `)}</span>
            </div>


            <div className={styles.item}>
                <img src={"/revenue.svg"} alt={""} className={styles.icon}/>
                <span className={styles.value}>{MovieDetails.revenue} $</span>
            </div>
            <div className={styles.item}>
                <img src={"/duration.svg"} alt={""} className={styles.icon}/>
                <span className={styles.value}>{MovieDetails.runtime} min</span>
            </div>

        </div>
    )
}