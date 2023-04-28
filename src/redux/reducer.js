import {
    GET_CHARACTERS,
    GET_FILMS
} from "./constants";

const initialState = {
    films: [],
    characters: [],
    loading: true
};

export default function reducer(state = initialState, actions) {
    switch(actions.type) {
        case GET_FILMS:
            return {
                ...state,
                films: actions.payload,
                loading: true
            }
        case GET_CHARACTERS:
            return {
                ...state,
                characters: actions.payload,
                loading: false
            }
        default: return state;
    }
}