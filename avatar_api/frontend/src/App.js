import "./App.css";
import Navbar from "./components/Navbar";
import Shoji from "./components/Shoji";
import Intro from "./components/Intro";
import Characters from "./components/Characters";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Shoji />
      <Intro />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
