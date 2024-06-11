import { BrowserRouter, Link , Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Feature from './components/Feature';
import Privacy from './components/Privacy';
import HelpCenter from './components/HelpCenter';
import Blog from './components/Blog';
import Business from './components/Business';
import Download from './components/Download';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <div className='header'>
          <div className='logo'>
            <img src='https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png'></img>
          </div>
          <div className='nav'>
            <Link to="/feature">Features</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/helpcenter">Help Center</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/business">For Business</Link>
            <Link to="#">whatsApp Web</Link>
            <Link to="/download">Download</Link>
          </div>
          <div className='btn'>
            <button>Download <i className="fa-solid fa-download"></i></button>
          </div>
        </div>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/feature' Component={Feature}></Route>
            <Route path='/privacy' Component={Privacy}></Route>
            <Route path='/helpcenter' Component={HelpCenter}></Route>
            <Route path='/blog' Component={Blog}></Route>
            <Route path='/business' Component={Business}></Route>
            <Route path='/download' Component={Download}></Route>
            <Route path='*' Component={NotFound}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
