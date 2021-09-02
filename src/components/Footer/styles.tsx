import styled from "styled-components";
import { colors, breakpoints } from "../../styles/utils"

export const StyledFooter = styled.footer`
    ${'' /* position: fixed; */}
    left: 0;
    bottom: 0;
     width: 100vw;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
     background-color: ${colors.primaryLight};

    ${'' /* img {
         width: 10%;
         height: auto;
     } */}
     .logo {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: between;

         p {
             margin: 20px;
         }
         
        ${breakpoints("flex-direction", "", [
            { 800: "row" },
                ])};
        .gatsby-image-wrapper img {
            height: 175px;
            ${breakpoints("height", "px", [
                { 800: "100" },
                    ])};
        }
     }

     

     ${breakpoints("flex-direction", "", [
        { 800: "column" },
        ])};
    ${breakpoints("height", "", [
        { 800: "auto" },
            ])};
`

export const Explore = styled.div`
    .links {
        display: flex;
        flex-direction: row;
        width: 30vw;
    }

    p {
        margin: 0;
    }

    ul {
        list-style: none;
        text-align: left;
        margin: 0;
        padding: 0;
    }

    li a {
        padding: 4px;
        border-bottom: 2px solid ${colors.secondary};
        font-size: 16px;
        line-height: 1.5;
        text-decoration: none;
        color: ${colors.primary};
        }
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
    }
`