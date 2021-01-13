import React from 'react';
import Result from "../ResultsList/Result";
import Button from 'react-bootstrap/Button'

const NominationList = props =>{ 

  function clearListHandler(){
    props.setList([]);
  }

    return (
      <div>
        <h4 className="text-center font-weight-light mt-3">Nomination List</h4>
        {props.list.length > 0 ? 
        props.list.map((movie,i) =>
        <Result key={i} id={movie[2]} removeNominationHandler={props.removeNominationHandler} isNominated={true} poster={movie[3]} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
        )
        : <p className="text-center mt-5">Remember those movies you like? Yeah, they belong here :) </p>}
        {props.list.length > 0 & props.list.length < 5 
        ? <div className="text-center mt-5">
            <p className="text-center font-weight-lighter mb-3">You can still nominate {5 - props.list.length} movies</p>
            <Button variant="secondary" size="sm" onClick={clearListHandler}>
              Clear List
            </Button>
          </div>
        : null}
      </div>
      )
}

export default NominationList;