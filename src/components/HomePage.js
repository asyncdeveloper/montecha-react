import React, { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

const HomePage = (props) => {

    const handleSubmit = (e) =>  {
        e.preventDefault();

        props.history.push(`/search/${searchText}`);
    }

    const [ searchText, setSearchText] = useState("");

    return (
        <Container fluid className="px-4">
            <Form onSubmit={handleSubmit}>
                <Row className="mt-2">
                    <Col md={{ span: 4, offset: 4}}>
                        <FormControl type="text" placeholder="Search for books"
                            onChange={e => setSearchText(e.target.value)} value={searchText} />
                    </Col>
                    <Col>
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default withRouter(HomePage);
