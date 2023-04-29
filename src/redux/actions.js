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
            let characters = [];
            for (let i = 1; i <= 9; i++) {
                let promise = await axios.get(`https://swapi.dev/api/people/?page=${i}`);
                characters.push(...promise.data.results);
            }

            return dispatch({
                type: GET_CHARACTERS,
                payload: characters
            })
        } catch (error) {
            console.log("Se chingó en la action getCharacters: ", error);
        }
    }
}