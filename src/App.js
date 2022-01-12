import "./App.css";
import { SearchBar, SearchButton } from "./components/index";
import { retrieveWeather } from "./api/api";

function App() {
  return (
    <div className="App">
      <p>Enter your current city</p>
      <div className="button-row">
        <SearchBar />
        <SearchButton action={retrieveWeather} />
      </div>
    </div>
  );
}

export default App;
