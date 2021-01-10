import React, { useState } from 'react';
import Layout from './components/Layout'
import NominationList from './components/NominationList/NominationList';
import ResultsList from './components/ResultsList/ResultsList';
import SearchBar from './components/SearchBar/SearchBar';
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSearch} from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faFacebook, faTwitter, faLinkedin, faEnvelope, faSearch);

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
      <h1 className="text-center mt-5">Shoppies</h1>
      <h5 className="text-center font-weight-light">
        Nominate your favourite movies for the Shoppies!
      </h5>
      <SearchBar handleSearch={handleSearch}></SearchBar>
      <Row>
        <Col><ResultsList list={list} setList={setList} results={results} setResults={setResults}/></Col>
        <Col><NominationList list={list} setList={setList} results={results} setResults={setResults}/></Col>
      </Row>
      {list.length >= 5 ? <Banner list={list} setList={setList}></Banner> : null }
    </Layout>
  );
}

export default App;
