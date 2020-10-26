import React, { Component } from "react";
import './index.css';
import { faDribbble, faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {

    render() {
        return (
            <footer id="footwear-footer" role="contentinfo">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col footer-col footwear-widget">
                            <h4>About Footwear</h4>
                            <p>
                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                            </p>
                            <ul className="footwear-social-icons">
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faDribbble} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col footer-col footwear-widget">
                            <h4>Customer Care</h4>
                            <ul className="footwear-footer-links">
                                <li>
                                    <a href="#">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Returns/Exchange
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Gift Voucher
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Wishlist
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Special
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Customer Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Site Maps
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col footer-col footwear-widget">
                            <h4>Information</h4>
                            <ul className="footwear-footer-links">
                                <li>
                                    <a href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Delivery Information
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Order Tracking
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col footer-col">
                            <h4>News</h4>
                            <ul className="footwear-footer-links">
                                <li>
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Exhibitions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col footer-col">
                            <h4>Contact Information</h4>
                            <ul className="footwear-footer-links">
                                <li>
                                    291 SOUTH 21TH STREET,
                                    <br />
                                    SUITE 721 NEW YORK NY 10016
                                </li>
                                <li>
                                    <a href="tel://12345678920">
                                        + 1235 2355 98
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        INFO@YOURSITE.COM
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        YOURSITE.COM
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );

    }

}