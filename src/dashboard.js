import React, { Component, Fragment } from 'react';
import reverse from './strings/reverse';
import Form from './form'
export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
            <h3>Data Structure Practice</h3>
            <reverse/>
            <Form/>
            </Fragment>
        );
    }
}