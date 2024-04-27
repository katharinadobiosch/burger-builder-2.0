import HungryCat from "../../assets/Cat/Hungry_cat_transparent.gif";
import "./cat.css";
import { Link } from "react-router-dom";

import Button from "../Button";

function Cat() {
    return (
        <div className="landingpage">
            <h1>Are you hungry?</h1>
            <img src={HungryCat} alt="hungry cat" />
            <Link to="/burger-creator">
                <Button text="MEOW"/>
            </Link>{" "}
        </div>
    );
}

export default Cat;

