import styled from "styled-components";
import { breakpoints } from "../../styles/utils";


export const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    
    
    li {
        list-style: none;
        padding: 1rem;
    }

    ${breakpoints("flex-direction", "", [
        { 800: "column" },
        ])};
`