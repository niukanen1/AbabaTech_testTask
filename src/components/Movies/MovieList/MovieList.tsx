import { useEffect, useState } from "react";
import MovieCompact, { MovieType } from "../MovieCompact/MovieCompact";
import { GetLatestCompactMovies, MovieSortType } from "../MovieService";
import styles from "./MovieList.module.css"
type MovieListProps = {
	movieList: MovieType[];
};

export default function MovieList() {
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
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className={styles.container_vertical}>
					{movieList?.map((movie) => (
						<div key={movie.id}>
							<MovieCompact movieData={movie} />
						</div>
					))}
				</div>
			)}
		</>
	);
}
