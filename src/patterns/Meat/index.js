import React from "react";
import MeatImg from "../../assets/Burger/meat.png";
import "./meat.css";

const Meat = () => {
    return (
        <>
            <div className="flex_item">
                <img className="img" src={MeatImg} alt="Meat" />
            </div>
        </>
    );
};

export default Meat;
