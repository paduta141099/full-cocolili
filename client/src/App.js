import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Gallery />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
