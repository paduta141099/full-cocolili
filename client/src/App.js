import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <Featured />
      <Contact />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
