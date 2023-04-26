import axios from "axios";
import {
    GET_FILMS,
    GET_CHARACTERS
} from "./constants";

export function getFilms() {
    return async function(dispatch) {
        try {
            const films = await axios.get("https://swapi.dev/api/films/");
            return dispatch({
                type: GET_FILMS,
                payload: films.data.results
            })
        } catch (error) {
            console.log("Se chingó en la action getFilms",error);
        }
    }
};

export function getCharacters() {
    return async function(dispatch) {
        try {
            const characters = await axios.get(`https://swapi.dev/api/people/?page=1`);
            /* console.log("Esto trae getCharacters en ACTIONS: ", characters) */
            return dispatch({
                type: GET_CHARACTERS,
                payload: characters.data.results
            })
        } catch (error) {
            console.log("Se chingó en la action getCharacters: ", error);
        }
    }
}