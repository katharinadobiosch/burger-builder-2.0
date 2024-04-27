import React from "react";
import MeatImg from "../../assets/Burger/meat.png";
import "./meat.css";

const Meat = () => {
    return (
        <>
            <div className="meat__wrapper">
                <img className="meat__img" src={MeatImg} alt="Meat" />
            </div>
        </>
    );
};

export default Meat;
