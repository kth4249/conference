import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Cube from "./components/Cube";

function App() {
  return (
    <div className="App">
      <Link to="/three">three.js</Link>
      <Routes>
        <Route path="/three" element={<Cube />} />
      </Routes>
    </div>
  );
}

export default App;
