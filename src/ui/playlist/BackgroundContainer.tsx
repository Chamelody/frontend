import React from "react";
import "./style.css"

const BackgroundContainer = (): JSX.Element => {
    return (
        <div id="backgroundContainer">
            {/* 배경 화면을 디자인하는 섹션들 */}
            <section id="up"></section>
            <section id="down"></section>
            <section id="left"></section>
            <section id="right"></section>

        </div>
    );
};


export default BackgroundContainer;