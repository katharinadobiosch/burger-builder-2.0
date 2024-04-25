import "./landingpage.css";
import BurgerCreator from "./patterns/BurgerCreator";
import Cat from "./patterns/Cat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router >
                <div className="site-wrapper">
                    <main>
                        <Cat />
                        <Routes>
                            <Route exact path="/burger-creator" element={<BurgerCreator />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </>
    );
}

export default App;
