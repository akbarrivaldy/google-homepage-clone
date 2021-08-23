import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Logo from '../../assets/google.svg'
import SearchBar from './SearchBar'

export default function() {

  function deleteLocalStorage() {
    window.localStorage.clear()
    document.location.reload()
  }

  return (
    <Container fluid>
      <Row id="Content" className="align-items-center flex-column">
        <Col xs="12" sm="10" md="8" lg="6" className="content__logoContainer flex-column">
          <div className="content__logo">
            <img src={Logo} alt="Google" />
          </div>
        </Col>
        <Col xs="12" sm="10" md="8" lg="6" className="content__searchContainer flex-column">
          <SearchBar />
        </Col>
        <Col xs="12" sm="10" md="8" lg="6" className="content__buttonContainer">
          <div className="d-flex justify-content-center align-items-center">
            <Button className="px-2" onClick={deleteLocalStorage}>Clear History</Button>
          </div>
        </Col>
      </Row>

      
    </Container>
  )
}