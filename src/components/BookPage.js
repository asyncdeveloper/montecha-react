import React  from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

const BookPage = (props) => {
    const bookInfo = props.location.state;

    return (
        <Container fluid className="px-4">
            <Row className="mx-2 mt-4">
                <Col>
                    <h6> Title : {bookInfo.title}</h6>
                    <h6> Author : {bookInfo.author_name}</h6>
                    <h6> Publish Date : {bookInfo.publish_date}</h6>
                    <h6> Publish Year : {bookInfo.publish_year}</h6>
                    <h6> Language : {bookInfo.language}</h6>
                    <h6> Isbn : {bookInfo.isbn }</h6>
                    <h6> Publisher : {bookInfo.publisher }</h6>
                </Col>
            </Row>
        </Container>
    );
}

export default withRouter(BookPage);
