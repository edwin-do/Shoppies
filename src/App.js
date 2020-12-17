import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// var apiKey = config.API_KEY;
var apiKey = process.env.REACT_APP_API_KEY;

function App() {
  var search = "";

  const [results,setResults] = useState([]);
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

  const NominateBtn = props =>{
    // console.log(props.title);
    function updateList(){
      var title = props.title;
      var year = props.year;
      setList((list) => [...list, [title,year]] );
    }
    return(
      <button onClick={updateList}>Nominate</button>
    )
  }

  const Result = () =>{
    if (results){
      return results.map((result) =>
      <div>
        <li>{result.Title}</li>
        <NominateBtn title={result.Title} year={result.Year}></NominateBtn>
      </div> 
      )}
    else{
      return <p>No Results</p>;
    }
  }

  const NominationList = () =>{
    console.log(list);
    return list.map((movie) =>
      <div>
        <p>{movie[0]}</p>
        <p>{movie[1]}</p>
      </div>
    )}

  return (

    <div>
      <input type="text" onChange={e => handleSearch(e.target.value)}></input>
      <Result></Result>
      <NominationList></NominationList>      
    </div>
  );
}

export default App;
