import React from 'react';
import {Container} from "react-bootstrap";

const NotFound = () => {
    return (
        <Container style={{marginTop: "70px"}}>
            <div className="d-block mx-auto">
                <h1 className="text-danger">404</h1>
                <h4 className="text-danger">Page Not Found</h4>
            </div>
        </Container>
    );
};

export default NotFound;