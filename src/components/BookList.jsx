import SingleBook from './SingleBook'
import {Col, Row} from 'react-bootstrap'

function BookList({category}) {
    return(
        <Row key={category.category}>
            <Col  xs='12'>
            <h1>{category.category}</h1>
            </Col> 
            {category.map(book => <SingleBook data={book}/>)}      
        </Row>
    )
}

export default BookList