import { faGlobe, faLocationArrow, faPaperPlane, faPhone, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Col } from "reactstrap";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';


export default class Contact extends Component {

    render() {
        return (

            <div>
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <Col>
                                <p className="bread">
                                    <span>
                                        <a href="footwear.html">Home</a>
                                    </span>
                                    {' '} / {' '}
                                    <span>Contact</span>
                                </p>
                            </Col>
                        </div>
                    </div>
                </div>
                <div id="footwear-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                            <h3>Contact Information</h3>
                            <div className="row contact-info-wrap">
                                <div className="col-md-3">
                                    <p>
                                        <span>
                                        <FontAwesomeIcon icon={faLocationArrow} />{' '}
                                        </span>
                                        198 West 21th Street,
                                        <br />
                                        Suite 721 New York NY 10016
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p>
                                        <span>
                                        <FontAwesomeIcon icon={faPhone} />{' '}
                                        </span>
                                        <a href="tel://123456787">+ 1235 2355 98</a>
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p>
                                        <span>
                                        <FontAwesomeIcon icon={faPaperPlane} />{' '}
                                        </span>
                                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p>
                                        <span>
                                        <FontAwesomeIcon icon={faGlobe} />{' '}
                                        </span>
                                        <a href="#">yoursite.com</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h3>Get in Touch</h3>
                                    <br />
                                    <form action="#" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="fname">First Name</label>
                                                    <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                                                    </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="lname">Last Name</label>
                                                    <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                <label for="email">Email</label>
                                                    <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                <label for="subject">Subject</label>
                                                    <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                <label for="message">Message</label>
                                                    <input type="text" id="message" className="form-control" placeholder="Say something about us" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="submit" value="Send Message" className="btn btn-primary" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="map" className="footware-map" >
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }

}