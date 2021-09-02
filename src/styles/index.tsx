import styled from "styled-components";
import { colors, breakpoints } from './utils';


export const BG = styled.div`
    width: 100vw;
    height: 75vh;
    margin-bottom: 10rem;
    background-color: pink;
    position: relative;

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    svg {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
    }
`

export const ColorContainer = styled.div`
    width: 100vw;
    padding: 5vh 0;
    margin: auto;
    background-color: ${props => props.color ? colors[props.color] : 'white'}
`

type FlexContainerProps = {
  align: string | null;
}

export const FlexContainer = styled.div<FlexContainerProps>`
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${props => props.align ? "center" : "flex-start"};
    ${breakpoints("flex-direction", "", [
  { 800: "column" }
])};
`

export const Left = styled.div`
    width: 60%; 
      ${breakpoints("width", "%", [
  { 800: "96" }
])};
  ${breakpoints("padding", "", [
  { 800: "2%" }
])};
`

export const Right = styled.div`
    width: 35%;
    height: auto;
    padding-left: 5%;
    position: relative;

    ${breakpoints("padding-left", "", [
  { 800: "0" }
])};
    
    ${breakpoints("width", "%", [
  { 800: "100" }
])};
`

export const Landing = styled.div`
    padding: 5%;
    width: 50vw;
    text-align: center;
    background-color: ${colors.primaryLight};
    ${breakpoints("margin-top", "%", [
  { 800: "30" }
])};
    ${breakpoints("width", "vw", [
  { 800: "90" }
])};

  ${breakpoints("padding", "", [
  { 800: "1% 5%" }
])};

h2 {
  ${breakpoints("font-size", "px", [
  { 800: "24" }
])};
}

    p {
  line-height: 0.25;
  text-align: center;
  font-style: italic;
}
  .line {
  display: inline-block;
  position: relative;  
}
.line:before,
.line:after {
  content: "";
  position: absolute;
  height: 5px;
  border-top: 1px solid ${colors.secondary};
  top: 0;
  width: 75px;
}
.line:before {
  right: 100%;
  margin-right: 5px;
}
.line:after {
  left: 100%;
  margin-left: 5px;
}

.spaced {
    letter-spacing: 3px;
    font-size: 25px;
}
`


export const Content = styled.div`
    width: 80vw;
    margin: auto;
    padding: 3% 0;
    ${breakpoints("width", "vw", [
  { 1200: 80 },
  { 800: 90 },
  { 600: 95 },
  { 450: 100 }
])};

`

export const ContentLight = styled.div`
    background-color: ${colors.primaryLight};
    padding: 5% 10%;

    p {
      margin: 10px;
      line-height: 1.5;
    }


    ${breakpoints("padding", "%", [
  { 1200: 5 },
  { 800: 5 },
  { 600: 3 },
  { 450: 2 }
])};
`

export const PageContent = styled.div`
    margin: 2% auto;
`

export const Grid = {

  Container: styled.div`
    width: 100vw;
    display: flex;
    flex-align: row;
    margin: 4% 0;

    ${breakpoints("flex-direction", "", [
    { 800: "column" },
    { 600: "column" },
    { 450: "column" }
  ])};

`,
ImgDiv: styled.div`
    width: 60%;
    overflow: hidden;


    ${breakpoints("width", "%", [
      { 800: "100" },
      { 600: "100" },
      { 450: "100" }
    ])};
`,
  TextDiv: styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: auto;
  padding: 5%;
  text-align: center;
  background-color: ${colors.primaryLight};
  position: relative;
  line-height: 1.5;

  ${breakpoints("width", "%", [
    { 800: "100" },
    { 600: "100" },
    { 450: "100" }
  ])};
  p {
    margin: 10px 0;
  }

  .text {
    ${breakpoints("width", "%", [
    { 1200: 50 },
    { 800: 95 },
    { 600: 95 },
    { 450: 98 }
  ])};

`
}

export const PrimaryLink = styled.span`
    padding: 4px;
    margin: 0% 5%;
    border-bottom: 3px solid ${colors.secondary};
    font-size: 20px;
    margin: auto;
    text-decoration: none;
    color: ${colors.primary};
    a {
        text-decoration: none;
    }
    a:hover {
    color: white;
    background-color: ${colors.primaryLight};
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    border-radius: 3px;
    }
    a:visited {
        color: ${colors.primary};
    }
`

export const SecondaryLink = styled.span`
    padding: 4px;
    border-bottom: 3px solid ${colors.primaryLight};
    font-size: 20px;
    margin: auto;
    text-decoration: none;
    color: whitesmoke;
    a {
        text-decoration: none;
    }
    a:hover {
    color: white;
    background-color: ${colors.primaryLight};
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    border-radius: 3px;
    }

    a:visited {
        color: ${colors.primaryLight};
    }
`

export const Blurb = styled.div`
    background-color: ${colors.secondary};
    color: whitesmoke;
    padding: 5%;
    margin: 0;
    text-align: center;
`

export const ItemContainer = styled.div`
    width: 40%;
    margin: 0 auto 5%;
    background-color: white;
    align-self: stretch;
    border-radius: 20px;
    -moz-box-shadow: 0px 5px 5px #808080;
    -webkit-box-shadow: 0px 5px 5px #808080; 
    box-shadow: 0px 5px 5px #808080;

    ${breakpoints("width", "%", [
  { 800: "90" }
])};

    ${breakpoints("margin-top", "%", [
  { 800: "10" }
])};
`

export const Btn = styled.div`
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
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
`

export const HightLightedH3 = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline;
  line-height: 1.5
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,0,1) 50%, rgba(255,255,0,1) 100%);
  width: fit-content;
}
`

export const ContactPage = styled.main`
    height: 100vh;
    background-color: ${colors.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgContent = {
  Container: styled.div`
    position: relative;
    padding: 5vh 15vw;
    ${breakpoints("padding", "", [
    { 800: "2.5vh 2.5vw" },
    { 600: "2.5vh 2.5vw" },
    { 450: "2.5vh 2.5vw" }
  ])};
    @media only screen and (max-width: 40em) {
      height: 115vh;
    }
  `,
  ImgContainer: styled.div`
    width: 450px;
    ${breakpoints("width", "vw", [
    { 800: "95" },
    { 600: "95" },
    { 450: "95" }
  ])};
  `,
  Content: styled.div`
    position: absolute;
    top: 35%;
    left: 575px;
    width: 50%;
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    -moz-box-shadow: 0px 3px 3px #808080;
    -webkit-box-shadow: 0px 3px 3px #808080; 
    box-shadow: 0px 3px 3px #808080;
    h3 {
      margin: 0 10px
    }
    p, a {
      margin: 10px;
      line-height: 1.25;
    }

    @media only screen and (max-width: 40em) {
      width: 85%;
      height: fit-content;
      top: 55%;
      left: 5%;
      padding: 5% 2.5%;
      p {
        font-size: 1rem;
      }
    }
    
  `
}

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 2.5%;
`