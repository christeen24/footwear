import React, { Component } from "react";
import {
    Button, Col
} from "reactstrap";
import './index.css';
import footflex from './images/footflex.jpeg';
import flex from './images/flex.jpeg';
import footwear1 from './images/footwear.webp';
import men from './images/featuredmen.jpg';
import foot from './images/foot.jpg';
import product from './images/product.jpg';
import boots from './images/boots.webp';
import minam from './images/minam.jpg';
import tala from './images/tala.jpeg';
import sneakers from './images/sneakers.jpeg';
import maca from './images/maca.jpeg';
import shoe from './images/shoe.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Cart from "./Cart";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';

export default class Footwear extends Component {

    constructor(props) {
        super(props);
        this.state = {
            footwears: [],
            addFootwearData: {
                id: "",
                name: "",
                price: ""
            },
        }


        this.addFootwearToCart = this.addFootwearToCart.bind(this);
    }



    addFootwearToCart = (id, name, price) => {

        var detail = { id: id, name: name, price: price };
        localStorage.setItem('Detail', JSON.stringify(detail));

        const itemExists = obj => obj.id === detail.id;
        var storages = JSON.parse(localStorage.getItem('Details')) || [];

        if (storages.some(itemExists) === true) {
            alert("Item has already added to the cart.");
        }


        let path = '/cart';
        this.props.history.push(path);
        window.location.reload();
        // window.location.href = window.location.href('http://localhost:3000/cart');
    }

    componentDidMount() {
        this.getFootwears();
    }

    getFootwears() {
        axios.get("http://localhost:8000/footwears").then((response) => {
            if (response.status === 200) {
                this.setState({
                    footwears: response.data.data ? response.data.data : [],
                });
            }
            if (
                response.data.status === "failed" &&
                response.data.success === false
            ) {
                this.setState({
                    noDataFound: response.data.message,
                });
            }
        });
    }


    render() {

        const { footwears, addFootwearToCart } = this.state;
        let footwearsDetails = [];
        if (footwears.length) {
            footwearsDetails = footwears.map((footwear) => {
                return (
                    <Col lg={3} mb={4} className="text-center prods" key={footwear.id}>
                        <div className="product-entry border">
                            <a href="#" className="prod-img">
                                <img src={boots} alt="footflex" />
                            </a>
                            <div className="desc">
                                <h2>
                                    <a href="#">{footwear.name}</a>
                                </h2>
                                <span className="price">Rs.{footwear.price}.00</span>
                                <div className="addtocartbtn">
                                    <Button variant="primary"
                                        value={footwear}
                                        onClick={() =>
                                            this.addFootwearToCart(
                                                footwear.id,
                                                footwear.name,
                                                footwear.price
                                            )
                                        }
                                    >
                                        Add to cart {' '}
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            });
        }

        return (



            <div className="body">

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
                                        <img src={footwear1} alt="footflex" />
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
                            {footwearsDetails}
                            {this.state.isAboutVisible ? <Cart /> : null}
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
                <Footer />
            </div>
        );

    }
}
