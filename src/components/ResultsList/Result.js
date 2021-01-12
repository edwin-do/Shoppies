import React from 'react';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const result = props =>{ 

    function addNomination (){
        // adds nomination to the list and refreshes results
        props.setList((list) => [...list, [props.Title,props.Year,props.id]]);
        props.setResults((results) => [...results]);
      }

    function removeNomination(id){
      // removes nomination from the list and refreshes results
        props.setList(props.list.filter(movie => movie[2] !== id));
        if (props.results){
          props.setResults((results) => [...results]);
        }
      }

return (
    <div className="card bg-dark">
      <div className="card-body">
        <p className="card-title">{props.Title} (<span className="card-text">{props.Year}</span>)
          { !props.isNominated 
          ? <button className="btn float-right bg-transparent button-small text-light" disabled={props.limitReached} onClick={!props.limitReached ? addNomination : null}><FontAwesomeIcon icon={"plus-circle"} /></button> 
          : <button className=" btn float-right bg-transparent button-small text-danger" onClick={() => removeNomination(props.id)}><FontAwesomeIcon icon={"trash-alt"} /></button>
          } 
        </p>
      </div>
    </div> 
 )}

export default result;