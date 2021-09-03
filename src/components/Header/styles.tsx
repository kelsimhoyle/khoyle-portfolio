import styled from "styled-components";
// import { breakpoints, colors } from "../../styles/utils";

type ItemProps = {
  openDrawer: boolean;
}

export const Navbar = {
  Wrapper: styled.nav`
        box-sizing: border-box;
      flex: 1;
      align-self: flex-start;
  
      padding: .25rem 3rem;
  
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      background-color: white;
  
      @media only screen and (max-width: 40em) {
        position: fixed;
        width: 100vw;
        top: 0;
        z-index: 5;
        justify-content: flex-end;
      }
    `,
  Logo: styled.h1`
      padding: 0.25rem 1rem;

      @media only screen and (max-width: 40em) {
          padding: 0;
          .gatsby-image-wrapper img {
              height: 50px;
          }
      }
    `,
  Items: styled.ul<ItemProps>`
    display: flex;
    list-style: none;

    .mobile {
        display: none;
    }

    @media only screen and (max-width: 40em) {
        flex-direction: column;
        justify-content: center;
        background-color: white;
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;
        .mobile {
            display: block;
            padding: 20px 0;
        }

        transform: ${props =>
      props.openDrawer ? `translateX(0)` : `translateX(-100%)`};
        }


    }
    `,
  Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
      text-decoration: none;
  
      @media only screen and (max-width: 40em) {
        padding: 1rem 2rem;
      }
    `
};

type HamburgerButtonProps = {
  openDrawer: boolean
}

export const HamburgerButton = styled.button<HamburgerButtonProps>`

        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
    
        &:focus {
        outline: none;
        }
    
        div {
        width: 2rem;
        height: 0.25rem;
        background: black;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    
        :first-child {
            transform: ${({ openDrawer }) => openDrawer ? 'rotate(45deg)' : 'rotate(0)'};
        }
    
        :nth-child(2) {
            opacity: ${({ openDrawer }) => openDrawer ? '0' : '1'};
            transform: ${({ openDrawer }) => openDrawer ? 'translateX(20px)' : 'translateX(0)'};
        }
    
        :nth-child(3) {
            transform: ${({ openDrawer }) => openDrawer ? 'rotate(-45deg)' : 'rotate(0)'};
        }
        }

`;

export const HamburgerContainer = styled.div`
  display: none;
  padding: 1rem;

  @media only screen and (max-width: 40em) {
    display: block;
    position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 20;

  }

`