import SingleBook from './SingleBook'
import {Col, Row} from 'react-bootstrap'

function BookList({category}) {
    return(
        <Row key={category[0].category}>
            <Col  xs='12'>
            <h1>{category[0].category}</h1>
            </Col> 
            {category.slice(1,5).map(book => <SingleBook data={book}/>)}      
        </Row>
    )
}

export default BookList