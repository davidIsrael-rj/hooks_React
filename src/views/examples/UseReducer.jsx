import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'adicionar2':
            return { ...state, number: state.number + 2 }
        case 'multiplicar7':
            return { ...state, number: state.number * 7 }
        case 'dividir25':
            return { ...state, number: state.number / 25 }
        case 'Inteiro':
            return { ...state, number: parseInt(state.number) }
        case 'numero':
            return{...state, number: state.number + parseFloat(action.payload)}
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [dados, setDados] = useState("")

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <input type="text" className="input" value={dados} onChange={e => setDados(e.target.value)} />
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: dados })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'adicionar2' })}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'multiplicar7' })}>X 7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'dividir25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'Inteiro' })}>Int</button>
                    <button className="btn" onClick={() => dispatch({type: 'numero', payload: dados})}>+/-</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer