import React from "react";
import { Lax } from "./styles";

type ParrallaxPropType = {
    background: string;
    children: React.ReactNode;
    height: string;
}

const Parallax = ({ background, children, height }: ParrallaxPropType) => {
    console.log(background)
    return (
        <Lax height={height} bg={background}>
            <div className="foreground">
                {children}
            </div>
        </Lax>
    )
}

export default Parallax;