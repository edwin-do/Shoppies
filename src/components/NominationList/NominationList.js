import React from 'react';
import Result from "../ResultsList/Result";

const NominationList = props =>{ 

    return (
      <div>
        <h4 className="text-center font-weight-light">Nomination List</h4>
        {props.list.map((movie,i) =>
        <Result key={i} id={movie[2]} isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
        )}
      </div>
      )
}

export default NominationList;