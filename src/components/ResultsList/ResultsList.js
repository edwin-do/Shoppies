import React from 'react';
import Result from './Result';

const ResultsList = props =>{

  // checks if results exist
  if (props.results){
    
    // check limit and if it exists in nomination list
    return props.results.map((result) =>
      
        {if (props.list.length >= 5){
          return (<Result limitReached={true} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title} Year={result.Year}></Result>)
        }
          else if (props.list.some(movie => movie[0] === result.Title)) {
          return (<Result isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title} Year={result.Year}></Result>)
        }
        else{
          return (<Result isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title } Year={result.Year}></Result>)
        }}
      
      )}
    else{
      return <p>No Results</p>;
    }
  }

export default ResultsList;