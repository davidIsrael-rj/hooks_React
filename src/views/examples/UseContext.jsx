import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import DataContext from "../../data/DataContext";
import SectionTitle from "../../components/layout/SectionTitle";
import { AppContext } from "../../data/Store";


const UseContext = (props) => {

    const context = useContext(DataContext)

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    const {number, text, setText, setNumber} = useContext(AppContext)

    useEffect(function(){
        if(number > 1250){
            setText("O numero já está acima permitido")
        }
        if(number < 1250){
            setText("Os níveis voltaram aos normais ")
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number -1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number +1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext