import React from "react";
import TomatoImg from "../../assets/Burger/tomato.png";
import "./tomato.css";

const Tomato = () => {
    return (
        <>
            <div className="tomato__wrapper">
                <img className="tomato__img" src={TomatoImg} alt="Burger bun top" />
            </div>
        </>
    );
};

export default Tomato;


