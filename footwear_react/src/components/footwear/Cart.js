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
import { faCartArrowDown, faCartPlus, faEraser, faRecycle, faRemoveFormat, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import footwear1 from './images/footwear.webp';
import { useStore } from "react-redux";
import Footer from './Footer';


export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            footWearCart: {
                id: "",
                name: "",
                price: ""
            },
        }

    }

    deleteCartItem = (id) => {
        var CartStorage = JSON.parse(localStorage.getItem('Details'));
        
            CartStorage.forEach(element => {
                if(element.id === id) {
                    CartStorage.splice(element, 1);
                }
            });

            localStorage.setItem('Details', JSON.stringify(CartStorage));
            window.location.reload();
        
    };


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
        var cartStorage = JSON.parse(localStorage.getItem('Details')) || [];
        if (cartStorage.length) {
            cartDetails = cartStorage.map((cartItem) => {
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
            })
        }


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
                    </div>
                </div>
                <Footer />
            </div>

        );



    }
}