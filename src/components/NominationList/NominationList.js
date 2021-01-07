import React, { useState } from 'react';
import Result from "../Results/Result";
import RemoveBtn from '../Results/RemoveBtn';

function NominationList (props){ 

  function removeNomination(title){
    props.setList(props.list.filter(movie => movie[0] !== title));
    props.setResults();
  }


    return props.list.map((movie) =>

    <div>
          {!props.onList ? <Result onList={true} isNominated={false} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
          : null }
    </div>
  )
}

export default NominationList;