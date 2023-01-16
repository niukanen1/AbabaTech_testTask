import { Star } from "../../../icons/Star";
import styles from "./Movie.module.css";
import LikeButton from "../../Buttons/LikeButton/LikeButton";
import TabButton from "../../Buttons/TabButton/TabButton";
import { useNavigate } from "react-router-dom";

export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export default function MovieCompact({ movieData }: { movieData: MovieType }) {
	const imgURL = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

    const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div onClick={()=> navigate(`${movieData.id}`)} className={styles.imgContainer}>
				<img onLoad={()=>{console.log("LOADED")}} src={imgURL} alt={`${movieData.title} poster`} />
			</div>

			<div className={styles.textCon}>
				<h4>{movieData.title}</h4>
                <div className={styles.subTitle}>
                    <p>{movieData.original_title}, {movieData.original_language}</p>
                </div>
				<div className={styles.vote_average}>
					<Star width={15} height={15} />
					<p>{movieData.vote_average}</p>
				</div>
				<p className={styles.releaseDate}>{movieData.release_date}</p>
			</div>
			<div>
				<LikeButton action={() => {}}/>
				<TabButton action={() => {}}/>
			</div>

		</div>
	);
}
