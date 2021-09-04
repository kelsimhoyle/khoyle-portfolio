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
    margin-bottom: 20px;

    ${breakpoints("flex-direction", "", [
      { 800: "column" },
      { 600: "column" },
      { 450: "column" }
    ])};

    ${breakpoints("width", "%", [
      { 800: "95" },
      { 600: "95" },
      { 450: "95" }
    ])};

      ${breakpoints("margin", "", [
        { 800: "auto" },
        { 600: "auto" },
        { 450: "auto" }
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