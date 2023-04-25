import axios from "axios";
import {
    GET_FILMS
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
}