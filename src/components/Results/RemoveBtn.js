import React from 'react';

const RemoveBtn = props =>{ 
return (
    <button disabled={props.disabled} onClick={() => props.removeNomination(props.Title,props.Year)}>Remove</button>
 )}

export default RemoveBtn;