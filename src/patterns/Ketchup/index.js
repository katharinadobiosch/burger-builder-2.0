import React from "react";
import KetchupImg from "../../assets/Burger/ketchup.png";
import "./ketchup.css";

const Ketchup = () => {
    return (
        <>
            <div className="flex_item">
                <img className="img" src={KetchupImg} alt="Ketchup" />
            </div>
        </>
    );
};

export default Ketchup;
