import React from 'react';
import './App.css';
import MovieList from './components/Movies/MovieList/MovieList';
import Button from "./components/Buttons/Button/Button";
import BubbleBackground from "./components/BubbleBackground/BubbleBackground";
import LikeButton from "./components/Buttons/LikeButton/LikeButton";

function App() {
  return (
    <div className="App">
        <MovieList></MovieList>
        <Button action={() => console.log("action")} >Some text</Button>
        <LikeButton action={() => console.log("like")}/>
    </div>
  );
}

export default App;
