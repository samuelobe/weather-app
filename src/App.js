import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Enter your current city</p>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
