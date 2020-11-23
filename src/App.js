import React from "react";
import "./App.css";
import Banner from "../src/components/Banner";
import MovieCard from "../src/components/MovieCard";
import SearchBar from "../src/components/SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Banner/>
        <SearchBar/>
        <MovieCard/>
      </div>
    );
  }
}


export default App;
