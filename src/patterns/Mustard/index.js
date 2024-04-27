import React from "react";
import MustardImg from "../../assets/Burger/mustard.png";
import "./mustard.css";

const Mustard = () => {
    return (
        <>
            <div className="mustard__wrapper">
                <img className="mustard__img" src={MustardImg} alt="Mustard" />
            </div>
        </>
    );
};

export default Mustard;
