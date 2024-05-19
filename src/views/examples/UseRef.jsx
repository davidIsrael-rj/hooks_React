import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function (s1, s2) {

    let resultado = '';
    const maxLeng = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLeng; i++) {
        if (i < s1.length) {
            resultado += s1[i];
        }
        if (i < s2.length) {
            resultado += s2[i];
        }
    }

    return resultado;
}

const merge2 = function(s1,s2){
    return [...s1].map(function(e,i){
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <spant className="text">]</spant>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
                <button className="btn" onClick={() => setValue1("")}>Limpar</button>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={e => setValue2(e.target.value)} />
                <button className="btn" onClick={() => setValue2("")}>Limpar</button>
            </div>
        </div>
    )
}

export default UseRef