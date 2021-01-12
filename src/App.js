import React, { useState } from 'react';
import Layout from './components/Layout'
import NominationList from './components/NominationList/NominationList';
import ResultsList from './components/ResultsList/ResultsList';
import SearchBar from './components/SearchBar/SearchBar';
import Banner from './components/Banner/Banner';
import UserHelp from './components/UserHelp/UserHelp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedin, faShopify} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSearch, faPlusCircle, faTrashAlt, faInfoCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

library.add(faFacebook, faTwitter, faLinkedin, faShopify, faEnvelope, faSearch, faPlusCircle, faTrashAlt, faInfoCircle, faTimesCircle);

// var apiKey = config.API_KEY;
var apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [list, setList] = useState([]);

  const clearSearchHandler = () => {
    setSearch("");
    setResults([]);
  }
  const updateSearchHandler = (s) => setSearch(s);

  async function handleSearch(s){
    // console.log(search);
    updateSearchHandler(s);
    await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + "&s=" + s + "&type=movie")
    .then(response => response.json())
    .then(function(data){
      setResults(data.Search);
    });
  }

  return (
    <Layout>
      <h1 className="text-center">Shoppies <FontAwesomeIcon icon={faShopify} /></h1>
      <h5 className="text-center font-weight-light">
        Nominate your favourite movies for the Shoppies!
      </h5>
      <SearchBar search={search} handleSearch={handleSearch} clearSearchHandler={clearSearchHandler}></SearchBar>
      <UserHelp/>
      <Row>
        <Col sm={12} md={6}><ResultsList list={list} setList={setList} results={results} setResults={setResults}/></Col>
        <Col sm={12} md={6}><NominationList list={list} setList={setList} results={results} setResults={setResults}/></Col>
      </Row>
      {list.length >= 5 ? <Banner list={list} setList={setList}></Banner> : null }
    </Layout>
  );
}

export default App;
