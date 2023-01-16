import { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button/Button";
import { MovieType } from "../../components/Movies/MovieCompact/MovieCompact";
import MovieList from "../../components/Movies/MovieList/MovieList";
import { PageControls } from "../../components/Movies/MovieList/PageControls/PageControls";
import { GetLatestCompactMovies, getPages, MovieSortType } from "../../components/Movies/MovieService";
import styles from "./FullMovieList.module.css";

export function FullMovieList() {
	const [isLoading, setIsLoading] = useState(false);
	const [movieList, setMovieList] = useState<MovieType[]>([]);
    const [pages, setPages] = useState<{cur: number, total: number}>({cur: 0, total: 0});

	useEffect(() => {
		setIsLoading(true);
		GetLatestCompactMovies(1, MovieSortType.popular).then((response) => {
            if (!response) { 
                alert("Failed to fetch movies");
            }
			setMovieList(response?.results as MovieType[]);
			setIsLoading(false);

            setPages({ 
                cur: response?.page as number, 
                total: response?.total_pages as number,
            }); 

		});
	}, []);

	return (
		<main className={styles.mainContainer}>
			<MovieList movieList={movieList} isLoading={isLoading} />
			<PageControls pages={pages}/>
		</main>
	);
}
