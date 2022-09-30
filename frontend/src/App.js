// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Register from './component/Register';
import AddPodcast from './component/AddPodcast';
import PodcastCard from './component/PodcastCard';
import './App.css';
import PodcastManager from './component/PodcastManager';
import PodcastPlayer from './component/PodcastPlayer';
import Home from './component/Home';
import Authorize from './component/Authorize';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/'/>
      <Route element={<Login/>} path="login"/>
      <Route element={<Header/>} path="header"/>
      <Route element={<Register/>} path="register"/>
      <Route element={<Authorize><AddPodcast/></Authorize>} path="addpodcast"/>
      <Route element={<Authorize><PodcastCard/></Authorize>} path="podcastcard"/>
      <Route element={<PodcastManager/>} path="podcastmanager"/>
      <Route element={<Home/>} path="home"/>
      <Route element={<PodcastPlayer/>} path="player/:id"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
