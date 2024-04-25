import React from "react";
import LettuceImg from "../../assets/Burger/lettuce.png";
import "./lettuce.css";

const Lettuce = () => {
    return (
        <>
            <div className="flex_item">
                <img className="img" src={LettuceImg} alt="Lettuce" />
            </div>
        </>
    );
};

export default Lettuce;
