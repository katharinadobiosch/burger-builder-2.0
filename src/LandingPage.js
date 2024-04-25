import "./landingpage.css";
import BurgerCreator from "./patterns/BurgerCreator";
import Cat from "./patterns/Cat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="site-wrapper">
            <main>
                <Cat />
                <Routes>
                    <Route exact path="/" element={<BurgerCreator />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    {/* <Route path="/blogs" element={<Blogs />} /> */}
                    {/* <Route path="/sign-up" element={<SignUp />} /> */}
                </Routes>
            </main>
        </div>
    );
}

export default App;
