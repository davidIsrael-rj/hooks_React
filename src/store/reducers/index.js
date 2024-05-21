export function reducer(state, action) {
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