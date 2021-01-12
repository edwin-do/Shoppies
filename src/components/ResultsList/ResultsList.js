import React from 'react';
import Result from './Result';
import {Pagination} from 'react-bootstrap'

const resultsList = props =>{

  // checks if results exist
  if (props.results){

    let active = 1;
    let pages = props.numOfResults/10;
    let items = [];

    for (let i = 1; i < pages; i++) {
      items.push(
        <Pagination.Item key={i} active={i === active}>
          {i}
        </Pagination.Item>
      );
    }

    
    // check limit and if it exists in nomination list
    return (
      <div>
        <h4 className="text-center font-weight-light mt-3">Search Results</h4>
        {props.results.map((result,i) =>
        
          {if (props.list.length >= 5){
            return (<Result key={i} id={result.imdbID} limitReached={true} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title} Year={result.Year}></Result>)
          }
            else if (props.list.some(movie => movie[2] === result.imdbID)) {
              return (<Result key={i} id={result.imdbID} isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title} Year={result.Year}></Result>)
          }
          else{
            return (<Result key={i} id={result.imdbID} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title } Year={result.Year}></Result>)
          }}
        
        )}
        <Pagination>
          {items}
          <Pagination.Item onClick={() => props.newPageHandler("next")}>Next Page</Pagination.Item>
          <Pagination.Item onClick={() => props.newPageHandler("prev")}>Previous Page</Pagination.Item>
        </Pagination>

      </div>)
      }
    else{
      return (
        <div>
          <h4 className="text-center font-weight-light mt-3">Search Results</h4>
          <p className="text-center mt-5">Looks like there's no results...Try typing something else!</p>
        </div>
      );
    }
  }

export default resultsList;