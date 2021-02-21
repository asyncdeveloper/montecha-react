import React  from "react";
import { Col, Row } from "react-bootstrap";

const BookInfo = ({ bookInfo }) => (
    <Row className="mx-2 mt-4">
        <Col md={{ span: 6, offset: 2}}>
            <h6> Title : {bookInfo.title}</h6>
            <h6>
                Authors
                <ul>
                    {bookInfo.author_name ? bookInfo.author_name.map(author => <li>{author}</li> ) : null }
                </ul>
            </h6>
            <h6>
                Publish Date
                <ul>
                    {bookInfo.publish_date ? bookInfo.publish_date.map(date => <li>{date}</li> ) : null }
                </ul>
            </h6>
            <h6>
                First Publish Year : {bookInfo.first_publish_year ?? '' }
            </h6>
            <h6>
                Number of Editions : {bookInfo.edition_count ?? ''}
            </h6>
            <h6>
                Editions
                <ul>
                    {bookInfo.edition_key ? bookInfo.edition_key.map(edition => <li>{edition}</li> ) : null }
                </ul>
            </h6>
            <h6>
                Publish Year
                <ul>
                    {bookInfo.publish_year ? bookInfo.publish_year.map(year => <li>{year}</li> ) : null }
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
                    {bookInfo.isbn ? bookInfo.isbn.map(isbn => <li>{isbn}</li> ): null }
                </ul>
            </h6>
            <h6>
                Publisher
                <ul>
                    { bookInfo.publisher ? bookInfo.publisher.map(publisher => <li>{publisher}</li> ) : null }
                </ul>
            </h6>
        </Col>
    </Row>
);


export default BookInfo;
