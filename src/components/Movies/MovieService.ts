import {MovieType} from './MovieCompact/MovieCompact';

export enum MovieSortType { 
    latest = "latest",
    popular = "popular", 
    topRated = "top_rated", 
    upcoming = "upcoming"
}

export type PersonType ={
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

export async function GetLatestCompactMovies(page: number = 1, moviesSortType: MovieSortType): Promise<GetMoviesResponseType | null> {
    console.log(process.env.REACT_APP_TMDB_API)
    const queryURL = `https://api.themoviedb.org/3/movie/${moviesSortType}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=${page}`;
    try {
        const response = await fetch(queryURL)
        const movieList: GetMoviesResponseType = await response.json(); 
        return movieList
    } catch (err) { 
        console.log(err);
    }
    return null; 
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


// returns next, prev pages lists
export function getPages(cur: number, total: number): {next: number[], prev: number[]} { 
    let next: number[] = [] 
    let prev: number[] = [] 

    for (let i = cur+1; i < cur+3; i++ ) { 
        
        if (i < total) { 
            next.push(i);
        }
    }
    for (let i = cur-1; i > cur-3; i-- ) { 
        if (i > 0) { 
            prev.push(i);
        }
    }
    return {next: next, prev: prev};
}