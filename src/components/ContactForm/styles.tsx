import styled from "styled-components";
import { colors } from "../../styles/utils";

export const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: white;

    label {
        display: none;
    }

    textarea,
    input {
        width: 95%;
        padding: 10px;
        margin: 5px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
        font-family: inherit;
        border-color: ${colors.primary};

    }

    textarea {
        resize: none;
    }


    p {
        margin: 0;
    }

    button {
        font-size: 1.5rem;
        border: none;
        background-color: transparent;
        font-family: inherit;
        padding: 15px 25px;
        cursor: pointer;
        margin: 5px auto;
        width: fit-content;
    
        // Display
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center; 
    
        // Visual
        background-color: ${colors.primary};
        color: #fff;
        border-radius: 5px;
        -moz-box-shadow: 0px 5px 5px #808080;
        -webkit-box-shadow: 0px 5px 5px #808080; 
        box-shadow: 0px 5px 5px #808080;
    
        // Text
        text-align: center;
        line-height: 1.1;
    
        transition: 220ms all ease-in-out;
    
        &:hover,
        &:active {
          background-color: ${colors.secondary};
        }
    
        &:focus {
          outline-style: solid;
          outline-color: transparent;
          box-shadow: 0 0 0 4px #808080);
        }
    
    
        a {
          padding: 20px 30px;
          color: white;
          text-decoration: none;
        }
    }

`

export const Btn = styled.button`

`