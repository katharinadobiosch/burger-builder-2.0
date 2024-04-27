import React, { useState } from "react";
// import { Link } from "react-router-dom";

import "./burgerCreator.css";

import BurgerTop from "../BurgerTop/index";
import BurgerBottom from "../BurgerBottom/index";
import Tomato from "../Tomato/index";
import Lettuce from "../Lettuce/index";
import Cheese from "../Cheese/index";
import Meat from "../Meat/index";
import Mustard from "../Mustard/index";
import Ketchup from "../Ketchup/index";

const BurgerCreator = () => {
    const [addTomato, setAddTomato] = useState([]);
    const [addLettuce, setAddLettuce] = useState([]);
    const [addCheese, setAddCheese] = useState([]);
    const [addMeat, setAddMeat] = useState([]);
    const [addMustard, setAddMustard] = useState([]);
    const [addKetchup, setAddKetchup] = useState([]);

    const addTomatoHandler = (event) => {
        event.preventDefault();
        const addExtraTomato = [...addTomato, <Tomato />];
        setAddTomato(addExtraTomato);
    };

    const removeTomatoHandler = (event) => {
        event.preventDefault();
        const removeExtraTomato = addTomato.filter(
            (_, index) => index < addTomato.length - 1
        );
        setAddTomato(removeExtraTomato);
    };

    const addLettuceHandler = (event) => {
        event.preventDefault();
        const addExtraLettuce = [...addLettuce, <Lettuce />];
        setAddLettuce(addExtraLettuce);
    };

    const removeLettuceHandler = (event) => {
        event.preventDefault();
        const removeExtraLettuce = addLettuce.filter(
            (_, index) => index < addLettuce.length - 1
        );
        setAddLettuce(removeExtraLettuce);
    };

    const addCheeseHandler = (event) => {
        event.preventDefault();
        const addExtraCheese = [...addCheese, <Cheese />];
        setAddCheese(addExtraCheese);
    };

    const removeCheeseHandler = (event) => {
        event.preventDefault();
        const removeExtraCheese = addCheese.filter(
            (_, index) => index < addCheese.length - 1
        );
        setAddCheese(removeExtraCheese);
    };

    const addMeatHandler = (event) => {
        event.preventDefault();
        const addExtraMeat = [...addMeat, <Meat />];
        setAddMeat(addExtraMeat);
    };

    const removeMeatHandler = (event) => {
        event.preventDefault();
        const removeExtraMeat = addMeat.filter(
            (_, index) => index < addMeat.length - 1
        );
        setAddMeat(removeExtraMeat);
    };

    const addMustardHandler = (event) => {
        event.preventDefault();
        const addExtraMustard = [...addMustard, <Mustard />];
        setAddMustard(addExtraMustard);
    };

    const removeMustardHandler = (event) => {
        event.preventDefault();
        const removeExtraMustard = addMustard.filter(
            (_, index) => index < addMustard.length - 1
        );
        setAddMustard(removeExtraMustard);
    };

    const addKetchupHandler = (event) => {
        event.preventDefault();
        const addExtraKetchup = [...addKetchup, <Ketchup />];
        setAddKetchup(addExtraKetchup);
    };

    const removeKetchupHandler = (event) => {
        event.preventDefault();
        const removeExtraKetchup = addKetchup.filter(
            (_, index) => index < addKetchup.length - 1
        );
        setAddKetchup(removeExtraKetchup);
    };

    return (
        <>
            <div className="burger-creator__ingredient-wrapper">
                <div className="burger-creator__ingredient">
                    <h1>What do you fancy?</h1>
                </div>
                <BurgerTop />

                <div className="burger-creator__ingredient">{addTomato}</div>
                <div className="burger-creator__ingredient">{addLettuce}</div>
                <div className="burger-creator__ingredient">{addCheese}</div>
                <div className="burger-creator__ingredient">{addMeat}</div>
                <div className="burger-creator__ingredient">{addMustard}</div>
                <div className="burger-creator__ingredient">{addKetchup}</div>

                <BurgerBottom />

                <div className="burger-creator__ingredient-wrapper">
                    <form className="form">
                        <div className="burger-creator__ingredient-wrapper">
                            <label>TOMATO</label>
                            <div>
                                <button
                                    className="burger-creator__button"
                                    onClick={addTomatoHandler}
                                >
                                    +
                                </button>

                                <button
                                    className="burger-creator__button"
                                    onClick={removeTomatoHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>LETTUCE</label>
                            <div>
                                <button
                                    className="burger-creator__button"
                                    onClick={addLettuceHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="burger-creator__button"
                                    onClick={removeLettuceHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>CHEESE</label>
                            <div>
                                <button
                                    className="burger-creator__button"
                                    onClick={addCheeseHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="burger-creator__button"
                                    onClick={removeCheeseHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>MEAT</label>
                            <div>
                                <button
                                    className="burger-creator__button"
                                    onClick={addMeatHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="burger-creator__button"
                                    onClick={removeMeatHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>MUSTARD</label>
                            <div>
                                <button
                                    className="burger-creator__button"
                                    onClick={addMustardHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="burger-creator__button"
                                    onClick={removeMustardHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>KETCHUP</label>
                            <div>
                                <button
                                    className="burger-creator__button"
                                    onClick={addKetchupHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="burger-creator__button"
                                    onClick={removeKetchupHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    {/* <Link to="/OrderForm">
                        <Button>ORDER</Button>
                    </Link> */}
                </div>
            </div>
        </>
    );
};

export default BurgerCreator;
