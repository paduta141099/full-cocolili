import { Outlet } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import Contact from "./components/Contact/Contact";
import Story from "./components/Story.js/Story";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Gallery />
      <Story />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
