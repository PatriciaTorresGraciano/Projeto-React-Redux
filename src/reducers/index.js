import {combineReducers} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    produtos: [
        {"nome":"Arroz"},
        {"nome":"Feijão"}
    ]
}

function tituloReducer(state= { titulo: "COMPRAS - MERCADO"}, action) {
    if (action.type === "ALTERAR") {
        return { titulo: action.value };
    }
    else {
        return state;
    }
}

function produtosReducer(state = initialState, action) {

    if(action.type === "ADICIONAR") {
        return { produtos: [...state.produtos, { ...action.value}] };
    }
    else {
        return state;
    }
}

const reducers = combineReducers( { tituloReducer, produtosReducer } );

export default reducers;