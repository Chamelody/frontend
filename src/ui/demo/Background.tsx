import React from "react";
import { images, palette } from "../../constants/style";


const Background = (): JSX.Element => {
    return <div
        style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            top: "0",
            left: "0",
            zIndex: "-1",
            backgroundColor: palette.lightblack,
            /* 변경 */
        }}
    >
        <img src={images.demo_bg} style={{
            height: "100vh",
            zIndex: "-1"
        }} />
    </div >;
};

export default Background;
