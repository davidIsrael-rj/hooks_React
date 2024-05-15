import "./Content.css"
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";
import UseState from "../../views/examples/UseState";
import UseEffect from "../../views/examples/UseEffect";
import UseRef from "../../views/examples/UseRef";
import UseMemo from "../../views/examples/UseMemo";
import UseCallback from "../../views/examples/UseCallback";
import UseContext from "../../views/examples/UseContext";
import UseReducer from "../../views/examples/UseReducer";
import UseCustom from "../../views/examples/UseCustom";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/useState' exact element={<UseState />} />
            <Route path='/useEffect' exact element={<UseEffect />} />
            <Route path='/useRef' exact element={<UseRef />} />
            <Route path='/useMemo' exact element={<UseMemo />} />
            <Route path='/useCallback' exact element={<UseCallback />} />
            <Route path='/useContext' exact element={<UseContext/>} />
            <Route path='/useReducer' exact element={<UseReducer />} />
            <Route path='/useCustom' exact element={<UseCustom/>} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content