import "./App.scss";
import Navbar from "./components/navbar.jsx";
import Animation from "./components/animationpage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Animation />
      </BrowserRouter>
    </div>
  );
}

export default App;
