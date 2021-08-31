import styled from "styled-components";
import { colors } from "../../styles/utils";


export const Form = styled.form`
    width: 40vw;
    paddng: 10vw;
    margin: 5vw;
    display: flex;
    flex-direction: column;
    background-color: white;

    label {
        margin: .5rem;
        padding: .5rem;
    }
    
    input,
    textarea {
        width: 80%;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 5px;
    }

    textarea {
        resize: none;
        height: 150px;
    }


    p {
        margin: 0;
    }

    button {
        color: white;
        background-color: ${colors.secondary};
        font-size: 1.5rem;
        border: none;
        padding: .5rem;
        cursor: pointer;
        text-decoration: none
    }

`

export const Btn = styled.button`

`