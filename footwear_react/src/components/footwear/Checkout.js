import React, { Component } from "react";

import {
    Button,
    Col,
    Input
} from "reactstrap";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import footwear1 from './images/footwear.webp';
import Footer from './Footer';
import './index.css';

export default class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkoutData: {
                fname: "",
                lname: "",
                email: "",
                company: "",
                address: "",
                country: "",
                postalcode: "",
                price: "",
                items: ""
            },
            orderItems: {
                order_id: "",
                item_id: []
            }
        }
    }

    componentDidMount() {
        this.loadOrderDetails();
    }

    onChangeCheckoutHandler = (event) => {

        let { checkoutData } = this.state;
        checkoutData[event.target.name] = event.target.value;
        this.setState({ checkoutData });

    };


    completeOrder = () => {
        console.log(JSON.parse(localStorage.getItem('Details')));

        axios.get("http://localhost:8000/orders").then((response) => {
            if (response.status === 200) {
                this.setState({
                    orders: response.data.data ? response.data.data : [],
                });
            }
        });

        console.log(this.state.checkoutData);


        axios.post("http://localhost:8000/orders",
            this.state.checkoutData
        )
            .then((response) => {
                const { orders } = this.state;
                const newOrders = [...orders];
                newOrders.push(response.data);
                this.setState({
                    order_id: response.data.data.id ? response.data.data.id : "",
                });
                localStorage.setItem('OrderId', JSON.stringify(response.data.data.id));
                this.setState(
                    {
                        orders: newOrders,
                        checkoutData: {
                            fname: "",
                            lname: "",
                            email: "",
                            company: "",
                            address: "",
                            country: "",
                            postalcode: "",
                            price: "",
                            items: ""
                        },
                    },
                    () => this.orderstatus()
                );
                localStorage.removeItem('Details');
                localStorage.removeItem('subTotal');
            })
            .catch(error => console.log(error));

    }

    loadOrderDetails() {
        let orderPrice = JSON.parse(localStorage.getItem('subTotal')) + 300;

        this.setState(prevState => ({
            checkoutData: {
                ...prevState.checkoutData,
                price: orderPrice
            }
        }));

        let orderDetails = JSON.parse(localStorage.getItem('Details'));
        let item_ids = [];
        for (var i = 0; i < orderDetails.length; i++) {
            item_ids.push(orderDetails[i].id);
        }

        this.setState(prevState => ({
            checkoutData: {
                ...prevState.checkoutData,
                items: item_ids.toString()
            }
        }));
    }

    orderstatus() {
        let path = '/orderstatus';
        this.props.history.push(path);
        window.location.reload();
    }

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
                                                <Input
                                                    name="fname"
                                                    id="fname"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={this.state.checkoutData.fname}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Input
                                                    name="lname"
                                                    id="lname"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={this.state.checkoutData.lname}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Input
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Your email address"
                                                    value={this.state.checkoutData.email}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Input
                                                    name="company"
                                                    id="company"
                                                    className="form-control"
                                                    placeholder="Company (Optional)"
                                                    value={this.state.checkoutData.company}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Input
                                                    name="address"
                                                    id="address"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    value={this.state.checkoutData.address}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Input
                                                    name="city"
                                                    id="city"
                                                    className="form-control"
                                                    placeholder="City"
                                                    value={this.state.checkoutData.city}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Input
                                                    name="country"
                                                    id="country"
                                                    className="form-control"
                                                    placeholder="Country"
                                                    value={this.state.checkoutData.country}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Input
                                                    name="postalcode"
                                                    id="postalcode"
                                                    className="form-control"
                                                    placeholder="Postal Code"
                                                    value={this.state.checkoutData.postalcode}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Input
                                                    name="phone"
                                                    id="phone"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    value={this.state.checkoutData.phone}
                                                    onChange={this.onChangeCheckoutHandler}
                                                />
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
                                        onClick={() => this.completeOrder()}
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