import { reducer } from "./reducers"
import { adicionar2 } from "./actions/number"

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco
    number: 0
}

export {
    initialState,
    reducer,
    adicionar2
}


