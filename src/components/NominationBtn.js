import React, { useState } from 'react';

const NominateBtn = props =>{
    const [isNominated, setState] = useState(false);

    function update (){
      
      setState(!props.list.some(movie => movie[0] === props.title));
      props.setList((list) => [...list, [props.title,props.year]]);

      if(props.list.length >= 4){
        console.log("WOW");
      }
    }

    return(
      <button disabled={isNominated} onClick={update}>Nominate</button>
    )

  }

  export default NominateBtn;