import React from 'react';

const Result = props =>{ 

    function addNomination (){
        // adds nomination to the list and refreshes results
        props.setList((list) => [...list, [props.Title,props.Year]]);
        props.setResults((results) => [...results]);
      }

    function removeNomination(title){
      // removes nomination from the list and refreshes results
        props.setList(props.list.filter(movie => movie[0] !== title));
        props.setResults((results) => [...results]);
      }

return (
    <div>
        <li>{props.Title}</li>
        { !props.isNominated 
        ? <button disabled={props.limitReached} onClick={addNomination}>Nominate</button> 
        : <button onClick={() => removeNomination(props.Title)}>Remove</button>
        // : <RemoveBtn removeNomination={removeNomination} setList={props.setList} list={props.list} Title={props.Title} Year={props.Year}>Remove</RemoveBtn>
        } 
    </div> 
 )}

export default Result;