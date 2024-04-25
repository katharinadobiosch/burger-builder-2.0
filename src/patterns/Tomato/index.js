import React from "react";
import TomatoImg from "../../assets/Burger/tomato.png";
import "./tomato.css";

const Tomato = () => {
    return (
        <>
            <div className="flex_item">
                <img className="img" src={TomatoImg} alt="Burger bun top" />
            </div>
        </>
    );
};

export default Tomato;
