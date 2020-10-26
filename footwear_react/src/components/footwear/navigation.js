import React, { Component } from "react";
import {
    Col
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default class Navigation extends Component {

    render() {

        var storages = JSON.parse(localStorage.getItem('Details')) || [];

        return (
            <nav className="footwear-nav">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <Col xs={9}>
                                <div className="footwear-logo">
                                    <Link to="/">
                                        Footwear
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={3}>
                            </Col>
                        </div>
                        <div className="row">
                            <Col xs={12} className="text-left menu-1">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            HOME
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to="/men">
                                            MEN
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to="/women">
                                            WOMEN
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            ABOUT
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            CONTACT
                                    </Link>
                                    </li>
                                    <li className="cart">
                                        <Link to="/cart">
                                            <FontAwesomeIcon icon={faCartPlus} />{' '}
                                        CART [{storages.length}]
                                    </Link>

                                    </li>
                                </ul>
                            </Col>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}