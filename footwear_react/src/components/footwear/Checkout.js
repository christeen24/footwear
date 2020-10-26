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
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCartPlus, faEraser, faRecycle, faRemoveFormat, faShoppingBag, faShoppingBasket, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import footwear1 from './images/footwear.webp';
import { useStore } from "react-redux";
import Footer from './Footer';
import './index.css';

export default class Checkout extends Component {
    render() {

        let cartDetails = [];
        var subTotal = 0;
        localStorage.setItem('subTotal', JSON.stringify(subTotal));
        var cartStorage = JSON.parse(localStorage.getItem('Details')) || [];
        if (cartStorage.length) {
            cartDetails = cartStorage.map((cartItem) => {
                subTotal = subTotal + cartItem.price;
                localStorage.setItem('subTotal', JSON.stringify(subTotal));
                return (
                    <div className="product-cart d-flex" key={cartItem.id}>
                        <div className="one-forth">
                            <div className="product-img">
                                <img src={footwear1} alt="footflex" />

                            </div>
                            <div className="display-tc">
                                <h3>{cartItem.name}</h3>
                            </div>
                        </div>
                        <div className="one-forth text-center">
                            <div className="display-tc">
                                <span className="price">Rs.{cartItem.price}.00</span>
                            </div>
                        </div>
                        <div className="one-forth text-center">
                            <div className="display-tc">
                                <input type="text" id="quantity" value="1" name="quantity" className="form-control input-number text-center" max="100" />
                            </div>
                        </div>
                        <div className="one-forth text-center">
                            <div className="display-tc">
                                <span className="price">Rs.{cartItem.price * 1}.00</span>
                            </div>
                        </div>
                    </div>
                );
            });
        }

        return (
            <div>
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <Col>
                                <p className="bread">
                                    <span>
                                        <a href="footwear.js">Home</a>
                                    </span>
                                    {' '} / {' '}
                                    <span>
                                        <a href="cart.js">Cart</a>
                                    </span>
                                    {' '} / {' '}
                                    <span>Checkout</span>
                                </p>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="footwear-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <h2>Billing Information</h2>
                                </div>
                                <br />
                                <form action="#" className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="fname" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="lname" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" id="company" className="form-control" placeholder="Company (Optional)" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" id="address" className="form-control" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" id="city" className="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="country" className="form-control" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="postalcode" className="form-control" placeholder="Postal Code" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" id="phone" className="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <h2>Cart Details</h2>
                                </div>
                                <br />
                                {cartDetails}
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-12 total">
                                <div className="sub">
                                    <table>
                                        <tr>
                                            <td><span>Subtotal :</span></td>
                                            <td><span>Rs.{JSON.parse(localStorage.getItem('subTotal'))}.00</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Delivery :</span></td>
                                            <td><span>Rs.300.00</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Discount :</span></td>
                                            <td><span>Rs.0.00</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total :</strong></td>
                                            <td><span>Rs.{JSON.parse(localStorage.getItem('subTotal')) + 300}.00</span></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-12 checkout">
                                <span>
                                    <Button variant="primary"

                                    >
                                        Complete the order {' '}
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </Button>
                                </span>

                                <br />
                            </div>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}