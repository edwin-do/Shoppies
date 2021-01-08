import React from 'react';
import Result from './Result';

const ResultsList = props =>{

  // checks if results exist
  if (props.results){
    console.log(props.results)
    
    // check limit and if it exists in nomination list
    return props.results.map((result,i) =>
      
        {if (props.list.length >= 5){
          // console.log(result.imdbID);
          return (<Result key={i} id={result.imdbID} limitReached={true} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title} Year={result.Year}></Result>)
        }
          else if (props.list.some(movie => movie[2] === result.imdbID)) {
            // console.log(result.imdbID);
            return (<Result key={i} id={result.imdbID} isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title} Year={result.Year}></Result>)
        }
        else{
          // console.log(result.imdbID);
          return (<Result key={i} id={result.imdbID} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title } Year={result.Year}></Result>)
        }}
      
      )}
    else{
      return <p>No Results</p>;
    }
  }

export default ResultsList;