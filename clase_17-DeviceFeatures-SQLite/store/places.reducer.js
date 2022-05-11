import { ADD_PLACE, DELETE_PLACE, LOAD_PLACES } from './places.actions';
import Place from '../models/Place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    console.log("Reducer...");
    switch(action.type) {
        case ADD_PLACE:
            console.log("ADD_PLACE");
            const newPlace = new Place(
                action.payload.id.toString(), 
                action.payload.title, 
                action.payload.image,
                action.payload.address,
                action.payload.lat,
                action.payload.lng
            );
            //console.log(newPlace);
            return {
                ...state,
                places: state.places.concat(newPlace),
            }
        case LOAD_PLACES:
            return {
                ...state,
                places: action.places.map( item => new Place(
                    item.id.toString(),
                    item.title,
                    item.image,
                    item.address,
                    item.lat,
                    item.lng
                ))
            }
        case DELETE_PLACE:            
            const values = state.places.filter( item => item.id !== action.id);
            return {
                ...state,
                places: values,
            }
        default:
            return state
    }
}