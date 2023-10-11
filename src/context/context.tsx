import { createContext, useContext, useReducer, Dispatch, ReactNode } from 'react';
import { AppAction } from '../types';
import { AppState, initialState } from '../store';

// Create the context
const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppAction>;
} | undefined>(undefined);

// Create a custom hook to access the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

// Create the provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState: AppState, action: AppAction): AppState  => {
      switch (action.type) {
        case 'ADD_PLACE':
          const newPlace = action.payload; // Assuming action.payload is a PlaceData object
          return {
            ...prevState,
            places: [...prevState.places, newPlace], // Add the new place to the array
          };
        case 'INCREMENT':
          return { ...prevState, count: prevState.count + 1 }; // update state here
        case 'DECREMENT':
          return { ...prevState, count: prevState.count - 1 }; // update state here
        case 'RESET':
          return initialState;
        default:
          return prevState;
      }
    },
    initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};