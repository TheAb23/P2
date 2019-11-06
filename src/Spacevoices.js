import React, { Component } from 'react'
import {Card,Row,Col, Container} from 'react-bootstrap'
import data from './data'
import './App.css'
export default class Spacevoices extends Component {
    render() {
        let cards = data.planets.map(info => 
            
            <Col md='3'>
            
            <Card className='card'>
                <Card.Img variant="top" src={info.img} />
                <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>
             
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href={info.sound}>Listen to Sound of {info.name}</Card.Link>
                </Card.Body>
                </Card>
                </Col>
        )

                
        console.log(data)
        return (
            <div>
                <Container className='show-grid'>
                    <Row>
             
                    {cards}
                
                    </Row>
                    </Container>
            </div>
        )
    }
}
