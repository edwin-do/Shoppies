import React  from 'react';
import Result from "../ResultsList/Result";

const nominationList = props =>{ 
    // console.log("Nomination: " + props.list);
    return (
      <div>
        <h1>Nomination List</h1>
        {props.list.map((movie,i) =>
        <Result key={i} id={movie[2]} isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
        )}
      </div>
      )
}

export default nominationList;