import React, { useState } from "react";
// import { Link } from "react-router-dom";

import "./burgerCreator.css";

import BurgerTop from "../BurgerTop/index";
import BurgerBottom from "../BurgerBottom/index";

import Button from "../Button/index";
import Tomato from "../Tomato/index";
import Lettuce from "../Lettuce/index";
import Cheese from "../Cheese/index";
import Meat from "../Meat/index";
import Mustard from "../Mustard/index";
import Ketchup from "../Ketchup/index";

const BurgerCreator = (props) => {
    const [addTomato, setAddTomato] = useState([]);
    const [addLettuce, setAddLettuce] = useState([]);
    const [addCheese, setAddCheese] = useState([]);
    const [addMeat, setAddMeat] = useState([]);
    const [addMustard, setAddMustard] = useState([]);
    const [addKetchup, setAddKetchup] = useState([]);

    // const [tomatoCount, setTomatoCount] = useState(0);
    // const [lettuceCount, setLettuceCount] = useState(0);
    // const [cheeseCount, setCheeseCount] = useState(0);
    // const [meatCount, setAMeatCount] = useState(0);
    // const [mustardCount, setMustardCount] = useState(0);
    // const [ketchupCount, setKetchupCount] = useState(0);

    // // # 1
    // const addTomatoHandler = (event) => {
    //     event.preventDefault();

    //     setTomatoCount(tomatoCount + 1);

    //     // [...Array(tomatoCount)].map((unused, index) => <Tomato key={index} />);
    // };

    // #2
    const addTomatoHandler = (event) => {
        event.preventDefault();
        const addExtraTomato = [...addTomato, <Tomato />];
        setAddTomato(addExtraTomato);
    };

    const removeTomatoHandler = (event) => {
        event.preventDefault();
        const removeExtraTomato = addTomato.filter(
            (unused, index) => index < addTomato.length - 1
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
            (unused, index) => index < addLettuce.length - 1
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
            (unused, index) => index < addCheese.length - 1
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
            (unused, index) => index < addMeat.length - 1
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
            (unused, index) => index < addMustard.length - 1
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
            (unused, index) => index < addKetchup.length - 1
        );
        setAddKetchup(removeExtraKetchup);
    };

    return (
        <>
            <div className="flex_container">
                <div className="flex_item">
                    <h1>Now, let's start...</h1>
                </div>
                <BurgerTop />

                {/* #1 */}
                {/* <div className="flex_item">{tomatoCount}</div> */}

                {/* #2 */}
                <div className="flex_item">{addTomato}</div>
                <div className="flex_item">{addLettuce}</div>
                <div className="flex_item">{addCheese}</div>
                <div className="flex_item">{addMeat}</div>
                <div className="flex_item">{addMustard}</div>
                <div className="flex_item">{addKetchup}</div>

                <BurgerBottom />

                <div className="flex_container">
                    <form className="form">
                        <div className="flex_container">
                            <label>TOMATO</label>
                            <div>
                                <button
                                    className="add_rmv_btn"
                                    onClick={addTomatoHandler}
                                >
                                    +
                                </button>

                                <button
                                    className="add_rmv_btn"
                                    onClick={removeTomatoHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="flex_container">
                            <label>LETTUCE</label>
                            <div>
                                <button
                                    className="add_rmv_btn"
                                    onClick={addLettuceHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="add_rmv_btn"
                                    onClick={removeLettuceHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="flex_container">
                            <label>CHEESE</label>
                            <div>
                                <button
                                    className="add_rmv_btn"
                                    onClick={addCheeseHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="add_rmv_btn"
                                    onClick={removeCheeseHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="flex_container">
                            <label>MEAT</label>
                            <div>
                                <button
                                    className="add_rmv_btn"
                                    onClick={addMeatHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="add_rmv_btn"
                                    onClick={removeMeatHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="flex_container">
                            <label>MUSTARD</label>
                            <div>
                                <button
                                    className="add_rmv_btn"
                                    onClick={addMustardHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="add_rmv_btn"
                                    onClick={removeMustardHandler}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        <div className="flex_container">
                            <label>KETCHUP</label>
                            <div>
                                <button
                                    className="add_rmv_btn"
                                    onClick={addKetchupHandler}
                                >
                                    +
                                </button>
                                <button
                                    className="add_rmv_btn"
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
