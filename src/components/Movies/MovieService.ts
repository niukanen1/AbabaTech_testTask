import { MovieType } from './MovieCompact/MovieCompact';

export enum MovieSortType { 
    latest = "latest",
    popular = "popular", 
    topRated = "top_rated", 
    upcoming = "upcoming"
}

export type GetMoviesResponseType = { 
    page: number 
    results: MovieType[] 
    total_pages: number 
    total_results: number
}

export async function GetLatestCompactMovies(page: number = 1, moviesSortType: MovieSortType): Promise<MovieType[]> {
    console.log(process.env.REACT_APP_TMDB_API)
    const queryURL = `https://api.themoviedb.org/3/movie/${moviesSortType}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=${page}`;
    try {
        const response = await fetch(queryURL)
        const movieList: GetMoviesResponseType = await response.json(); 
        return movieList.results
    } catch (err) { 
        console.log(err);
    }
    return []; 
} 