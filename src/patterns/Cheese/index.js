import React from "react";
import CheeseImg from "../../assets/Burger/cheese.png";
import "./cheese.css";

const Cheese = () => {
    return (
        <>
            <div className="cheese__wrapper">
                <img className="cheese__img" src={CheeseImg} alt="Cheese" />
            </div>
        </>
    );
};

export default Cheese;
