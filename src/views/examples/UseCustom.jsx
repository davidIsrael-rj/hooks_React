import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";

const UseCustom = (props) => {

    const [count, inc, dec, atualizar] = useCounter()
    const [n, setN] = useState(0)
    return (

        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso própio Hook!"
            />
            <SectionTitle title={"Exercício #01"} />
            <div className="center">
                <span className="text">{count}</span>
                <input type="number" className="input" value={n} onChange={e => setN(e.target.value)}/>
                <div>
                    <button className="btn" onClick={()=>inc()}>+</button>
                    <button className="btn" onClick={()=>dec()}>-</button>
                    <button className="btn"onClick={()=>atualizar(+n)}>Atualizar</button>
                </div>
            </div>
        </div>
    )
}

export default UseCustom