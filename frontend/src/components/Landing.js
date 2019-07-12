import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import siteImage from '../img/logo.png'

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-4">
                        <h1 className="name text-center mt-5">Cloud<img src={siteImage} alt="Site logo" />lab</h1>
                        <hr />
                        <div className="text-center">
                            <p>Greetings from cloud laboratory.</p>
                            <p>The person who builds this laboratory is working on something.</p>
                            <p>Please tell him to takecare of me, if you see this guy. And don't forget to <a href="https://me.cloudiolab.com" target="_blank" rel="noopener noreferrer">Hit Him!</a>.</p>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default (withRouter(Landing));