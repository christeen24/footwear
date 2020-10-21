import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup, Form,
    Label,
    Input,
    Row,
    Col
} from "reactstrap";
import './index.css';
import footflex from './footflex.jpeg';
import flex from './flex.jpeg';
import footwear1 from './footwear1.jpg';
import footwear from './footwear.webp';
import men from './featuredmen.jpg';
import foot from './foot.jpg';
import product from './product.jpg';
import boots from './boots.webp';
import minam from './minam.jpg';
import tala from './tala.jpeg';
import sneakers from './sneakers.jpeg';
import maca from './maca.jpeg';
import shoe from './shoe.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


export default class Footwear extends Component {
    render() {
        return (
            <div className="body">
                <nav className="footwear-nav">
                    <div className="top-menu">
                        <div className="container">
                            <div className="row">
                                <Col xs={9}>
                                    <div className="footwear-logo">
                                        <a href="index.js">
                                            Footwear</a>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={12} className="text-left menu-1">
                                    <ul>
                                        <li className="active">
                                            <a href="index.js">HOME</a>
                                        </li>
                                        <li>
                                            <a href="index.js">MEN</a>
                                        </li>
                                        <li>
                                            <a href="index.js">WOMEN</a>
                                        </li>
                                        <li>
                                            <a href="index.js">ABOUT</a>
                                        </li>
                                        <li>
                                            <a href="index.js">CONTACT</a>
                                        </li>
                                        <li className="cart">
                                            <a href="index.js">
                                                <FontAwesomeIcon icon={faCartPlus} />{' '}
                                                CART [0]
                                            </a>
                                            
                                        </li>
                                    </ul>
                                </Col>
                            </div>
                        </div>
                    </div>
                </nav>
                <aside id="footwear-hero">
                    <div className="flex">
                        <img src={foot} alt="footflex" />

                    </div>
                </aside>
                <div className="footwear-intro">
                    <div className="container">
                        <div className="row">
                            <Col xs={12} className="text-center">
                                <h2 className="intro">
                                    It started with a simple idea: Create quality, well-designed products that I wanted myself.
                                </h2>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="footwear-product">
                    <div className="container-fluid">
                        <div className="row">
                            <Col xs={6} className="text-center">
                                <div className="featured">
                                    <a href="#" className="featured-img">
                                        <img src={men} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">Shop Men's Collection</a>
                                        </h2>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} className="text-center">
                                <div className="featured">
                                    <a href="#" className="featured-img">
                                        <img src={footwear} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">Shop Women's Collection</a>
                                        </h2>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="footwear-product">
                    <div className="container">
                        <div className="row">
                            <Col xs={12} className="footwear-heading">
                                <h2>Best Sellers</h2>
                            </Col>
                        </div>
                        <div className="row">
                            <Col lg={3} mb={4} className="text-center prods">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={boots} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">WOMEN'S BOOTS SHOES MACA</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                        <div className="addtocartbtn">
                                            <Button variant="primary">
                                                Add to cart {' '}
                                                <FontAwesomeIcon icon={faCartPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} mb={4} className="text-center prods">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={minam} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">WOMEN'S MINAM MEAGHAN</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                        <div className="addtocartbtn">
                                            <Button variant="primary">
                                                Add to cart {' '}
                                                <FontAwesomeIcon icon={faCartPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} mb={4} className="text-center prods">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={tala} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">MEN'S TAJA COMMISSIONER</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                        <div className="addtocartbtn">
                                            <Button variant="primary">
                                                Add to cart {' '}
                                                <FontAwesomeIcon icon={faCartPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} mb={4} className="text-center prods">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={sneakers} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">RUSS MEN'S SNEAKERS</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                        <div className="addtocartbtn">
                                            <Button variant="primary">
                                                Add to cart {' '}
                                                <FontAwesomeIcon icon={faCartPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} mb={4} className="text-center prods">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={maca} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">WOMEN'S BOOTS SHOES MACA</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                        <div className="addtocartbtn">
                                            <Button variant="primary">
                                                Add to cart {' '}
                                                <FontAwesomeIcon icon={faCartPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} mb={4} className="text-center prods">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={shoe} alt="footflex" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">Women's Boots Shoes Maca</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                        <div className="addtocartbtn">
                                            <Button variant="primary">
                                                Add to cart {' '}
                                                <FontAwesomeIcon icon={faCartPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="row">
                            <Col md={12} className="text-center">
                                <p>
                                    <a href="#">
                                        <Button variant="primary">
                                            Shop All Products
                                        </Button>
                                    </a>
                                </p>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
