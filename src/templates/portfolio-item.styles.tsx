import styled from "styled-components";
import { breakpoints } from "../styles/utils";

export const PortItemPage = styled.main`
    width: 80%;
    margin: 20px auto;

    .port-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    ${breakpoints("flex-direction", "", [
        { 800: "column" },
        { 600: "column" },
        { 450: "column" }
      ])};
   }

    .text {
        width: 70%;
      > div {
        margin: 15px 0;
      }
    }

    .goals {
        padding: 10px;
        ol, ul {
            list-style: square inside;
        }
    }

 


`