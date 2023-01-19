import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MovieType } from "../../components/Movies/MovieCompact/MovieCompact";
import MovieList from "../../components/Movies/MovieList/MovieList";
import { PageControls } from "../../components/Movies/MovieList/PageControls/PageControls";
import {
	GetLatestCompactMovies,
	GetSearchResults,
	MovieSortType
} from "../../components/Movies/MovieService";
import styles from "./FullMovieList.module.css";
import Search from "../../components/Search/Search";

export function FullMovieList() {
    const {pageId} = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [movieList, setMovieList] = useState<MovieType[]>([]);
    const [pages, setPages] = useState<{cur: number, total: number}>({cur: 0, total: 0});
	const [searchRequest, setSearchRequest] = useState('')

    const navigate = useNavigate(); 
    const location = useLocation();

	useEffect(() => {
		setIsLoading(true);
		GetLatestCompactMovies(parseInt(pageId as string), MovieSortType.popular).then((response) => {
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
	}, [location.pathname]);

	useEffect(() => {
		if (searchRequest){
			GetSearchResults(searchRequest).then((response) => {
				setMovieList(response?.results as unknown as MovieType[]);
			});
		}
	}, [searchRequest])

	return (
		<main className={styles.mainContainer}>
			<Search action={(value) => setSearchRequest(value)}/>
			<MovieList movieList={movieList} isLoading={isLoading} />
			<PageControls goToPage={(pageNum) => navigate(`/movies/${pageNum}`) } pages={pages}/>
		</main>
	);
}
