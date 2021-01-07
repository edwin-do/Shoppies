import React, { useState } from 'react';
import RemoveBtn from './RemoveBtn';

const Result = props =>{ 
    const [isNominated, setState] = useState(props.isNominated);

    function update (){
      
        props.setList((list) => [...list, [props.Title,props.Year]]);
        setState(true);      
        console.log(props.results);
        console.log(props.list);
        // console.log(props.results);
  
        if(props.list.length >= 4){
          console.log("WOW");
        }
      }

    function removeNomination(title,year){
        props.setList(props.list.filter(movie => movie[0] !== title));
        props.setResults((results) => [...results]);
        setState(false);

        console.log(props.Title);
        console.log(title);
        
        // props.setResults(props.results);       
        // console.log(props.results);
      }

return (
    <div>
        <li>{props.Title}</li>
        {props.onList ? <RemoveBtn disabled={props.isNominated} removeNomination={removeNomination} setList={props.setList} list={props.list} Title={props.Title} Year={props.Year}>Remove</RemoveBtn> 
        : <button disabled={props.isNominated} onClick={update}>Nominate</button> }
    </div> 
 )}

export default Result;