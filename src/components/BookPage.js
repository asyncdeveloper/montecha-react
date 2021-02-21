import React, { useEffect, useState, Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import bookImage from '../default-book.jpg';
import SpinnerButton from '../common/SpinnerButton';

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
                isLoading ? <SpinnerButton /> : (<Fragment>
                    <Row className="mx-2 mt-4 text-center">
                        <Col md={12}>
                            <Image src={coverImage} fluid={true} />
                        </Col>
                    </Row>
                    <Row className="mx-2 mt-4">
                        <Col md={{ span: 6, offset: 2}}>
                            <h6> Title : {bookInfo.title}</h6>
                            <h6>
                                Authors
                                <ul>
                                    {bookInfo.author_name.map(author => <li>{author}</li> ) }
                                </ul>
                            </h6>
                            <h6>
                                Publish Date
                                <ul>
                                    {bookInfo.publish_date.map(date => <li>{date}</li> ) }
                                </ul>
                            </h6>
                            <h6>
                                First Publish Year : {bookInfo.first_publish_year ?? '' }
                            </h6>
                            <h6>
                                Number of Editions : {bookInfo.edition_count}
                            </h6>
                            <h6>
                                Editions
                                <ul>
                                    {bookInfo.edition_key.map(edition => <li>{edition}</li> ) }
                                </ul>
                            </h6>
                            <h6>
                                Publish Year
                                <ul>
                                    {bookInfo.publish_year.map(year => <li>{year}</li> ) }
                                </ul>
                             </h6>
                            <h6>
                                Publish Place
                                <ul>
                                    { bookInfo.publish_place ? bookInfo.publish_place.map(place => <li>{place}</li> ) : null }
                                </ul>
                            </h6>
                            <h6>
                                Languages
                                <ul>
                                    {bookInfo.language ? bookInfo.language.map(lang => <li>{lang}</li> ) : null }
                                </ul>
                            </h6>
                            <h6>
                                Isbn
                                <ul>
                                    {bookInfo.isbn.map(isbn => <li>{isbn}</li> ) }
                                </ul>
                            </h6>
                            <h6>
                                Publisher
                                <ul>
                                    {bookInfo.publisher.map(publisher => <li>{publisher}</li> ) }
                                </ul>
                            </h6>
                        </Col>
                    </Row>
                </Fragment>)
            }
        </Container>
    );
}

export default withRouter(BookPage);
