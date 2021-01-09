import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Banner(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

    return (
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Nomination Completed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for your nominations! Everyone has a limit of 5 Nominations. 
          {props.list.map((nomination,i) => <div key={i}>{nomination[0]}</div>)}

          Share your nominations with your friends!
          <div>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.google.com/" target="blank" rel="noreferrer noopener" alt="share">Facebook </a>
            <a href="https://twitter.com/intent/tweet?url=https://www.google.com/&text=Nominate your favourite movies for the upcoming Shoppies!" target="blank" rel="noreferrer noopener" alt="share">Twitter</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.google.com/&title=&summary=Nominate your favourite movies for the upcoming Shoppies! &source=Shoppies" target="blank" rel="noreferrer noopener" alt="share">LinkedIn</a>
            <a href="mailto:info@example.com?&subject=&body=https://www.google.com/ Nominate your favourite movies for the upcoming Shoppies! " target="blank" rel="noreferrer noopener" alt="share">Email</a>           
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </Modal.Body>
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