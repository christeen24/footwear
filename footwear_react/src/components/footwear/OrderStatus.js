import React, { Component } from "react";
import axios from "axios";
import './index.css';

export default class OrderStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: [],
        }
    }

    order() {
        var order_id = JSON.parse(localStorage.getItem('OrderId')) || "";

        axios.get("http://localhost:8000/orders/" + order_id)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        order: response.data.data ? response.data.data : "",
                    });
                }
            });
    }

    componentDidMount() {
        this.order();
    }

    render() {
        const { order } = this.state;

        return (
            <div>
                <div id="footwear-summary">
                    <div className="container">
                        <div className="row">
                            <div className="summary col-sm-12">
                                <h3>Order Summary</h3>
                            </div>
                            <div className="container">
                                <div className="col-sm-12">
                                    <h4>Billing Information</h4>
                                    <br />
                                    <table className="col-sm-12">
                                        <tbody>
                                            <tr>
                                                <td>First Name</td>
                                                <td>{order.fname}</td>
                                            </tr>
                                            <tr>
                                                <td>Last Name</td>
                                                <td>{order.lname}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{order.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Company</td>
                                                <td>{order.company}</td>
                                            </tr>
                                            <tr>
                                                <td>Address</td>
                                                <td>{order.address}</td>
                                            </tr>
                                            <tr>
                                                <td>Country</td>
                                                <td>{order.country}</td>
                                            </tr>
                                            <tr>
                                                <td>Postal Code</td>
                                                <td>{order.postalcode}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}