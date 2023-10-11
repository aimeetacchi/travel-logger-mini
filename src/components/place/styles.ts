import styled from "styled-components";

const PlaceStyles = styled.div`
    padding: 20px;
    color: #380497;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 33.333%;
    position: relative;

    &.favorite {
        border: 2px solid green;

        :before {
            content: '❤️';
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
`;

export default PlaceStyles