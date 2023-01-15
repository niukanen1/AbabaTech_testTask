import { useNavigate } from "react-router-dom";
import MovieCompact, { MovieType } from "../MovieCompact/MovieCompact";
import styles from "./MovieList.module.css"
type MovieListProps = {
	movieList: MovieType[];
    isLoading: boolean
};

export default function MovieList({movieList, isLoading} : MovieListProps) {


    const navigate = useNavigate();

	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className={styles.container_vertical}>
					{movieList?.map((movie) => (
						<div key={movie.id} onClick={()=> navigate(`movie${movie.id}`)}>
							<MovieCompact movieData={movie} />
						</div>
					))}
				</div>
			)}
		</>
	);
}
