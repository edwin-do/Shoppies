import React, { useState } from 'react';
import NominationList from './components/NominationList/NominationList';
import ResultsList from './components/ResultsList/ResultsList';
import './App.css';

// var apiKey = config.API_KEY;
var apiKey = process.env.REACT_APP_API_KEY;

function App() {
  let search = "";
  const [results, setResults] = useState([]);
  const [list, setList] = useState([]);

  async function handleSearch(s){
    search = s;
    // console.log(search);
    await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + "&s=" + search)
    .then(response => response.json())
    .then(function(data){
      setResults(data.Search);
    });
  }

  return (

    <div>
      <input type="text" onChange={e => handleSearch(e.target.value)}></input>
      <ResultsList list={list} setList={setList} results={results} setResults={setResults} ></ResultsList>
      <h1>Nomination List</h1>
      <NominationList list={list} setList={setList} results={results} setResults={setResults}></NominationList>      
    </div>
  );
}

export default App;
