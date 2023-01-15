
import './App.css';
import Button from "./components/Buttons/Button/Button";
import BubbleBackground from "./components/BubbleBackground/BubbleBackground";
import LikeButton from "./components/Buttons/LikeButton/LikeButton";
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { FullMovieList } from './pages/FullMovieList/FullMovieList';
import HomePage from './pages/HomePage/HomePage';

function App() {
    const p : PersonType = {
        id : 66633,
        whoIs : "Some Role",
        name : "Some Name"
    }
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage />}/>
                <Route path={"movies/:pageId"} element={<FullMovieList/>}>
                    <Route path={"movie:movieId"} element={""} />
                </Route>
            </Route>
        </Routes>
        <Header></Header>
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
