import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
function Banner(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nomination Completed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for your nominations! Everyone has a limit of 5 Nominations. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Leave
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Change Nominations
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Banner;