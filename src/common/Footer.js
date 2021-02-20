import React from "react";
import {Container, Row} from "react-bootstrap";

const Footer = () => (
    <footer className="main-footer p-2 px-3 mb-0 bg-white border-top" style={ styles }>
        <Container>
            <Row>
                <span className="copyright ml-auto mr-auto">
                    Copyright © {new Date().getFullYear()} Montecha
                </span>
            </Row>
        </Container>
    </footer>
);

const styles = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    overflow: 'hidden'
};

export default Footer;
