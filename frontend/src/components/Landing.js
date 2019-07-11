import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-4">
                    </div>
                </div >
            </div >
        )
    }
}

export default (withRouter(Landing));