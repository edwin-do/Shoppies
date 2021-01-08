import React  from 'react';
import Result from "../ResultsList/Result";

function NominationList (props){ 

    return props.list.map((movie) =>
      <Result isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
    )
}

export default NominationList;