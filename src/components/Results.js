import React, { useState } from 'react';
import NominateBtn from './NominationBtn';

const Results = props =>{
  
  if (props.results){
    console.log(props.list);
      return props.results.map((result) =>
      <div>
        <li>{result.Title}</li>
        <NominateBtn list={props.list} setList={props.setList} title={result.Title} year={result.Year}></NominateBtn>
      </div> 
      )}
    else{
      return <p>No Results</p>;
    }
  }

export default Results;