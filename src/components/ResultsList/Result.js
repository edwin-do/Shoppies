import React from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const result = props =>{ 

return (
    <div className="card bg-dark">
      <div className="card-body">
          <Row>
            <Col xs={3}>
              {props.poster === "N/A" 
              ? <p>Image Not Available</p>
              : <Image src={props.poster} rounded fluid />}
            </Col>
            <Col xs={9} >
            <p className="card-title">{props.Title} (<span className="card-text">{props.Year}</span>)
            { !props.isNominated 
                  ? <button className="btn float-right bg-transparent button-small text-light" 
                            disabled={props.limitReached} 
                            onClick={!props.limitReached ? () => props.addNominationHandler(props.Title,props.Year,props.id,props.poster) : null}>
                              <FontAwesomeIcon icon={"plus-circle"} />
                    </button> 
                  : <button className=" btn float-right bg-transparent button-small text-danger" 
                            onClick={() => props.removeNominationHandler(props.id)}>
                              <FontAwesomeIcon icon={"trash-alt"} />
                    </button>
                  } 
            </p>
            </Col>
          </Row>
      </div>
    </div> 
 )}

export default result;