import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1>ABC</h1>
      </Link>
      <nav>
        <Link to="/gallery">Gallery</Link> | <Link to="/prices">Prices</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
