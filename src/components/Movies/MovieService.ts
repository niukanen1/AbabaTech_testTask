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

export type MovieDetails = {
    adult?: boolean,
    backdrop_path?: string | null,
    belongs_to_collection?: null | object,
    budget?: number,

    genres?: {
        id: number,
        name: string
    }[],
    homepage?: string | null,
    id?: number,
    imdb_id?: string | null,
    original_language?: string,
    original_title?: string,
    overview?: string | null,
    popularity?: number,
    poster_path?: string | null,

    production_companies?: {
        name?: string,
        id?: number,
        logo_path?: string | null,
        origin_country?: string
    }[],

    production_countries?: {
        iso_3166_1?: string,
        name?: string
    }[],
    release_date?: string,
    revenue?: number,
    runtime?: number | null,

    spoken_languages?: {
        iso_639_1: string,
        name: string
    }[],
    status?: string,
    tagline?: string,
    title?: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number
}

export type MovieRecommendations = {
    page?: number,

    results?: {
        poster_path?: string | null,
        adult?: boolean,
        overview?: string,
        release_date?: string,
        genre_ids?: number[],
        id?: number,
        original_title?: string,
        original_language?: string,
        title?: string,
        backdrop_path?: string | null,
        popularity?: number,
        vote_count?: number,
        video?: boolean,
        vote_average?: number,
    }[],
    total_pages?: number,
    total_results?: number,
}

export type MovieFromSearch = {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export type SearchResult = {
    page: number;
    results: MovieFromSearch[];
    total_results: number;
    total_pages: number;
}


export type Cast = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export type Crew = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

export type PeopleInMovie = {
    id: number;
    cast: Cast[];
    crew: Crew[];
}


export type GetMoviesResponseType = {
    page: number 
    results: MovieType[] 
    total_pages: number 
    total_results: number
}


export async function GetLatestCompactMovies(page: number = 1, moviesSortType: MovieSortType): Promise<GetMoviesResponseType | null> {
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
    const queryURL = `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_API}`;
    try {
        const response = await fetch(queryURL)
        return await response.json()
    } catch (err) {
        console.log(err);
    }
    return null;
}

export async function GetMovieDetails(id : number): Promise<MovieDetails | null> {
    const queryURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}`;
    try {
        const response = await fetch(queryURL)
        return await response.json()
    } catch (err) {
        console.log(err);
    }
    return null;
}


export async function GetRecommendations(id : number): Promise<MovieRecommendations | null> {
    const queryURL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API}`;
    try {
        const response = await fetch(queryURL)
        return await response.json()
    } catch (err) {
        console.log(err);
    }
    return null;
}

export async function GetPeopleInMovie(id : number): Promise<PeopleInMovie | null> {
    const queryURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API}`;
    try {
        const response = await fetch(queryURL)
        return await response.json()
    } catch (err) {
        console.log(err);
    }
    return null;
}

export async function GetSearchResults(query : string): Promise<SearchResult | null> {
    const queryURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&query=${query.split(" ").join("%20")}`;
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