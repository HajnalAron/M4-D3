import { Component } from 'react';
import {Card, ListGroup, ListGroupItem, Col} from 'react-bootstrap'

class SingleBook extends Component {
    render(){
    return(
        <Col xs='3 mb-1' key={this.props.data.asin}>
            <Card className='h-100'>
                <Card.Img variant="top" src={this.props.data.img} />
                <Card.Body>
                    <Card.Title>{this.props.data.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{this.props.data.category}</ListGroupItem>
                    <ListGroupItem>{this.props.data.price}</ListGroupItem>
                    <ListGroupItem>{this.props.data.asin}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    )
    }
    }

export default SingleBook