import {
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
        default: return state;
    }
}