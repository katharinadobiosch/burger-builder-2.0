import HungryCat from "../../assets/Cat/Hungry_cat_transparent.gif";
import "./cat.css";
import Button from "../Button";

function Cat(props) {
    return (
        <div className="landingpage">
            <h1>Are you hungry?</h1>
            <img src={HungryCat} alt="hungry cat" />
            <Button />
        </div>
    );
}

export default Cat;
