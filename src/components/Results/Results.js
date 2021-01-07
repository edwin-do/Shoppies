import React from 'react';
import Result from './Result';

const Results = props =>{

  if (props.results){
    // console.log(props.list);
      return props.results.map((result) =>
      
      {if (props.list.some(movie => movie[0] === result.Title)) {
        return (<Result onList={true} isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={result.Title || props.Title} Year={result.Year}></Result>)
      }
      else{
        return (<Result onList={false} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={props.Title || result.Title } Year={result.Year}></Result>)
      }}
      
      )}
    else{
      return <p>No Results</p>;
    }
  }

export default Results;