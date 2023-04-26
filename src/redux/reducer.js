import {
    GET_CHARACTERS,
    GET_FILMS
} from "./constants";

const initialState = {
    films: [],
    characters: []
};

export default function reducer(state = initialState, actions) {
    switch(actions.type) {
        case GET_FILMS:
            return {
                ...state,
                films: actions.payload
            }
        case GET_CHARACTERS:
            return {
                ...state,
                characters: actions.payload
            }
        default: return state;
    }
}