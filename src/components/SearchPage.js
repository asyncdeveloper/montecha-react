import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import  bookImage from '../default-book.jpg';
import SpinnerButton from '../common/SpinnerButton';

const SearchPage = (props) => {
    const [searchTerm] = useState(props.match.params.query);

    const [responseData, setResponseData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if (searchTerm == null || searchTerm === ''){
            setIsLoading(false);
            return;
        }

        fetch(`http://openlibrary.org/search.json?q=${searchTerm}`)
            .then(results => results.json())
            .then(data => {
                setResponseData(data.docs)
                setIsLoading(false)
            });
    }, [ searchTerm ]);

    console.log(responseData);

    return (
        <Container fluid className="px-4">
            <Row className="my-4">
                <Col className="text-center">
                    Search Results for <b>{ searchTerm }</b>
                </Col>
            </Row>

            <Row className="mx-5">
                {   isLoading
                    ? <SpinnerButton />
                    : responseData.length === 0
                        ? <h2> No Result Found</h2>
                        : responseData.map((row, index) => {
                            const coverImage = row.cover_i !== undefined
                                ? `http://covers.openlibrary.org/b/ID/${row.cover_i}-M.jpg`
                                : bookImage ;

                            return (<Card key={index} style={{width: '18rem'}} className="mx-2 my-1">
                                <Card.Img variant="top" src={coverImage} style={{ height: '300px' }}  />
                                <Card.Body>
                                    <Card.Title>{row.title}</Card.Title>
                                    <Card.Text> Publish Year : {row.publish_year }</Card.Text>
                                    <Button variant="primary">View Book</Button>
                                </Card.Body>
                            </Card>)
                    })
                }
            </Row>
        </Container>
    );
}

export default withRouter(SearchPage);
