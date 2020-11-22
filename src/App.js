import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "../src/components/Movie";
import SearchBar from "../src/components/SearchBar";
import axios from "axios";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <SearchBar/>
        <Movie/>
      </div>
    );
  }
}


export default App;
