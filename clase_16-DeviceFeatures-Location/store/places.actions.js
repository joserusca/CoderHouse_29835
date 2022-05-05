import * as FileSystem from 'expo-file-system';
import { MAP } from '../constants';
export const ADD_PLACE = 'ADD_PLACE'


export const addPlace = (title, image, location) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.API_KEY}`);

        if(!response.ok) throw new Error('No se ha podido comunicar con la Google Maps API');

        const resData = await response.json();
        if(!resData.results) throw new Error('No se han encontrado datos para las coordenadas seleccionadas.');
        const address = resData.results[0].formatted_address;
        console.log(address);

        console.log("Dispatching...");
        
        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName; 
        console.log('------------------------------------');
        console.log('image: ' + image);
        console.log('filename: ' + fileName);
        console.log('Path: ' + Path);        
        console.log('------------------------------------');
        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }

        dispatch({type: ADD_PLACE, payload: {title, address, image: Path, lat:location.lat, lng: location.lng}});
    }

    
}