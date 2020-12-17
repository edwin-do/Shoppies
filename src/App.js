import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// var apiKey = config.API_KEY;
var apiKey = process.env.REACT_APP_API_KEY;

function App() {
  var search = "";

  const [results,setResults] = useState([]);

  async function handleSearch(s){
    search = s;
    // console.log(search);
    await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + "&s=" + search)
    .then(response => response.json())
    .then(function(data){
      setResults(data.Search);
    });
  }

  function Result(){
    if (results){
      return results.map((result) => 
      <li>{result.Title}</li> 
      )}
    else{
      return <p>No Results</p>;
    }
  }

  return (
    <div>
      <input type="text" onChange={e => handleSearch(e.target.value)}></input>
      <Result></Result>
      
    </div>
  );
}

export default App;
