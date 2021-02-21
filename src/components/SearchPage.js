import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import BookList from '../ui/BookList';
import SpinnerButton from '../common/SpinnerButton';
import Pagination from 'react-js-pagination';
import '../App.css';

const SearchPage = (props) => {

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber) ;

    const [searchTerm] = useState(props.match.params.query);

    const dataPerPage = 10;
    const [responseData, setResponseData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [ activePage, setCurrentPage ] = useState(1);

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

    // Logic for displaying current todos
    const indexOfLastData  = activePage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData      = responseData.slice( indexOfFirstData, indexOfLastData );

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
                         : <BookList data={currentData} props={props} />
                }
            </Row>
            {
                !isLoading && responseData.length > 0
                    ? <Row>
                        <div className="pagination">
                            <Pagination
                                activePage={ activePage }
                                itemsCountPerPage={ dataPerPage }
                                totalItemsCount={ responseData.length }
                                pageRangeDisplayed={5}
                                onChange={ handlePageChange }
                            />
                        </div>
                    </Row> : null
                }
        </Container>
    );
}

export default withRouter(SearchPage);
