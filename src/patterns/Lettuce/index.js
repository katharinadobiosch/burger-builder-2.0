import React from "react";
import LettuceImg from "../../assets/Burger/lettuce.png";
import "./lettuce.css";

const Lettuce = () => {
    return (
        <>
            <div className="lettuce__wrapper">
                <img className="lettuce__img" src={LettuceImg} alt="Lettuce" />
            </div>
        </>
    );
};

export default Lettuce;
