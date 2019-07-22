import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Movie, MovieList, MovieCard } from "./Movies";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" component={MovieList} />
      <Route path="/movies/" component={Movie} />
    </div>
  );
};
export default App;
