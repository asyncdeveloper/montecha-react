import React  from "react";
import { Button, Card} from "react-bootstrap";
import bookImage from '../default-book.jpg';

const BookItem = ({ book, props }) => {
    const key = book.key.replace('/works/', '');
    const coverImage = book.cover_i !== undefined
        ? `http://covers.openlibrary.org/b/ID/${book.cover_i}-M.jpg`
        : bookImage ;

    return (
        <Card key={book.key} style={{width: '18rem'}} className="mx-2 my-1">
            <Card.Img variant="top" src={coverImage} style={{height: '300px'}}/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Button variant="primary" onClick={() => props.history.push({
                    pathname: `/books/${key}`, state: book
                })}>
                    View Book
                </Button>
            </Card.Body>
        </Card>
    )
};


export default BookItem;
