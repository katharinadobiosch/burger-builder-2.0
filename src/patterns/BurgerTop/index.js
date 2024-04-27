import React from "react";
import BurgerTopImg from "../../assets/Burger/burger-top.png";
import "./burgerTop.css";

const BurgerTop = () => {
    return (
        <>
            <div className="burger-top">
                <img
                    className="burger-top__img"
                    src={BurgerTopImg}
                    alt="Burger bun top"
                />
            </div>
        </>
    );
};

export default BurgerTop;
