import React, { Component } from "react";
import {
    Button, Col
} from "reactstrap";
import './index.css';
import flex from './images/womencasual.jpeg';
import footwear1 from './images/footwear.webp';
import footwear2 from './images/footwear.jpg';
import footwear3 from './images/footwear.jpeg';
import Footer from './Footer';
import axios from "axios";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Women extends Component {

    constructor(props) {
        super(props);
        this.state = {
            womenfootwears: [],
        }
    }

    getWomenFootwears() {
        axios.get("http://localhost:8000/footwears").then((response) => {
            if (response.status === 200) {
                this.setState({
                    footwears: response.data.data ? response.data.data : [],

                });

                var women = [];

                for (var i = 0; i < response.data.count; i++) {
                    if (response.data.data[i].type === "women") {
                        women.push(response.data.data[i]);
                        this.setState({
                            womenfootwears: response.data.data ? women : [],
                        });
                        console.log(this.state.womenfootwears);
                    }
                }
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
    }


    componentDidMount() {
        this.getWomenFootwears();
    }

    render() {

        const { womenfootwears } = this.state;
        let womenFootwearsDetails = [];
        if (womenfootwears.length) {
            womenFootwearsDetails = womenfootwears.map((footwear) => {
                return (
                    <div className="col-lg-4 mb-4 text-center" key={footwear.id}>
                        <div className="product-entry border">
                            <a href="#" className="prod-img">
                                <img src={footwear3} className="img-fluid" alt="Women shoes" />
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
                                        <a href="footwear.html">Home</a>
                                    </span>
                                    {' '} / {' '}
                                    <span>WOMEN</span>
                                </p>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="breadcrumbs-two">
                    <div className="container">
                        <div className="row">
                            <Col>
                                <div className="breadcrumbs-img" style={{ backgroundImage: `url("${footwear1}")` }}>
                                    <h2>Women's</h2>
                                </div>
                                <div className="menu text-center">
                                    <p>
                                        <a href="#">New Arrivals</a>
                                        <a href="#">Brst Sellers</a>
                                        <a href="#">Extended Widths</a>
                                        <a href="#">Sale</a>
                                    </p>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="footwear-featured">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <div className="featured">
                                    <div className="featured-img featured-img-2" style={{ backgroundImage: `url("${flex}")` }}>
                                        <h2>Casuals</h2>
                                        <p>
                                            <a href="#" className="btn btn-primary btn-lg">Shop now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="featured">
                                    <div className="featured-img featured-img-2" style={{ backgroundImage: `url("${footwear2}")` }}>
                                        <h2>Dress</h2>
                                        <p>
                                            <a href="#" className="btn btn-primary btn-lg">Shop now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="featured">
                                    <div className="featured-img featured-img-2" style={{ backgroundImage: `url("${footwear3}")` }}>
                                        <h2>Sports</h2>
                                        <p>
                                            <a href="#" className="btn btn-primary btn-lg">Shop now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footwear-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-xl-3">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="side side1 border mb-1">
                                            <h3>Brand</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Nike</a>
                                                </li>
                                                <li>
                                                    <a href="#">Adidas</a>
                                                </li>
                                                <li>
                                                    <a href="#">Merrel</a>
                                                </li>
                                                <li>
                                                    <a href="#">Ducci</a>
                                                </li>
                                                <li>
                                                    <a href="#">Skechers</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="side border mb-1">
                                            <h3>Size/Width</h3>
                                            <div className="block-26 mb-2">
                                                <h4>Size</h4>
                                                <ul>
                                                    <li>
                                                        <a href="#">7</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">7.5</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">8</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">8.5</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">9</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">9.5</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">10</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">10.5</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">11</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">11.5</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">12</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">12.5</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">13</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">13.5</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">14</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="block-26">
                                                <h4>Width</h4>
                                                <ul>
                                                    <li>
                                                        <a href="#">M</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">W</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="side side1 border mb-1">
                                            <h3>Style</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Slip Ons</a>
                                                </li>
                                                <li>
                                                    <a href="#">Boots</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sandals</a>
                                                </li>
                                                <li>
                                                    <a href="#">Lace Ups</a>
                                                </li>
                                                <li>
                                                    <a href="#">Oxfords</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="side side1 border mb-1">
                                            <h3>Colors</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Black</a>
                                                </li>
                                                <li>
                                                    <a href="#">White</a>
                                                </li>
                                                <li>
                                                    <a href="#">Blue</a>
                                                </li>
                                                <li>
                                                    <a href="#">Red</a>
                                                </li>
                                                <li>
                                                    <a href="#">Green</a>
                                                </li>
                                                <li>
                                                    <a href="#">Orange</a>
                                                </li>
                                                <li>
                                                    <a href="#">Cream</a>
                                                </li>
                                                <li>
                                                    <a href="#">Brown</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="side side1 border mb-1">
                                            <h3>Material</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Lether</a>
                                                </li>
                                                <li>
                                                    <a href="#">Suede</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="side side1 border mb-1">
                                            <h3>Technology</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">BioBevel</a>
                                                </li>
                                                <li>
                                                    <a href="#">Groove</a>
                                                </li>
                                                <li>
                                                    <a href="#">FlexBevel</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-xl-9">
                                <div className="row row-pb-md">
                                    {womenFootwearsDetails}

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