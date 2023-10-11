// hooks.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppContext } from '../../context/context';
import { FormInputs, PlaceData } from '../../interface';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'; // Import the plugin

import 'react-dropzone-uploader/dist/styles.css'; // Add styles for react-dropzone-uploader

import { ADD_PLACE } from '../../types';
import { useState } from 'react';

export function useSubmitForm() {
    const { dispatch } = useAppContext();
    const [file, setFile] = useState<any | null>(null);
    const {
    register,
    handleSubmit,
    setError, // Function to set errors manually
    reset,
    control,
    formState: { errors },
    } = useForm<FormInputs>(); // Provide the generic type for useForm

    // Form submitting add places - Specify the SubmitHandler type
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(file)
        console.log(data); 
        reset()
        // You can add custom error handling logic here
        // For example, manually setting an error on a field:
        if (data.country === '') {
            setError('country', {
                type: 'manual',
                message: 'Country is required"',
            });
            }
        if (data.city === '') {
            setError('city', {
                type: 'manual',
                message: 'City is required"',
            });
        }

        // If the form data is valid, dispatch the 'ADD_PLACE' action
        if (!errors.country && !errors.city) {
            let formattedDate;
            if(data.date) {
                dayjs.extend(advancedFormat);
                formattedDate = dayjs(data.date).format('Do MMMM YYYY');
            } else {
                formattedDate = '';
            }
         
            const payload: PlaceData = {
                city: data.city,
                country: data.country,
                date: formattedDate,
                favourite: data.favourite,
                image: '',
              };
        
              dispatch({
                type: ADD_PLACE,
                payload,
              });

              // Store the form data in local storage
            const storedData = localStorage.getItem('formData');
            const newData = storedData ? JSON.parse(storedData) : [];
            newData.push(payload);
            localStorage.setItem('formData', JSON.stringify(newData));
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        control,
        setFile,
        file,
    };
}