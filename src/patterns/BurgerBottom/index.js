import React from "react";
import BurgerBottomImg from "../../assets/Burger/burger-bottom.png";
import "./burgerBottom.css";

const BurgerBottom = () => {
    return (
        <>
            <div className="burger-bottom__wrapper">
                <img
                    className="burger-bottom__img"
                    src={BurgerBottomImg}
                    alt="Burger bun bottom"
                />
            </div>
        </>
    );
};

export default BurgerBottom;
