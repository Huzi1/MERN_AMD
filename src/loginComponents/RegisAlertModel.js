import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const RegisAlertModel = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Error!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    User already registered with that username.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default RegisAlertModel;