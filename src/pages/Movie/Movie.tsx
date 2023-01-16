import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import styles from './movie.module.css'
import {
    GetMovieDetails,
    GetPeopleInMovie,
    GetPersonImage,
    GetRecommendations,
    MovieDetails, MovieRecommendations, PeopleInMovie
} from "../../components/Movies/MovieService";
import MainInfo from "../../components/Movies/MainInfo/MainInfo";
import Genres from "../../components/Movies/Genres/Genres";
import HorizontalList from "../../components/HorizontalList/HorizontalList";

export function Movie() {
    const [MovieDetails, setMoviesDetails] = useState<MovieDetails | null>(null)
    const [MovieRecommendations, setMovieRecommendations] = useState<MovieRecommendations | null>(null)
    const [PeopleInMovie, setPeopleInMovie] = useState<PeopleInMovie | null>(null)
    const imgURL = `https://image.tmdb.org/t/p/original/`;
    // routing
    const { movieId } = useParams();
    useEffect(() => {
        if (movieId){
            GetMovieDetails(parseInt(movieId)).then((response) => {
                    setMoviesDetails(response)
            });
            GetRecommendations(parseInt(movieId)).then((response) => {
                setMovieRecommendations(response)
            });
            GetPeopleInMovie(parseInt(movieId)).then((response) => {
                setPeopleInMovie(response)
            });
        }

    }, []);

    return ( 
        <main className={styles.main}>
            <article className={styles.movieDescription}>
                {MovieDetails ?
                    (
                    <>
                        <div className={styles.containerForImg}>
                            <img src={`${imgURL}${MovieDetails.poster_path}`} alt={""} className={styles.mainPoster}/>
                            <MainInfo MovieDetails={MovieDetails}/>
                        </div>
                        <div className={styles.mainDescription}>
                            <h1 className={styles.movieTitle}>{MovieDetails.title}</h1>
                            <span className={styles.originalMovieTitle}>{MovieDetails.original_title}</span>
                            <span className={styles.tagline}>{MovieDetails.tagline}</span>
                            <p className={styles.overview}>{MovieDetails.overview}</p>
                            <Genres MovieGenres={MovieDetails.genres}/>
                        </div>

                    </>
                    )
                :
                    (
                    <p>Loading...</p>
                    )

                }
            </article>
            <article className={styles.peopleInMovie}>
                {PeopleInMovie ?
                    (
                        <>
                            <div className={styles.listOfPeople}>
                                <h2>Cast</h2>
                                <HorizontalList Actors={PeopleInMovie.cast}/>
                            </div>
                            <div className={styles.listOfPeople}>
                                <h2>Cast</h2>
                                <HorizontalList Crew={PeopleInMovie.crew}/>
                            </div>
                        </>
                    )
                    :
                    (
                        <p>Loading...</p>
                    )

                }
            </article>
            <article className={styles.recommendation}>
                {MovieRecommendations ?
                    (
                        <>

                        </>
                    )
                    :
                    (
                        <p>Loading...</p>
                    )

                }
            </article>
        </main>
    )
}