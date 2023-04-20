/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryBar from '../components/CategoryBar'
import WorkList from '../components/WorkList'

function Platform() {
    return (
      <Container>
        <Row>
            <Col md ={3}>
                <CategoryBar/>
            </Col>

            <Col >
              <WorkList/>
            
            </Col>
        </Row>
      </Container>
    )
}

export default Platform
