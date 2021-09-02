import styled from "styled-components";
import { breakpoints } from "../../styles/utils";

export const Cats = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
        padding: 2px;
        margin: 0 1px;
    }
`

type PortItem = {
    home: boolean;
}

export const PortItem = styled.div<PortItem>`
    width: 95%;
    margin: ${props => props.home ? "10px" : "20px"} auto;
    display: flex;
    flex-direction: ${props => props.home ? "column" : "row"};
    align-items: center;
    line-height: 1.5;

    ${breakpoints("flex-direction", "", [
        { 800: "column" },
        { 600: "column" },
        { 450: "column" }
      ])};

    p {
        margin: 5px auto;
        line-height: 1.25
    }

    a {
        justify-self: center;
    }

    .image,
    .about {
        margin: 20px;
    }

    .image {
        width: ${({home}) => home ? "95%" : "70%"};
    }
`

export const BtnFlex = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: stretch;

    > div {
        width: 45%;
    }
`