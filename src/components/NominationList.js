import React, { useState } from 'react';

function NominationList (props){ 

  function removeNomination(title){
    props.setList(props.list.filter(movie => movie[0] !== title));
  }
    const Nomination = props =>{
        return <div>
          <p>Movie: {props.title} - Year: {props.year}</p>
          <button onClick={e => removeNomination(props.title)}>Remove</button>
        </div>
      }

    return props.list.map((movie) =>
    <Nomination title={movie[0]} year={movie[1]}/>
  )
}

export default NominationList;