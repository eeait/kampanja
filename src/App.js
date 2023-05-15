import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Game from './pages/game';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/game">game</Link>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
