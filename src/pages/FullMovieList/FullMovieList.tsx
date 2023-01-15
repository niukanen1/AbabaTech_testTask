import { useState, useEffect } from "react";
import { MovieType } from "../../components/Movies/MovieCompact/MovieCompact";
import MovieList from "../../components/Movies/MovieList/MovieList";
import { GetLatestCompactMovies, MovieSortType } from "../../components/Movies/MovieService";
import styles from './FullMovieList.module.css'

export function FullMovieList() { 
    const [isLoading, setIsLoading] = useState(false);
	const [movieList, setMovieList] = useState<MovieType[]>([]);

	useEffect(() => {
		setIsLoading(true);
		GetLatestCompactMovies(1, MovieSortType.popular).then((list) => {
			setMovieList(list as MovieType[]);
			setIsLoading(false);
		});
	}, []);

    return ( 
        <main className={styles.mainContainer}> 
            <MovieList movieList={movieList} isLoading={isLoading} />
        </main>
    )
}