import "./App.css";
import Header from "./components/Header/Header";
import Images from "./components/Images/Images";
import Nav from "./components/Nav/Nav.js";
import images from "./components/assests/imagesData.js";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Images images={images} />
    </div>
  );
}

export default App;
