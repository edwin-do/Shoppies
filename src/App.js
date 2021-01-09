import React, { useState } from 'react';
import Layout from './components/Layout'
import NominationList from './components/NominationList/NominationList';
import ResultsList from './components/ResultsList/ResultsList';
import SearchBar from './components/SearchBar/SearchBar';
import Banner from './components/Banner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'




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
    <Layout>
      <h1 className="mt-5">Shoppies</h1>
      <SearchBar handleSearch={handleSearch}></SearchBar>
      <Row>
        <Col><ResultsList list={list} setList={setList} results={results} setResults={setResults}/></Col>
        <Col><NominationList list={list} setList={setList} results={results} setResults={setResults}/></Col>
      </Row>
      {list.length >= 5 ? <Banner list={list}></Banner> : null }
    </Layout>
  );
}

export default App;
