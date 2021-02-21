import React  from "react";
import BookItem from './BookItem';

const BookList = ({ data, props }) => data.map( row => <BookItem book={row} props={props} /> )

export default BookList;
