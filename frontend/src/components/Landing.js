import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import siteImage from '../img/logo.png'

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-dark">
                    <div className="content mb-5">
                        <h1 className="name text-center mt-5">Cloud<img src={siteImage} alt="Site logo" />lab</h1>
                        <hr />
                        <div className="text-center mt-4 mb-4">
                            <p className="font-italic">Greetings from cloud laboratory.</p>
                            <p>A full-stack developer and his private cloud laboratory to play with Docker SWARM cluster.</p>
                            <p>Why don't you <a href="https://me.cloudiolab.com" target="_blank" rel="noopener noreferrer"><i>say hello,...!</i></a>.</p>
                        </div>
                        <hr />
                        <p className="text-center font-weight-bold mt-4 mb-4">Everything you see here is running on Docker SWARM cluster.</p>
                        <div class="card-deck mt-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Private Docker Registry</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">In Production</h6>
                                    <p className="card-text">Gives freedom to share your custom base images within organization to keep consistent, private and centralized source of your images.</p>
                                    <a className="card-link" href="https://docker.cloudiolab.com" target="_blank" rel="noopener noreferrer">Need a free ride?</a>
                                    <a className="card-link" href="https://github.com/vesanthosh/docker_cloudiolab" target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
                            </div>
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Do-Things</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">In Production</h6>
                                    <p className="card-text">Share your tasks/goals and let others know your social activities. Get help or help others through social task-sharing platform.</p>
                                    <a className="card-link" href="https://dothings.cloudiolab.com/" target="_blank" rel="noopener noreferrer">Need a free ride?</a>
                                    <a className="card-link" href="https://github.com/vesanthosh/dothings_cloudiolab" target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-deck mt-4 mb-4">
                            <div className="card bg-light text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Cricket Planner</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Coming Soon...</h6>
                                    <p className="card-text">Find the right time to play that suits everyone. Predict the optimal date and time about who is interested.</p>
                                    <a className="card-link" href="https://cricket.cloudiolab.com" target="_blank" rel="noopener noreferrer">Need a free ride?</a>
                                    <a className="card-link" href="https://github.com/vesanthosh/cricket_cloudiolab" target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
                            </div>
                            <div className="card bg-light text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Cluster Monitoring</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Brainstorming</h6>
                                    <p className="card-text">Dashboard that tracks and monitors container, node's metrics and perfomance from SWARM / Kubernetes cluster. </p>
                                    {/* <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a> */}
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div class="card-deck mt-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">About Me</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">In Production</h6>
                                    <a className="card-link" href="https://me.cloudiolab.com" target="_blank" rel="noopener noreferrer">Wanna know?</a>
                                    <a className="card-link" href="https://me.cloudiolab.com/resume" target="_blank" rel="noopener noreferrer">Career history?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default (withRouter(Landing));