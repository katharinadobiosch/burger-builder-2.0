import React from "react";
import KetchupImg from "../../assets/Burger/ketchup.png";
import "./ketchup.css";

const Ketchup = () => {
    return (
        <>
            <div className="ketchup__wrapper">
                <img className="ketchup__img" src={KetchupImg} alt="Ketchup" />
            </div>
        </>
    );
};

export default Ketchup;
