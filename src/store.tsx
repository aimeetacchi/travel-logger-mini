import { PlaceData } from "./interface";

let parsedJSON;
const localData = localStorage.getItem('formData');
if (localData) {
  parsedJSON = JSON.parse(localData)
}
// Define the shape of your state
export interface AppState {
    // Your state properties here
    count: number;
    places: PlaceData[]
  }

// Create the initial state
export const initialState: AppState = {
    // Initialize your state properties here
    count: 0, // Add the 'count' property here
    places: parsedJSON ? parsedJSON : []
  };