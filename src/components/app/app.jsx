import './app.scss';
import Header from "../header/header";
import {
  Routes,
  Route,
} from "react-router-dom";
import Prime from "../../pages/main/prime";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header/>
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Prime />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
