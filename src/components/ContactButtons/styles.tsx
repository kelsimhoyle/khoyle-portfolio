import styled from "styled-components";
import { colors } from "../../styles/utils";

export const Buttons = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    align-contact: center;
    width: 100%;

justify-content: space-evenly;
       a {
        color: ${colors.primary};
        text-decoration: none;
        font-size: 30px;
        padding: 10px;
       } 

       a:hover {
        color: white;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        -khtml-border-radius: 3px;
        border-radius: 3px;
        }

    a:visited {
        color: ${colors.secondary};
    }
`