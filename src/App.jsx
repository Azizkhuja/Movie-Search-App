import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import Spinner from "./components/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [mainState, setMainState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=fa8d7c27";

  const search = (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      axios(apiUrl + "&s=" + mainState.s).then(({ data }) => {
        let results = data.Search;
        setIsLoading(false);
        setMainState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setMainState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setMainState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setMainState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        {isLoading ? (
          <Spinner />
        ) : (
          <Results results={mainState.results} openPopup={openPopup} />
        )}

        {typeof mainState.selected.Title != "undefined" ? (
          <Popup selected={mainState.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
