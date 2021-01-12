import React from 'react';
import Result from './Result';
import ReactPaginate from 'react-paginate';

const resultsList = props =>{

  // checks if results exist
  if (props.results){

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
        <ReactPaginate 
          onPageChange={props.newPageHandler} 
          pageCount={props.numOfResults/10} 
          pageRangeDisplayed={2} 
          marginPagesDisplayed={2}>
        </ReactPaginate>

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