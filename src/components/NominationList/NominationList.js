import React, {useState} from 'react';
import Result from "../ResultsList/Result";
import Banner from '../Banner';

// function autoClose(){

// }

const NominationList = props =>{ 
  
  // const [show, setShow] = useState(false);
  // const handleClose = (e) => e.preventDefault(); setShow(false);
  // const handleShow = () => setShow(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

    // console.log("Nomination: " + props.list);
    // if (props.list.length >= 5){
    //   props.setShow(() => true);
    // };

    return (
      <div>
        {/* {show ? <Banner setShow={setShow} handleClose={handleClose}></Banner> : null } */}
        <h1>Nomination List</h1>
        {props.list.map((movie,i) =>
        <Result key={i} id={movie[2]} isNominated={true} results={props.results} setResults={props.setResults} list={props.list} setList={props.setList} Title={movie[0]} Year={movie[1]} ></Result>
        )}
      </div>
      )
}

export default NominationList;