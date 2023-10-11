// styles.js

import styled from 'styled-components';

export const FormContainer = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 5px;

    p {
        color: black;
        margin: 3px 0 0;
    }

    .group-radio {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        width: fit-content;

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: black;

        input[type="radio"] {
            margin-right: 5px;
            appearance: none; /* Remove default radio button appearance */
            width: 16px;
            height: 16px;
            border: 2px solid #007bff; /* Border color for the radio button */
            border-radius: 50%; /* Make it circular */
            outline: none;
            position: relative;

            &:before {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                background-color: #007bff; /* Fill color when checked */
                border-radius: 50%; /* Make it circular */
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0; /* Initially invisible */
            }
        }

        /* Style radio button when checked */
        input[type="radio"]:checked:before {
        opacity: 1;
        }
    }
    }
    input[type="text"] {
        display: block;
        margin-bottom: 10px;
    }
`;