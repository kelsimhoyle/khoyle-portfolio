import styled from "styled-components";

type LaxProps = {
  height: string;
  bg: string;
}

export const Lax = styled.div<LaxProps>`
  ${'' /* position: absolute; */}
  width: 100vw;
  height: ${props => props.height};
  overflow-x: hidden;
  overflow-y: hidden;
  perspective: 8px;
  perspective-origin: 0;
  background-image: url(${props => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transform: translateZ(0px);


  .background {
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  width: 100vw;

  height: ${props => props.height};
  transform: translateZ(0px);
} 

.foreground {
  transform-origin: 0;
  transform: translateZ(3px) scale(0.625);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
}
`