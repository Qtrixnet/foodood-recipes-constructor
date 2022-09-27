import './app.scss';
import Header from "../header/header";
import {
  Routes,
  Route,
} from "react-router-dom";
import Prime from "../../pages/prime/prime";
import About from "../../pages/about/about";
import Constructor from "../../pages/constructor/constructor";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header/>
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Prime />} />
            <Route path="about" element={<About />} />
            <Route path="constructor" element={<Constructor />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
