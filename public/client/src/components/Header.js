import React from 'react';
import { Row } from 'simple-flexbox';

export default class Header extends React.Component {
    render() {
        return (
            <Row horizontal='start' id='banner'>
                <span> </span>
            </Row>
        )
    }
}