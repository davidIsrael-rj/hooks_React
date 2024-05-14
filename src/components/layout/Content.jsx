import "./Content.css"
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content