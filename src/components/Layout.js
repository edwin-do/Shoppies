import React from 'react';
import { Container } from 'react-bootstrap';
import Aux from '../hoc/Auxiliary';

const Layout = (props) => {
    return (
        <Aux>
            <Container className="mt-5 mb-5">
                <main>
                    {props.children}
                </main>
            </Container>
        </Aux>
    )
}

export default Layout;