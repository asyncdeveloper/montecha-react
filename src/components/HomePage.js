import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

export default class HomePage extends Component {
    render() {
        return (
            <Container fluid className="px-4">
                <Row className="mt-2">
                    <Col>
                        <h3 className="header-text text-center">Search for Books</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}
