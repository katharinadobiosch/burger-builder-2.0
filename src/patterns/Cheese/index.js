import React from "react";
import CheeseImg from "../../assets/Burger/cheese.png";
import "./cheese.css";

const Cheese = () => {
    return (
        <>
            <div className="flex_item">
                <img className="img" src={CheeseImg} alt="Cheese" />
            </div>
        </>
    );
};

export default Cheese;
