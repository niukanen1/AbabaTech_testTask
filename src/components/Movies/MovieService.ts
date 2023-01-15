import {MovieType} from './MovieCompact/MovieCompact';

export enum MovieSortType { 
    latest = "latest",
    popular = "popular", 
    topRated = "top_rated", 
    upcoming = "upcoming"
}

export type PersonType = {
    id : number,
    whoIs : string,
    name : string
}

export type PersonImageType = {
        id?: number,
        profiles?:
        {
            aspect_ratio?: number,
            file_path?: string,
            height?: number,
            iso_639_1?: null,
            vote_average?: number,
            vote_count?: number,
            width?: number
        }[]

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

export async function GetPersonImage(id : number): Promise<PersonImageType | null> {
    console.log(process.env.REACT_APP_TMDB_API)
    const queryURL = `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_API}`;
    try {
        const response = await fetch(queryURL)
        return await response.json()
    } catch (err) {
        console.log(err);
    }
    return null;
}