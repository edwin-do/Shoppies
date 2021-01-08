import React from 'react';

const Result = props =>{ 

    function addNomination (){
        // adds nomination to the list and refreshes results
        console.log(props.id);
        props.setList((list) => [...list, [props.Title,props.Year,props.id]]);
        props.setResults((results) => [...results]);
      }

    function removeNomination(id){
      // removes nomination from the list and refreshes results
        props.setList(props.list.filter(movie => movie[2] !== id));
        props.setResults((results) => [...results]);
      }

return (
    <div>
        <li>{props.Title}</li>
        { !props.isNominated 
        ? <button disabled={props.limitReached} onClick={addNomination}>Nominate</button> 
        : <button onClick={() => removeNomination(props.id)}>Remove</button>
        } 
    </div> 
 )}

export default Result;