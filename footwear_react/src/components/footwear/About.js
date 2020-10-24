import React, { Component } from "react";
import { Col } from "reactstrap";
import './index.css';
import Footer from './Footer';

export default class About extends Component {

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
                                    <span>About</span>
                                </p>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="footwear-about">
                    <div className="container">
                        <div className="row">
                            <div className="about-wrap">
                                <h2>Footwear the leading eCommerce Store around the Globe</h2>
                                <p>
                                    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                                </p>
                                <p>
                                    When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}