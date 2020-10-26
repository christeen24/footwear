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
import { faCartArrowDown, faCartPlus, faEraser, faRecycle, faRemoveFormat, faShoppingBag, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import footwear1 from './images/footwear.webp';
import { useStore } from "react-redux";
import Footer from './Footer';
import Footwear from "./Footwear";


export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            footWearCart: {
                id: "",
                name: "",
                price: ""
            },
            subTotal: 0,
        }

    }

    deleteCartItem = (id) => {
        var CartStorage = JSON.parse(localStorage.getItem('Details'));

        CartStorage.forEach(element => {
            if (element.id === id) {
                CartStorage.splice(element, 1);
            }
        });

        localStorage.setItem('Details', JSON.stringify(CartStorage));
        window.location.reload();

    };

    checkout() {
        let path = '/checkout';
        this.props.history.push(path);
    }


    render() {

        if (localStorage.getItem('Detail') !== null) {

            var storage = JSON.parse(localStorage.getItem('Detail'));
            console.log(storage);
            console.log(storage.id);

            var storages = JSON.parse(localStorage.getItem('Details')) || [];
            console.log(storages);

            if (storages.length === 0) {
                console.log("free");
                if (!(storages instanceof Array))
                    storages = [storages];
                if (storage.id !== null)
                    storages.push(storage);
                localStorage.setItem('Details', JSON.stringify(storages));
                localStorage.removeItem('Detail');
                console.log(storages);

            } else {
                console.log("here");

                const itemExists = obj => obj.id === storage.id;

                console.log(storages.some(itemExists));

                if (storages.some(itemExists) === false) {
                    if (!(storages instanceof Array))
                        storages = [storages];

                    storages.push(storage);
                    localStorage.setItem('Details', JSON.stringify(storages));
                    console.log(storages);
                    localStorage.removeItem('Detail');
                } else {
                    localStorage.removeItem('Detail');
                }

            }
        }


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
                        <div className="one-eight text-center">
                            <div className="display-tc">
                                <span className="price">Rs.{cartItem.price}.00</span>
                            </div>
                        </div>
                        <div className="one-eight text-center">
                            <div className="display-tc">
                                <input type="text" id="quantity" value="1" name="quantity" className="form-control input-number text-center" max="100" />
                            </div>
                        </div>
                        <div className="one-eight text-center">
                            <div className="display-tc">
                                <span className="price">Rs.{cartItem.price * 1}.00</span>
                            </div>
                        </div>
                        <div className="one-eight text-center">
                            <div className="display-tc">
                                <Button
                                    color="danger"
                                    size="sm"
                                    onClick={() => this.deleteCartItem(cartItem.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
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
                                        <a href="{Footwear}">Home</a>
                                    </span>
                                    {' '} / {' '}
                                    <span>Shopping cart</span>
                                </p>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="footwear-product">
                    <div className="container">
                        <div className="row row-pb-lg">
                            <div className="col-md-12">
                                <div className="product-name d-flex">
                                    <div className="one-forth text-left px-4">
                                        <span>Product Details</span>
                                    </div>
                                    <div className="one-eight text-center">
                                        <span>Price</span>
                                    </div>
                                    <div className="one-eight text-center">
                                        <span>Quantity</span>
                                    </div>
                                    <div className="one-eight text-center">
                                        <span>Total</span>
                                    </div>
                                    <div className="one-eight text-center px-4">
                                        <span>Remove</span>
                                    </div>
                                </div>

                                {cartDetails}

                            </div>
                        </div>
                        <div className="row row-pb-lg">
                            <div className="col-md-12">
                                <div className="total-wrap">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <form action="#">
                                                <div className="row form-group">
                                                    <div className="col-sm-9">
                                                        <input type="text" name="quantity" className="form-control input-number" placeholder="Your Coupon Number ..." />
                                                    </div>
                                                    <div className="col-sm-4 checkout">
                                                        <Button
                                                            color="primary"
                                                            size="sm"               >
                                                            Apply Coupon
                                                        </Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-sm-4 text-center">
                                            <div className="total">
                                                <div className="sub">
                                                    <p>
                                                        <span>Subtotal:</span>
                                                        <span>Rs.{JSON.parse(localStorage.getItem('subTotal'))}.00</span>
                                                    </p>
                                                    {/* <p>
                                                        <span>Delivery:</span>
                                                        <span>Rs.300.00</span>
                                                    </p> */}
                                                    <p>
                                                        <span>Discount:</span>
                                                        <span>Rs.0.00</span>
                                                    </p>
                                                </div>
                                                <div className="grand-total">
                                                    <p>
                                                        <span>
                                                            <strong>Total:</strong>
                                                        </span>
                                                        <span>Rs.{JSON.parse(localStorage.getItem('subTotal'))}.00</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="col-sm-12 total-wrap checkout">
                                        <Button
                                            color="primary"
                                            size="sm"
                                            onClick={() =>
                                                this.checkout()
                                            }                                        >
                                            Proceed to checkout {' '}{' '}
                                            <FontAwesomeIcon icon={faShoppingBag} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-center footwear-heading footwear-heading-sm">
                                <h2>Related Products</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={footwear1} className="img-fluid" alt="related products" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">Women's Boots Shoes Maca</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={footwear1} className="img-fluid" alt="related products" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">Women's Boots Shoes Maca</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={footwear1} className="img-fluid" alt="related products" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">Women's Boots Shoes Maca</a>
                                        </h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={footwear1} className="img-fluid" alt="related products" />
                                    </a>
                                    <div className="desc">
                                        <h2>
                                            <a href="#">Women's Boots Shoes Maca</a>
                                        </h2>
                                        <span className="price">$139.00</span>
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