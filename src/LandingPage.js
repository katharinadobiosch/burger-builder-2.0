import "./landingpage.css";
import BurgerCreator from "./patterns/BurgerCreator";
import OrderForm from "./patterns/OrderForm/OrderForm";
import OrderOverview from "./patterns/OrderOverview/index";
import ThankYou from "./patterns/ThankYou";
import Cat from "./patterns/Cat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div className="site-wrapper">
                    <main>
                        <Routes>
                            <Route exact path="/" element={<Cat />} />
                            <Route
                                exact
                                path="/burger-creator"
                                element={<BurgerCreator />}
                            />
                            <Route
                                exact
                                path="/order-form"
                                element={<OrderForm />}
                            />
                            <Route
                                exact
                                path="/order-overview"
                                element={<OrderOverview />}
                            />
                            <Route
                                exact
                                path="/thank-you"
                                element={<ThankYou />}
                            />
                        </Routes>
                    </main>
                </div>
            </Router>
        </>
    );
}

export default App;
