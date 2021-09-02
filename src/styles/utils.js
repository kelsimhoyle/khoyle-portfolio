import { css, createGlobalStyle } from "styled-components";

export const breakpoints = (
    cssProp = "padding", // the CSS property to apply to the breakpoints
    cssPropUnits = "px", // the units of the CSS property (can set equal to "" and apply units to values directly)
    values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
    mediaQueryType = "max-width" // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
  ) => {
    const breakpointProps = values.reduce((mediaQueries, value) => {
      const [screenBreakpoint, cssPropBreakpoint] = [
        Object.keys(value)[0],
        Object.values(value)[0],
      ];
      return (mediaQueries += `
      @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
        ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
      }x
      `);
    }, "");
    return css([breakpointProps]);
  };

export const colors = {
    primary:  "#5da2d5",
    secondary: "#90ccf4",
    light: "#f78888",
    primaryLight: "#ececec",
    yellow: "#f3d250"

}


export const GlobalStyle = createGlobalStyle`
  p {
    ${breakpoints("font-size", "px", [
    { 1200: 18 },
    { 800: 16 },
    { 600: 16 },
    { 450: 16 }
  ])};
  }

  body {
    font-family: 'Montserrat', sans-serif;
}

p {
    font-size: 18px;
    line-height: 1.25;
    font-family: 'Montserrat', sans-serif;
}

h2 {
    font-family: 'BioRhyme', serif;
    font-weight: bold;
    font-size: 28px;
    line-height: 1.5;
    text-align: center;
    margin: 10px 0;
}

h3 {
    font-size: 24px;
    line-height: 1.5;
    font-weight: bold;
}

h4 {
    font-size: 20px;
    font-weight: bold;
}

a {
  text-decoration: none;
}
`