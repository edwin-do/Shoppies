import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {socials} from '../socials'

function Banner(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  function clearListHandler(){
    props.setList([]);
    setShow(false);
  }

    return (
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Nomination Completed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="lead text-dark">Thanks for your nominations! Everyone has a limit of 5 Nominations.</p>
          
        <div className="text-center text-dark">
            {props.list.map((nomination,i) => 
            <p key={i}>{i+1}. <span>{nomination[0]} ({nomination[1]}) </span></p>)}
            <p class="lead">Share your nominations with your friends!</p>
            {socials.map(social => {
              return(<div className="d-inline mr-3" key={social.name}>
                  <a className="h1" href={social.url} style={{color: social.color}}target="blank" rel="noreferrer noopener" alt="social-link" >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
              </div>);
            })}
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clearListHandler}>
            Restart with new list
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Change Nominations
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Banner;