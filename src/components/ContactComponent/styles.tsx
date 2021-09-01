import styled from "styled-components";
import { breakpoints, colors } from "../../styles/utils";

export const Form = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 75vw;
    margin: 50px auto;
    -moz-box-shadow: 0px 5px 5px #808080
    -webkit-box-shadow: 0px 5px 5px #808080; 
    box-shadow: 0px 5px 5px #808080;
    height: 450px;
    background-color: white;

    ${breakpoints("flex-direction", "", [
        { 800: "column" },
        { 600: "column" },
        { 450: "column" }
      ])};

      ${breakpoints("height", "", [
        { 800: "fit-content" },
        { 600: "fit-content" },
        { 450: "fit-content" }
      ])};

      .form {
          background-color: white;
          height: 100%;
          width: 60%;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        
          ${breakpoints("padding", "%", [
            { 800: "5" },
            { 600: "5" },
            { 450: "5" }
          ])};

          ${breakpoints("width", "%", [
            { 800: "90" },
            { 600: "90" },
            { 450: "90" }
          ])};
    
          ${breakpoints("padding", "%", [
            { 800: "5" },
            { 600: "5" },
            { 450: "5" }
          ])};
          
          ${breakpoints("border-top-right-radius", "", [
            { 800: "0" },
            { 600: "0" },
            { 450: "0" }
          ])};
          ${breakpoints("border-bottom-left-radius", "px", [
            { 800: "20" },
            { 600: "20" },
            { 450: "20" }
          ])};
      }
`

export const TextContainer = styled.div`
      height: 100%;
      width: 40%;
      background-color: ${colors.primaryLight};
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
          padding: 20px;
      }

      p {
          text-align: center;
          line-height: 1.25
          padding: 15px;
      }

      div {
          padding: 20px;
      }

      ${breakpoints("height", "", [
        { 800: "fit-content" },
        { 600: "fit-content" },
        { 450: "fit-content" }
      ])};

      ${breakpoints("width", "%", [
        { 800: "90" },
        { 600: "90" },
        { 450: "90" }
      ])};

      ${breakpoints("padding", "%", [
        { 800: "5" },
        { 600: "5" },
        { 450: "5" }
      ])};

      ${breakpoints("border-bottom-left-radius", "", [
        { 800: "0" },
        { 600: "0" },
        { 450: "0" }
      ])};
      ${breakpoints("border-top-right-radius", "px", [
        { 800: "20" },
        { 600: "20" },
        { 450: "20" }
      ])};
`