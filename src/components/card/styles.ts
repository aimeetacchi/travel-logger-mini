import styled from "styled-components";

const CardStyles = styled.div`
    
    .card {
        padding: 20px;
        background-color: white;
        color: #380497;
        border-radius: 20px;
        width: auto;
        &__header {
            font-size: 20px;
            h2 {
                margin: 0;
            }
        }
        &__body {
            font-size: 18px;
        }
        &__link {
            color: #380497;
        }
    }
`;

export default CardStyles