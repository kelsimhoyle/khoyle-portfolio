import styled from "styled-components";

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
    direction: string;
}

export const PortItem = styled.div<PortItem>`
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;

    .image,
    .about {
        margin: 20px;
    }
`