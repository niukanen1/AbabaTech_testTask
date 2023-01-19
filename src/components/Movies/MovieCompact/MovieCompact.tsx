import { Star } from "../../../icons/Star";
import styles from "./Movie.module.css";
import LikeButton from "../../Buttons/LikeButton/LikeButton";
import TabButton from "../../Buttons/TabButton/TabButton";
import { useNavigate } from "react-router-dom";
import { CheckUsersMovies, MovieManipulation, UserMoviesManipulationType } from "../MovieService";
import AppStore from "../../../Stores/AppStore";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

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

function MovieCompact({ movieData }: { movieData: MovieType }) {
	const imgURL = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

    const [isFavorite, setIsFavorite] = useState(false); 
    const [isWatchLater, setIsWatchLater] = useState(false); 
    useEffect(() => { 
        const check = CheckUsersMovies(parseInt(movieData.id));
        setIsFavorite(check.isFavorite)
        setIsWatchLater(check.isWatchLater);
        
        // console.log(AppStore.use);
    }, [AppStore.userData.user?.favoriteMovies, AppStore.userData.user?.watchLaterMovies])

    const navigate = useNavigate();

    // TODO fill like or favorite button if movie is on any of lists;  
    const manipulateMovie = async (manipulation: UserMoviesManipulationType) => { 
        const movieID = parseInt(movieData.id);
        await MovieManipulation(manipulation, movieID, (response) => { 
            // if (response.success)
            // TODO do not fill btn if request failed
        })
    }
	return (
		<div className={styles.container}>
			<div onClick={()=> navigate(`${movieData.id}`)} className={styles.imgContainer}>
				<img src={imgURL} alt={`${movieData.title} poster`} />
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
				<LikeButton changeFilled={(value) => {
                    if (AppStore.userData.isLoggedIn) setIsFavorite(value)
                }} filled={isFavorite} action={() => {
                    manipulateMovie(isFavorite ? 'deleteFavoriteMovie' : 'addFavoriteMovie')  
                }}/>
				<TabButton changeFilled={(value) => {
                    if (AppStore.userData.isLoggedIn) setIsWatchLater(value)
                }} filled={isWatchLater} action={() => {
                    manipulateMovie(isWatchLater ? 'deleteWatchLaterMovie' : 'addWatchLaterMovie');  
                }}/>
			</div>

		</div>
	);
}

export default observer(MovieCompact);