import React, { useState, useEffect } from 'react';
import Layout from './components/Layout'
import NominationList from './components/NominationList/NominationList';
import ResultsList from './components/ResultsList/ResultsList';
import SearchBar from './components/SearchBar/SearchBar';
import ReactPaginate from 'react-paginate';
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
var apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [numOfResults, setNumOfResults] = useState(0);

  const updateSearchHandler = (s) => {setSearch(s); setPage(1)};
  const clearSearchHandler = () => setSearch("");
  const newPageHandler = ({selected: selectedPage}) => setPage(selectedPage+1);

  useEffect(() => {
    let url ='https://www.omdbapi.com/?apikey=' + apiKey + "&s=" + search + "&type=movie&page=" + page;
    fetch(url)
    .then(response => response.json())
    .then(function(data){
      setResults(data.Search);
      setNumOfResults(data.totalResults);
    });
  },[search,page])
 
  const [results, setResults] = useState([]);
  const [list, setList] = useState([]);
  const clearListHandler = () =>  setList([]);
  const addNominationHandler = (title,year,id,poster) => setList((list) => [...list, [title,year,id,poster]]);
  const removeNominationHandler = (id) => setList(list.filter(movie => movie[2] !== id));

  useEffect(() => {
    setResults(results);
  },[list,results])

  return (
    <Layout>
      <h1 className="text-center">Shoppies <FontAwesomeIcon icon={faShopify} /></h1>
      <h5 className="text-center font-weight-light">
        Nominate your favourite movies for the Shoppies!
      </h5>
      <SearchBar search={search} updateSearchHandler={updateSearchHandler} clearSearchHandler={clearSearchHandler}></SearchBar>
      <UserHelp/>
      <Row>
        <Col sm={12} md={6}><ResultsList addNominationHandler={addNominationHandler} removeNominationHandler={removeNominationHandler} results={results} list={list} />
        {numOfResults > 10 ? 
        <ReactPaginate 
          onPageChange={newPageHandler} 
          pageCount={Math.ceil(numOfResults/10)} 
          pageRangeDisplayed={1} 
          previousLabel={"←"}
          nextLabel={"→"}
          marginPagesDisplayed={2}
          containerClassName={"pagination"}
          disabledClassName={"pagination__link_disabled"}
          activeClassName={"pagination__link_active"}
        />
        : null
        }
        </Col>
        <Col sm={12} md={6}><NominationList removeNominationHandler={removeNominationHandler} clearListHandler={clearListHandler} list={list} /></Col>
      </Row>
      {list.length >= 5 ? <Banner list={list} setList={setList}></Banner> : null }
    </Layout>
  );
}

export default App;
