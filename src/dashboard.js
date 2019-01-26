import React, { Component, Fragment } from 'react';
import reverse from './strings/reverse';

export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
            <h3>Data Structure Practice</h3>
            <reverse/>
            </Fragment>
        );
    }
}