import React from "react";
import BurgerBottomImg from "../../assets/Burger/burger-bottom.png";
import "./burgerBottom.css";

const BurgerBottom = () => {
    return (
        <>
            <div className="flex_item">
                <img
                    className="img"
                    src={BurgerBottomImg}
                    alt="Burger bun bottom"
                />
            </div>
        </>
    );
};

export default BurgerBottom;
