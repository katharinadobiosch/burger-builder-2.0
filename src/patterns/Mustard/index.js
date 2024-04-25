import React from "react";
import MustardImg from "../../assets/Burger/mustard.png";
import "./mustard.css";

const Mustard = () => {
    return (
        <>
            <div className="flex_item">
                <img className="img" src={MustardImg} alt="Mustard" />
            </div>
        </>
    );
};

export default Mustard;
