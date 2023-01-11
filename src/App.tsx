import React from 'react';
import './App.css';
import MovieList from './components/Movies/MovieList/MovieList';
import Button from "./components/Buttons/Button/Button";
import BubbleBackground from "./components/BubbleBackground/BubbleBackground";

function App() {
  return (
    <div className="App">
        <MovieList></MovieList>
        <BubbleBackground/>
        <Button action={() => console.log("action")} >Some text</Button>
    </div>
  );
}

export default App;
