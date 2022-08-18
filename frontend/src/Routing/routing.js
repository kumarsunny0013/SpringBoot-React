import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blotter from "../Component/blotters";
import Ws from "../ws";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Ws />} />
                <Route exact path="/blotter" element={<Blotter />} />
            </Routes>
        </Router>
    )
}

export default Routing;