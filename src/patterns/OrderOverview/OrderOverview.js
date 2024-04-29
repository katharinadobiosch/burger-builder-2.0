import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/index";
import "./orderOverview.css";

const OrderOverview = (state) => {
    // Use the useLocation hook to access the location object
    const location = useLocation();
    console.log("STATE", location.state);

    // Destructure the data from location.state or provide default values
    const {
        firstName = "",
        lastName = "",
        phone = "",
        email = "",
        street = "",
        number = "",
        city = "",
        zipCode = "",
        comments = "",
    } = location.state || {};

    return (
        <>
            <div className="flex_container">
                {/* Display order details */}
                <div>
                    <strong>First Name:</strong> {firstName}
                </div>
                <div>
                    <strong>Last Name:</strong> {lastName}
                </div>
                <div>
                    <strong>Phone:</strong> {phone}
                </div>
                <div>
                    <strong>Email:</strong> {email}
                </div>
                <div>
                    <strong>Street:</strong> {street}
                </div>
                <div>
                    <strong>Number:</strong> {number}
                </div>
                <div>
                    <strong>City:</strong> {city}
                </div>
                <div>
                    <strong>Zip Code:</strong> {zipCode}
                </div>
                <div>
                    <strong>Comments:</strong> {comments}
                </div>
                {/* Link to the next step */}
                <Link to="/thank-you">
                    <Button>NEXT</Button>
                </Link>
            </div>
        </>
    );
};

export default OrderOverview;
