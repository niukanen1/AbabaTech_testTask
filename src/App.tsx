
import './App.css';
import Button from "./components/Buttons/Button/Button";
import LikeButton from "./components/Buttons/LikeButton/LikeButton";
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { FullMovieList } from './pages/FullMovieList/FullMovieList';
import HomePage from './pages/HomePage/HomePage';
import { Movie } from './pages/Movie/Movie';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage />}/>
                <Route path={"movies/:pageId"} element={<FullMovieList/>}/>
                <Route path={"movies/:pageId/:movieId"} element={<Movie />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
