import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import BrownieCard from "./components/Brownie/BrownieCard";


function App() { 
  return (
    <div className="App">
      <div className="navbar"> 
        <NavBar />
      </div> 
      <About />
      <BrownieCard />
    </div>
  );
}
export default App;
