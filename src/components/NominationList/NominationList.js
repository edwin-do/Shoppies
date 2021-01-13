import React from 'react';
import Result from "../ResultsList/Result";
import Button from 'react-bootstrap/Button'

const nominationList = props =>{ 

    return (
      <div>
        <h4 className="text-center font-weight-light mt-3">Nomination List</h4>
        {props.list.length > 0 ? 
        props.list.map((movie,i) =>
        <Result key={i} removeNominationHandler={props.removeNominationHandler} isNominated={true} Title={movie[0]} Year={movie[1]} id={movie[2]} poster={movie[3]}></Result>
        )
        : <p className="text-center mt-5">Remember those movies you like? Yeah, they belong here :) </p>}
        {props.list.length > 0 & props.list.length <= 5 
        ? <div className="text-center mt-5">
            <p className="text-center font-weight-lighter mb-3">You can still nominate {5 - props.list.length} movie(s)</p>
            <Button variant="secondary" size="sm" onClick={props.clearListHandler}>
              Clear List
            </Button>
          </div>
        : null}
      </div>
      )
}

export default nominationList;