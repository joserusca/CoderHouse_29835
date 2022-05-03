import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE'


export const addPlace = (title, image) => {
    return async dispatch => {
        console.log("Dispatching...");
        
        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName; 
        console.log('------------------------------------');
        console.log(image);
        console.log(fileName);
        console.log(Path);        
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

        dispatch({type: ADD_PLACE, payload: {title, image: Path}});
    }

    
}