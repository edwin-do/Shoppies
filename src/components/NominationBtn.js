import React, { useState } from 'react';

const NominateBtn = props =>{
    const [isNominated, setState] = useState(false);

    function update (){
      // var exist = props.list.some(movie => movie[0] === props.title);
      // console.log(props.title);
      // console.log(props.list[0]);
      
      setState(!props.list.some(movie => movie[0] === props.title));
      props.setList((list) => [...list, [props.title,props.year]]);
    }

    return(
      <button disabled={isNominated} onClick={update}>Nominate</button>
    )

  }

  export default NominateBtn;