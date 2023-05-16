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
      <footer className="footer">
        <p>Ota yhteyttä</p>
        <p>mietimitapostaat@gmail.com</p>
        <p>+358 123456</p>
        <svg
          width="55"
          height="45"
          viewBox="0 0 55 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.327881V44.3279H55V0.327881H0ZM25.3 26.6362C25.9359 27.1093 26.7074 27.3648 27.5 27.3648C28.2926 27.3648 29.0641 27.1093 29.7 26.6362L32.3889 24.6195L51.3333 38.8279V40.6612H3.66667V38.8279L22.6111 24.6195L25.3 26.6362ZM27.5 23.7029L3.66667 5.82788V3.99455H51.3333V5.82788L27.5 23.7029ZM3.66667 10.4112L19.5556 22.3279L3.66667 34.2445V10.4112ZM51.3333 34.2445L35.4444 22.3279L51.3333 10.4112V34.2445Z"
            fill="white"
          />
        </svg>
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.4274 5.71522L53.3366 5.65845L41.8511 0L29.4544 16.5289L35.1578 24.1339C34.9872 27.002 33.7709 29.7079 31.7393 31.7395C29.7077 33.7711 27.0017 34.9873 24.1337 35.158L16.5288 29.4545L0 41.851L5.61136 53.2404L5.65858 53.3366L5.71548 53.4273C6.01493 53.9098 6.43289 54.3076 6.92957 54.5829C7.42625 54.8582 7.98513 55.0018 8.55299 55H11.5166C17.227 55 22.8814 53.8753 28.157 51.69C33.4327 49.5048 38.2263 46.3018 42.2641 42.264C46.3019 38.2261 49.5048 33.4326 51.69 28.1569C53.8753 22.8813 55 17.2268 55 11.5165V8.55273C55.0018 7.98487 54.8582 7.426 54.583 6.92932C54.3077 6.43264 53.9099 6.01467 53.4274 5.71522ZM50.7556 11.5165C50.7556 33.153 33.153 50.7556 11.5166 50.7556H9.11856L5.36412 43.1338L16.5295 34.7598L22.7459 39.4218H23.4532C27.6872 39.4171 31.7463 37.7331 34.7402 34.7392C37.734 31.7454 39.418 27.6862 39.4228 23.4523V22.7449L34.7607 16.5288L43.1338 5.36399L50.7556 9.11909V11.5165Z"
            fill="white"
          />
        </svg>
        <a href="https://instagram.com">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.7519 0C20.2076 0 19.2674 0.0364289 16.315 0.161328C13.3503 0.307044 11.345 0.766742 9.5756 1.45369C7.75069 2.16839 6.19639 3.11727 4.66117 4.66117C3.11554 6.19639 2.15798 7.75069 1.45369 9.5756C0.766742 11.345 0.307044 13.3503 0.161328 16.315C0.0277554 19.2692 0 20.2076 0 27.7519C0 35.2962 0.0364289 36.2364 0.161328 39.1888C0.307044 42.1448 0.766742 44.1588 1.45369 45.9282C2.16839 47.7531 3.11727 49.3074 4.66117 50.8426C6.19639 52.3883 7.75069 53.3458 9.5756 54.0501C11.345 54.7284 13.359 55.1967 16.315 55.3425C19.2692 55.476 20.2076 55.5038 27.7519 55.5038C35.2962 55.5038 36.2364 55.4674 39.1888 55.3425C42.1448 55.1967 44.1588 54.7266 45.9282 54.0501C47.7531 53.3354 49.3074 52.3865 50.8426 50.8426C52.3883 49.3074 53.3458 47.7618 54.0501 45.9282C54.7284 44.1588 55.1968 42.1448 55.3425 39.1888C55.476 36.2346 55.5038 35.2962 55.5038 27.7519C55.5038 20.2076 55.4674 19.2674 55.3425 16.315C55.1968 13.359 54.7266 11.3346 54.0501 9.5756C53.3354 7.75069 52.3865 6.19639 50.8426 4.66117C49.3074 3.11554 47.7618 2.15798 45.9282 1.45369C44.1588 0.766742 42.1448 0.307044 39.1888 0.161328C36.2346 0.0277554 35.2962 0 27.7519 0ZM27.7519 4.99597C35.1608 4.99597 36.0455 5.03239 38.9737 5.15729C41.6747 5.28393 43.1457 5.73495 44.1224 6.11659C45.4251 6.62139 46.3358 7.21813 47.3212 8.19304C48.2874 9.15927 48.8841 10.0804 49.3889 11.3832C49.7706 12.3598 50.2216 13.8308 50.3482 16.5318C50.4731 19.46 50.5096 20.3464 50.5096 27.7536C50.5096 35.1608 50.4731 36.0473 50.3378 38.9755C50.1921 41.6764 49.7411 43.1475 49.3612 44.1241C48.8356 45.4269 48.2492 46.3376 47.2813 47.3229C46.3046 48.2891 45.3748 48.8859 44.0825 49.3907C43.118 49.7723 41.6261 50.2233 38.9148 50.35C35.971 50.4749 35.1036 50.5113 27.6756 50.5113C20.2475 50.5113 19.3819 50.4749 16.4346 50.3396C13.7337 50.1938 12.2436 49.7428 11.2669 49.3629C9.94857 48.8373 9.04478 48.251 8.07681 47.283C7.10017 46.3064 6.47914 45.3766 6.00036 44.0842C5.61179 43.1197 5.1677 41.6278 5.02372 38.9165C4.92484 36.0074 4.87801 35.1053 4.87801 27.712C4.87801 20.3221 4.92484 19.4183 5.02372 16.4728C5.1677 13.7615 5.61179 12.2731 6.00036 11.3051C6.47914 9.98499 7.1019 9.08294 8.07681 8.1063C9.04305 7.14007 9.94857 6.51557 11.2669 6.02638C12.2436 5.64648 13.6973 5.19546 16.4086 5.06015C19.3524 4.95433 20.2198 4.91617 27.6374 4.91617L27.7519 4.99597ZM27.7519 13.5082C19.8746 13.5082 13.5047 19.8867 13.5047 27.7554C13.5047 35.6327 19.8833 42.0025 27.7519 42.0025C35.6292 42.0025 41.9991 35.624 41.9991 27.7554C41.9991 19.878 35.6205 13.5082 27.7519 13.5082ZM27.7519 37.0066C22.638 37.0066 18.5007 32.8693 18.5007 27.7554C18.5007 22.6414 22.638 18.5042 27.7519 18.5042C32.8658 18.5042 37.0031 22.6414 37.0031 27.7554C37.0031 32.8693 32.8658 37.0066 27.7519 37.0066ZM45.9039 12.9392C45.9039 14.7832 44.4034 16.2716 42.5681 16.2716C40.7241 16.2716 39.2357 14.7815 39.2357 12.9392C39.2357 11.1056 40.7345 9.61376 42.5681 9.61376C44.4016 9.61376 45.9039 11.1056 45.9039 12.9392Z"
              fill="white"
            />
          </svg>
        </a>

        <a href="https://tiktok.com">
          <svg
            width="49"
            height="56"
            viewBox="0 0 49 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3304 0.0468334C28.3572 0 31.3667 0.0277531 34.3727 0C34.5548 3.54026 35.828 7.14643 38.4194 9.64942C41.0057 12.2148 44.6639 13.3891 48.2232 13.7864V23.0993C44.8877 22.99 41.5365 22.2962 38.5096 20.8599C37.1914 20.2633 35.9633 19.4948 34.7612 18.7091C34.7456 25.467 34.789 32.2162 34.7179 38.9463C34.5375 42.1796 33.4707 45.3972 31.5904 48.0615C28.5654 52.4968 23.3148 55.3883 17.922 55.4785C14.6142 55.6676 11.3098 54.7656 8.49117 53.1039C3.81997 50.3494 0.532963 45.307 0.0542211 39.8951C-0.00128512 38.7382 -0.0203654 37.5829 0.026468 36.4537C0.442765 32.0531 2.61965 27.8433 5.99859 24.9795C9.82853 21.644 15.1936 20.0551 20.2169 20.9952C20.2637 24.421 20.1267 27.8433 20.1267 31.2691C17.8318 30.5267 15.1502 30.7349 13.145 32.1277C11.681 33.0765 10.5692 34.5301 9.98984 36.1745C9.5111 37.347 9.64813 38.6497 9.67588 39.8951C10.2257 43.6904 13.8753 46.8802 17.7711 46.5351C20.3539 46.5073 22.8291 45.0086 24.1752 42.8144C24.6105 42.046 25.0979 41.2602 25.124 40.3565C25.3512 36.2196 25.261 32.1 25.2888 27.963C25.3078 18.6397 25.261 9.3424 25.3321 0.048568L25.3304 0.0468334Z"
              fill="white"
            />
          </svg>
        </a>

        <a href="https://facebook.com">
          <svg
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67 33.5C67 14.9933 51.9941 0 33.5 0C14.9933 0 0 14.9933 0 33.5C0 50.2165 12.2463 64.0771 28.2656 66.5875V43.1857H19.7587V33.5021H28.2656V26.1174C28.2656 17.7236 33.2592 13.088 40.914 13.088C44.5801 13.088 48.418 13.7413 48.418 13.7413V21.9844H44.1865C40.0325 21.9844 38.7344 24.5702 38.7344 27.2188V33.5H48.0243L46.5315 43.1836H38.7344V66.5854C54.7411 64.075 67 50.2144 67 33.4979V33.5Z"
              fill="white"
            />
          </svg>
        </a>
      </footer>
    </div>
  )
}

export default App
