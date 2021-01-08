import React, { useState } from 'react';
import Result from "../Results/Result";

function NominationList (props){ 

  function removeNomination(title){
    props.setList(props.list.filter(movie => movie[0] !== title));
    props.setResults();
  }

  if (props.list.length < 5 ){
    console.log(props.list.length);
    return props.list.map((movie) =>
      <Result onList={true} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
    )
  }
  else{
    return (<p>Limit Reached</p>)
  }


  //   return props.list.map((movie) =>

  //     <Result onList={true} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
  // )
}

export default NominationList;