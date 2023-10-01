import React from "react";
import Scaffold from "../../components/Scaffold";
import MainInfo from "./information/MainInfo";
import MainIntro from "./intro/MainIntro";

const Main = (): JSX.Element => {
    return <>
        <Scaffold>
            <MainIntro />
        </Scaffold>
        <Scaffold>
            <MainInfo />
        </Scaffold>
    </>;
};

export default Main;
