import React, { Component } from 'react';
import {
    Modal,
    Container,
    Row,
    Col

}from 'react-bootstrap';

 class BsModal extends Component {
    render() {
        return (
             <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        
          <Modal.Title>Modal</Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            </Row>
            <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
           </Container>
      </Modal.Body>
          
      </Modal>
        )
    }
}

export default BsModal
