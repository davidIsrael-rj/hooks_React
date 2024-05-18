import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(numero) {
    const n = parseInt(numero)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(num))
    }, [num])

    useEffect(function(){
        if(fatorial > 1000000){
            document.title = "Eita"
        }
    },[fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitor colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercíocio #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Nâo existe': fatorial}</span>
                </div>
                <input type="number"
                    className="input"
                    value={num}
                    onChange={e => setNum(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect