import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

//EX:01
function calcFatorial(numero) {
    const n = parseInt(numero)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

//EX:02
function verificarValor(valores) {
    const a = parseInt(valores)
    const parImpar = a % 2 === 0 ? 'Par' : 'Ímpar'
    return parImpar
}

const UseEffect = (props) => {
    //EX:01
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    //EX:02
    const [numeros, setNumeros] = useState(0)
    const [valor, setValor] = useState()


    //EX:01
    useEffect(function () {
        setFatorial(calcFatorial(num))
    }, [num])

    useEffect(function () {
        if (fatorial > 1000000) {
            document.title = "Eita"
        }
    }, [fatorial])

    //EX:02
    useEffect(function () {
        setValor(verificarValor(numeros))
    }, [numeros])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitor colaterais em componentes funcionais!"
            />
            {/* EX:01 */}
            <SectionTitle title="Exercíocio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Nâo existe' : fatorial}</span>
                </div>
                <input type="number"
                    className="input"
                    value={num}
                    onChange={e => setNum(e.target.value)} />
            </div>
            {/* EX:02 */}
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text red">{valor}</span>
                </div>
                <input type="number"
                    className="input"
                    value={numeros}
                    onChange={e => setNumeros(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect