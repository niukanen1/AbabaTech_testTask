
import './App.css';
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
