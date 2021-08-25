import {Card, ListGroup, ListGroupItem, Col} from 'react-bootstrap'

function SingleBook({data}) {
    return(
        <Col xs='3 mb-1' key={data.asin}>
            <Card className='h-100'>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{data.category}</ListGroupItem>
                    <ListGroupItem>{data.price}</ListGroupItem>
                    <ListGroupItem>{data.asin}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    )
    }

export default SingleBook