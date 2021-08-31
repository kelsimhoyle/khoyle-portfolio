import styled from "styled-components";
import { breakpoints, colors } from "../../styles/utils";

export const Head = styled.div`
    width: 80vw;
    padding: 0 10vw;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background-color: ${colors.primaryLight};

    ${breakpoints("width", "vw", [
            { 800: "100" },
        ])};
    }


`