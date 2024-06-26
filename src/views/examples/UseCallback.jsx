import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";


const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    // function inc(delta) {
    //     setCount(count + delta)
    // }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <UseCallbackButtons inc={inc} />
                </div>
            </div>
        </div>
    )
}

export default UseCallback