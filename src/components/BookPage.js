import React, { useEffect, useState, Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import bookImage from '../default-book.jpg';
import SpinnerButton from '../common/SpinnerButton';
import BookInfo from '../ui/BookInfo';

const BookPage = (props) => {

    const setImage = (bookInfo) => {
        return bookInfo.cover_i !== undefined
            ? `http://covers.openlibrary.org/b/ID/${bookInfo.cover_i}-L.jpg`
            : bookImage ;
    };
    const workId = props.match.params.book;
    const [bookInfo, setBookInfo] = useState(props.location.state);
    const [isLoading, setIsLoading] = useState(true);
    const [ coverImage, setCoverImage ] = useState(setImage(bookInfo));

    useEffect(() => {
        if (workId === null || workId === ''){
            setIsLoading(false);
            return;
        }

        if (bookInfo !== null && bookInfo !== ''){
            setIsLoading(false);
            return;
        }

        fetch(`https://openlibrary.org/works/${workId}.json`)
            .then(results => results.json())
            .then(data => {
                setIsLoading(false);
                setBookInfo(data);
                setCoverImage(setImage(data))
            });
    }, [ workId, bookInfo ]);

    return (
        <Container fluid className="px-4">
            {
                isLoading
                    ? <SpinnerButton />
                    : (<Fragment>
                    <Row className="mx-2 mt-4 text-center">
                        <Col md={12}>
                            <Image src={coverImage} fluid={true} />
                        </Col>
                    </Row>
                    <BookInfo bookInfo={bookInfo} />
                </Fragment>)
            }
        </Container>
    );
}

export default withRouter(BookPage);
