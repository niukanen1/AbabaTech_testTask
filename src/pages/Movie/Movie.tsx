import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from './movie.module.css'

export function Movie() {
    // routing 
    const { movieId } = useParams(); 


    return ( 
        <main className={styles.main}>
            <article className={styles.movieDescription}>

            </article>
            <article className={styles.peopleInMovie}>

            </article>
            <article className={styles.recommendation}>

            </article>
        </main>
    )
}