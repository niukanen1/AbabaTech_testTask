import React from 'react';
import './App.css';
import MovieList from './components/Movies/MovieList/MovieList';
import Button from "./components/Buttons/Button/Button";
import LikeButton from "./components/Buttons/LikeButton/LikeButton";
import PersonCard from "./components/Movies/MovieCards/PersonCard/PersonCard";
import {PersonType} from "./components/Movies/MovieService";
import MovieCard from "./components/Movies/MovieCards/MovieCard/MovieCard";


function App() {
    const p : PersonType = {
        id : 66633,
        whoIs : "Some Role",
        name : "Some Name"
    }
  return (
    <div className="App">
        <MovieList></MovieList>
        <Button action={() => console.log("action")} >Some text</Button>
        <LikeButton action={() => console.log("like")}/>
        <div>
            <PersonCard Person={p}/>
            <PersonCard Person={p}/>
        </div>

    </div>
  );
}

export default App;
