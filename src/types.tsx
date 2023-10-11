// types.tsx
import { PlaceData } from "./interface";

// Define action type constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD_PLACE = 'ADD_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const ADD_LOCAL_DATA = 'ADD_LOCAL_DATA';

// Define the actions that can be performed on the state
export type AppAction =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof RESET }
  | { type: typeof ADD_PLACE, payload: PlaceData }
  | { type: typeof DELETE_PLACE, payload: string };