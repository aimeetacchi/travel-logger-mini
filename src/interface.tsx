// Form Data Inputs interface
export interface FormInputs {
    country: string;
    city: string;
    date: string;
    favourite: 'Yes' | 'No';
    image: {}
  }

// Define the PlaceData interface
export interface PlaceData {
    city: string;
    country: string;
    date: string;
    favourite: string;
    image: {};
  }