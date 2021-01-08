import React from 'react';
import { Container } from 'react-bootstrap';
import Aux from '../hoc/Auxiliary';

const Layout = (props) => {
    return (
        <Aux>
            <Container>
                <main>
                    {props.children}
                </main>
            </Container>
        </Aux>
    )
}

export default Layout;