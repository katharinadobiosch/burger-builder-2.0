import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./burgerCreator.css";

import BurgerTop from "../BurgerTop/index";
import BurgerBottom from "../BurgerBottom/index";
import Tomato from "../Tomato/index";
import Lettuce from "../Lettuce/index";
import Cheese from "../Cheese/index";
import Meat from "../Meat/index";
import Mustard from "../Mustard/index";
import Ketchup from "../Ketchup/index";
import Button from "../Button/index";

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
                <div className="burger-creator__title">
                    <h1>What do you fancy?</h1>
                </div>
                <div className="burger-creator__ingredients-wrapper">
                    <form className="burger-creator__form">
                        <div className="burger-creator__ingredient-wrapper">
                            <label>TOMATO</label>
                            <div className="burger-creator__button-wrapper">
                                <Button
                                    className="burger-creator__button"
                                    onClick={addTomatoHandler}
                                    text="+"
                                />
                                <Button
                                    className="burger-creator__button"
                                    onClick={removeTomatoHandler}
                                    text="-"
                                />
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>LETTUCE</label>
                            <div className="burger-creator__button-wrapper">
                                <Button
                                    className="burger-creator__button"
                                    onClick={addLettuceHandler}
                                    text="+"
                                />

                                <Button
                                    className="burger-creator__button"
                                    onClick={removeLettuceHandler}
                                    text="-"
                                />
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>CHEESE</label>
                            <div className="burger-creator__button-wrapper">
                                <Button
                                    className="burger-creator__button"
                                    onClick={addCheeseHandler}
                                    text="+"
                                />

                                <Button
                                    className="burger-creator__button"
                                    onClick={removeCheeseHandler}
                                    text="-"
                                />
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>MEAT</label>
                            <div className="burger-creator__button-wrapper">
                                <Button
                                    className="burger-creator__button"
                                    onClick={addMeatHandler}
                                    text="+"
                                />

                                <Button
                                    className="burger-creator__button"
                                    onClick={removeMeatHandler}
                                    text="-"
                                />
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>MUSTARD</label>
                            <div className="burger-creator__button-wrapper">
                                <Button
                                    className="burger-creator__button"
                                    onClick={addMustardHandler}
                                    text="+"
                                />
                                <Button
                                    className="burger-creator__button"
                                    onClick={removeMustardHandler}
                                    text="-"
                                />
                            </div>
                        </div>

                        <div className="burger-creator__ingredient-wrapper">
                            <label>KETCHUP</label>
                            <div className="burger-creator__button-wrapper">
                                <Button
                                    className="burger-creator__button"
                                    onClick={addKetchupHandler}
                                    text="+"
                                />

                                <Button
                                    className="burger-creator__button"
                                    onClick={removeKetchupHandler}
                                    text="-"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <BurgerTop />

                <div className="burger-creator__ingredient">{addTomato}</div>
                <div className="burger-creator__ingredient">{addLettuce}</div>
                <div className="burger-creator__ingredient">{addCheese}</div>
                <div className="burger-creator__ingredient">{addMeat}</div>
                <div className="burger-creator__ingredient">{addMustard}</div>
                <div className="burger-creator__ingredient">{addKetchup}</div>

                <BurgerBottom />

                <div>
                    <Link to="/order-form">
                        <Button text="ORDER" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BurgerCreator;

//q: the function of the button component is to add or remove ingredients from the burger, but it doesnt work anymore
//q: the button component is not working anymore, what is the problem?
//q: the button component is not working anymore, what is the problem?
//a: the button component is not working anymore because the onClick event is not being passed down to the button component
//q: how to do it?
//a: pass the onClick event to the button component
//q: show me please
//a
