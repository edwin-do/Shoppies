import React from 'react';
import Result from './Result';

const resultsList = props =>{

  return(
    <div>
      <h4 className="text-center font-weight-light mt-3">Search Results</h4>
      {props.results ? 
      props.results.map((result,i) =>
        
        {if (props.list.length >= 5){
          return (<Result key={i} isNominated={false} removeNominationHandler={props.removeNominationHandler} id={result.imdbID} limitReached={true}  poster={result.Poster} Title={result.Title} Year={result.Year}></Result>)
        }
          else if (props.list.some(movie => movie[2] === result.imdbID)) {
            return (<Result key={i} isNominated={true} removeNominationHandler={props.removeNominationHandler} id={result.imdbID}  poster={result.Poster} Title={result.Title} Year={result.Year}></Result>)
        }
        else{
          return (<Result key={i} isNominated={false} addNominationHandler={props.addNominationHandler} removeNominationHandler={props.removeNominationHandler} id={result.imdbID} poster={result.Poster} Title={result.Title } Year={result.Year}></Result>)
        }}  
      )
      : <p className="text-center mt-5">Looks like there's no results...Try typing something else or more specific!</p>
      }
    
    </div>
    )}

export default resultsList;