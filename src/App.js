import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Game from "./pages/game"

// First we render the navigation bar (nav element), on top of any page.
// Then the Routes element is responsible for rendering the page (route)
// basically depending on the url in the address bar.

function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/game">game</Link>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <footer className="footer">footer (contact yms)</footer>
    </div>
  )
}

export default App
