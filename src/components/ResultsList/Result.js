import React from 'react';

const result = props =>{ 

    function addNomination (){
        // adds nomination to the list and refreshes results
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
        <p>{props.Title}
          { !props.isNominated 
          ? <button className="ml-3 btn-secondary" disabled={props.limitReached} onClick={addNomination}>Nominate</button> 
          : <button className="ml-3 btn-danger" onClick={() => removeNomination(props.id)}>Remove</button>
          } 
        </p>
    </div> 
 )}

export default result;