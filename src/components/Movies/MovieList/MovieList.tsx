import { useNavigate } from "react-router-dom";
import MovieCompact, { MovieType } from "../MovieCompact/MovieCompact";
import styles from "./MovieList.module.css"
type MovieListProps = {
	movieList: MovieType[];
    isLoading: boolean
};

export default function MovieList({movieList, isLoading} : MovieListProps) {

    const emptyArray = Array.from(Array(20).keys());

	return (
		<>
			{isLoading ? (
				<div className={styles.container_vertical}>
                {emptyArray?.map((id) => (
                    <div className={styles.fillerComponent} key={id} >

                    </div>
                ))}
            </div>
			) : (
				<div className={styles.container_vertical}>
					{movieList?.map((movie) => (
						<div key={movie.id} >
							<MovieCompact movieData={movie} />
						</div>
					))}
				</div>
			)}
		</>
	);
}
