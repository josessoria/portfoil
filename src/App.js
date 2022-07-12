import "./App.scss";
import Navbar from "./components/minicomponets/navbar.jsx";
import Animated from "./components/configs/animatedroutes"
import Sun from "./components/minicomponets/footer";


function App() {
  return (
    <>
    <Navbar />
    <Animated/>
    <Sun></Sun>
    </>
  );
}

export default App;
