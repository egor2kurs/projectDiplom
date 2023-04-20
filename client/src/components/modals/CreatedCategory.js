/* eslint-disable no-undef */
import React from 'react';
import {Button, Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function CreatedCategory(show, onHide) {
    //const [value, setValue] = useState('');

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    
     
      <Modal
        show={show}
        onHide={onHide}
     
      >
        <Modal.Header>
          <Modal.Title>Добавить категорию</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                    <Form.Control
                    
                    placeholder={"Введите название категории"}/>
                </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    
    )
}

export default CreatedCategory
