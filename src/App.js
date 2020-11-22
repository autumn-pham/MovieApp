import React from "react";
import "./App.css";
import Banner from "../src/components/Banner";
import Movie from "../src/components/Movie";
import SearchBar from "../src/components/SearchBar";
import axios from "axios";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Banner/>
        <SearchBar/>
        <Movie/>
      </div>
    );
  }
}


export default App;
